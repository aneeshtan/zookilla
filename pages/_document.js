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
           <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />

          <meta charset="utf-8" />
          <link rel="icon" href="./favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />

          <meta name="title" content="Zookilla games"></meta>
          <meta name="description"
            content="Play zookilla with your friends"></meta>
       </Head>
       
       <body style={{
          padding: 0,
          margin: 0,
          backgroundImage: "url('/assets/stopthebus-L.jpg')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#000',
          backgroundColor: '#DAF5F3'
        }}>
          
        <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}