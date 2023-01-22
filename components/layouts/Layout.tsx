import React, { FC, ReactNode } from 'react'
import Head from 'next/head'
import { NavBar } from '../ui'

interface Props {
  children: ReactNode
  title?: string
}

const origin = (typeof window === 'undefined' ? '' : window.location.origin);

// type Props = PropsWithChildren<{title?: string}>;

export const Layout:FC<Props> = ({ children, title }) => {

  return (
    <>
      <Head>
        <title>{ title || 'PokemonApp' }</title>
        <meta name="author" content="Alejandro Ramos" />
        <meta name="description" content={`Información sobre el pokemón ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        
        <meta property="og:title" content={`Información sobre el pokemón ${title}`} />
        <meta property="og:description" content={`Esta es la páginas sobre ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <NavBar />

      <main style={{
        padding: '0px 20px'
      }}>
        { children }
      </main>

    </>
  )
}
