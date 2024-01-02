import React from 'react';
import styled from '@emotion/styled';

import '../../style.css'

import fetchNui from '../../utils/fetchNui';
import { ServerPromiseResp } from '../../types/common';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonIcon from '@mui/icons-material/Person';

const Groups = styled.div `
    color: white;
    margin-top: 4vh;
`;

const Group =  styled.div `
    display: flex;
    flex-direction: row;
    min-width: 37vw;
    max-width: 37vw;
    padding: 1vh;
    background: rgb(181,63,251);
    background: radial-gradient(circle, rgba(181,63,251,1) 0%, rgba(252,70,107,0) 100%);
    margin-top: 0.5vh;
    margin-bottom: 0.5vh;
`;

interface Props {
    inGroup: boolean;
}

const GroupsList = (props: Props) => {

    let groups: any = [];
    
    const updateGroups = async () => {
        const data:any = await fetchNui<ServerPromiseResp>('RequestGroups');
        groups = data.groups;
    }

    const requestJoin = async (id: number) => {
        const data:any = await fetchNui<ServerPromiseResp>('RequestJoin', {id: id});
        console.log('Request Join', JSON.stringify(data));
    }

    const renderList = () => {
        if (!props.inGroup) { updateGroups(); }

        const listItems = [];
        for (let i = 0; i < groups.length; i++) {
            listItems.push(<Group key={i}>
                    <div className='group-name'>{groups[i].name}</div>
                    <div className='group-details'>
                        <div className='group-count'>{groups[i].members}<PersonIcon/></div>
                        <div className='group-join' onClick={() => requestJoin(groups[i].id)}><GroupAddIcon/></div> 
                    </div>
                </Group>);
        }
        return listItems;
    };
    return <Groups>{renderList()}</Groups>;
};

export default GroupsList;
