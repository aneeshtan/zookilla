import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from "styled-components";


export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });
      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />

          <meta charset="utf-8" />
          <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />

          <meta name="title" content="Name, Place, Animal, Thing | Online Multiplayer"></meta>
          <meta name="description"
            content="Play 'Name, Place, Animal, Thing' online with friends! The iconic game has moved from our school notebooks to the online world. You can add additional categories besides name, place, animal and thing. Play with up to 10 of your friends online, from anywhere in the world! Variations of the game are called 'Boy, Girl, Fruit, Flower' and 'Petit Bac' or 'Petit Baccalauréat' in French"></meta>
       </Head>
       <body style={{ backgroundColor: '#000', color: '#fff', margin: 0, padding: 0, fontFamily: 'Schoolbell, sans-serif' }}>
          <style jsx>{`
          body {
            padding: 0px;
            margin: 0px;
          }
        `}</style>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}