import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import HeaderAuth from './headerauth'
import UserIcon from '@heroicons/react/solid/UserCircleIcon'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { cards } from '../cards.js'

export default function SearchCards() {
  const { date: session, status } = useSession()
  const [ searchTerm, setSearchTerm ] = useState("")
  const [ searchResults, setSearchResults ] = useState([])
  return (
    <div className="flex flex-col flex-wrap justify-center text-center">
        <section className="text-black p-2">
            <form onChange={(e) => setSearchTerm((e.target.value).toLowerCase())}>
                <input type="text" placeholder="search cards" className="p-2 rounded-xl" />
            </form>
        </section>
        <div>
            {searchTerm &&
                <div>
                </div>
            }
            <div>
            <div className="flex flex-row flex-wrap justify-center p-12 max-h-52 overflow-auto border-b-2 border-opacity-20">
            { cards.map( (card) => {
               if (((card.name).toLowerCase()).includes(searchTerm) && card.id < 78) {
                var cardstring = (card.id).toString()
                var linkstring = "/cards/" + cardstring
                return (
                    <div>
                        <Link href={ linkstring }>
                            <div key={card.id} className="bg-black text-white p-4 m-2 rounded-xl max-w-xs hover:shadow-2xl hover:shadow-yellow-200">
                                <h3>{card.name}</h3>
                            </div>
                        </Link>
                    </div>
                );
              }
            })}
          </div>
            </div>
        </div>
    </div>
  )
}
