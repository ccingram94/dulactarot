import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dulac Tarot</title>
        <meta name="description" content="free tarot reading with AI artwork" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <h1>
          Dulac Tarot
        </h1>

        <div>
          <p>hello world</p>
        </div>
      </main>

    </div>
  )
}
