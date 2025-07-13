import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Status from "./pages/Status/Status";
import Edit from "./pages/Edit/Edit";
import Home from "./pages/Home/Home";
import SignIn from "./components/SignIn/SignIn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";

function App() {
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Function to check if token is expired
  const isTokenExpired = (token) => {
    if (!token) return true;
    
    try {
      // Check if token is JWT format
      const parts = token.split('.');
      if (parts.length !== 3) return true;
      
      const payload = JSON.parse(atob(parts[1]));
      const currentTime = Date.now() / 1000;
      
      // Add 5 second buffer to prevent edge cases
      return payload.exp < (currentTime + 5);
    } catch (error) {
      console.error('Error checking token expiration:', error);
      return true;
    }
  };

  // Function to clear expired token
  const clearExpiredToken = () => {
    localStorage.removeItem("authToken");
    setToken(null);
    toast.error("Session expired. Please login again.");
  };

  useEffect(() => {
    const savedToken = localStorage.getItem("authToken");
    
    if (savedToken) {
      // Check if token is expired
      if (isTokenExpired(savedToken)) {
        clearExpiredToken();
      } else {
        setToken(savedToken);
      }
    }
    
    setIsLoading(false);

    // Listen for logout events from API interceptor
    const handleLogoutEvent = () => {
      setToken(null);
    };

    window.addEventListener('logout', handleLogoutEvent);
    
    return () => {
      window.removeEventListener('logout', handleLogoutEvent);
    };
  }, []);

  // Set up token expiration check interval
  useEffect(() => {
    if (token) {
      const interval = setInterval(() => {
        const currentToken = localStorage.getItem("authToken");
        if (!currentToken || isTokenExpired(currentToken)) {
          clearExpiredToken();
        }
      }, 10000); // Check every 10 seconds for more responsive handling

      return () => clearInterval(interval);
    }
  }, [token]);

  const handleLogin = (newToken) => {
    if (isTokenExpired(newToken)) {
      toast.error("Token is expired. Please login again.");
      return;
    }
    
    localStorage.setItem("authToken", newToken);
    setToken(newToken);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setToken(null);
  };

  // Show loading spinner while checking token
  if (isLoading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' 
      }}>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <>
      {!token ? (
        <SignIn onLogin={handleLogin} />
      ) : (
        <>
          <Navbar onLogout={handleLogout} />
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Add />} />
            <Route path="/list" element={<List />} />
            <Route path="/status" element={<Status />} />
            <Route path="/edit/:id" element={<Add />} />
            {/* Catch all route for 404 */}
            <Route path="*" element={<Home />} />
          </Routes>
        </>
      )}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;