// import logo from './logo.svg';
import './App.css';
import Products from "./Components/Products";
import Product from "./Components/Product";
import ProductDetails from './Components/ProductDetails';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
//import { Route, Routes } from 'react-router-dom';
import Home from "./Components/home"
import NotFound from "./Components/NotFound"
import NavigationBar from "./Components/NavigationBar/Navbar"
const option=(
  <ol>
    <li>TWIN</li>
    <li>BI</li>
    <li>SAE</li>
  </ol>
)
let x="Bonjour" 
var y="tout"
const z="le monde"
const  expression  =  <p>  1  +  1  =  {  1  +  1  }  </p>
var nom="ghada"
var prenom="ghada"
var photo=<img src="logo192.png"></img>
const user={
  username: "test",
  lastname: "ghada"
}

function formatName(user){
  return user.lastname+ "--- "+ user.lastname
}

/////c)Traitement conditionnel)))))))))))))
function disBonjour(user){
  if (user.lastname=='ghada'){
    return <h1> Bonjour {formatName(user)}!</h1>
  }
  return <h1>Bonjour Inconnu</h1>
}
var myStyle={
  fontsize: 100,
  color: 'red'
}
function disBonjour2(user) {
  return (user.prenom=='ghada') ? (<h1>Bonjour, {formatName(user)} !</h1>) :
  (<h1>Bonjour Inconnu.</h1>);
  }
  //d)Manipulation des listes)))
  const numbers = [7, 12, 25, 4, 5];
const listItems = numbers.map((number, index) =>
<li key={index}>{number}</li>);

const max1 = numbers.reduce((a, b) => b > a ? b : a);
// (Une autre façon de faire)
const max = numbers.reduce((a, b) => Math.max(a, b));

const tab = numbers.filter(v => v % 2 == 0).map((v,ind) =>
<li key={ind}>{v * v}</li>);
function App() {
  return (
    <div className="App">
    <NavigationBar />
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/products" element={<Products/>} />
      <Route path="*" element={<NotFound/>} />
      <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
  </div>

  );// fel router dom v6.8 ma3adech famma component = {} wallet element={<esmelKhra/>}
}

export default App;
