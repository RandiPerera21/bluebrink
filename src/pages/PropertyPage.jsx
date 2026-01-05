import { useParams, Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../styles/property.css";
import properties from "../data/properties.json";

export default function PropertyPage() {
  const { id } = useParams();
  const property = properties.find(p => p.id === id || p.id === Number(id));
  
  if (!property) {
    return <h2 style={{ textAlign: "center" }}>Property not found</h2>;
  }

  return (
    <div className="property-page">

      {/* Back to search */}
      <Link to="/search" className="back-btn">
        ← Back to Search
      </Link>

      {/* Titel */}
      <h1 className="property-title">{property.type}</h1>

      {/* Images gallery */}
      <div className="gallery">
      <img
        className="main-img"
        src={`${import.meta.env.BASE_URL}images/properties/p${property.id}/1.jpg`}
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

      {/* Property Details */}
      <div className="details-box">
        <div>Price <span>Rs. {property.price} million</span></div>
        <div>Bedrooms <span>{property.bedrooms}</span></div>
        <div>Bathrooms <span>{property.bathrooms}</span></div>
        <div>Area <span>{property.area}</span></div>
        <div>Location <span>{property.location}</span></div>
        <div>Postcode <span>{property.postcode}</span></div>
      </div>

      {/* React tabs */}
      <Tabs className="property-tabs">
        <TabList>
          <Tab>Details</Tab>
          <Tab>Floor Plan</Tab>
          <Tab>Map</Tab>
        </TabList>

        {/*Description */}
        <TabPanel>
          <div className="tab-content">
            <h3>Property Details</h3>
            <p>{property.longDesc}</p>
          </div>
        </TabPanel>

        {/* Floor Plan */}
        <TabPanel>
          <div className="tab-content">
            <h3>Floor Plan</h3>
            <img
              className="floor-plan"
              src={`${import.meta.env.BASE_URL}images/properties/p${property.id}/${property.floorPlan}`}
              alt="Floor Plan"
            />
          </div>
        </TabPanel>

        {/* Google Map */}
        <TabPanel>
          <div className="tab-content">
            <h3>Location Map</h3>
            <iframe
              title="map"
              src={property.map}
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '8px' }}
              loading="lazy"
            ></iframe>
          </div>
        </TabPanel>
      </Tabs>

    </div>
  );
}