import Document, { Html, Head, Main, NextScript } from "next/document";

class Doc extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ru">
        <Head>
          <link rel="shortcut icon" href="/favicon.svg" />
          <meta
            property="og:image"
            content="https://wlf-36.ru/logo.webp"
          />
          <script src="http://localhost:8097"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default Doc;
