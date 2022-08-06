import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import YesNoReading from '../components/yesnoreading'
import CelticCross from '../components/celticcross'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function CelticCrossTarotReading() {
    return (
      <div>
        <Head>
          <title>Dulac Tarot</title>
          <meta name="Celtic Cross Tarot Reading" content="free online Celtic Cross tarot reading" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main>
          <h2 className="bg-yellow-200 font-bebas text-black text-center text-xl p-4 lg:text-2xl">Celtic Cross Tarot Reading</h2>
            <CelticCross />
        </main>
      </div>
    )
  }