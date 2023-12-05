import Head from 'next/head'


import Landing from '../components/Landing';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Stop the Bus Online Multiplayer Game | Zookilla</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1062467239332682"
     crossorigin="anonymous"></script>
        <link rel="icon" href="https://zookilla.com/favicon.ico" />

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-JV5XW2B8KN"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JV5XW2B8KN');
          `,
        }}>
        </script>

        
      </Head>

      <main>
        <Landing />
      </main>
    </div>
  )
}
