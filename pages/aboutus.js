import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutUs() {
  return (
    <div>
      <Head>
        <title>Dulac Tarot</title>
        <meta name="About Us" content="learn about us" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-floral bg-center bg-cover w-screen">
          <h2 className="text-4xl text-black lg:text-6xl font-bebas text-center p-2 pt-12 bg-yellow-200 bg-opacity-60">About Us </h2>
        </div>
      <main className="bg-yellow-200 text-black w-screen min-h-screen font-montserrat flex flex-col pt-10 lg:pt-20 items-center">
        <div className="flex flex-col p-2 m-4">
            <div className="p-2 m-2 lg:max-w-[50vw]">
              <h2 className="p-2 font-bebas text-xl lg:text-3xl">About Dulac Tarot</h2>
              <p className="p-2">Dulac Tarot operates dulactarot.com, which provides tarot card readings online.  These readings are <b>entertainment only</b> and not to be taken as medical, legal, or other professional advice.</p>
              <p className="p-2">We require users and visitors to review our Terms of Use and Privacy Policy.  Use of our website or services constitutes agreement to our Terms of Use and Privacy Policy.</p>
              <Link href="/termsofuse">
                <button className="p-2 m-2 bg-black text-white">Terms of Use</button>
              </Link>
              <Link href="/privacypolicy">
                <button className="p-2 m-2 bg-black text-white">Privacy Policy</button>
              </Link>
              <p className="p-2">You may contact us at hello@dulactarot.com.</p>
            </div>
        </div>
      </main>
    </div>
  )
}
