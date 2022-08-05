import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
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
        <h2 className="text-4xl lg:text-6xl font-bebas text-center p-2 pt-12">Minor Arcana</h2>
        <div className="flex flex-row flex-wrap justify-center p-4">
            <p className="max-w-sm text-center p-4"><i>The minor arcana cards of the tarot represent the smaller details and events of our lives. They can represent our day-to-day thoughts, feelings, and actions. The minor arcana can also give us insight into our subconscious mind and our hidden desires.</i></p>
            <p className="max-w-sm text-center p-4"><i>The suit of wands represents our creative energy, our passion, and our drive. The suit of cups represents our emotions, our relationships, and our spiritual connection. The suit of swords represents our mental energy, our intellect, and our ability to reason. The suit of pentacles represents our material wealth, our physical health, and our practical skills.</i></p>
        </div> 
        <div className="flex flex-col flex-wrap justify-center p-4 bg-teal-900 text-white font-bebas text-xl md:text-2xl lg:text-4xl">
          <div className="flex flex-row flex-wrap justify-center">
            <Link href="/majorarcana">
              <div className="p-4 m-4 bg-black rounded-xl">
                <h3>Major Arcana</h3>
              </div>
            </Link>
            <Link href="/minorarcana">
              <div className="p-4 m-4 bg-black rounded-xl">
                <h3>Minor Arcana</h3>
              </div>
            </Link>
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
