import Head from 'next/head'
import Image from 'next/image'
import ThreeCardReading from '../components/threecard'

export default function PastPresentFutureTarotReading() {
    return (
      <div>
        <Head>
          <title>Dulac Tarot</title>
          <meta name="Past, Present, and Future Tarot Reading" content="free online past, present, and future tarot reading" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <h2 className="bg-yellow-200 font-bebas text-black text-center text-xl p-4 lg:text-2xl">Past, Present, and Future Tarot Reading</h2>
            <ThreeCardReading />
        </main>
      </div>
    )
  }