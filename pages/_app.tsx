import { Inter } from 'next/font/google'
import '../src/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const inter = Inter({
  subsets: ['latin'],
  preload: true,
  adjustFontFallback: true
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <main className={inter.className}>
          <Component {...pageProps} />
        </main>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
