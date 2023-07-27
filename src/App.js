import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
// import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("default");
  // const [alert, setAlert] = useState("");

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
    } else {
      setMode("default");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          home="Home"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        {/* <Alert alert='This is a alert'/> */}
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
