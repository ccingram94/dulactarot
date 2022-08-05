import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import YesNoReading from '../components/yesnoreading'
import CelticCross from '../components/celticcross'

export default function CelticCrossTarotReading() {
    return (
      <div>
        <Head>
          <title>Dulac Tarot</title>
          <meta name="description" content="free tarot reading with AI artwork" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main>
            <CelticCross />
        </main>
      </div>
    )
  }