import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from "styled-components";
import { signIn, signOut, useSession } from 'next-auth/react';

const handleSignIn = () => signIn('google');
const handleSignOut = () => signOut();
const { data: session } = useSession();
if (session) {
  // User is signed in
} else {
  // User is not signed in
}
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
          <meta name="theme-color" content="#000000" />

          <meta name="title" content="Zookilla games"></meta>
          <meta name="description"
            content="Play zookilla with your friends"></meta>
          <style>{`
            body {
              padding: 0;
              margin: 0;
              height: 100vh;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              color: #000;
              background-color: #DAF5F3;
              background-image: url(assets/stopthebus-L.jpg);
              background-size: cover;
              background-repeat: no-repeat;
              background-position: center center;
            }
            @media (max-width: 768px) {
              body {
                background-image: url(assets/stopthebus-M.jpg); /* Mobile background image */
              }
            }
          `}</style>
          
       </Head>
       
       <body >
          
        <Main />
        
          <NextScript />
        </body>
      </Html>
    );
  }
}