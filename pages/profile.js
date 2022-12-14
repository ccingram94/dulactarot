import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/header'
import AllCardMeanings from '../components/allcardmeanings'
import YourOrders from '../components/yourorders'
import { useSession, signIn, signOut } from 'next-auth/react'
import Footer from '../components/footer'

export default function Profile() {
  const { date: session, status } = useSession()

  if (status === 'authenticated') {
    return (
      <div>
      <Head>
        <title>Dulac Tarot</title>
        <meta name="description" content="free tarot reading with AI artwork" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-floral bg-cover min-h-screen text-black font-montserrat flex flex-row justify-center w-screen">
        <div className="bg-yellow-200 min-h-screen bg-opacity-80 w-screen px-12">
          <Image src={session?.user?.image} height={200} width={200} className="rounded-xl" />
          <h2 className="text-4xl lg:text-6xl font-bebas text-center p-2 pt-12">My Profile</h2>
          <p className="text-center p-2">currently signed in!</p>
          <div className="flex flex-col flex-wrap justify-center text-center">
            <div>
              <button onClick={() => signOut()} className="p-2 m-2 rounded-xl bg-black text-yellow-200 font-bebas text-xl lg:text-2xl">Sign Out</button>
            </div>
            <div>
          <Link href="/journal">
            <button className="p-2 m-2 rounded-xl bg-black text-yellow-200 font-bebas text-xl lg:text-2xl">My Journal Entries</button>
          </Link>          
        </div>
        <div>
          <Link href="/dailyhoroscope">
            <button className="p-2 m-2 rounded-xl bg-black text-yellow-200 font-bebas text-xl lg:text-2xl">Recent Horoscopes</button>
          </Link>          
        </div>        
        <div>
          <Link href="/readings">
            <button className="p-2 m-2 rounded-xl bg-black text-yellow-200 font-bebas text-xl lg:text-2xl">Explore Readings</button>
          </Link>          
        </div>
          </div>
        </div>
      </main>
    </div>
    )
  } 

  if (status != 'authenticated') {
    return (
      <div>
      <Head>
        <title>Dulac Tarot</title>
        <meta name="description" content="free tarot reading with AI artwork" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-floral bg-cover min-h-screen text-black font-montserrat">
        <div className="bg-yellow-200 min-h-screen bg-opacity-80">
          <h2 className="text-4xl lg:text-6xl font-bebas text-center p-2 pt-12">My Profile</h2>
          <p className="text-xl text-center pb-6">You are not signed in.</p>
          <div className="flex flex-col flex-wrap justify-center text-center">
            <div>
              <h2>In order to save readings and more, sign in or sign up below</h2>
              <button onClick={() => signIn()} className="p-2 m-2 rounded-xl bg-black text-yellow-200 font-bebas text-xl lg:text-2xl">Sign In</button>
            </div>
          </div>
        </div>
      </main>
    </div>
    )
  }

  
}
