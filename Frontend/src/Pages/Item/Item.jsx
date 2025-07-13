import "./item.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { MdLocalPhone, MdEmail } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import api from "../../config/axiosInterceptor.js";

function Item() {
  const { itemId } = useParams();
  const [storeItem, setStoreItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await api.get(`store/${itemId}`);
        setStoreItem(response.data);
      } catch (error) {
        console.error("Failed to fetch item", error);
      }
    };

    fetchItem();
  }, [itemId]);

  if (!storeItem) return <div>Loading...</div>;

  const featuresObject = Array.isArray(storeItem.features)
    ? storeItem.features[0]
    : {};

  const bundles =
    featuresObject?.RAM_ROM?.split("/").map((b) => b.trim()) || [];

  return (
    <div className="store-item-wrapper">
      <div className="item-content-row">
        <div className="item-img-container">
          <img
            src={storeItem.image || storeItem.imageUrl}
            alt="item"
            className="item-img"
          />
        </div>

        <div className="item-mobile-details">
          <h2>{storeItem.name}</h2>
          <p dangerouslySetInnerHTML={{ __html: storeItem.description }}></p>
          <p className="item-price">
            Lkr <span className="iten-price-amount">{storeItem.price}</span>
          </p>

          {bundles.length > 0 && (
            <span className="details-footer">
              <span className="bundle-container">
                <p>Bundle :</p>
                <p>Select your bundle</p>
              </span>
              <span>
                {bundles.map((bundle, index) => (
                  <p key={index} className="bundle-btn">
                    {bundle.split("+").map((part, i) => (
                      <p key={i}>{part}</p>
                    ))}
                  </p>
                ))}
              </span>
            </span>
          )}

          <div className="item-footer">
            <p>Available stock {storeItem.stock}</p>
          </div>
        </div>
      </div>

      <div className="item-features">
        {!Object.keys(featuresObject).includes("NO ") && (
          <div className="mobile-features">
            <h2>Features</h2>
            {Object.entries(featuresObject).map(([key, value], index) => (
              <span key={index} className="feature">
                <p>{key}</p>
                <p>:</p>
                {key === "Other" ? (
                  <p
                    style={{ marginLeft: "1rem" }}
                    dangerouslySetInnerHTML={{ __html: value }}
                  />
                ) : (
                  <p>{value}</p>
                )}
              </span>
            ))}
          </div>
        )}

        <div className="item-info" style={{ marginBottom: "2rem" }}>
          <h3>More Info</h3>
          <div className="item-info-content">
            <span>
              <MdLocalPhone />
              <p>070 3279293</p>
            </span>
            <span>
              <MdEmail />
              <p>starmobile@gmail.com</p>
            </span>
            <span>
              <ImLocation2 />
              <p>Henyaya, Maddekanda, Balangoda.</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
