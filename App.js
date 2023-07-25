import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enabled or not

  const toggleMode = ()=> {
    if(mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor='#24253d'
  }
    else {
      setMode('light')
      document.body.style.backgroundColor='white'
    }
  }
  
  return (
    <>
    {/*<Navbar title= "TextUtils" aboutText="About TextUtils"/>*/}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>

   <div className="container my-3" >
     <TextForm heading="Enter the text to analyze below" mode={mode}/>
     {/* <About/> */}
    </div>
    </>
  );
}

export default App;