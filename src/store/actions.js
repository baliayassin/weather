export const addToFavorite = (name) => ({
    type:'ADD_TO_FAVORITE',
    name,
});

export const removeFromFavorites = (name) => ({
    type: 'REMOVE_FROM_FAVORITES',
    name,
  });
