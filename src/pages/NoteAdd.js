import { HiChevronDoubleLeft } from "react-icons/hi";
import NoteForm from "../components/NoteForm";

function NoteAdd() {
    return (
        <div className="container max-w-xl mx-auto text-center">
            <a href="." className="text-purple-400 text underline mb-2 inline-block"><HiChevronDoubleLeft /> Kembali ke list catatan</a>
            <h2>Tambah Catatan Baru</h2>

            <NoteForm />
        </div>
    )
}


export default NoteAdd;