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
      <main className="bg-teal-900                                                                                                                                                                         text-white font-montserrat">
        <h2 className="text-4xl lg:text-6xl font-bebas text-center p-2 pt-12">My Tarot Journal</h2>
        <p className="text-xl text-center ">your story, written in the stars</p>
        <div className="flex flex-row flex-wrap">
          <div className="bg-black">
            <h3>New Reading</h3>
            <p>Start a new reading and save the results to your journal!</p>
          </div>
          <div className="bg-black">
            <h3>Enter a Reading</h3>
            <p>Used your own cards?  Just enter them here to instantly find the meanings and save your reading to your journal.</p>
          </div>
        </div>
      </main>
    </div>
  )
}
