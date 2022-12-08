import NoteCard from "../components/NoteCard";
import { getAllNotes } from "../utils/local-data";

function NoteArchive() {
    let notes = getAllNotes().filter(note => note.archived)

    return (
        <div className="sm:container mx-auto grid sm:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-4">
            {notes.map((note) => <NoteCard {...note} />)}
        </div>
    )
}

export default NoteArchive