import React from 'react';
import './Bottom.css'

const Bottom = (props) => {
    return (
        <div className="footer">
            <ul className="bottom-left">
                <li><a href="#">Advertising</a></li>
                <li><a href="#">Business</a></li>
                <li><a href="#">How Search works</a></li>
            </ul>
            <ul className="bottom-right">
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#" className="settingbutton" onClick={props.click}>Settings</a></li>
            </ul>
        </div>

    );
};

export default Bottom



