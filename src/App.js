import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';

function App() {

  const [mode,setMode] = useState('light');
   
  const toggleMode =() =>{
   
    if (mode === 'light') {
    setMode('dark');
   } 
   else {
    setMode('light');
   
   }

  }
  
  return (
    
    <div className="App">
      <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}/>
    </div>
  );
}

export default App;
