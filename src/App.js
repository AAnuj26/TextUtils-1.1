import "./App.css";
// import Alert from './components/Alert';
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("default");

  // const [alert, setAlert] = useState(null);

  // const showAlert = (message, type)=>{
  //   setAlert({
  //     msg: message,
  //     type: type
  //   })
  // }

  const toggleMode = () => {
    if (mode === "default") {
      setMode("dark");
      document.body.style.backgroundColor = "#2b2d30";
      // showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("default");
      document.body.style.backgroundColor = "white";
      // showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      {/* <Alert alert={alert}/> */}
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          home="Home"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<TextForm />} />
            <Route path="/about" element={<About />} />

            {/* <About />     */}
            {/* <TextForm heading = "Enter the text to analyze" mode={mode}/> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
