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

    const RequestJoin = async (id: number) => {
        console.log(id)
        const data:any = await fetchNui<ServerPromiseResp>('RequestJoin', {id: id});
        console.log('Request Join', JSON.stringify(data));
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
            return (<div className='group-item' key={index}>
                        <div className='group-name'>{group.name}</div>
                        <div className='group-details'>
                            <div className='group-count'>{group.members}<PersonIcon/></div>
                            <div className='group-join' onClick={() => RequestJoin(group.id)}><GroupAddIcon/></div> 
                       </div>
                    </div>);
        });
        return listItems;
    }

    return <Groups>{LoadGroups()}</Groups>;
};

export default GroupsList;
