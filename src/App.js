import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from "../src/Components/Home"

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} extact></Route>
         </Routes>
        {/* <Toaster/> */}
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
