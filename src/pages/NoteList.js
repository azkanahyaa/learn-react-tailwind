import { HiPlus } from 'react-icons/hi'
import { Link } from 'react-router-dom';
import NoteCard from '../components/NoteCard';
import SearchInput from '../components/SearchInput';
import { getAllNotes } from '../utils/local-data'

function NoteList() {
  let notes = getAllNotes().filter(note => !note.archived)
    return (
      <>

        <div className="container md:max-w-3xl mx-auto pb-10 px-2">
          <div className="flex gap-4">
            <Link to="/archive" className="flex-none py-2 px-8 text-accent-light underline">Arsip</Link>
            <SearchInput placeholder="Cari Catatan" />
          </div>
        </div>
        <div className="container mx-auto grid sm:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-4">
          <Link to="/add" className="flex flex-col bg-accent-base justify-center text-center text-2xl rounded-lg py-4 px-3 h-44">
            <HiPlus className="mx-auto w-12 h-12"></HiPlus>
            <span className="text-sm">Tambah Catatan Baru</span>
          </Link>
          {notes.map((note) => <NoteCard 
          key={note.id}
          {...note} />)}

        </div>
      </>
    );
  }
  
  export default NoteList;
  