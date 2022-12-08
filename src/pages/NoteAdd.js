import { HiChevronDoubleLeft } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import NoteForm from "../components/NoteForm";
import { addNote } from "../utils/local-data";

function NoteAdd() {
    const navigate = useNavigate()

    function onAddNoteHandler(note) {
        addNote(note)
        navigate('/')
    }
    return (
        <div className="container max-w-xl mx-auto text-center">
            <Link href="." className="text-purple-400 text underline mb-2 inline-block"><HiChevronDoubleLeft /> Kembali ke list catatan</Link>
            <h2>Tambah Catatan Baru</h2>
        
            <NoteForm addNote={onAddNoteHandler}/>
        </div>
    )
}


export default NoteAdd;