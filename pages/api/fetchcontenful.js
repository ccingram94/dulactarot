const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
const contentful = require('contentful')

const client = contentful.createClient({
    space: space,
    accessToken: accessToken,
})

export default async function handle(req, res) {
    const entries = await client.getEntries()
    console.log(entries)
    if (entries.items) return entries.items
    console.log(`Error fetching Contentful entries for ${contentType.name}`)
}