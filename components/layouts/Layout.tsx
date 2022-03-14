import Head from 'next/head';
import { FC } from 'react';
import { Navbar } from './ui/Navbar';

interface Props {
  title?: string
}

export const Layout : FC<Props> = ({children, title}) => {
  return (
    <>
        <Head>
            <title>{title || 'PokemonApp'}</title>
            <meta name='author' content='Patricio Bottino'/>
            <meta name='description' content='Información sobre el pokemon 1'/>
            <meta name='keywords' content='1, pokemon, pokedex'/>
        </Head>
        <Navbar/>

        <main style={{
          padding: '0px 20px'
        }}>
            {children}
        </main>
    </>
  )
}
