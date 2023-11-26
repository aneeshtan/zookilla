import Head from 'next/head'


import Landing from '../components/Landing';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Zookilla! | Online Multiplayer Game</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1062467239332682"
     crossorigin="anonymous"></script>
        <link rel="icon" href="https://zookilla.com/favicon.ico" />
      </Head>

      <main>
        <Landing />
      </main>
    </div>
  )
}
