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
import Trash from "./pages/Trash";
import Project from "./pages/Project";
import Tags from "./pages/Tags";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./routes/PrivateRoute";
import AuthPrivateRoute from "./routes/AuthPrivateRoute";

function App() {
  return (
    <Router>
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route
            path="/"
            element={
              <AuthPrivateRoute>
                <Home />
              </AuthPrivateRoute>
            }
          />
          <Route
            path="/login"
            element={
              <AuthPrivateRoute>
                <Login />
              </AuthPrivateRoute>
            }
          />
          <Route
            path="/register"
            element={
              <AuthPrivateRoute>
                <Register />
              </AuthPrivateRoute>
            }
          />
          <Route
            path="/features"
            element={
              <AuthPrivateRoute>
                <Features />
              </AuthPrivateRoute>
            }
          />
          <Route
            path="/about"
            element={
              <AuthPrivateRoute>
                <About />
              </AuthPrivateRoute>
            }
          />
          <Route
            path="/app/today"
            element={
              <PrivateRoute>
                <Today />
              </PrivateRoute>
            }
          />
          <Route
            path="/app/inbox"
            element={
              <PrivateRoute>
                <Inbox />
              </PrivateRoute>
            }
          />
          <Route
            path="/app/week"
            element={
              <PrivateRoute>
                <Weekly />
              </PrivateRoute>
            }
          />
          <Route
            path="/app/completed"
            element={
              <PrivateRoute>
                <Completed />
              </PrivateRoute>
            }
          />
          <Route
            path="/app/trash"
            element={
              <PrivateRoute>
                <Trash />
              </PrivateRoute>
            }
          />
          <Route
            path="/project/:projectId"
            element={
              <PrivateRoute>
                <Project />
              </PrivateRoute>
            }
          />
          <Route
            path="/tag/:tagId"
            element={
              <PrivateRoute>
                <Tags />
              </PrivateRoute>
            }
          />
        </Routes>
      </AnimatePresence>
      <ToastContainer />
    </Router>
  );
}

export default App;
