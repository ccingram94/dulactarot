import prisma from '../../lib/prisma'
import { getSession } from 'next-auth/react'

export default async function handle(req, res) {
    const readingId = req.body.readingId; 
    const session = await getSession({ req });
    if (session) {
        const success = await prisma.reading.delete({
            where: { id: req.body.readingId },
        });
        console.log(success)
        res.json(success);
    } else {
        res.status(401).send({ message: 'unauthorized' })
    }
}