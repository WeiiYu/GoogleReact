/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import './Icon.css'


const Icon = (props) => {
    if(props.display){
    return (
        <div  className="icon-layout">
            <div className = "icon-bar">
                <ul className = "icon-ul">
                    <li className = "icon-li">
                            <span className = "icon-li-span-img"></span>
                            <span className = "icon-li-span-font">Account</span>
                    </li >
                    <li className = "icon-li">
                            <span className = "icon-li-span-img"></span>
                            <span className = "icon-li-span-font">Account</span>
                    </li >  
                    <li className = "icon-li">
                            <span className = "icon-li-span-img"></span>
                            <span className = "icon-li-span-font">Account</span>
                    </li >  
                    <li className = "icon-li">
                            <span className = "icon-li-span-img"></span>
                            <span className = "icon-li-span-font">Account</span>
                    </li >  
                    <li className = "icon-li">
                            <span className = "icon-li-span-img"></span>
                            <span className = "icon-li-span-font">Account</span>
                    </li >  
            
                    <li className = "icon-li">
                            <span className = "icon-li-span-img"></span>
                            <span className = "icon-li-span-font">Account</span>
                    </li >  
                    <li className = "icon-li">
                            <span className = "icon-li-span-img"></span>
                            <span className = "icon-li-span-font">Account</span>
                    </li >  
                    <li className = "icon-li">
                            <span className = "icon-li-span-img"></span>
                            <span className = "icon-li-span-font">Account</span>
                    </li >  
                    <li className = "icon-li">
                            <span className = "icon-li-span-img"></span>
                            <span className = "icon-li-span-font">Account</span>
                    </li >  
                    <li className = "icon-li">
                            <span className = "icon-li-span-img"></span>
                            <span className = "icon-li-span-font">Account</span>
                    </li >  
                    <li className = "icon-li">
                            <span className = "icon-li-span-img"></span>
                            <span className = "icon-li-span-font">Account</span>
                    </li >  
                    <li className = "icon-li">
                            <span className = "icon-li-span-img"></span>
                            <span className = "icon-li-span-font">Account</span>
                    </li >  
                    <div className = "icon-line-seprate ">
                    </div>
                    <li className = "icon-li">
                            <span className = "icon-li-span-img"></span>
                            <span className = "icon-li-span-font">Account</span>
                    </li >  
                    <li className = "icon-li">
                            <span className = "icon-li-span-img"></span>
                            <span className = "icon-li-span-font">Account</span>
                    </li >  
                    <li className = "icon-li">
                            <span className = "icon-li-span-img"></span>
                            <span className = "icon-li-span-font">Account</span>
                    </li >  
                    <li className = "icon-li">
                            <span className = "icon-li-span-img"></span>
                            <span className = "icon-li-span-font">Account</span>
                    </li >  
                    <li className = "icon-li">
                            <span className = "icon-li-span-img"></span>
                            <span className = "icon-li-span-font">Account</span>
                    </li > 
                    <li className = "icon-li">
                            <span className = "icon-li-span-img"></span>
                            <span className = "icon-li-span-font">Account</span>
                    </li >                   
                </ul> 
                <div className = " icon-button-inside">
                    <a className = "icon-button-inside-a"> More from Google</a>
                </div>
            </div>
        </div>
    );
    }
    else
    {
        return (<div></div>);
    }
};

export default Icon;
