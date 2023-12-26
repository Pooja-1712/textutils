import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'TextUtile - Dark Mode';
      // setInterval(() => {
     //   document.title = 'TextUtile is Amazing Mode';
    // }, 2000);
    // setInterval(() => {
    //   document.title = 'Install TextUtile Now';
    // }, 1000);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      document.title = 'TextUtile - Light Mode';
    }
  };

  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About us"/> */}
 {/* <Navbar/> */}
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />} /> */}
            {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyis below" mode={mode} />} /> */}
          {/* </Routes> */}
          
          <TextForm showAlert={showAlert} heading="Enter the text to analyis below" mode={mode} />
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
