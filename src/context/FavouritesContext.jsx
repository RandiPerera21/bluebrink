import { createContext, useState } from "react";

export const FavouritesContext = createContext();

export function FavouritesProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  // Add property to favourites
  const addFavourite = (property) => {
    setFavourites(prev =>
      prev.find(p => p.id === property.id)
        ? prev
        : [...prev, property]
    );
  };

  // Remove single property from favourites
  const removeFavourite = (id) => {
    setFavourites(prev => prev.filter(p => p.id !== id));
  };

  // Clear all favourites
  const clearFavourites = () => {
    setFavourites([]);
  };

  // Check if property is in favourites
  const isFavourite = (id) => {
    return favourites.some(p => p.id === id);
  };

  return (
    <FavouritesContext.Provider
      value={{ 
        favourites, 
        addFavourite, 
        removeFavourite, 
        clearFavourites,
        isFavourite 
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
}