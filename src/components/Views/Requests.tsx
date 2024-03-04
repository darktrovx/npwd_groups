import React, { useEffect, useState } from 'react';

import '../../style.css'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import fetchNui from '../../utils/fetchNui';
import { Request, ServerPromiseResp } from '../../types/common';

const Requests = () => {
    const [pendingRequests, setPendingRequests] = useState([] as Request[]);

    const GetRequests = async () => {
        const requests:any = await fetchNui<ServerPromiseResp>('GetRequests');
        setPendingRequests(requests);
    }

    const Deny = async (index: number, id: number) => {
        const success = await fetchNui<ServerPromiseResp>('KickMember', { id: (index + 1) });
        if (success)
        {
            const newRequests = pendingRequests.filter(request => request.id !== id);
            setPendingRequests(newRequests);
        }
    }

    const Accept = async (index: number, id: number) => {
        const success = await fetchNui<ServerPromiseResp>('AcceptRequest', { id: (index + 1) });
        if (success)
        {
            const newRequests = pendingRequests.filter(request => request.id !== id);
            setPendingRequests(newRequests);
        }
    }

    useEffect(() => {
        GetRequests();
    }, []);

    const LoadRequests = () => {
        const listItems = pendingRequests.map((request, index) => {
        return <div key={index} id={'requestID:' + index} className='request-list-item'>
                    <div className='request-name'>{request.name}</div>
                    <div className='request-btns'>
                        <div className='request-deny' onClick={() => Deny(index, request.id)}><DisabledByDefaultIcon/></div>
                        <div className='request-accept' onClick={() => Accept(index, request.id)}><CheckBoxIcon/></div>
                    </div>
                </div>
        });
        return listItems;
    };

    return <div className='request-list'>{LoadRequests()}</div>
};

export default Requests;
