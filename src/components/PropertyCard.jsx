import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext";

export default function PropertyCard({ property }) {
  const { addFavourite } = useContext(FavouritesContext);

  return (
    <div className="property-card">
      <img
        src={`/images/properties/p${property.id}/1.jpg`}
        alt={property.location}
      />

      <div className="property-body">
        <p className="price">Rs. {property.price} millions</p>

        {/* SAFE DESCRIPTION */}
        <p className="short-desc">
          {property.shortDesc}  
        </p>
        

        <div className="property-actions">
          <Link to={`/property/${property.id}`} className="details-btn">
            VIEW DETAILS
          </Link>

          <button
            className="fav-btn"
            onClick={() => addFavourite(property)}
          >
            ♡
          </button>
        </div>
      </div>
    </div>
    
  );
}
