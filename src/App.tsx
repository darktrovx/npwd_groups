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
import { NuiProvider, useNuiEvent } from 'fivem-nui-react-lib';
import { RecoilRoot } from 'recoil';
import HeaderBtns from './components/Views/HeaderBtns';
import Groups from './components/Views/Groups';

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
  const [menuState, setMenuState] = useState('NONE');
  useNuiEvent('GROUPS', 'Create', () => setMenuState('NONE'));
  

  return (
    <StyledEngineProvider injectFirst>
      <Container square elevation={0}>
        <Header>Groups</Header>
        <Content>
          <HeaderBtns />
          <div className='available-groups'><Groups/></div>
        </Content>
      </Container>
    </StyledEngineProvider>
  );
}

export default function WithProviders(props: AppProps) {
  return (
    <RecoilRoot override key="groups">
      <NuiProvider resource="npwd_groups">
        <App {...props} />
      </NuiProvider>
    </RecoilRoot>
  );
}
