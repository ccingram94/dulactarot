import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Footer from '../components/footer'
import Hero from '../components/hero'
import SignUpSection from '../components/signupsection'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dulac Tarot</title>
        <meta name="description" content="free tarot reading with AI artwork" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Hero />
        <SignUpSection />
      </main>
      <Footer />
    </div>
  )
}
