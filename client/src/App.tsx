import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AnimatePresence } from "framer-motion";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
