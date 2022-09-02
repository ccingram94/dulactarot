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
import Footer from '../components/footer'

export default function Meanings() {
  return (
    <div>
      <Head>
        <title>Dulac Tarot</title>
        <meta name="description" content="free tarot reading with AI artwork" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-black font-montserrat">
        <div className="bg-floral bg-center bg-cover">
          <h2 className="text-4xl lg:text-6xl font-bebas text-center p-2 pt-12 bg-yellow-200 bg-opacity-60">Tarot Card Readings</h2>
          <p className="lg:text-lg text-center p-6 bg-yellow-200 bg-yellow-200 bg-opacity-60">free online tarot readings with detailed meanings</p>
          <div className=" flex flex-col justify-center items-center bg-black text-white text-center p-2 lg:p-4 pt-5 lg:pt-10">
            <div className="max-w-xl p-2 lg:p-4">
              <h2 className="font-bebas m-2 lg:m-4 text-lg lg:text-xl">classic tarot reading spreads</h2>
              <p className="p-2 text-sm">YES/NO: A one card reading offering a yes/no answer.</p>
              <p className="p-2 text-sm">PAST/PRESENT/FUTURE: A three card reading offering analysis of the influence of the past, the present situation, and the likely future outcome.</p>
              <p className="p-2 text-sm">CELTIC CROSS: A ten card advanced card reading with analysis of the present situation, the challenge at hand, the past causes, the future outcomes, the conscious and unconscious influences at work as well as the external influences, the best and worst case scenarios, and the ultimate outcome.</p>
            </div>
            <FreeReadingSection />
          </div>
        </div>
      </main>
    </div>
  )
}
