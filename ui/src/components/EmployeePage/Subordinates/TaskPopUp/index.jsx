import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import DatePicker from "react-datepicker";
import './index.scss'

const TaskPopUp = ({submitTask, toggle, setPopUpToggle}) => {
const [taskText, setTaskText] = useState('');
const [taskDueDate, setTaskDueDate] = useState(new Date());

    function onClick () {
        submitTask(taskText, new Date(taskDueDate).toLocaleDateString());
        setPopUpToggle(false);
        setTaskText('');
}



    return (
<Popup 
                position="right bottom"
                modal={true}
                open={toggle}
                onClose={(e) => setPopUpToggle(false)}
                >
                    <div className="reportForm">
                         <div className="block input">
                            <div className="text">Task:</div>
                            <textarea className="value" value={taskText} onChange={e => setTaskText(e.target.value)} cols="30" rows="10"></textarea>
                         </div>
                         <div className="block dueDate">
                             <div className="text">due date:</div>
                             <div className="value">{new Date().toLocaleDateString()}</div>
                         </div>
                         <div className="block date">
                             <div className="text">date:</div>
                             
                             <div className="value">
                             <DatePicker selected={taskDueDate} onChange={(date) => setTaskDueDate(date)} />
                                 </div>
                         </div>
                    </div>
                         <button className="reportButton" disabled={taskText.length == 0 || taskDueDate == null} onClick={onClick}>Submit Report</button>
                    </Popup>
    );
};

export default TaskPopUp;
