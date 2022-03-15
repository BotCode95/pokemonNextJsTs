import { Layout } from '../../components/layouts/Layout';
import { NoFavorites } from '../../components/layouts/ui/NoFavorites';
import { useState, useEffect } from 'react';
import { localFavorites } from '../../utils';
import { FavoritesPokemons } from '../../components/layouts/pokemon';

const FavoritesPage = () => {

  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemons())
  }, [])
  
  return (
    <Layout title='Favorites'>
      {
        favoritesPokemons.length === 0  
        ? <NoFavorites/> 
        : <FavoritesPokemons pokemons={favoritesPokemons}/>
      }
    </Layout>
  )
}

export default FavoritesPage
