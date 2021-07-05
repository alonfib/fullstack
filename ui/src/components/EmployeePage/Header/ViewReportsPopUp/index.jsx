import React, { useState } from 'react';
import './index.scss'
import Popup from 'reactjs-popup';

const ViewReportsPopUp = ({reports, toggle, setPopUpToggle}) => {

    function onClick () {
        setPopUpToggle(false);
}

    return (
<Popup 
                position="right bottom"
                modal={true}
                open={toggle}
                onClose={() => setPopUpToggle(false)}
                >
                    <div className="reportsViewWrapper">
                        <div className="title">Reports:</div>
                        {reports.map(data => <div className={"report"}>{data.text}</div>)}
                    </div>
                    </Popup>
    );
};

export default ViewReportsPopUp;