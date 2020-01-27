import React from 'react'
import './Extension.css'

const Extension = (props) => {
    if(props.display){
        return (
            <div className='settingoptions' >
                <a href="https://www.google.com/preferences?hl=en&amp;fg=1" >Search settings</a>
                <a href="/advanced_search?hl=en&amp;fg=1" >Advanced search</a>
                <a href="/history/privacyadvisor/search/unauth?utm_source=googlemenu&amp;fg=1" >Your data in Search</a>
                <a href="/history/optout?hl=en&amp;fg=1" >History</a>
                <a href="//support.google.com/websearch/?p=ws_results_help&amp;hl=en&amp;fg=1" >Search Help</a>
                <a data-bucket="websearch"  id="dk2qOd" target="_blank" jsaction="gf.sf" data-ved="0ahUKEwjt4qil1vfmAhWjwVkKHQ-7AwoQLggU">Send feedback</a>  
            </div>
                );
    }
    else{
        return (<div> </div>);
    }

};

export default Extension

