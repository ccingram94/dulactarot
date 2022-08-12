import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Footer from '../components/footer'
import { loadStripe } from '@stripe/stripe-js'
import { useEffect } from 'react'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function Cart() {
    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        if (query.get('success')) { console.log('success! order placed')}
        if (query.get('canceled')) { console.log('canceled!')}
    }, []);
  return (
    <div>
      <Head>
        <title>Dulac Tarot</title>
        <meta name="description" content="Dulac Gold || My Cart" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-floral bg-cover bg-center'>
        <div className="bg-black bg-opacity-90 text-white">
            <h2 className="font-bebas text-xl md:text-2xl lg:text-4xl text-center p-10">My Dulac Gold</h2>
            <form action="/api/checkout_session" method="POST">
                <section>
                    <button type="submit" role="link">
                        Checkout
                    </button>
                </section>
            </form>
        </div>
      </main>
    </div>
  )
}
