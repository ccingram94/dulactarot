import '../styles/globals.css'
import Router from 'next/router'
import { useEffect, useState } from 'react'
import { SessionProvider } from 'next-auth/react'
import { store } from '../store'
import { Provider } from 'react-redux'
import Header from '../components/header'
import Footer from '../components/footer'

export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [ loading, setLoading ] = useState(false);
  
  useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("finished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
      };
  }, []);
    return (
      <>
        {loading ? (
          <div>
            <Header />
            <div className="bg-yellow-200 text-xl lg:text-2xl text-center flex flex-col justify-center">
              <h1>Loading...</h1>
            </div>
            <Footer />
          </div>
        ) : (
          <>
            <Provider store={store}>
            <SessionProvider session={session}>
              <Header />
                <Component {...pageProps} />
              <Footer />
            </SessionProvider>
          </Provider>
          </>
        )}
      </>
    );
}
