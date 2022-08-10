import prisma from '../../lib/prisma'
import { getSession } from 'next-auth/react'

export default async function handle(req, res) {
    const { payload } = req.body; 
    const notedata = req.body.readingNotes;
    const iddata = req.body.readingId;
    console.log(notedata)
    console.log(iddata)
    const session = await getSession({ req });
    if (session) {
        const success = await prisma.reading.upsert({
            where: {
                id: iddata,
            },
            update: {
                note: notedata,
            },
            });
        console.log(success)
        res.json(success);
    } else {
        res.status(401).send({ message: 'unauthorized' });
        console.log(error);
    }
}