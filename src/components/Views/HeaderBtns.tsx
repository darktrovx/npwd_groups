import React, { ReactNode, useState } from 'react';
import { Typography, Box, useTheme } from '@mui/material';
import styled from '@emotion/styled';

import '../../style.css'

import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import fetchNui from '../../utils/fetchNui';
import { ServerPromiseResp } from '../../types/common';
import { useNuiEvent } from 'fivem-nui-react-lib';

const GroupBtns = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  color: white;
`;

const HeaderBtns = () => {
  const [inGroup, setInGroupState] = useState(false);

  const CreateBtnClick = async () => {
    //const success = await fetchNui<ServerPromiseResp>('CreateGroup');
    const success = true;
  
    if (success) {
      setInGroupState(true);
    } else {
      setInGroupState(false);
    }
    console.log(inGroup);
  };
  
  const LeaveBtnClick = async () => {
    //const data = await fetchNui<ServerPromiseResp>('LeaveGroup');
    const success = true;
    if (success) {
      setInGroupState(false);    
    }
  }
  
  if (inGroup) {
    return (
      <GroupBtns>
        <LogoutIcon className='leavebtn' onClick={LeaveBtnClick}/>
        <FormatListBulletedIcon className='taskbtn' />
        <GroupsIcon className='groupbtn' />
        <PersonAddAlt1Icon className='requestbtn' />
      </GroupBtns>
    );
  } else {
    return (
      <GroupBtns>
        <AddIcon className='createbtn' onClick={CreateBtnClick}/>
      </GroupBtns>
    ); 
  }
};

export default HeaderBtns;
