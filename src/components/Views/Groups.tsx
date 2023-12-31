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


import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonIcon from '@mui/icons-material/Person';

const Groups = styled.div `
    color: white;
    margin-top: 4vh;
`;

const Group =  styled.div `
    display: flex;
    flex-direction: row;
    min-width: 50vh;
    max-width: 50vh;
    padding: 1vh;
    background: rgb(181,63,251);
    background: radial-gradient(circle, rgba(181,63,251,1) 0%, rgba(252,70,107,0) 100%);
    margin-top: 0.5vh;
    margin-bottom: 0.5vh;
`;

const GroupsList = () => {
    //const [groups, setGroups] = useState<any>([]);
    

    // const groups = [
    //     {
    //         name: 'test1',
    //         members: 1
    //     },
    //     {
    //         name: 'test2',
    //         members: 2
    //     },
    //     {
    //         name: 'test3',
    //         members: 3
    //     },
    // ]

    let groups: any = [];
    
    const updateGroups = async () => {
        const data:any = await fetchNui<ServerPromiseResp>('RequestGroups');
        console.log('Group List Updated', JSON.stringify(data));
        groups = data.groups;
    }

    const renderList = () => {
        const listItems = [];
        for (let i = 0; i < groups.length; i++) {
            listItems.push(<Group key={i}>
                    <div className='group-name'>{groups[i].name}</div>

                    <div className='group-details'>
                        <div className='group-count'>{groups[i].members}<PersonIcon/></div>
                        <div className='group-join'><GroupAddIcon/></div> 
                    </div>
                </Group>);
        }
        return listItems;
    };
    return <Groups>{renderList()}</Groups>;
};

export default GroupsList;
