import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import back from '../public/back.png'
import onecard from '../public/1card.png'
import threecard from '../public/3card.png'
import celticcross from '../public/celticcross.png'
import Header from '../components/header'
import AllCardMeanings from '../components/allcardmeanings'
import FreeReadingSection from '../components/freereadingsection'

export default function Meanings() {
  return (
    <div>
      <Head>
        <title>Dulac Tarot</title>
        <meta name="Privacy Policy" content="explore our privacy policy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="bg-black text-white w-screen min-h-screen font-montserrat">
        <div className="bg-floral bg-center bg-cover">
          <h2 className="text-4xl text-black lg:text-6xl font-bebas text-center p-2 pt-12 bg-yellow-200 bg-opacity-60">Privacy Policy </h2>
        </div>
        <div>
            <p>privacy policy details</p>
          </div>
      </main>
    </div>
  )
}
