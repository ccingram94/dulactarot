import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ThreeCard from './threecard'
import { cards } from '../cards.js'


export default function MajorArcanaMeanings () {
  return (
    <div>
        <div className="w-screen h-full bg-teal-900 text-white text-center font-montserrat">
          <div className="flex flex-row flex-wrap justify-center p-12">
            { cards.map( (card) => {
              while (card.id < 22) {
                var i = card.id + 78;
                var cardstring = (card.id).toString()
                var linkstring = "/cards/" + cardstring
                return (
                  <div key={card.id} className="bg-black p-4 m-4 rounded-xl max-w-xs">
                    <Image src={card.image} height="250" width="150" layout="responsive" className="rounded-xl"/>
                    <h3 className="font-bebas text-xl lg:text-3xl p-3 pt-6 lg:pt-12">{card.name}</h3>
                    <p className="p-2">{card.description}</p>
                    <p className="p-2">Reversed: {cards[i].description}</p>
                    <Link href={ linkstring }>
                      <button className="bg-teal-900 text-yellow-100 p-4 rounded-xl m-2">More Information</button>
                    </Link>
                  </div>
                );
              }
            })}
          </div>
        </div>
    </div>
  )
}
