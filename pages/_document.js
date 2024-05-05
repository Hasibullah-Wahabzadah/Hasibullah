import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="fa">
        <Head>
        <title> Hasibullah Wahabzdeh </title>
          <link rel="icon" href="/vs1.png" />
          {/* دیگر تنظیمات هدر */}
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
