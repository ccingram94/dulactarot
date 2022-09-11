import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { signIn } from 'next-auth/react'
import { format, parseISO } from 'date-fns'


export default function AllHoroscopes(props) {
    const horoscopes = props.props.items
    function showProps() {
        console.log(horoscopes)
    }

    return (
        <div>
            <div className="bg-black bg-opacity-90 text-white text-center p-3">
                <div className="flex flex-row flex-wrap justify-center p-4 m-4">
                    {Object.keys(horoscopes).map((key, index) => {
                        return (
                            <div key={index} className="flex flex-col justify-center p-2 m-2 pt-12 bg-white text-black rounded-xl bg-opacity-90 max-w-xs">
                                <h2 className="p-2 text-center text-xl">{horoscopes[key].fields.name}</h2>
                                <h3 className="italic text-center">{format(parseISO(horoscopes[key].fields.date), 'PPPP')}</h3>
                                <div className="flex justify-center p-2 m-2">
                                    <Image src={horoscopes[key].fields.cardPicture.content[0].content[0].value} width={120} height={200} className="rounded-xl" />
                                </div>
                                <p className="max-w-md p-2 m-2 text-xs">{horoscopes[key].fields.description}</p>
                                <Link href={horoscopes[key].fields.cardLink.content[0].content[0].value}>
                                    <button className="p-2 m-2 text-sm bg-black text-white">Learn More</button>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
