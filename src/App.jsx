import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Dashboard from "./components/Dashboard";

function App() {


  return (
    <>
      
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route path="/dasboard" element={<Dashboard/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
      
      
    </>
  )
}

export default App
