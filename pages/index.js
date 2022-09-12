import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Footer from '../components/footer'
import Hero from '../components/hero'
import SignUpSection from '../components/signupsection'
import DailyReadingSection from '../components/dailyreadingsection'
import { fetchEntries } from '../lib/fetchEntries'
import DailyHoroscopeEntry from '../components/dailyhoroscopeentry'
import TwitterStream from '../components/twitterstream'

export default function Home(props) {
  console.log(props)
  return (
    <div>
      <Head>
        <title>Dulac Tarot</title>
        <meta name="description" content="free tarot reading with AI artwork" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <DailyReadingSection props={props} />
        <SignUpSection />
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