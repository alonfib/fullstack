import React from 'react';
import './index.scss'

const Tasks = ({selected}) => {
    return (
        <div className="tasksWrapper">
        <div className="title">My taks:</div>
        <div className="tasksContainer container">
            {Boolean(selected.tasks?.length) && selected.tasks.map((task, key) => {
                return <div className="task" key={key}>
                    <div className="taskText">{task.text}</div>
                    <div className="taskDate">Due Date: {task.date}</div>
                </div>
            })}
        </div>
    </div>
    );
};

export default Tasks;