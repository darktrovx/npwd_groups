import React from 'react';
import styled from '@emotion/styled';
import '../../style.css'
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { ServerPromiseResp } from '../../types/common';
import fetchNui from '../../utils/fetchNui';

const GroupBtns = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  color: white;
`;

interface HeaderBtnsProps {
  inGroup: boolean;
  isOwner: boolean;
  updateInGroup: (state: boolean) => void;
  updateMenu: (state: string) => void;
  updateOwner: (state: boolean) => void;
}

const HeaderBtns = (props: HeaderBtnsProps) => {

  const CreateBtnClick = async () => {
    const success = await fetchNui<ServerPromiseResp>('CreateGroup');
    if (success) {
      props.updateInGroup(true);
      props.updateMenu('MEMBERS');
      props.updateOwner(true);
    }
  };
  
  const LeaveBtnClick = async () => {
    const success = await fetchNui<ServerPromiseResp>('LeaveGroup');
    if (success) {
      props.updateInGroup(false);   
      props.updateMenu('GROUPS');
    }
  }

  const GroupBtnClick = (menu: string) => {
    props.updateMenu(menu);
  }
  
  if (props.inGroup) {
    return (
      <GroupBtns>
        <LogoutIcon className='leavebtn' onClick={LeaveBtnClick}/>
        <FormatListBulletedIcon className='taskbtn' onClick={ () => GroupBtnClick('TASKS')} />
        <GroupsIcon className='membersbtn' onClick={() => GroupBtnClick('MEMBERS')} />
        { props.isOwner ? <PersonAddAlt1Icon className='requestbtn' onClick={() => GroupBtnClick('REQUESTS')} /> : null }
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
