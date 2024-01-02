import React, { useState } from 'react';

import { i18n } from 'i18next';
import {
  Theme,
  Paper,
  Typography,
  StyledEngineProvider,
} from '@mui/material';
import Header, { HEADER_HEIGHT } from './components/Header';
import styled from '@emotion/styled';
import '../src/style.css'
import { useNuiEvent } from './hooks/useNuiEvent';
import { RecoilRoot } from 'recoil';
import HeaderBtns from './components/Views/HeaderBtns';
import PageHandler from './components/PageHandler';

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
  const [menuState, setMenuState] = useState('GROUPS');
  const [members, setMembers] = useState([] as any);
  const [task, setTask] = useState({} as { step: number, steps: any[] });

  useNuiEvent('GROUPS', 'updateMembers', (data: any) => {
    setMembers(data.members);
  });

  useNuiEvent('GROUPS', 'updateTask', (data: any) => {
    setTask(data.task);
  });

  const updateGroupState = (state: boolean) => {
    setInGroupState(state);

    const tempTask = [];
    tempTask.push({Title: 'Task 1', Description: 'This is the first taskddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd'});
    tempTask.push({Title: 'Task 2', Description: 'This is the second task'});
    tempTask.push({Title: 'Task 3', Description: 'This is the third task'});
    tempTask.push({Title: 'Task 4', Description: 'This is the fourth task'});
    tempTask.push({Title: 'Task 5', Description: 'This is the fifth task'});
    tempTask.push({Title: 'Task 5', Description: 'This is the fifth task'});
    tempTask.push({Title: 'Task 5', Description: 'This is the fifth task'});
    tempTask.push({Title: 'Task 5', Description: 'This is the fifth task'});
    tempTask.push({Title: 'Task 5', Description: 'This is the fifth task'});
    tempTask.push({Title: 'Task 5', Description: 'This is the fifth task'});
    tempTask.push({Title: 'Task 5', Description: 'This is the fifth task'});
    tempTask.push({Title: 'Task 5', Description: 'This is the fifth task'});
    tempTask.push({Title: 'Task 5', Description: 'This is the fifth task'});
  
    setTask({ step: 2, steps: tempTask})
  }

  const updateMenuState = (state: string) => {
    setMenuState(state);
  }
  
  return (
    <StyledEngineProvider injectFirst>
      <Container square elevation={0}>
        <Header>Groups TEST</Header>
        <Content>
          <HeaderBtns inGroup={inGroup} updateInGroup={updateGroupState} updateMenu={updateMenuState}/>
          <PageHandler menu={menuState} inGroup={inGroup} members={members} task={task} />
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
