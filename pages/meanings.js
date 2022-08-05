import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import AllCardMeanings from '../components/allcardmeanings'

export default function Meanings() {
  return (
    <div>
      <Head>
        <title>Dulac Tarot</title>
        <meta name="description" content="free tarot reading with AI artwork" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="bg-yellow-200 text-black font-montserrat">
        <h2 className="text-4xl lg:text-6xl font-bebas text-center p-2 pt-12">Tarot Card Meanings</h2>
        <p className="text-xl text-center pb-6">the ancient art revealed</p>
        <div className="flex flex-col flex-wrap justify-center p-4 bg-teal-900 text-white font-bebas text-xl md:text-2xl lg:text-4xl">
          <div className="flex flex-row flex-wrap justify-center">
            <div className="p-4 m-4 bg-black rounded-xl">
              <h3>Major Arcana</h3>
            </div>
            <div className="p-4 m-4 bg-black rounded-xl">
              <h3>Minor Arcana</h3>
            </div>
          </div>
          <div className="flex flex-row flex-wrap justify-center">
            <div className="p-4 m-4 bg-black rounded-xl">
              <h3>Cups</h3>
            </div>
            <div className="p-4 m-4 bg-black rounded-xl">
              <h3>Coins</h3>
            </div>
            <div className="p-4 m-4 bg-black rounded-xl">
              <h3>Swords</h3>
            </div>
            <div className="p-4 m-4 bg-black rounded-xl">
              <h3>Wands</h3>
            </div>
          </div>
        </div>
        <AllCardMeanings />
      </main>
    </div>
  )
}
