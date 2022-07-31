// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {cards} from '../../cards.js'

export default function allcards(req, res) {
    res.status(200).json({ cards });
}