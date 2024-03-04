import React, { useEffect, useState } from 'react';

import '../../style.css'
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import fetchNui from '../../utils/fetchNui';
import { ServerPromiseResp } from '../../types/common';

interface Props {
    isOwner: boolean;
}

const Members = (props: Props) => {
    const [members, setMembers] = useState([] as any);

    const RequestMembers = async () => {
        const members: any = await fetchNui<ServerPromiseResp>('RequestMembers');
        setMembers(members);
    }

    const Kick = async (id: number, index: number) => {
        const success = await fetchNui<ServerPromiseResp>('KickMember', {id: id});
        if (success) {
            const newMembers = members.filter((member: any) => member.id !== id);
            setMembers(newMembers);
        }
    }

    const LoadMembers = () => {
        const listItems = members.map((member: any, index: number) => {
            if (!props.isOwner || index == 0)
                return (<div className='members-list-item' id={'memberitemID:' + index}>
                            <div className='members-name'>{member.name}</div>
                            <div className='members-btns'></div>
                        </div>);
            else
                return (
                    <div className='members-list-item' id={'memberitemID:' + index}>
                        <div className='members-name'>{member.name}</div>
                        <div className='members-btns' onClick={() => Kick(member.id, index)}><PersonRemoveIcon fontSize='large' /></div>
                    </div>);
        })
        return listItems;
    }
    
    useEffect(() => {
        RequestMembers();
    }, []);

    return (
        <div className='members-list'>
            {LoadMembers()}
        </div>
    );
};

export default Members;
