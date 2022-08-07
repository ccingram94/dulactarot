import prisma from '../../lib/prisma'
import { getSession } from 'next-auth/react'

export default async function handle(req, res) {
    const { payload } = req.body; 
    const typedata = req.body.readingresults[1];
    const resultdata = req.body.readingresults[0];
    const session = await getSession({ req });
    if (session) {
        try {
            const success = await prisma.reading.create({
                data: {
                    result: resultdata,
                    type: typedata,
                    author: { connect: { email: session?.user?.email } },
                },
            })
            console.log(success)
        } catch(error) {
            console.log(error)
        }
        console.log(req.body)
        res.json(success);
    } else {
        res.status(401).send({ message: 'unauthorized' });
        console.log(error);
    }
}