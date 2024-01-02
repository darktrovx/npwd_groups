import React from 'react';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';

export const HEADER_HEIGHT = '4rem';
const Container = styled.div<{ backgroundColor: string }>`
  display: flex;
  align-items: center;
  min-height: ${HEADER_HEIGHT};
  padding-left: 1.5rem;
  background-color: rgb(33,37,41);
  color: white;
`;

interface HeaderProps {
  menuName: string
}

const Header = ({ menuName }: HeaderProps) => {
  return (
    <Container backgroundColor={'rgb(33,37,41)'}>
      <Typography variant="h5" color="white">
        {menuName}
      </Typography>
    </Container>
  );
};

export default Header;
