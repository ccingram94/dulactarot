import { useState } from 'react'
import { cards } from '../cards.js'
import { format, parseJSON } from 'date-fns'

export default function JournalEntry (props) {
    const [ caution, setCaution ] = useState(false);
    const [ deleted, setDeleted ] = useState(false);
    const [ deleting, setDeleting ] = useState(false);
    const [ editing, setEditing ] = useState(false);
    const [ submittingEdit, setSubmittingEdit ] = useState(false);
    const [ edited, setEdited ] = useState(true);
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

      const editReading = () => {
        setEditing(true);
      }

      const submitEdit = async() => {
        setEditing(false);
        setSubmittingEdit(true);
          const readingId = deleteItem;
          try {
            const body = {readingId};
            await fetch(`/api/edit`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body),
            });
            setEdited(true);
          } catch (error) {
            console.error(error)
          }
        setSubmittingEdit(false);
        setEdited(true);
        }

    if (deleted == true) {
        return (
            <div className="p-61 text-center bg-white">
                <p>✨ entry has been deleted ✨</p>
            </div>
        )
    }

    return (
        <div className="flex flex-col flex-wrap justify-center">
            <h2 className="font-bebas text-xl lg:text-2xl text-center p-2">{format(parseJSON(props.props.createdAt), 'PPPP')}</h2>
            <p className="text-center p-2">Notes: {props.props.notes}</p>
            {props.props.type == 'yesno' && <h3>✨ Yes or No ✨</h3>}
            {props.props.type == 'pastpresentfuture' && <h3>✨ Past, Present, Future ✨</h3>}
            {props.props.type == 'celticcross' && <h3>✨ Celtic Cross ✨</h3>}
            <div className="flex flex-row flex-wrap justify-center p-2 max-w-xl">
                  { props.props.result.map( (result) => {
                      return (
                        <div key={cards[result].id} className="p-2 flex flex-col justify-center items-center">
                            <img src={cards[result].image} className="rounded-xl h-40 max-w-fit"/>
                          <h3 className="font-bebas text-xl lg:text-2xl p-2 max-w-xs">{cards[result].name}</h3>
                          <p>{cards[result].description}</p>
                        </div>
                      );
                  })}
            </div>
            <div>
              {!editing && <button onClick={() => editReading(true)} className="bg-yellow-200 bg-opacity-20 hover:bg-oopacity-80 p-2 rounded-xl transition-all">edit</button>}
              {editing && <button onClick={() => submitEdit()} className="bg-yellow-200 bg-opacity-20 hover:bg-oopacity-80 p-2 rounded-xl transition-all">submit</button>}
              {submittingEdit && <button onClick={() => submitEdit()} className="bg-yellow-200 bg-opacity-20 hover:bg-oopacity-80 p-2 rounded-xl transition-all">submitting...</button>}
              {edited && <button className="bg-yellow-200 bg-opacity-20 hover:bg-oopacity-80 p-2 rounded-xl transition-all">updated! ✨</button>}
              
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