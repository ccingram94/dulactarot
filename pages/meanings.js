import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import AllCardMeanings from '../components/allcardmeanings'
import SearchCards from '../components/searchcards'

export default function Meanings() {
  return (
    <div>
      <Head>
        <title>Dulac Tarot</title>
        <meta name="description" content="free tarot reading with AI artwork" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-floral bg-bottom text-black font-montserrat">
        <h2 className="bg-yellow-200 bg-opacity-60 text-4xl lg:text-6xl font-bebas text-center p-2 pt-12">Tarot Card Meanings</h2>
        <p className="bg-yellow-200 bg-opacity-60 text-xl text-center pb-6">the ancient art revealed</p>
        <div className="flex flex-col flex-wrap justify-center p-4 bg-teal-900 text-white font-bebas text-xl md:text-2xl lg:text-4xl">
          <div className="flex flex-row flex-wrap justify-center">
            <Link href="/majorarcana">
              <div className="p-2 lg:m-2 bg-yellow-200 text-black rounded-xl hover:shadow-2xl hover:shadow-yellow-200 transition-all">
                <h3>Major Arcana</h3>
              </div>
            </Link>
            <Link href="/minorarcana">
              <div className="p-2 lg:m-2 bg-yellow-200 text-black rounded-xl hover:shadow-2xl hover:shadow-yellow-200 transition-all">
                <h3>Minor Arcana</h3>
              </div>
            </Link>
          </div>
        </div>
        <div className="bg-teal-900">
          <SearchCards />
        </div>
        <AllCardMeanings />
      </main>
    </div>
  )
}
