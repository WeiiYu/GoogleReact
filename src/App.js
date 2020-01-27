import React, { useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav/Nav.js';
import Main from './Main/Main.js';
import Bottom from './Bottom/Bottom.js';
import Icon from './Nav/Icon.js'
import Extension from './Bottom/Extension';



function App() {
  const [googleState,setgoogleState ]= useState({

    showingstate: false
  });

  const [iconstate,iconsetstate ]= useState({

    iconshowingstate: false
  });

  useEffect(
    () => {
      document.onclick=  clickblankdis;
    }
  )
  const bottomextension = (event) => {
    event.preventDefault();
    event.nativeEvent.stopImmediatePropagation();
    googleState.showingstate ? setgoogleState({
      showingstate : false
    }) : 
    setgoogleState({
      showingstate : true
    })
  };

  const naviconextension = (event) => {
    event.preventDefault();
    event.nativeEvent.stopImmediatePropagation();
    console.log( iconsetstate.iconshowingstate)
    iconstate.iconshowingstate ? iconsetstate({
      iconshowingstate : false
    }) : 
    iconsetstate({
      iconshowingstate : true
    })
    console.log( iconsetstate.iconshowingstate)
  };


  const clickblankdis  = () => {

    setgoogleState({
      showingstate : false
    });
    iconsetstate({
      iconstate : false
    });

  };


  return (
    <div className="App">
    <Nav click={naviconextension}/>
    <Main />
    <Bottom click={bottomextension}/>
    <Extension display={googleState.showingstate} />
    <Icon display={iconstate.iconshowingstate} />
    </div>
  );
}

export default App;
