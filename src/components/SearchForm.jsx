import { useState } from "react";

export default function SearchForm({ onSearch, properties }) {
  const [criteria, setCriteria] = useState({
    type: "",
    minPrice: "",
    maxPrice: "",
    minBedrooms: "",
    maxBedrooms: "",
    month: "",
    year: "",
    postcode: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCriteria(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Filter properties based on all criteria
    const filtered = properties.filter(property => {
      // Type filter (house/flat/any)
      if (criteria.type && criteria.type !== "any") {
        if (property.type.toLowerCase() !== criteria.type.toLowerCase()) {
          return false;
        }
      }

      // Min Price filter
      if (criteria.minPrice && property.price < Number(criteria.minPrice)) {
        return false;
      }

      // Max Price filter
      if (criteria.maxPrice && property.price > Number(criteria.maxPrice)) {
        return false;
      }

      // Min Bedrooms filter
      if (criteria.minBedrooms && property.bedrooms < Number(criteria.minBedrooms)) {
        return false;
      }

      // Max Bedrooms filter
      if (criteria.maxBedrooms && property.bedrooms > Number(criteria.maxBedrooms)) {
        return false;
      }

      // Date Added filter (month and year)
      if (criteria.month || criteria.year) {
        const propertyDate = new Date(property.dateAdded);
        const propertyMonth = propertyDate.toLocaleString('default', { month: 'long' });
        const propertyYear = propertyDate.getFullYear();

        if (criteria.month && propertyMonth.toLowerCase() !== criteria.month.toLowerCase()) {
          return false;
        }

        if (criteria.year && propertyYear !== Number(criteria.year)) {
          return false;
        }
      }

      // Postcode filter (first part matches)
      if (criteria.postcode) {
        const searchPostcode = criteria.postcode.toLowerCase().trim();
        const propertyPostcode = property.postcode.toLowerCase().trim();
        
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
      type: "",
      minPrice: "",
      maxPrice: "",
      minBedrooms: "",
      maxBedrooms: "",
      month: "",
      year: "",
      postcode: ""
    });
    onSearch(properties); // Show all properties
  };

  return (
    <div className="search-form">
      <select 
        name="type" 
        value={criteria.type} 
        onChange={handleChange}
      >
        <option value="">Any Type</option>
        <option value="house">House</option>
        <option value="flat">Flat</option>
      </select>

      <input 
        type="number" 
        name="minPrice"
        value={criteria.minPrice}
        onChange={handleChange}
        placeholder="Min Price (Rs. Millions)" 
      />
      
      <input 
        type="number" 
        name="maxPrice"
        value={criteria.maxPrice}
        onChange={handleChange}
        placeholder="Max Price (Rs. Millions)" 
      />

      <input 
        type="number" 
        name="minBedrooms"
        value={criteria.minBedrooms}
        onChange={handleChange}
        placeholder="Min Bedrooms" 
      />
      
      <input 
        type="number" 
        name="maxBedrooms"
        value={criteria.maxBedrooms}
        onChange={handleChange}
        placeholder="Max Bedrooms" 
      />

      <input 
        type="text" 
        name="month"
        value={criteria.month}
        onChange={handleChange}
        placeholder="Added Month (Ex: February)" 
      />
      
      <input 
        type="number" 
        name="year"
        value={criteria.year}
        onChange={handleChange}
        placeholder="Added Year (Ex: 2025)" 
      />

      <input 
        type="text" 
        name="postcode"
        value={criteria.postcode}
        onChange={handleChange}
        placeholder="Postcode (Ex: Colombo, Kandy)" 
      />

      <button type="button" onClick={handleSubmit}>SEARCH</button>
      <button type="button" onClick={handleReset}>RESET</button>
    </div>
  );
}