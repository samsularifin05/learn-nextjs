import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="initial-scale=1, minimum-scale=1, maximum-scale=5, user-scalable=yes, width=device-width"/>
          <link rel="icon" href="https://ecs7.tokopedia.net/assets-tokopedia-lite/prod/icon144.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument