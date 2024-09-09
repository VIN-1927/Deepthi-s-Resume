import React, { useState } from "react";
import "./App.css";
import SideMenu from "./components/SideMenu";
import { Routes, Route } from "react-router-dom";

import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Qualifications from "./pages/Content/Qualifications";
import Experience from "./pages/Content/Experience";
import Content from "./pages/Content/Content";
import Home from "./pages/Home";
import CoverPage from "./pages/CoverPage";
import Resume from "./pages/Content/Resume";
import Next from './pages/Next';

function App() {
  const [inactive, setInactive] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);
  


  function toggleFullScreen(){
    setFullScreen((value) => (value === false ? true : false))
    console.log(fullScreen)
  }

  return (
    <div className='App'>
      <SideMenu
        onCollapse={(inactive) => {
          console.log(inactive);
          setInactive(inactive)
          }} />



      {/* THIS WILL TOGGLE BASED ON ONSHOW STATE VALUE */}
      <CoverPage onShow={fullScreen} handleOnShow={toggleFullScreen} />

      {/* IF ONSHOW = TRUE, THIS SECTION IS HIDDEN WITH CSS */}
      <div className={`container ${inactive ? "inactive" : ""} ${fullScreen ? "hidden" : ""}`}>
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/content' element={<Content />}></Route>
          <Route path='/content/experience' element={<Experience />}></Route>
          <Route path='/content/qualifications' element={<Qualifications />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/content/resume' element={<Resume />}></Route>
          <Route path='*' element={<NotFound />}></Route>
          <Route path='/next' element={<Next />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
