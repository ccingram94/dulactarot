import Head from 'next/head'
import { signIn } from 'next-auth/react'



export default function SignUpSection() {

    const submitOrder = async() => {
        const response = await fetch(`https://buy.stripe.com/test_4gw4ha30JcIAeCk9AA`, {

        })
    }

    return (
        <div className="bg-floral bg-cover">
             
            <div className="bg-yellow-200 bg-opacity-80 p-6">
                <h2 className="p-4 pt-12 text-black text-center font-bebas text-2xl lg:text-6xl">✨ Sign Up for a Magical Account✨ </h2>
                <p>Save readings and journal notes, get a daily tarot horoscope, and much more with a $2.99 Dulac Gold account.</p>
                <div className="flex flex-row flex-wrap justify-center text-center items-center">
                    <button onClick={() => signIn()} className="bg-black text-white max-w-fit p-4 m-2 text-2xl font-bold rounded-xl">SIGN IN</button>
                    <button onClick={() => signIn()} className="bg-black text-white max-w-fit p-4 m-2 text-2xl font-bold rounded-xl">SIGN UP</button>
                </div>
            </div>
        </div>
    )
}