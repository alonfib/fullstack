import React, { useState } from 'react';
import TaskPopUp from './TaskPopUp';

import './index.scss'

const Subordinates = ({selected, subordinates, createTask}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    const handleButton = (subId, text, dueDate) => {
        createTask(subId, text, dueDate);
    }
    
    return (
    <div className="subordinatesWrapper">
        <div className="title">My subordinates:</div>
            <div className="subordinatesContainer container">
                {Boolean(subordinates.length) &&
                    subordinates.map((sub, key) => {
                        return <div className="subordinate" key={key}>
                            <div className="fullName">{sub.firstName} {sub.lastName}</div>
                            <div className="position">{sub.position}</div>
                            <button onClick={() => {
                                setSelectedId(sub.id)
                                setIsOpen(true)
                                }} >Asign Task</button>
                             <TaskPopUp 
                                submitTask={(taskText, taskDueDate) => handleButton(sub.id, taskText, taskDueDate)}
                                toggle={isOpen && sub.id == selectedId}
                                setPopUpToggle={setIsOpen}
                                key={key}
                />
                        </div>
                    })
                }
        </div>
    </div>
    );
};

export default Subordinates;