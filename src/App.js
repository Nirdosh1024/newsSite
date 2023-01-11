import React from "react";

// components
import Home from "./components/Home";
import News from "./components/News";

// router
import { BrowserRouter, Routes, Route } from "react-router-dom";


// styles
import { GlobalStyles } from "./GlobalStyles";

const App = () => {
  return <>
  <GlobalStyles />
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="news" element={<News />} />
    </Routes>
  </BrowserRouter>
  </>
}

export default App;