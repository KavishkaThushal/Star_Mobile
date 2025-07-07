import "./Slider.css";
import { useNavigate } from "react-router-dom";

export default function Slider() {
  const navigate = useNavigate();
  return (
    <div className="home-slider">
      <p className="home-slider-title">
        Receive <span>instant</span> service
      </p>
      <p className="home-slider-text">
        We offer repair many different types of devices including
        computers,smartphones, tablets, gaming consoles etc..
      </p>
      <button className="home-slider-btn" onClick={() => navigate("/services")}>
        view services
      </button>
    </div>
  );
}
