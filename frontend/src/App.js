import './App.css';
import Header from './Components/Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import Home from "./Pages/Home/Home"
import Update from './Pages/Update/Update';
import 'react-toastify/dist/ReactToastify.css';
import {   BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={ <Home />}/>
          <Route path='/update/:id' element={ <Update />}/>
        </Routes>
      </Router>
     
      <ToastContainer />
    </div>
  );
}

export default App;
