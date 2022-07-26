import logo from './logo.svg';
import './App.css';
import Register from './views/Register';
import Login from './views/login';
import { BrowserRouter, BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <div>
    <BrowserRouter>
      <Routes>
        <Route exact path="/register" element = {<Register/>}/>
        <Route exact path="/login" element = {<Login/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    </>
   
  );
}

export default App;
