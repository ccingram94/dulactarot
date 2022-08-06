import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import AllCardMeanings from '../components/allcardmeanings'

export default function Journal() {
  return (
    <div>
      <Head>
        <title>Dulac Tarot</title>
        <meta name="description" content="free tarot reading with AI artwork" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="bg-floral bg-cover min-h-screen text-black font-montserrat">
        <div className="bg-yellow-200 min-h-screen bg-opacity-80">
          <h2 className="text-4xl lg:text-6xl font-bebas text-center p-2 pt-12">My Tarot Journal</h2>
          <p className="text-xl text-center pb-6">your story, written in the stars</p>
          <div className="flex flex-row flex-wrap justify-center text-center">
            <h2>no readings saved yet</h2>
          </div>
        </div>
      </main>
    </div>
  )
}
