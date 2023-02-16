import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyContext from './component/MyContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyContext.Provider value={{ username:"Yosra" , loggedIn: true}}>
    <App />
    </MyContext.Provider>
  </React.StrictMode>
 // <p>Bonjour , c'est yosra</p>
);
// function
//  tick(){


//   const  element  =  (


//   <div>


//   <h1>Bonjour !</h1>


//   <h2>Aujourdh'ui
//  :  {new
//  Date().toLocaleDateString()}.</h2>


//   <h2>Il  est  {new  Date().toLocaleTimeString()}.</h2>


//   </div>);


//   root.render(element);


//   }

//   setInterval(tick,1000);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
