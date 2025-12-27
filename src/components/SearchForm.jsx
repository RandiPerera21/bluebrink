export default function SearchForm({ onSearch }) {
    const submit = e => {
      e.preventDefault();
      const f = e.target;
  
      onSearch({
        type: f.type.value,
        minPrice: f.minPrice.value,
        maxPrice: f.maxPrice.value,
        minBeds: f.minBeds.value,
        maxBeds: f.maxBeds.value,
        month: f.startDate.value,
        year: f.endDate.value,
        location: f.postcode.value
      });
    };
  
    return (
      <section className="search-section">
        <form className="search-card" onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Property Type</label>
            <select name="type">
              <option value="any">Any</option>
              <option value="house">House</option>
              <option value="flat">Flat</option>
            </select>
          </div>
  
          <input name="minPrice" placeholder="Min Price in Millions (Rs.)" />
          <input name="maxPrice" placeholder="Max Price in Millions (Rs.)" />
          
          <input name="minBeds" placeholder="Min Bedrooms" />
          <input name="maxBeds" placeholder="Max Bedrooms" />

          <input name="month" placeholder="Added Month (Ex: February)" />
          <input name="year" placeholder="Added Year (Ex: 2020)" />

          <input name="location" placeholder="Location" />
  
          <button className="search-btn">Search</button>
      </form>
    </section>
    );
  }
  