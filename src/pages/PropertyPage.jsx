import { useParams } from "react-router-dom";
import {useState} from "react";
import data from "../data/properties.json";

export default function PropertyPage() {
  const { id } = useParams();
  const property = properties.find(p => p.id === Number(id));
  const [activeTab, setActiveTab] = useState("description");

  if (!property) return <p>Property not found</p>

  return (
    <div className="property-page">
      <h1>{property.location}</h1>
      <p className="price">£{property.price.toLocaleString()}</p>
      <img
        src={`/images/properties/p${property.id}/1.jpg`}
        alt="Property"
        className="hero-img"
      />

    <div className="tabs">
        <button
          className={activeTab === "description" ? "active" : ""}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>

        <button
          className={activeTab === "floor" ? "active" : ""}
          onClick={() => setActiveTab("floor")}
        >
          Floor Plan
        </button>

        <button
          className={activeTab === "map" ? "active" : ""}
          onClick={() => setActiveTab("map")}
        >
          Map
        </button>
      </div>

      {/* TAB CONTENT */}
      <div className="tab-content">
        {activeTab === "description" && (
          <>
            <h3>Property Details</h3>
            <p>{property.longDesc}</p>
            <p>
              <strong>Bedrooms:</strong> {property.bedrooms}
            </p>
            <p>
              <strong>Type:</strong> {property.type}
            </p>
          </>
        )}

        {activeTab === "floor" && (
          <img
            src={`/images/properties/p${property.id}/${property.floorPlan}`}
            alt="Floor Plan"
            className="floor-plan"
          />
        )}

        {activeTab === "map" && (
          <iframe
            src={property.map}
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Map"
          ></iframe>
        )}
      </div>
    </div>
  );
}

      
