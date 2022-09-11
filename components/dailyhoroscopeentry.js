import { fetchEntries } from '../lib/fetchEntries'
import { format, parseJSON } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'

export default function DailyHoroscopeEntry(props) {
    let horoscopetoday = props.props.items[0].fields 
    const link = horoscopetoday.cardLink.content[0].content[0].value;
    const picture = horoscopetoday.cardPicture.content[0].content[0].value;
    const date = horoscopetoday.date;
    const title = horoscopetoday.title;
    const name = horoscopetoday.name;
    const description = horoscopetoday.description;
    function showProps() {
        console.log(horoscopetoday)
    }
    return (
        <div className="flex flex-col justify-center p-2 text-center bg-white bg-opacity-80 rounded-xl" onClick={() => showProps()}>
            <h2 className="p-2">Today's Tarot Horoscope</h2>
            <h3 className="p-2 font-bold italic">{format(parseJSON(Date.now()), 'PPPP')}</h3>
            <div className="flex flex-row flex-wrap justify-center text-center p-4 m-4">
                <div className="p-2 m-2">
                    <Image src={picture} height={400} width={250} className="rounded-xl"/>
                </div>
                <div className="max-w-md p-2 m-2">
                    <h2 className="font-bold p-2 m-2 text-lg lg:text-xl">{name}</h2>
                    <p className="text-sm lg:text-md p-2 m-2 text-justify">{description}</p>
                    <Link href={link}>
                        <button className="border-2 p-2 hover:bg-black hover:text-white transition-all">Learn More</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
