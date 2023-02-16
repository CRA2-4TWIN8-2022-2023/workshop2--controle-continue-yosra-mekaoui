//rfce
import React, { useState , useEffect , useContext} from 'react';
import context from 'react-bootstrap/esm/AccordionContext';
import MyContext from './MyContext';

function FunctUseState() {
    //useState
    const [count , setCount] = useState(0);
    const [{color , background } , setColor] = useState({})
    //useEffect
    useEffect(() => {
        console.log("execution useEffect");
    },[count]) // à chaque chargement - modification  / si on passe un tab vide [] : CDM ( API) / a chaque chang de count se déclenche
    useEffect(() => {
        console.log("did mount");
    }, [])
    useEffect(() => {
        console.log("count update");
    }, [count])
    useEffect(() => {
        console.log("some changes");
    })
    //useContext
    const contextValue=useContext(MyContext);


    return ( 
        <>
        <div>
            <p>
            Welcome {contextValue.username}</p> 
             {contextValue.loggedIn ? ( <p> You are online </p> ) : ( <p> You are offline</p>) }
               
        </div>
        <div>
            Backgroud : 
            <input type="text" onChange={(e) => setColor((current) =>({...current,background : e.target.value }))}></input>
            Color:
            <input type="text" onChange={(e) => setColor((current) =>({...current,color : e.target.value }))}></input>
        </div>
        <div>  color : {color} </div>
        <div>  background : {background} </div>
           
           
        
        <div>
            <button onClick={() => setCount(count +1)}> Count - { count }</button>
            {/* <button onClick={(prevCount) => setCount(prevCount  +1)}> Count - { count }</button> */}
        </div>
            
            
            

            
        </>
     );
}

export default FunctUseState;