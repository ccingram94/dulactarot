// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {cards} from '../../../cards.js'

export default function card(req, res) {
    const cardid = req.query.id
    const card = cards[cardid]
    res.status(200).json({ card })
}