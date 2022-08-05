import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import ThreeCardReading from '../components/threecard'

export default function PastPresentFutureTarotReading() {
    return (
      <div>
        <Head>
          <title>Dulac Tarot</title>
          <meta name="description" content="free tarot reading with AI artwork" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main>
            <ThreeCardReading />
        </main>
      </div>
    )
  }