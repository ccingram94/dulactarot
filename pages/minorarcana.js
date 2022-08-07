import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/header'
import AllCardMeanings from '../components/allcardmeanings'
import MinorArcanaMeanings from '../components/minorarcanameanings'
import Footer from '../components/footer'

export default function Meanings() {
  return (
    <div>
      <Head>
        <title>Dulac Tarot</title>
        <meta name="description" content="free tarot reading with AI artwork" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-floral bg-top text-black font-montserrat">
        <div className="bg-yellow-200 bg-opacity-90">
            <h2 className="text-4xl lg:text-6xl font-bebas text-center p-2 pt-12">Minor Arcana</h2>
            <div className="flex flex-row flex-wrap justify-center p-4">
                <p className="max-w-sm text-center p-4"><i>The minor arcana cards of the tarot represent the smaller details and events of our lives. They can represent our day-to-day thoughts, feelings, and actions. The minor arcana can also give us insight into our subconscious mind and our hidden desires.</i></p>
                <p className="max-w-sm text-center p-4"><i>The suit of wands represents our creative energy, our passion, and our drive. The suit of cups represents our emotions, our relationships, and our spiritual connection. The suit of swords represents our mental energy, our intellect, and our ability to reason. The suit of pentacles represents our material wealth, our physical health, and our practical skills.</i></p>
            </div> 
        </div>
        <MinorArcanaMeanings />
      </main>
    </div>
  )
}
