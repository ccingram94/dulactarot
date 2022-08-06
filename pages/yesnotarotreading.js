import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import YesNoReading from '../components/yesnoreading'

export default function YesNoTarotReading() {
    return (
      <div>
        <Head>
          <title>Dulac Tarot</title>
          <meta name="Yes or No Tarot Reading" content="free online yes or no tarot reading" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main>
          <h2 className="bg-yellow-200 font-bebas text-black text-center text-xl p-4 lg:text-2xl">Yes or No Tarot Reading</h2>
          <YesNoReading />
        </main>
      </div>
    )
  }