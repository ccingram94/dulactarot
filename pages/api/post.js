import prisma from '../../lib/prisma'
import { getSession } from 'next-auth/react'

export default async function handle(req, res) {
    const { payload } = req.body; 
    const typedata = req.body.readingresults[1];
    const resultdata = req.body.readingresults[0];
    const session = await getSession({ req });
    if (session) {
        const success = await prisma.reading.create({
            data: {
                result: resultdata,
                type: typedata,
                author: { connect: { email: session?.user?.email } },
            },
        });
        console.log(success)
        res.json(success);
    } else {
        res.status(401).send({ message: 'unauthorized' });
        console.log(error);
    }
}