import React from 'react';
import './Nav.css'
import Icon from './Icon.js'

const nav = (props) => {

    return (
        <div className = "nav">
            <ul className = "nav-left">
                <li className = "left-first-li">
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Store</a>
                </li>
            </ul>   
            
            <ul className = "nav-right">
                <li>
                    <a href="#"> Gmail</a>
                </li>
                <li>
                    <a href="#">Images</a>
                </li>
                <li>
                    <a href="#" className = "icon" onClick = {props.click}></a>
                </li>
                <li>
                    <a href="#" className = "sign-in" >Sign In</a> 
                </li>
            
            </ul>  
           
        </div>
    );
};
export default nav;