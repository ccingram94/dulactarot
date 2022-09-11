import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import AllCardMeanings from '../components/allcardmeanings'
import JournalEntry from '../components/journalentry'
import { getSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { format, parseJSON } from 'date-fns'
import { cards } from '../cards.js'
import { useSession, signIn } from 'next-auth/react'
import { fetchEntries } from '../lib/fetchEntries'
import DailyHoroscopeEntry from '../components/dailyhoroscopeentry'



export default function DailyHoroscope(props) {
  const { data: session, status } = useSession();
  const [ deleteItem, setDeleteItem ] = useState(null);
  const [ loading, setLoading ] = useState(false);
  
  const horoscopearray = [props.items]




  useEffect(() => {
    setLoading(true);
    if (props != null) {
      setLoading(false);
    }
  })
  

    return (
      <div>
        <Head>
          <title>Dulac Tarot</title>
          <meta name="description" content="free tarot reading with AI artwork" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="bg-floral bg-cover min-h-screen text-black font-montserrat w-screen">
          <div className="bg-yellow-200 min-h-screen bg-opacity-80">
            <h2 className="text-4xl lg:text-6xl font-bebas text-center p-2 pt-12">Daily Tarot Horoscope</h2>
            <p className="text-xl text-center pb-6">your future, written in the stars</p>
            <DailyHoroscopeEntry props={props} />
          </div>
        </main>
      </div>
    )
  
}

export async function getStaticProps() {
    const entries = await fetchEntries();
        return {
            props: {
                items: entries.items
            }
        }
}