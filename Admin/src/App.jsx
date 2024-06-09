import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"
import { Routes, Route } from "react-router-dom"
import Add from "./pages/Add/Add"
import List from "./pages/List/List"
import Status from "./pages/Status/Status"
import Edit from "./pages/Edit/Edit"

function App() {
  

  return (
    <>
    <Navbar/>
    <Sidebar/>
    <Routes>
      <Route path="/add" element={<Add/>}/>
      <Route path="/list" element={<List/>}/>
      <Route path="/status" element={<Status/>}/>
      <Route path="/edit" element={<Edit/>}/>
    </Routes>
    </>
      
  )
}

export default App
