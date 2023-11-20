import Head from 'next/head'


import Landing from '../components/Landing';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Zookilla! | Online Multiplayer Game</title>
        <link rel="icon" href="https://zookilla.com/favicon.ico" />
      </Head>

      <main>
        <Landing />
      </main>
    </div>
  )
}
