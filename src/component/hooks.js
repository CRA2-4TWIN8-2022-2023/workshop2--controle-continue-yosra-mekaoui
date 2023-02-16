import React, { useState, useEffect } from 'react';
function FunctUseState() {
    
    const [count, setCount] = useState(0);
    const [{color,background},setColor]=useState({})
    useEffect(() => {
        console.log("did mount");
    },[])
    useEffect(() => {
        console.log("count update");
    },[count])
    useEffect(() => {
        console.log("some changes");
    })
    return <div>Background
        <input type="text" onChange={(e) => setColor((current) => ({...current,background: e.target.value}))}/>
        Color:
        <input type="text" onChange={(e) => setColor((current) => ({...current,color: e.target.value}))}/>

        <h1>Color: {color}</h1><br/>
        <h1>Background: {background}</h1>
        <button onClick={()=> setCount(count + 1)}>Count- { count} 
          </button>
      { /* <button onClick={(prevCount)=> setCount(prevCount + 1)}>Count- { count} 
          </button>*/}
          
        </div>;
}

export default FunctUseState;