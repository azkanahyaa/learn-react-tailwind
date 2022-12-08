import { HiChevronDoubleLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { getNote } from "../utils/local-data";
import { useParams } from "react-router-dom"
import parser from "html-react-parser";

function NoteDetail() {
    const { id } = useParams()
    const note = getNote(id)

    return (
        <div className="container max-w-xl mx-auto text-center">
            <Link to="/" className="text-purple-400 text underline mb-2 inline-block"><HiChevronDoubleLeft /> Kembali ke list catatan</Link>

            <div className="bg-base-2 max-w-full text-left mx-auto rounded-lg py-8 mt-4 px-5">
                <h2 className="block bg-transparent text-3xl mb-4 w-full"  >{note.title}</h2>
                <div data-placeholder={(note.body !== "") ? "" : "Masukkan isi catatan di sini"} >{parser(note.body)}</div>
            </div>
        </div>
    )
}


export default NoteDetail;