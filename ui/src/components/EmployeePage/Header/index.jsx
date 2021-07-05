import React, { useState } from 'react';
import ReportPopUp from './ReportPopUp'
import ViewReportsPopUp from './ViewReportsPopUp'
import './index.scss'

const Header = ({selected, manager,createReport}) => {
const [isOpen, setIsOpen] = useState(false);
const [isReportsViewOpen, setIsReportsViewOpen] = useState(false);

    function handleReport (reportText) {
            createReport(selected, reportText);
            setIsOpen(false);
    }

    return (
        <div className="header">
            <div className="picture">
            </div>
        <div className="info">
            <div className="personalInfo">
                <div className="fullName">Name: {selected.firstName} {selected.lastName}</div>
                <div className="position">Position: {selected.position}</div>
            </div>
            {manager && 
            <div className="managerInfo">
                Manager:
                <div className="managerName">{`${manager.firstName} ${manager.lastName}`}</div>
                <button onClick={() => setIsOpen(true)}>Report</button>
                {Boolean(selected?.managerId) && <ReportPopUp 
                    submitReport={handleReport}
                    toggle={isOpen}
                    setPopUpToggle={setIsOpen}
                />}
            </div>
            }
            {Boolean(selected.reports.length) &&
<>
<button onClick={() => setIsReportsViewOpen(true)} className="seeReportsButton">See Reports</button>
            <ViewReportsPopUp
                reports={selected.reports}
                toggle={isReportsViewOpen}
                setPopUpToggle={setIsReportsViewOpen}
            />

            </> 
            }
        </div>
    </div>
    );
};

export default Header;