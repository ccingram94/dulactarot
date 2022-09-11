const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
const contentful = require('contentful')

const client = contentful.createClient({
    space: space,
    accessToken: accessToken,
})

export async function fetchEntries() {
    const entries = await client.getEntries({
        limit: 5, 
        order: '-sys.createdAt',
    })
    if ( entries ) {
        return entries
    }
}

export default { fetchEntries }