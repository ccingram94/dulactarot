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



export default function DailyHoroscope(props) {
  const { data: session, status } = useSession();
  const [ deleteItem, setDeleteItem ] = useState(null);
  const [ loading, setLoading ] = useState(false);
  console.log(props)

  const picture = "https:" + props.item.cardPicture[0].fields.file.url;
  const date = props.item.date;
  const description = props.item.description;
  const title = props.item.title;


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
            <div className="flex flex-col justify-center p-2 text-center bg-white bg-opacity-80 rounded-xl">
                <h2 className="p-2">Today's Tarot Horoscope</h2>
                <h3 className="p-2 font-bold italic">{format(parseJSON(Date.now()), 'PPPP')}</h3>
                <div className="flex flex-row flex-wrap justify-center text-center">
                    <div className="p-2 m-2 max-w-xl">
                        <Image src={picture} height={500} width={300} />
                    </div>
                    <div className="p-2 m-2 max-w-xl">
                        <p>{description}</p>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
          </div>
        </main>
      </div>
    )
  
}

export async function getStaticProps() {
    const entries = await fetchEntries();
        return {
            props: {
                item: entries.items[0].fields,
            }
        }
}