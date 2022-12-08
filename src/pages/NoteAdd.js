import { HiChevronDoubleLeft } from "react-icons/hi";

function NoteAdd() {
    return (
        <div className="container max-w-xl mx-auto text-center">
            <a href="." className="text-purple-400 text underline mb-2 inline-block"><HiChevronDoubleLeft /> Kembali ke list catatan</a>
            <h2>Tambah Catatan Baru</h2>

            <div className="bg-base-2  text-left mx-auto rounded-lg py-8 mt-4 px-5">
                <input className="block bg-transparent text-3xl mb-4 w-full" placeholder="Judul Catatan" contentEditable></input>
                <div data-placeholder="Masukkan isi catatan di sini" contentEditable></div>
            </div>
            <button className="bg-accent-base w-full rounded-lg mt-4 p-3 ">Simpan</button>
        </div>
    )
}


export default NoteAdd;