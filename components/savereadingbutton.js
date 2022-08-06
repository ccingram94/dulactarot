import { useSelector, useDispatch } from 'react-redux'

export default function SaveReadingButton() {
    return (
        <div className="p-2">
            <button className="p-2 rounded-xl text-lg md:text-xl  opacity-40 hover:opacity-90 hover:text-teal-900 hover:bg-white hover:bg-opacity-30 transition-all">Save Reading</button>
        </div>
    )
}
