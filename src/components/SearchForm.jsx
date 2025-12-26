export default function SearchForm({ onSearch }) {
    const submit = e => {
      e.preventDefault();
      const f = e.target;
  
      onSearch({
        type: f.type.value,
        minPrice: Number(f.minPrice.value),
        maxPrice: Number(f.maxPrice.value),
        minBeds: Number(f.minBeds.value),
        maxBeds: Number(f.maxBeds.value),
        startDate: f.startDate.value,
        endDate: f.endDate.value,
        postcode: f.postcode.value
      });
    };
  
    return (
      <form className="search-form" onSubmit={submit}>
        <select name="type">
          <option value="any">Any Type</option>
          <option value="house">House</option>
          <option value="flat">Flat</option>
        </select>
  
        <input name="postcode" placeholder="Postcode (e.g. NW1)" />
        <input name="minPrice" type="number" placeholder="Min £" />
        <input name="maxPrice" type="number" placeholder="Max £" />
        <input name="minBeds" type="number" placeholder="Min Beds" />
        <input name="maxBeds" type="number" placeholder="Max Beds" />
        <input name="startDate" type="date" />
        <input name="endDate" type="date" />
  
        <button>Search</button>
      </form>
    );
  }
  