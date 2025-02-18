import '@/styles/globals.css'

import { GoogleAnalytics } from '@next/third-parties/google'
import type { AppProps } from 'next/app'

import { ThemeProvider } from '@/components/theme-provider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <Component {...pageProps} />
      <GoogleAnalytics gaId="G-JV7SFHEDEZ" />
    </ThemeProvider>
  )
}
