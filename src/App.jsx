import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./Container/Home/Home";
import Class from "../src/Container/Class/Class";
import Download from "../src/Container/Download/Download";
import Features from "../src/Container/Features/Features";
import Lifestyle from "../src/Container/Lifestyle/Lifestyle";
import Pricing from "../src/Container/Pricing/Pricing";
import Layout from "./Components/Layout/Layout";

// import './App.css';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="features" element={<Features />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="download" element={<Download />} />
          <Route path="class" element={<Class />} />
          <Route path="lifestyle" element={<Lifestyle />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
