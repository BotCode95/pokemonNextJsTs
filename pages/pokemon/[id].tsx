import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { useRouter } from 'next/router'
import { pokeApi } from '../../api'
import { Layout } from '../../components/layouts'
import { Pokemon, PokemonListResponse } from '../../interfaces'

interface Props {
  pokemon: Pokemon
}

 const PokemonPage : NextPage<Props> = ({pokemon}) => {
  
  return (
    <Layout title='Pokemon ID'>
      <h1>{pokemon.id} - {pokemon.name}</h1>
    </Layout>
  )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {
  //const { data } = await  // your fetch function here 
  const pokemonsPage = [...Array(151)].map((value, index) => `${index +1}`)
  return {
    paths: pokemonsPage.map(id => ({
        params: {
          id
        }

    })),
    fallback: false
  }
}
export const getStaticProps : GetStaticProps = async({params}) => {
  const {id} = params as {id: string}
  const {data} = await pokeApi.get<Pokemon>(`/pokemon/${id}`);
  return {
    props: {
      pokemon: data,
    }
  }
}

export default PokemonPage