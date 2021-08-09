export const addToFavorite = (item, key, isFavorite, setIsFavorite) => {
  setIsFavorite(!isFavorite);
  const list = JSON.parse(localStorage.getItem(key)) || [];
  list.push(item);
  localStorage.setItem(key, JSON.stringify(list));
};

export const removeFromFavorites = (item, key, isFavorite, setIsFavorite) => {
  setIsFavorite(!isFavorite);
  const list = JSON.parse(localStorage.getItem(key)) || [];
  const filter = list.filter((movie) => movie.title !== item.title);
  localStorage.setItem(key, JSON.stringify(filter));
};
