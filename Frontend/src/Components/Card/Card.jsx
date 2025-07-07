import "./card.css";
import { useNavigate } from "react-router-dom";

function Card({ product }) {
  const navigate = useNavigate();

  return (
    <div
      className="card-container"
      onClick={() => navigate(`/store/${product._id}`)}
    >
      <div className="card-img-container">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="card-content">
        <span className="card-price">
          <p>
            Lkr <span className="price">{product.price}</span>
          </p>
          <p className="stock">
            Available Stock <span className="stock-count">{product.stock}</span>
          </p>
        </span>

        <span className="card-details">
          <h3>{product.name}</h3>
          <p dangerouslySetInnerHTML={{ __html: product.description }}></p>
        </span>
      </div>
    </div>
  );
}

export default Card;
