import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Committe from "../pages/Committe.jsx";
import Direccion from "../pages/Direccion.jsx";
import Evaluator from "../pages/Evaluator.jsx";
import Sections from "../pages/Sections.jsx";
import PreviewPDF from "../pages/PreviewPDF.jsx";
import Review from "../pages/Review.jsx";
import Grade from "../pages/Grade.jsx";
import ProtectRoute from "./ProtectRoute.jsx";
// import { getItem, setItem } from "../utils/storage.js"
//Contexts 
import SharedDataContext from '../contexts/SharedDataContext.js';
import UserContext from "../contexts/UserContext.js";
function App() {
   const [isUser, setIsUser] = useState({ page: 1,})
  const [isShareData, setIsShareData] = useState([]);


  return (
    <BrowserRouter>
    <SharedDataContext.Provider value={{ isShareData, setIsShareData }}>
    <UserContext.Provider value={{ isUser, setIsUser }}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Committe" element={<Committe/>}/>
        <Route path="/Direccion" element={<Direccion/>}/>
        <Route path="/Evaluator" element={<Evaluator/>}/>
            {/* <Route element={<ProtectRoute hasInfo={Current== 0} />}> */}
            <Route path="/Sections" element={<Sections/>}/>
            <Route path="/PreviewPDF" element={<PreviewPDF />} />
            <Route path="/Review" element={<Review />} />
            <Route path="/Grade" element={<Grade />} />
            {/* </Route> */}
      </Routes>
    </UserContext.Provider>
    </SharedDataContext.Provider>
    </BrowserRouter>
  );
}

export default App;

