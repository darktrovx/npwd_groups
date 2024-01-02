import React, { useState } from 'react';
import Groups from './Views/Groups';
import '../style.css'
import Members from './Views/Members';
import Requests from './Views/Requests';

interface Props {
    menu: String;
    inGroup: boolean;
    members: [];
}

const PageHandler = (props: Props) => {

    switch(props.menu) {
        case 'NONE':
            return (
                <div>
                    <h1>None</h1>
                </div>
            );
        case 'GROUPS':
            return (
                <div className='available-groups'><Groups inGroup={props.inGroup}/></div>
            );
        case 'MEMBERS':
            return (
                <div className='group-members'>
                    <Members members={props.members}/>
                </div>
            );
        case 'TASKS':
            return (
                <div>
                    <h1>Tasks</h1>
                </div>
            );
        case 'REQUESTS':
            return (
                <div>
                    <div className='group-requests'>
                    <Requests />
                </div>
                </div>
            );
        default:
            return (
                <div>
                    <h1>Default</h1>
                </div>
            );
    }

};

export default PageHandler;
