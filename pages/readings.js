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
        <meta name="description" content="free tarot reading with AI artwork" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="text-black font-montserrat">
        <div className="bg-floral bg-center bg-cover">
          <h2 className="text-4xl lg:text-6xl font-bebas text-center p-2 pt-12 bg-yellow-200 bg-opacity-60">Tarot Card Readings</h2>
          <p className="lg:text-lg text-center p-6 bg-yellow-200 bg-yellow-200 bg-opacity-60">free online tarot readings with detailed meanings</p>
          <div>
            <FreeReadingSection />
          </div>
        </div>
      </main>
    </div>
  )
}
