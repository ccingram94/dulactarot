import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'

export default function TermsOfUse() {
  return (
    <div>
      <Head>
        <title>Dulac Tarot</title>
        <meta name="Privacy Policy" content="explore our privacy policy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black text-white w-screen min-h-screen font-montserrat">
        <div className="bg-floral bg-center bg-cover">
          <h2 className="text-4xl text-black lg:text-6xl font-bebas text-center p-2 pt-12 bg-yellow-200 bg-opacity-60">Terms of Use</h2>
        </div>
        <div>
            <p>terms of use details</p>
          </div>
      </main>
    </div>
  )
}