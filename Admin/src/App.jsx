import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Status from "./pages/Status/Status";
import Edit from "./pages/Edit/Edit";
import Home from "./pages/Home/Home";
import SignIn from "./components/SignIn/SignIn";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
    //const token = localStorage.getItem('authToken');
      const [token, setToken] = useState(null);

  useEffect(() => {
    const savedToken = localStorage.getItem("authToken");
    setToken(savedToken);
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem("authToken", token);
    setToken(token);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setToken(null);
  };

  return (
      <>
        {!token ? (
            <SignIn onLogin={handleLogin}/>
        ) : (
            <>
              <Navbar onLogout={handleLogout}/>
              <Sidebar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<Add />} />
                <Route path="/list" element={<List />} />
                <Route path="/status" element={<Status />} />
                <Route path="/edit/:id" element={<Add />} />
              </Routes>
            </>
        )}

        {/* This should be outside of <Routes> */}
        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            //closeOnClick
            pauseOnHover
            draggable
            theme="colored"
        />
      </>
  );
}

export default App;
