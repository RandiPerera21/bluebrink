import { useParams, Link } from "react-router-dom";
import "../styles/property.css";
import { useState } from "react";
import properties from "../data/properties.json";

export default function PropertyPage() {
  const { id } = useParams();
  const property = properties.find(p => p.id === id || p.id === Number(id));
  if (!property) {
    return <h2 style={{ textAlign: "center" }}>Property not found</h2>;
  }  
  const [tab, setTab] = useState("description");

  return (
    <div className="property-page">

      {/* BACK */}
      <Link to="/search" className="back-btn">
        ← Back to Search
      </Link>

      {/* TITLE */}
      <h1 className="property-title">{property.type}</h1>

      {/* IMAGES */}
      <div className="gallery">
        <img
          className="main-img"
          src={`/images/properties/p${property.id}/1.jpg`}
          alt=""
        />

        <div className="thumbs">
          {[2, 3, 4, 5, 6, 7].map(i => (
            <img
              key={i}
              src={`/images/properties/p${property.id}/${i}.jpg`}
              alt=""
            />
          ))}
        </div>
      </div>

      {/* DETAILS */}
      <div className="details-box">
        <div>Price <span>Rs. {property.price} million</span></div>
        <div>Bedrooms <span>{property.bedrooms}</span></div>
        <div>Bathrooms <span>{property.bathrooms}</span></div>
        <div>Area <span>{property.area}</span></div>
        <div>Location <span>{property.location}</span></div>
      </div>

      {/* TABS */}
      <div className="tabs">
        <button
          className={tab === "description" ? "active" : ""}
          onClick={() => setTab("description")}
        >
          Description
        </button>
        <button
          className={tab === "floor" ? "active" : ""}
          onClick={() => setTab("floor")}
        >
          Floor Plan
        </button>
        <button
          className={tab === "map" ? "active" : ""}
          onClick={() => setTab("map")}
        >
          Map
        </button>
      </div>

      {/* TAB CONTENT */}
      <div className="tab-content">
      {tab === "description" && (
        <p>{property.longDesc || "No description available."}</p>
      )}


        {tab === "floor" && (
          <img
            className="floor-plan"
            src={`/images/properties/p${property.id}/${property.floorPlan}`}
            alt="Floor Plan"
          />
        )}

        {tab === "map" && (
          <iframe
            title="map"
            src={property.map}
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        )}
      </div>

    </div>
  );
}
