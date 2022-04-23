import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
// import About from "./components/About";
import React, { useState } from 'react';
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light') // setting up the dark mode
  const [alert,setAlert]= useState(null);

  const showAlert=(message,type)=>{
     setAlert({
       msg:message,
       type:type
     })
    setTimeout(() => {
      setAlert(null);
    }, 1400);
  }
  const toggleMode=()=>{
    if(mode==='light'){
     setMode('dark');
     document.body.style.backgroundColor='#042742';
     showAlert("Dark mode has been enabled !!","success");
    }
    else{
      setMode('light');
     document.body.style.backgroundColor='white';
     showAlert("Light mode has been enabled !!","success");

    }
  }
  return (
    <>
      <Navbar title="TextModifiers" homeText="Home " aboutText="About us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
        {/* <Navbar /> */}
      <div className="container my-4">
      <Textform  heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>
      {/* <About /> */}
      </div>
    </>
  );
}

export default App;
