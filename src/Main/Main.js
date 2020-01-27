/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Main.css';
import Mircextension from './img/mircextension.png'

const Main = () => {
    return (
        <div className = "main">
            <div>
                <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" className="img"></img>
            </div>

            <div className = "search">
                <div className = "search-first-part">
                    <div>
                        <span className ="span">
                            <svg  styfocusable ="false" xmlns ="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d ="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                        </span>    
                    </div> 
                    <div className = "input">
                        <input className = "searchbar" type="text" ></input>
                    </div>
                    <div className="microphone">
                        <div className = "mircophone-extension">
                            <img src = {Mircextension}></img>
                        </div>
                    </div> 
                </div>

                <div className = "search-extension">
                    <div className = "search-extension-line">
                    </div>
                    <p className = "search-extension-content-try">Try searching for</p>
                    <div className = "search-extension-content-list">
                        <div className = "search-extension-content-list-img">
                            <span className ="span">
                                <svg  styfocusable ="false" xmlns ="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d ="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                            </span> 
                        </div>
                        <p className = "search-extension-content-list-content"> dinner recipes</p>
                    </div>
                    <div className = "search-extension-content-list">
                        <div className = "search-extension-content-list-img">
                            <span className ="span">
                                <svg  styfocusable ="false" xmlns ="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d ="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                            </span> 
                        </div>
                        <p className = "search-extension-content-list-content"> dinner recipes</p>
                    </div>
                    <div className = "search-extension-content-list">
                        <div className = "search-extension-content-list-img">
                            <span className ="span">
                                <svg  styfocusable ="false" xmlns ="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d ="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                            </span> 
                        </div>
                        <p className = "search-extension-content-list-content">What to do when you are bored</p>
                    </div>
                    <div className = "search-extension-content-list">
                        <div className = "search-extension-content-list-img">
                            <span className ="span">
                                <svg  styfocusable ="false" xmlns ="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d ="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                            </span> 
                        </div>
                        <p className = "search-extension-content-list-content"> Videos</p>
                    </div>
                    <div className = "search-extension-content-list">
                        <div className = "search-extension-content-list-img">
                            <span className ="span">
                                <svg  styfocusable ="false" xmlns ="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d ="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                            </span> 
                        </div>
                        <p className = "search-extension-content-list-content"> How to delete App</p>
                    </div>
                    <div className="twobutton-2" >            
                            <button className="button">Google Search</button>
                            <button className="button">I'm Feeling Lucky</button>               
                    </div>
                    <a src = "#" className = "search-extension-report">Report inappropriate prediction </a>
                    
                </div>
            </div>

            <div className="twobutton" >            
                <button className="button">Google Search</button>
                <button className="button">I'm Feeling Lucky</button>               
            </div>
        </div>
    );
};

export default Main ;
