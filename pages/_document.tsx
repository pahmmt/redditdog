import { GoogleAnalytics } from '@next/third-parties/google'
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
        <GoogleAnalytics gaId="G-JV7SFHEDEZ" />
      </body>
    </Html>
  )
}
