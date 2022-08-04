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
      <main className="bg-teal-900 text-white font-montserrat">
        <h2 className="text-4xl lg:text-6xl font-bebas text-center p-2 pt-12">Tarot Card Readings</h2>
        <p className="text-xl text-center ">free online tarot readings with detailed meanings</p>
        <div className="flex flex-row flex-wrap justify-center p-4">
          <div className="max-w-xl p-6">
            <h3 className="font-bebas text-xl lg:text-3xl p-4 text-center">Yes/No Tarot Reading</h3>
            <p className="text-xl  text-center p-2">A one card reading with a yes or no answer.</p>
            <p className="text-center">A "Yes/No" tarot reading is a quick and easy way to get guidance on a yes or no question. This type of reading can reveal whether a person is on the right track, and can also provide clarity on a person's future.</p>
          </div>
          <div className="max-w-xl p-6">
            <h3 className="font-bebas text-xl lg:text-3xl p-4 text-center">Past/Present/Future Reading</h3>
            <p className="text-xl  text-center p-2">A three card reading exploring the past, present, and future of a situation.</p>
            <p className='text-center'>A Past/Present/Future tarot reading can reveal significant events from the past, present circumstances, and potential future outcomes. This type of reading can provide insight into a life journey and help them to make decisions about their future.</p>
          </div>
          <div className="max-w-xl p-6">
            <h3 className="font-bebas text-xl lg:text-3xl p-4 text-center">Celtic Cross Reading</h3>
            <p className="text-xl  text-center p-2">The traditional ten card reading.  An advanced spread exploring all areas of a problem.</p>
            <p className='text-center'>A Celtic Cross reading can give insights into a person's current situation, their hopes and fears, and what may be coming up in their future. It can also reveal the influences of past actions and events, and how they may be affecting the present.</p>
          </div>
        </div>
      </main>
    </div>
  )
}
