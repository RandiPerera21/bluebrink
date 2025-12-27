export default function SearchForm({ onSearch }) {
  return (
    <form className="search-form">
      <select>
        <option>Any</option>
        <option value="house">House</option>
        <option value="flat">Flat</option>
      </select>

      <input type="number" placeholder="Min Price (Rs. Millions)" />
      <input type="number" placeholder="Max Price (Rs. Millions)" />

      <input type="number" placeholder="Min Bedrooms" />
      <input type="number" placeholder="Max Bedrooms" />

      <input type="text" placeholder="Added Month (Ex: February)" />
      <input type="number" placeholder="Added Year (Ex: 2020)" />

      <input type="text" placeholder="Location" />

      <button type="submit">SEARCH</button>
    </form>
  );
}
