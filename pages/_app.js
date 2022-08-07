import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { store } from '../store'
import { Provider } from 'react-redux'
import Header from '../components/header'
import Footer from '../components/footer'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <Header />
          <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </Provider>
  )
}

export default MyApp
