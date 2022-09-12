import { Client } from 'twitter-api-sdk'

export default async function handle (req, res) {
    const client = new Client(process.env.NEXT_TWITTER_API_BEARER_TOKEN);
    const twitterdata = await fetch('https://api.twitter.com/2/users/by/username/dulactarot')
        .then((response) => response.json())
        .then((data) => console.log(data))
        .then((data) => res.status(200).json({ data }))
}

// export default async function handle(req, res) {
//     const client = new Client(process.env.NEXT_TWITTER_API_BEARER_TOKEN);
//     const response = await client.tweets.usersIdTweets({
//         "max_results": 5, 
//     });
//     console.log(response, JSON.stringify(response, null, 2));
// }