import React from 'react';
import EmployeeRow from '../EmployeeRow';
import './index.scss';

const EmployeeList = ({data = [], setSetlectedEmployee}) => {
    
    return (
        <div className="employeeList">
            <div className="title">Employee List</div>
            <div className="employees">
            {Boolean(data?.length) && 
                data.map((employee, key) => <EmployeeRow key={key} data={employee} setSetlectedEmployee={setSetlectedEmployee}/>)
            }
            </div>

        </div>
    );
};

export default EmployeeList;