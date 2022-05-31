import type { NextPage } from 'next'
import Head from 'next/head'
import { Saber } from '../components/Saber'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Build a lightsaber</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ 
        display: "flex", 
        justifyContent: "center", 
        minHeight: "100vh", 
        alignItems: "center",
        backgroundColor: "#353B3C",	
      }}>
        <Saber />
      </main>
    </div>
  )
}

export default Home
