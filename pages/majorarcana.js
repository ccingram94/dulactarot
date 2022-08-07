import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/header'
import AllCardMeanings from '../components/allcardmeanings'
import MajorArcanaMeanings from '../components/majorarcanameanings'
import Footer from '../components/footer'

export default function MajorArcana() {
  return (
    <div>
      <Head>
        <title>Dulac Tarot</title>
        <meta name="description" content="free tarot reading with AI artwork" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="bg-floral bg-top text-black font-montserrat ">
        <h2 className="bg-yellow-200 bg-opacity-90 text-4xl lg:text-6xl font-bebas text-center p-2 pt-12">Major Arcana</h2>
        <div className="flex flex-row flex-wrap justify-center bg-yellow-200 bg-opacity-90">
            <p className="max-w-sm text-center p-6"><i>The 22 major arcana cards of the tarot are often seen as the most important cards in a tarot deck, as they represent the Fool's journey through life, from start to finish. The major arcana cards can represent both positive and negative aspects of a person's life, and often show the ups and downs that a person will experience.</i></p>
        </div>
        <div className="flex flex-col flex-wrap justify-center p-4 bg-teal-900 text-white font-bebas text-xl md:text-2xl lg:text-4xl">
        </div>
        <MajorArcanaMeanings />
      </main>
      <Footer />
    </div>
  )
}
