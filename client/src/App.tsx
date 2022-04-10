import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AnimatePresence } from "framer-motion";
import NotFound from "./pages/NotFound";
import Features from "./pages/Features";
import About from "./pages/About";
import Today from "./pages/Today";
import Inbox from "./pages/Inbox";
import Weekly from "./pages/Weekly";
import Completed from "./pages/Completed";

function App() {
  return (
    <Router>
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/app/today" element={<Today />} />
          <Route path="/app/inbox" element={<Inbox />} />
          <Route path="/app/week" element={<Weekly />} />
          <Route path="/app/completed" element={<Completed />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
