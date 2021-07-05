import React from 'react';
import Header from './Header';
import Tasks from './Tasks';
import Subordinates from "./Subordinates";
import './index.scss'

const EmployeePage = ({data, selected, goBack, manager, subordinates, actions}) => {
    return (
        <div className="employeePageWrapper">
            <button className={"backButton"} onClick={goBack}>{`<-`}</button>
            {data && selected &&
            <>
                <Header selected={selected} manager={manager} createReport={actions.createReport}/>
                <Tasks selected={selected}/>
                <Subordinates selected={selected} subordinates={subordinates} createTask={actions.createTask}/>
            </>
            }
            </div>
    );
};

export default EmployeePage;