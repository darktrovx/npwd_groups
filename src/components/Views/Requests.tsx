import React, { useState } from 'react';

import '../../style.css'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import fetchNui from '../../utils/fetchNui';
import { ServerPromiseResp } from '../../types/common';

const Requests = () => {
    let pendingRequests: { id: number; name: string; }[] = [];

    const GetRequests = async () => {
        console.log('Getting requests');
        const data:any = await fetchNui<ServerPromiseResp>('GetRequests');
        pendingRequests = data.requests;
    }
    GetRequests();

    const Deny = async (id: number) => {
        const success = await fetchNui<ServerPromiseResp>('KickMember', {id: id});
        if (success)
        {
            const element = document.getElementById('requestID:'+id);
            element?.remove();
            pendingRequests.splice(pendingRequests.findIndex(request => request.id === id), 1);
        }
    }

    const Accept = async (id: number) => {
        const success = await fetchNui<ServerPromiseResp>('AcceptRequest', {id: id});
        if (success)
        {
            pendingRequests.splice(pendingRequests.findIndex(request => request.id === id), 1);
            const element = document.getElementById('requestID:'+id);
            element?.remove();
        }
    }

    let listItems = [] as any;
    listItems = pendingRequests.map(request => {
        console.log(request.id);
        return <div key={request.id} id={'requestID:' + request.id} className='request-list-item'>
                    <div className='request-name'>{request.name}</div>
                    <div className='request-btns'>
                        <div className='request-deny' onClick={() => Deny(request.id)}><DisabledByDefaultIcon/></div>
                        <div className='request-accept' onClick={() => Accept(request.id)}><CheckBoxIcon/></div>
                    </div>
                </div>
    });

    return <div className='request-list'>{listItems}</div>
};

export default Requests;
