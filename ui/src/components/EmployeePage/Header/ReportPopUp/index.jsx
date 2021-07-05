import React, { useState } from 'react';
import './index.scss'
import Popup from 'reactjs-popup';

const ReportPopUp = ({submitReport, toggle, setPopUpToggle}) => {
const [reportText, setReportText] = useState('');

    function onClick () {
        submitReport(reportText);
        setPopUpToggle(false);
        setReportText('');
}

    return (
<Popup 
                position="right bottom"
                modal={true}
                open={toggle}
                onClose={() => setPopUpToggle(false)}
                >
                    <div className="reportForm">
                         <div className="block input">
                            <div className="text">Fill Report:</div>
                            <textarea className="value" value={reportText} onChange={e => setReportText(e.target.value)} cols="30" rows="10"></textarea>
                         </div>
                         <div className="block date">
                             <div className="text">date:</div>
                             <div className="value">{new Date().toLocaleDateString()}</div>
                         </div>
                    </div>
                         <button className="reportButton" disabled={reportText.length == 0} onClick={onClick}>Submit Report</button>
                    </Popup>
    );
};

export default ReportPopUp;