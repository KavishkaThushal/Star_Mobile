import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"
import { Routes, Route } from "react-router-dom"
import Add from "./pages/Add/Add"
import List from "./pages/List/List"
import Status from "./pages/Status/Status"
import Edit from "./pages/Edit/Edit"
import Home from "./pages/Home/Home"
import SignIn from "./components/SignIn/SignIn"

function App() {
  const Token=''



  return (
    <>
    {!Token? <SignIn/>:<>
      <Navbar/>
    <Sidebar/>
    <Routes>
    {/* <Route path="/" element={<SignIn/>}/> */}
      <Route path="/" element={<Home/>}/>
      <Route path="/add" element={<Add/>}/>
      <Route path="/list" element={<List/>}/>
      <Route path="/status" element={<Status/>}/>
      <Route path="/edit" element={<Edit/>}/>
    </Routes>
    </>
    
}
    </>
      
  )
}

export default App
