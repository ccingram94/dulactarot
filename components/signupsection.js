import Head from 'next/head'
import { signIn } from 'next-auth/react'



export default function SignUpSection() {

    const submitOrder = async() => {
        const response = await fetch(`https://buy.stripe.com/test_4gw4ha30JcIAeCk9AA`, {

        })
    }

    return (
        <div className="bg-floral bg-cover">
             
            <div className="bg-teal-800 bg-opacity-90 p-6 text-white">
                <h2 className="p-4 pt-12 text-white text-center font-bebas text-xl lg:text-2xl">⚜️ Sign Up for a Magical Account ⚜️ </h2>
                <p className="text-center p-2 text-sm lg:text-lg">sign up for a bewitching free account with benefits like:</p>
                <p className="text-center p-2 text-sm lg:text-lg">⚜️ Save readings to your journal!</p>
                <p className="text-center p-2 text-sm lg:text-lg">⚜️ Add notes to your reading results!</p>
                <p className="text-center p-2 text-sm lg:text-lg">⚜️ A daily tarot horoscope!</p>
                <div className="flex flex-row flex-wrap justify-center text-center items-center p-2">
                    <button onClick={() => signIn()} className="bg-black text-white max-w-fit p-4 m-2 text-2xl font-bold rounded-xl">SIGN UP</button>
                </div>
            </div>
        </div>
    )
}