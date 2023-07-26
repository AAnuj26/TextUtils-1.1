import './App.css';
// import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('default');

  // const [alert, setAlert] = useState(null);

  // const showAlert = (message, type)=>{
  //   setAlert({
  //     msg: message,
  //     type: type
  //   })
  // }

  const toggleMode = ()=>{
    if(mode === 'default'){
      setMode('dark');
      document.body.style.backgroundColor = '#2b2d30';
      // showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('default');
      document.body.style.backgroundColor = 'white';
      // showAlert("Light mode has been enabled", "success");
    }
  }
  

    
  
  

  
  return (
  <>

    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    {/* <Alert alert={alert}/> */}
    <TextForm heading = "Enter the text to analyze" mode={mode}/>
    {/* <About/> */}
    
  </>
  );

}
export default App;
      

  