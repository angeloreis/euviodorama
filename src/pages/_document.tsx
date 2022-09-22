import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head title="Eu Vi o dorama">
          <link rel="shortcut icon" href="/img/favicon.png" />
          <link rel="apple-touch-icon" href="/img/favicon.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#ff8000" />
          <meta
            name="description"
            content="Doramas, spoilers, memes, notícias e qualquer coisa a mais"
          />
          <meta name="author" content="Andréa Pamplona" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
