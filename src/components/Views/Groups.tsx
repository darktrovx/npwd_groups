import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import '../../style.css'

import fetchNui from '../../utils/fetchNui';
import { Group, ServerPromiseResp } from '../../types/common';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonIcon from '@mui/icons-material/Person';

const Groups = styled.div `
    color: white;
    margin-top: 4vh;
`;

interface Props {
    inGroup: boolean;
}

const GroupsList = (props: Props) => {
    const [groups, setGroups] = useState([] as any);

    const requestJoin = async (id: number) => {
        const data:any = await fetchNui<ServerPromiseResp>('RequestJoin', {id: id});
        console.log('Request Join', JSON.stringify(data));
    }

    useEffect(() => {
        const requestGroups = async () => {
            const data: any = await fetchNui<ServerPromiseResp>('RequestGroups');
    
            console.log('REQUESTED GROUPS: ', JSON.stringify(data));
            setGroups(data)
    
            // groups.push({id: 1, name: 'Group 1', members: 3});
            // groups.push({id: 2, name: 'Group 2', members: 2});
            // groups.push({id: 3, name: 'Group 3', members: 1});
            return;
        }

        requestGroups();
    });

    const LoadGroups = () => {
        const listItems = groups.map((group: Group, index:number) => {
            return (<div className='group-item' key={index}>
                        <div className='group-name'>{group.name}</div>
                        <div className='group-details'>
                            <div className='group-count'>{group.members}<PersonIcon/></div>
                            <div className='group-join' onClick={() => requestJoin(group.id)}><GroupAddIcon/></div> 
                       </div>
                    </div>);
        });
        return listItems;
    }

    return <Groups>{LoadGroups()}</Groups>;
};

export default GroupsList;
