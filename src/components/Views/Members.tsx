import React, { useState } from 'react';

import '../../style.css'
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import fetchNui from '../../utils/fetchNui';
import { ServerPromiseResp } from '../../types/common';

interface Props {
  members: any[];
}

const Members = (props: Props) => {

    const Kick = async (id: number) => {
        const success = await fetchNui<ServerPromiseResp>('KickMember', {id: id});
        if (success)
            props.members.splice(props.members.findIndex((member) => member.id === id), 1);
    }

    const members = [];
    for (let i = 0; i < props.members.length; i++) {

        if (props.members[i].isOwner)
            members.push(<div className='members-list-item'><div className='members-name'>{props.members[i].name}</div><div className='members-btns'></div></div>);
        else
        members.push(
        <div className='members-list-item'>
            <div className='members-name'>{props.members[i].name}</div>
            <div className='members-btns' onClick={() => Kick(props.members[i].id)}><PersonRemoveIcon /></div>
        </div>);
    }

    return (
        <div className='members-list'>
            {members}
        </div>
    );
};

export default Members;
