import React, { useState } from 'react';
import Groups from './Views/Groups';
import '../style.css'
import Members from './Views/Members';
import Requests from './Views/Requests';
import Task from './Views/Task';

interface Props {
    menu: String;
    inGroup: boolean;
    isOwner: boolean;
    task: { step: number, steps: any[] };
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
                <div className='available-groups'>
                    <Groups inGroup={props.inGroup}/>
                </div>
            );
        case 'MEMBERS':
            return (
                <div className='group-members'>
                    <Members isOwner={props.isOwner} />
                </div>
            );
        case 'TASKS':
            return (
                <div className='group-task'>
                    <Task step={props.task.step} steps={props.task.steps}/>
                </div>
            );
        case 'REQUESTS':
            return (
                <div className='group-requests'>
                    <Requests />
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
