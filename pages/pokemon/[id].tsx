import { useRouter } from 'next/router'
import React from 'react'
import { Layout } from '../../components/layouts'

 const PokemonPage = () => {
  const router = useRouter();
  return (
    <Layout title='Pokemon ID'>
      <h1>PokemonPage</h1>
    </Layout>
  )
}

export default PokemonPage