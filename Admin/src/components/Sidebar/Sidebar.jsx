import { AiOutlineFileAdd } from "react-icons/ai";
import { FaListCheck } from "react-icons/fa6";
import { GrStatusInfo } from "react-icons/gr";
import "./sidebar.css";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate=useNavigate()
  return (
    <div className="sidebar-container">
        <AiOutlineFileAdd onClick={()=>(navigate('/add'))}/>
        <FaListCheck onClick={()=>(navigate('/list'))} />
        <GrStatusInfo onClick={()=>(navigate('/status'))}/>
    </div>
  )
}

export default Sidebar