import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import AllCardMeanings from '../components/allcardmeanings'

export default function Profile() {
  return (
    <div>
      <Head>
        <title>Dulac Tarot</title>
        <meta name="description" content="free tarot reading with AI artwork" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="bg-teal-900                                                                                                                                                                         text-white font-montserrat">
        <h2 className="text-4xl lg:text-6xl font-bebas text-center p-2 pt-12">My Profile</h2>
        <p className="text-xl text-center ">welcome back, oracle</p>
        <AllCardMeanings />
      </main>
    </div>
  )
}
