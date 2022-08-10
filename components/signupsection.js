import Head from 'next/head'
import { signIn } from 'next-auth/react'



export default function SignUpSection() {

    const submitOrder = async() => {
        const response = await fetch(`https://buy.stripe.com/test_4gw4ha30JcIAeCk9AA`, {

        })
    }

    return (
        <div className="bg-floral bg-cover">
             
            <div className="bg-yellow-200 bg-opacity-90 p-6">
                <h2 className="p-4 pt-12 text-black text-center font-bebas text-2xl lg:text-6xl">✨ Sign Up for a Magical Account✨ </h2>
                <p className="text-center p-2">Save readings and journal notes, get a daily tarot horoscope, and much more with a personal account.</p>
                <p className="text-center p-2">Sign up now for a 30 day free trial of Dulac Gold (a $2.99 value)!</p>
                <div className="flex flex-row flex-wrap justify-center text-center items-center p-2">
                    <button onClick={() => signIn()} className="bg-black text-white max-w-fit p-4 m-2 text-2xl font-bold rounded-xl">SIGN UP</button>
                </div>
            </div>
        </div>
    )
}