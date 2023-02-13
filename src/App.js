// import logo from './logo.svg';
import './App.css';
import ComposantClass from './components/ComposantClass';
import ComposantFunct from './components/ComposantFunct';
import Products from './components/Products';
const option = (
  <ol>
    <li>Twin</li>
    <li>Sae</li>
    <li>bi</li>
  </ol>
)
let x ="Bonjour";
var y="tout";
const z="le monde !";
const expression = <p> 1 + 1 = {1 + 1} </p>
var nom = <h2> Yosra </h2>
var prenom = <h2> Mekaoui </h2>
const photo = <img src="logo192.png" alt="maphoto" width="100px" height="100px" />;

const user={
  prenom: 'yosra',
   nom: 'Mekaoui'
  }
  function formatName(user){
    return user.prenom + '--' + user.nom;
  }
var myStyle ={
  fontSize: 100,
  color: '#ff0000'
}

function App() {
  return (
   <div className="App">
    <ComposantClass></ComposantClass>
    <ComposantFunct/>
    <Products/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* Hello Yosra
      {option}
      la valeur de x {x}
      la valeur de y {y}
      la valeur de z {z}
      <br></br>
      la valeur de l'expression {expression}
      <br></br>
      {nom} {prenom} {photo}
      <br></br>
      {user.nom} - {user.prenom}
      <br>
      </br>
      {formatName(user)}
      <h1 style = {myStyle}>Bonjour</h1> */
      }
      

    </div>
  );
}

export default App;
