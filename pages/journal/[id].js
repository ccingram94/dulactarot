import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { cards } from '../../cards'

export default function JournalID () {


    const router = useRouter()
    const { cid } = router.query 
    const id = cid

    
    return (
        <div>
            <p>hello world</p>
        </div>
    )
}