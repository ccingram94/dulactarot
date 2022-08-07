import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ThreeCard from './threecard'
import onecard from '../public/1card.png'
import threecard from '../public/3card.png'
import celticcross from '../public/celticcross.png'
import queen from '../public/thumbnailqueen.png'
import hermit from '../public/thumbnailhermit.png'
import sun from '../public/thumbnailsun.png'

export default function FreeReadingSection () {
  return (
    <div>
        <div className="flex flex-row flex-wrap justify-center p-4 pt-12 bg-black text-black">
          <Link href="/yesnotarotreading">
            <div className="max-w-xs bg-yellow-200 p-6 m-3 flex flex-col justify-start max-w-sm hover:shadow-2xl hover:shadow-yellow-100 transition-all rounded-xl">
              <Image src={queen} className="rounded-full p-4" />
              <h3 className="font-bebas text-xl lg:text-3xl p-4 pt-8 text-center">Yes or No </h3>
              <p className="text-lg text-center p-2 text-yellow-600"><i>A one card reading with a yes or no answer.</i></p>
              <p className="text-center p-2 lg:p-4 text-yellow-600">A "Yes/No" tarot reading is a quick and easy way to get guidance on a yes or no question. This type of reading can reveal whether a person is on the right track, and can also provide clarity on a person's future.</p>
            </div>
          </Link>
          <Link href="/pastpresentfuturetarotreading">
            <div className="max-w-xs bg-yellow-200 p-6 m-3 flex flex-col justify-center max-w-sm hover:shadow-2xl hover:shadow-yellow-100 transition-all rounded-xl">
              <Image src={hermit} className="rounded-full p-4"/>
              <h3 className="font-bebas text-xl lg:text-3xl p-4 text-center pt-8">Past, Present, Future </h3>
              <p className="text-lg text-center p-2 text-yellow-600"><i>A three card reading exploring the past, present, and future of a situation.</i></p>
              <p className='text-center p-2 lg:p-4 text-yellow-600'>A Past/Present/Future tarot reading can reveal significant events from the past, present circumstances, and potential future outcomes. This type of reading can provide insight into a life journey and help them to make decisions about their future.</p>
            </div>
          </Link>
          <Link href="/celticcrosstarotreading">
            <div className="max-w-xs bg-yellow-200 p-6 m-3 flex flex-col justify-center max-w-sm hover:shadow-2xl hover:shadow-yellow-100 transition-all rounded-xl">
              <Image src={sun} className="rounded-full p-4"/>
              <h3 className="font-bebas text-xl lg:text-3xl p-4 text-center pt-8">Celtic Cross </h3>
              <p className="text-lg text-center p-2 lg:p-4 text-yellow-600"><i>The traditional ten card reading.  An advanced spread exploring all areas of a problem.</i></p>
              <p className='text-center text-yellow-600'>A Celtic Cross reading can give insights into a person's current situation, their hopes and fears, and what may be coming up in their future. It can also reveal the influences of past actions and events, and how they may be affecting the present.</p>
            </div>
          </Link>
        </div>
    </div>
  )
}
