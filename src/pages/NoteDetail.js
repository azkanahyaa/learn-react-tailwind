import { HiChevronDoubleLeft } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { archiveNote, deleteNote, getNote, unarchiveNote } from "../utils/local-data";
import { useParams } from "react-router-dom";
import { HiTrash, HiArchive,HiPencil } from 'react-icons/hi'
import parser from "html-react-parser";

function NoteDetail() {
    const { id } = useParams()
    const note = getNote(id)
    const navigate = useNavigate()

    return (
        <div className="container max-w-xl mx-auto text-center">
            <Link to="/" className="text-purple-400 text underline mb-2 inline-block"><HiChevronDoubleLeft /> Kembali ke list catatan</Link>
            <div className="flex gap-2 mt-4">
                <button onClick={() => {
                    deleteNote(id)
                    navigate('/')
                }} className="flex-1 py-2 rounded-lg bg-base-2 hover:bg-rose-500 text-rose-500 hover:text-white"><HiTrash className="w-5 h-5 mr-1"/> Hapus</button>
                <button onClick={() => {
                    (note.archived) ? unarchiveNote(id) : archiveNote(id)
                    navigate('/')
                }} className="flex-1 py-2 rounded-lg bg-base-2 hover:bg-accent-base"><HiArchive className="w-5 h-5 mr-1"/> {(note.archived) ? "Aktifkan" : "Arsipkan"}</button>
                <Link to={"/edit/"+id} className="flex-1 py-2 rounded-lg bg-base-2 hover:bg-accent-base "><HiPencil className="w-5 h-5 mr-1"/> Edit</Link>
            </div>
            <div className="bg-base-2 max-w-full text-left mx-auto rounded-lg py-8 mt-2 px-5">
                <h2 className="block bg-transparent text-3xl mb-4 w-full"  >{note.title}</h2>
                <div data-placeholder={(note.body !== "") ? "" : "Masukkan isi catatan di sini"} >{parser(note.body)}</div>
            </div>
        </div>
    )
}


export default NoteDetail;