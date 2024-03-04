import React, { useEffect, useState } from 'react';

import { i18n } from 'i18next';
import {
  Theme,
  Paper,
  StyledEngineProvider,
} from '@mui/material';
import Header, { HEADER_HEIGHT } from './components/Header';
import styled from '@emotion/styled';
import '../src/style.css'
import { useNuiEvent } from './hooks/useNuiEvent';
import { RecoilRoot } from 'recoil';
import HeaderBtns from './components/Views/HeaderBtns';
import PageHandler from './components/PageHandler';
import { ServerPromiseResp } from './types/common';
import fetchNui from './utils/fetchNui';

const Container = styled(Paper)`
  flex: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  max-height: 100%;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  box-sizing: border-box;
  padding: 1.5rem;
  max-height: calc(100% - 3.5rem - ${HEADER_HEIGHT});
  overflow: auto;
  background-color: rgb(33,37,41);
  font-family: 'Roboto', sans-serif !important;
`;

interface AppProps {
  theme: Theme;
  i18n: i18n;
  settings: any;
}

export function App(props: AppProps) {

  const [inGroup, setInGroupState] = useState(false);
  const [isOwner, setIsOwnerState] = useState(false);
  const [menuState, setMenuState] = useState('GROUPS');
  const [task, setTask] = useState({} as { step: number, steps: any[] });

  useNuiEvent('npwd_groups', 'updateTask', (data: any) => {
    setTask({ step: data.step, steps: data.steps });
  });

  useNuiEvent('npwd_groups', 'groupJoined', (data: any) => {
    setMenuState('MEMBERS');
    setInGroupState(true);
  });

  useNuiEvent('npwd_groups', 'groupDeleted', (data: any) => {
    setMenuState('GROUPS');
    setInGroupState(false);
    setIsOwnerState(false);
  });

  useNuiEvent('npwd_groups', 'leftGroup', (data: any) => {
    setMenuState('GROUPS');
    setInGroupState(false);
    setIsOwnerState(false);
  });

  const RequestAppData = async () => {
    const groupAppData: any = await fetchNui<ServerPromiseResp>('RequestAppData');
    setInGroupState(groupAppData.inGroup);
    setIsOwnerState(groupAppData.isOwner);
    setTask(groupAppData.task);

    if (groupAppData.inGroup) {
      setMenuState('MEMBERS');
    }
  };

  useEffect(() => {
    RequestAppData();
  }, []);
  
  return (
    <StyledEngineProvider injectFirst>
      <Container square elevation={0}>
        <Header menuName={menuState} />
        <Content>
          <HeaderBtns isOwner={isOwner} inGroup={inGroup} updateInGroup={setInGroupState} updateMenu={setMenuState} updateOwner={setIsOwnerState} />
          <PageHandler menu={menuState} inGroup={inGroup} isOwner={isOwner} task={task} />
        </Content>
      </Container>
    </StyledEngineProvider>
  );
}

export default function WithProviders(props: AppProps) {
  return (
    <RecoilRoot override key="npwd_groups">
      <App {...props} />
    </RecoilRoot>
  );
}
