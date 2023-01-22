const toggleFavorite = (id: number) => {
  console.log('toggleFavorite llamado');

  let favorites:number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  if (favorites.includes(id)) {
    favorites = favorites.filter(pokeId => pokeId !== id);
  } else {
    favorites.push(id)
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
  
}

const existsInFavorites = (id: number):boolean => {

  // Al ejecutarse en el momento de hacer el build rompia ya que window no esta en servidor
  // Al cambiar la llamada y ponerla dentro de un useEffect eso ya no pasa asi que cancele esta linea
  // if (typeof window === 'undefined') return false;

  const favorites:number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  return favorites.includes(id);
}

const pokemons = ():number[] => {
  return JSON.parse(localStorage.getItem('favorites') || '[]');
}

const functions = {
  toggleFavorite,
  existsInFavorites,
  pokemons
}
export default functions;