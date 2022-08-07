import { useState } from 'react'
import { cards } from '../cards.js'
import { format, parseJSON } from 'date-fns'

export default function JournalEntry (props) {
    const [ caution, setCaution ] = useState(false);
    const [ deleted, setDeleted ] = useState(false);
    const [ deleting, setDeleting ] = useState(false);
    const deleteItem = props.props.id;

    const deleteReading = async() => {
      setCaution(false);
      setDeleting(true);
        const readingId = deleteItem;
        try {
          const body = {readingId};
          await fetch(`/api/delete`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          });
          setDeleted(true);
        } catch (error) {
          console.error(error)
        }
        setDeleting(false);
      }

    if (deleted == true) {
        return (
            <div className="p-61 text-center bg-white">
                <p>✨ entry has been deleted ✨</p>
            </div>
        )
    }

    return (
        <div>
            <h2 className="font-bebas text-xl lg:text-2xl text-center">{format(parseJSON(props.props.createdAt), 'PPPP')}</h2>
            {props.props.type == 'yesno' && <h3>✨ Yes or No ✨</h3>}
            {props.props.type == 'pastpresentfuture' && <h3>✨ Past, Present, Future ✨</h3>}
            {props.props.type == 'celticcross' && <h3>✨ Celtic Cross ✨</h3>}
            <div className="flex flex-row flex-wrap justify-center p-2">
                  { props.props.result.map( (result) => {
                      return (
                        <div key={cards[result].id} className="p-2 flex flex-col justify-center items-center">
                            <img src={cards[result].image} className="rounded-xl h-40 max-w-fit"/>
                          <h3 className="font-bebas text-xl lg:text-2xl p-2 max-w-xs">{cards[result].name}</h3>
                        </div>
                      );
                  })}
            </div>
            <div>
                {!caution && !deleting &&
                    <button onClick={() => setCaution(true)} className="bg-yellow-200 bg-opacity-20 hover:bg-opacity-80 p-2 rounded-xl transition-all">delete</button>
                }
                {caution &&
                    <div>
                        <p className="pb-2">you sure?</p>
                        <button onClick={() => deleteReading()} className="bg-red-300 bg-opacity-20 hover:bg-opacity-80 p-2 rounded-xl transition-all">yes, delete!</button>
                    </div>
                }
                {deleting &&
                    <div>
                        <button className="bg-red-300 bg-opacity-20 hover:bg-opacity-80 p-2 rounded-xl transition-all">deleting...</button>
                    </div>
                }
            </div>
        </div>
    )
}