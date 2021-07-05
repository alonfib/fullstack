import React from 'react';
import './index.scss';

const EmployeeRow = ({data, setSetlectedEmployee}) => {
    
    return (
        <div className="employeeRow">
            <div className="fullName">{`${data.firstName} ${data.lastName} `}</div>
            <div className="position">{data.position}</div>
            <button onClick={() => setSetlectedEmployee(data)}>View</button>
        </div>
    );
};

export default EmployeeRow;