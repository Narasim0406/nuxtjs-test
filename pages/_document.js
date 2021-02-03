import { Fragment } from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
// import FavIcon from '../assets/image/favicon.png'

// import { GA_TRACKING_ID } from '../lib/gtag'

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    // const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    const initialProps = await Document.getInitialProps(ctx)

    // Check if in production
    const isProduction = process.env.NODE_ENV === 'production'

    return {
      ...initialProps,
      isProduction,
    }
  }

  render() {
    const { isProduction } = this.props

    return (
      <html lang="en">
        <Head>
          {/* <link rel="shortcut icon" type="image/x-icon" href={FavIcon} /> */}

          {/* We only want to add the scripts if in production */}
          {isProduction && (
            <Fragment>
              {/* Global Site Tag (gtag.js) - Google Analytics */}
              {/* <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              /> */}
              {/* Global site tag (gtag.js) - Google Analytics  */}
              <script async src="https://www.googletagmanager.com/gtag/js?id=UA-37392759-3"></script>
              <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments)}
                gtag('js', new Date());

                gtag('config', 'UA-37392759-3');
              </script>
            </Fragment>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}