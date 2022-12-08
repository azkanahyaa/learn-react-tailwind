import { HiChevronDoubleLeft } from "react-icons/hi";
import { Link, useNavigate, useParams } from "react-router-dom";
import NoteForm from "../components/NoteForm";
import { addNote, editNote, getNote } from "../utils/local-data";

function NoteSave() {
    const navigate = useNavigate()
    const {id} = useParams()
    const note = getNote(id)
    console.log(note)
  
    const onSaveNoteHandler = (!id) ? (note) => {
        addNote(note)
        navigate('/')
    } : (note) => {
        console.log({id, ...note})
        editNote({id, ...note})
        navigate('/detail/'+id)
    }
    return (
        <>
            <div className="container max-w-xl mx-auto text-center">
                <Link to="/" className="text-purple-400 text underline mb-2 inline-block"><HiChevronDoubleLeft /> Kembali ke list catatan</Link>
                <h2>Tambah Catatan Baru</h2>

                <NoteForm saveNote={onSaveNoteHandler} {...note}/>
            </div>
        </>
    )
}


export default NoteSave;