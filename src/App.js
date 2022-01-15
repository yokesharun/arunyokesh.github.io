import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Nav from "./Nav";
import BottomNav from "./BottomNav";

const App = () => {
  return (
    <div className="container">
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
      <BottomNav />
    </div>
  );
};

export default App;
