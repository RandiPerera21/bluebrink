import { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import Slider from "rc-slider";
import "react-datepicker/dist/react-datepicker.css";
import "rc-slider/assets/index.css";

export default function SearchForm({ onSearch, properties }) {
  const [criteria, setCriteria] = useState({
    type: null,
    priceRange: [0, 100],
    bedroomRange: [1, 10],
    dateAdded: null,
    postcode: null
  });

  // Options
  const typeOptions = [
    { value: "any", label: "Any Type" },
    { value: "house", label: "House" },
    { value: "flat", label: "Flat" }
  ];

  const postcodeOptions = [
    { value: "co5", label: "CO5 - Colombo" },
    { value: "ky1", label: "KY1 - Kandy" },
    { value: "gp1", label: "GP1 - Gampaha" },
    { value: "ng1", label: "NG1 - Negombo" },
    { value: "ne1", label: "NE1 - Nuwara Eliya" },
    { value: "bt1", label: "BT1 - Batticaloa" },
    { value: "mt1", label: "MT1 - Matara" }
  ];
  const handleSubmit = () => {
    const filtered = properties.filter(property => {
      // Type filter
      if (criteria.type && criteria.type.value !== "any") {
        if (property.type.toLowerCase() !== criteria.type.value.toLowerCase()) {
          return false;
        }
      }

      // Price range
      if (property.price < criteria.priceRange[0] || property.price > criteria.priceRange[1]) {
        return false;
      }

      // Bedroom range 
      if (property.bedrooms < criteria.bedroomRange[0] || property.bedrooms > criteria.bedroomRange[1]) {
        return false;
      }

      // Date filter
      if (criteria.dateAdded) {
        const propertyDate = new Date(property.dateAdded);
        if (propertyDate < criteria.dateAdded) {
          return false;
        }
      }

      // Postcode
      if (criteria.postcode) {
        const searchPostcode = criteria.postcode.value.toLowerCase();
        const propertyPostcode = property.postcode.toLowerCase();
        if (!propertyPostcode.includes(searchPostcode)) {
          return false;
        }
      }

      return true;
    });

    onSearch(filtered);
  };

  const handleReset = () => {
    setCriteria({
      type: null,
      priceRange: [0, 100],
      bedroomRange: [1, 10],
      dateAdded: null,
      postcode: null
    });
    onSearch(properties);
  };

  return (
    <div className="search-form-enhanced">
      {/* Property type */}
      <div className="form-group">
        <label>Property Type</label>
        <Select
          options={typeOptions}
          value={criteria.type}
          onChange={(selected) => setCriteria(prev => ({ ...prev, type: selected }))}
          placeholder="Select property type..."
          isClearable
        />
      </div>

      {/* Price Range - RC Slider */}
      <div className="form-group">
        <label>Price Range: Rs. {criteria.priceRange[0]}M - Rs. {criteria.priceRange[1]}M</label>
        <Slider
          range
          min={0}
          max={100}
          value={criteria.priceRange}
          onChange={(value) => setCriteria(prev => ({ ...prev, priceRange: value }))}
          marks={{ 0: '0M', 25: '25M', 50: '50M', 75: '75M', 100: '100M' }}
        />
      </div>

      {/* Bedroom Range - RC Slider */}
      <div className="form-group">
        <label>Bedrooms: {criteria.bedroomRange[0]} - {criteria.bedroomRange[1]}</label>
        <Slider
          range
          min={1}
          max={10}
          value={criteria.bedroomRange}
          onChange={(value) => setCriteria(prev => ({ ...prev, bedroomRange: value }))}
          marks={{ 1: '1', 3: '3', 5: '5', 7: '7', 10: '10' }}
        />
      </div>

      {/* Date Added - React DatePicker */}
      <div className="form-group">
        <label>Date Added After</label>
        <DatePicker
          selected={criteria.dateAdded}
          onChange={(date) => setCriteria(prev => ({ ...prev, dateAdded: date }))}
          placeholderText="Select date..."
          dateFormat="dd/MM/yyyy"
          isClearable
        />
      </div>

      {/* Postcode */}
      <div className="form-group">
        <label>Postcode Area</label>
        <Select
          options={postcodeOptions}
          value={criteria.postcode}
          onChange={(selected) => setCriteria(prev => ({ ...prev, postcode: selected }))}
          placeholder="Select postcode area..."
          isClearable
        />
      </div>

      <div className="button-group">
        <button type="button" onClick={handleSubmit} className="btn-search">
          SEARCH
        </button>
        <button type="button" onClick={handleReset} className="btn-reset">
          RESET
        </button>
      </div>
    </div>
  );
}