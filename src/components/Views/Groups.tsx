import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import '../../style.css'
import fetchNui from '../../utils/fetchNui';
import { Group, ServerPromiseResp } from '../../types/common';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonIcon from '@mui/icons-material/Person';
import { useNuiEvent } from '../../hooks/useNuiEvent';

const Groups = styled.div `
    color: white;
    margin-top: 4vh;
`;

interface Props {
    inGroup: boolean;
}

const GroupsList = (props: Props) => {
    const [groups, setGroups] = useState([] as any);

    useNuiEvent('npwd_groups', 'groupDeleted', (data: any) => {
        const groupID = data.groupID;
        const newGroups = groups.filter((group:any) => group.id !== groupID);
        setGroups(newGroups);
    });

    const RequestJoin = async (id: number) => {
        const data:any = await fetchNui<ServerPromiseResp>('RequestJoin', {id: id});
    }

    const RequestGroups = async () => {
        const data: any = await fetchNui<ServerPromiseResp>('RequestGroups');
        setGroups(data)
    }

    useEffect(() => {
        if (!props.inGroup)
            RequestGroups();
        else
            setGroups([]);
    }, []);

    const LoadGroups = () => {
        const listItems = groups.map((group: Group, index:number) => {
            return (
            <div className='group-item' key={index}>
                <div className='group-name'>{group.name}</div>
                <div className='group-details'>
                    <div className='group-count'>{group.members}<PersonIcon fontSize='large' /></div>
                    <div className='group-join' onClick={() => RequestJoin(group.id)}><GroupAddIcon fontSize='large' /></div> 
                </div>
            </div>);
        });
        return listItems;
    }

    return <Groups>{LoadGroups()}</Groups>;
};

export default GroupsList;
