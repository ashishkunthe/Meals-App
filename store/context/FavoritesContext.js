import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoritesMealIds, setFavoritesMealIds] = useState([]);

  function addFavorite(id) {
    setFavoritesMealIds((currentFavId) => [...currentFavId, id]);
  }

  function removeFavorite(id) {
    setFavoritesMealIds((currentFavId) =>
      currentFavId.filter((mealId) => mealId !== id)
    );
  }

  const values = {
    ids: favoritesMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={values}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
