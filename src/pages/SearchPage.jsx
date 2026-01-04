import "../styles/search.css";
import SearchForm from "../components/SearchForm";
import PropertyList from "../components/PropertyList";
import Favourites from "../components/Favourites";
import { useState } from "react";
import properties from "../data/properties.json";

export default function SearchPage() {
  const [filtered, setFiltered] = useState(properties);

  return (
    <div className="search-page">

      {/* TITLE */}
      <h1 className="search-title">Search Your Dream Home</h1>

      {/* SEARCH FORM - Pass properties array */}
      <SearchForm onSearch={setFiltered} properties={properties} />

      {/* MAIN CONTENT */}
      <div className="search-layout">

        {/* PROPERTIES */}
        <div className="results-section">
          <h2 className="section-heading">
            Search Results ({filtered.length} properties found)
          </h2>
          
          {filtered.length === 0 ? (
            <p style={{ textAlign: 'center', padding: '2rem' }}>
              No properties match your search criteria. Try adjusting your filters.
            </p>
          ) : (
            <PropertyList properties={filtered} />
          )}
        </div>

        {/* FAVOURITES */}
        <aside className="favourites-section">
          <Favourites />
        </aside>

      </div>

    </div>
  );
}