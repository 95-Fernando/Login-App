import './App.css';
import Login from "../src/components/login"
import Register from "../src/components/register"
import { useState } from 'react';



function App() {

      /*Función para mostrar o esconder al form*/ 
      const [toggleForm, setToggleForm] = useState(true)
        
      const toggle = (e) => {
          setToggleForm(!toggleForm);
          e.preventDefault();
          }

  return (
    <div className="App">
      <Login toggleForm = {toggleForm} toggle = {toggle}  />
      <Register toggleForm = {toggleForm} toggle = {toggle}/>
    </div>
  );
}

export default App;
