import "../styles/search.css";
import SearchForm from "../components/SearchForm";
import PropertyList from "../components/PropertyList";
import Favourites from "../components/Favourites";
import { useState, useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext";
import properties from "../data/properties.json";

export default function SearchPage() {
  const [filtered, setFiltered] = useState(properties);
  const { removeFavourite } = useContext(FavouritesContext);
  const [showRemoveZone, setShowRemoveZone] = useState(false);

  // Handle drag over remove zone
  const handleRemoveZoneDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  // Handle drop on remove zone
  const handleRemoveZoneDrop = (e) => {
    e.preventDefault();
    const favouriteId = e.dataTransfer.getData("favouriteId");
    if (favouriteId) {
      removeFavourite(Number(favouriteId));
    }
    setShowRemoveZone(false);
  };

  // Show remove zone when dragging from favourites
  const handlePageDragOver = (e) => {
    const favouriteId = e.dataTransfer.types.includes("favouriteid");
    if (favouriteId) {
      setShowRemoveZone(true);
    }
  };

  const handlePageDragEnd = () => {
    setShowRemoveZone(false);
  };

  return (
    <div 
      className="search-page"
      onDragOver={handlePageDragOver}
      onDragEnd={handlePageDragEnd}
      onDrop={handlePageDragEnd}
    >

      {/* REMOVE ZONE (shown when dragging from favourites) */}
      {showRemoveZone && (
        <div 
          className="remove-zone"
          onDragOver={handleRemoveZoneDragOver}
          onDrop={handleRemoveZoneDrop}
          onDragLeave={() => setShowRemoveZone(false)}
        >
          🗑️ Drop here to remove from favourites
        </div>
      )}

      {/* TITLE */}
      <h1 className="search-title">Search Your Dream Home</h1>

      {/* SEARCH FORM */}
      <SearchForm onSearch={setFiltered} properties={properties} />

      {/* MAIN CONTENT */}
      <div className="search-layout">

        {/* PROPERTIES */}
        <div className="results-section">
          <h2 className="section-heading">
            Search Results ({filtered.length} {filtered.length === 1 ? 'property' : 'properties'} found)
          </h2>
          
          {filtered.length === 0 ? (
            <p style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
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