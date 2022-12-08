function NoteForm() {
    return (
        <>
            <div className="bg-base-2  text-left mx-auto rounded-lg py-8 mt-4 px-5">
                <input className="block bg-transparent text-3xl mb-4 w-full" placeholder="Judul Catatan"></input>
                <div data-placeholder="Masukkan isi catatan di sini" contentEditable></div>
            </div>
            <button className="bg-accent-base w-full rounded-lg mt-4 p-3 ">Simpan</button>
        </>
    )
}

export default NoteForm