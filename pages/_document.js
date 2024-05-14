import Document, { Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="eh">
        <Head>
          <title> Hasibullah Wahabzdeh </title>
          <link rel="icon" href="/v.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
