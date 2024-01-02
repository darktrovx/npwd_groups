import React from 'react';
import '../../style.css'

interface Props {
    step: number;
    steps:any [];
}

const Task = (props: Props) => {

    let listItems = [] as any;

    if (props.steps != undefined) {
        listItems = props.steps.map((steps, index) => {
            if (props.step == index) {
                return (
                    <div className='task-item-active' key={index}>
                        <div className="task-title"><span>{steps.Title}</span></div>
                        <div className="task-description"><span>{ steps.Description }</span></div>
                    </div>
                );
            } else if (props.step > index) {
                return (
                    <div className='task-item-completed' key={index}>
                        <div className="task-title"><span>{steps.Title}</span></div>
                        <div className="task-description"><span>{ steps.Description }</span></div>
                    </div>
                );
            } else {
                return (
                    <div className='task-item' key={index}>
                        <div className="task-title"><span>{steps.Title}</span></div>
                        <div className="task-description"><span>{ steps.Description }</span></div>
                    </div>
                );
            }
        });
    } else {
        listItems.push(
            <div className='task-item' key={1}>
                <div className="task-title"><span>WAITNG FOR TASK</span></div>
                <div className="task-description"><span></span></div>
            </div>
        );
    }

    return (
        <div className='task'>
            {listItems}
        </div>
    );

};

export default Task;
