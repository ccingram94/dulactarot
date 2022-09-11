import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { signIn } from 'next-auth/react'
import { format, parseJSON } from 'date-fns'


export default function DailyReadingSection(props) {
    const today = props.props.items[0].fields
    const picture = today.cardPicture.content[0].content[0].value;
    const link = today.cardLink.content[0].content[0].value;
    function showProps() {
        console.log(today.name)
    }

    return (
        <div className="bg-floral bg-cover">
             
            <div className="bg-yellow-200 bg-opacity-90 p-6">
                <h2 className="p-4 pt-12 text-black text-center font-bebas text-2xl lg:text-6xl">⚜️ Daily Tarot Horoscope ⚜️ </h2>
                <h3 className="p-2 font-bold italic text-center">{format(parseJSON(Date.now()), 'PPPP')}</h3>
                <div className="flex flex-row flex-wrap justify-center text-center p-4 m-4">
                    <div className="p-2 m-2">
                        <Image src={picture} height={400} width={250} className="rounded-xl"/>
                    </div>
                    <div className="max-w-md p-2 m-2">
                        <h2 className="font-bold p-2 m-2 text-lg lg:text-xl">{today.name}</h2>
                        <p className="text-sm lg:text-md p-2 m-2 text-justify">{today.description}</p>
                        <div className="flex flex-row flex-wrap justify-center text-center items-center p-2">
                            <Link href={link}>
                                <button onClick={() => showProps()} className="bg-black text-white max-w-fit p-4 m-2 text-2xl font-bold rounded-xl">Learn More</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
