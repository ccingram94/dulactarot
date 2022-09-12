import axios from 'axios'


export default function TwitterStream() {

    const fetchTweets = async() => {
        console.log('fetching tweets')
        const response = await axios.get('https://api.twitter.com/2/users/by/username/dulactarot')
            .then((response) => response.json())
            .then((data) => console.log(data))
    }

    return (
        <div className="bg-floral bg-cover">
             
            <div className="bg-teal-800 bg-opacity-90 p-6 text-white">
                <h2 className="p-4 pt-12 text-white text-center font-bebas text-xl lg:text-2xl">from our twitter account </h2>
                <div className="flex flex-row flex-wrap justify-center text-center items-center p-2">
                    <button onClick={() => fetchTweets()} className="bg-black text-white max-w-fit p-4 m-2 text-2xl font-bold rounded-xl">FETCH TWEETS</button>
                </div>
            </div>
        </div>
    )
}