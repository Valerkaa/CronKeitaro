import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom"
import Login from "./Pages/Login";
import MainPage from "./Pages/Main";
function App() {
  return (
   <>
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/main" element={<MainPage/>}/>
    </Routes>
   </>
  );
}

export default App;
