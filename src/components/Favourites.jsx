import { useContext, useState } from "react";
import { FavouritesContext } from "../context/FavouritesContext";

export default function Favourites() {
  const { favourites, addFavourite, removeFavourite, clearFavourites } =
    useContext(FavouritesContext);
  
  const [isDragOver, setIsDragOver] = useState(false);

  // Handle drag over
  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  // Handle drop - Add to favourites
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const propertyData = e.dataTransfer.getData("property");
    if (propertyData) {
      const property = JSON.parse(propertyData);
      addFavourite(property);
    }
  };

  // Handle drag start from favourites (for removal by dragging out)
  const handleFavDragStart = (e, property) => {
    e.dataTransfer.setData("favouriteId", property.id.toString());
    e.dataTransfer.effectAllowed = "move";
    e.currentTarget.style.opacity = "0.5";
  };

  const handleFavDragEnd = (e) => {
    e.currentTarget.style.opacity = "1";
  };

  return (
    <div 
      className={`favourites-box ${isDragOver ? 'drag-over' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <h3>Favourites ({favourites.length})</h3>
      
      {isDragOver && (
        <div className="drop-hint">
          ✨ Drop here to add to favourites
        </div>
      )}

      {favourites.length > 0 && (
        <button className="clear-btn" onClick={clearFavourites}>
          CLEAR ALL
        </button>
      )}

      {favourites.length === 0 && (
        <p className="empty-message">
          No favourites yet. Drag properties here or click the ♡ button.
        </p>
      )}

      {favourites.map(p => (
        <div 
          key={p.id} 
          className="fav-card"
          draggable="true"
          onDragStart={(e) => handleFavDragStart(e, p)}
          onDragEnd={handleFavDragEnd}
        >
          <img
            src={`${import.meta.env.BASE_URL}images/properties/p${p.id}/1.jpg`}
            alt={p.location}
          />

          <div className="fav-info">
            <p className="fav-price">Rs. {p.price}M</p>
            <p className="fav-location">{p.location}</p>
            <button 
              onClick={() => removeFavourite(p.id)}
              className="remove-btn"
              title="Remove from favourites"
            >
              🗑️
            </button>

          </div>
        </div>
      ))}
    </div>
  );
}