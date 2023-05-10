import React from "react";
import "./App.css";

import {
  Header,
  Footer,
  Blog,
  Possiblity,
  Features,
  WhatGPT3,
} from "./containers/index";

import { Navbar, CTA, Brand } from "./components/index";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possiblity />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
