import { useState } from "react";
import properties from "../data/properties.json";
import { filterProperties } from "../utils/filterProperties";
import SearchForm from "../components/SearchForm";
import PropertyList from "../components/PropertyList";
import Favourites from "../components/Favourites";

export default function SearchPage() {
  const [results, setResults] = useState(properties);

  const handleSearch = criteria => {
    setResults(filterProperties(properties, criteria));
  };

  return (
    <div className="page">
      <header className="hero">
        <h1>Find your perfect home</h1>
        <p>Search properties across the UK</p>
      </header>

      <SearchForm onSearch={handleSearch} />

      <div className="layout">
        <div className="results">
          <PropertyList properties={results} />
        </div>

        <aside className="sidebar">
          <Favourites />
        </aside>
      </div>
    </div>
  );
}
