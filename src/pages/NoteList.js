import { HiSearch, HiPlus } from 'react-icons/hi'

function NoteList() {
    return (
      <>

        <div className="max-w-3xl mx-auto py-10 px-2">
          <div className="flex gap-4">
            <a className="flex-none py-2 px-8 text-accent-light underline">Arsip</a>
            <div className="flex-1 flex gap-2 focus:border-accent-base bg-base-2 border border-accent-base rounded-lg px-2">
              <label className="h-full flex-none text-xl text-accent-light"><HiSearch className="h-full"></HiSearch></label>
              <input name="search" className="flex-1 bg-transparent text-slate-300" />
            </div>
          </div>
        </div>
        <div className="sm:container mx-auto grid sm:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-4">
          <a href="/add" className="flex flex-col bg-accent-base justify-center text-center text-2xl rounded-lg py-4 px-3 h-48">
            <HiPlus className="mx-auto w-12 h-12"></HiPlus>
            <span className="text-sm">Tambah Catatan Baru</span>
          </a>
          <div className="flex flex-col justify-between bg-base-2 text-2xl rounded-lg py-4 px-3 h-48">
            <p className="text-sm text-slate-300">07/12/2022</p>
            <div>
              <h5 className="mb-2 vertical-hide">This is Title Tedasdaxt</h5>
              <span className="text-sm text-slate-400 leading-6 vertical-hide">L sadasd asdasdorem Ipsum Dolor sit amet amet constectura lililili</span>
              
            </div>
          </div>
          <div className="flex flex-col justify-between bg-base-2 text-2xl rounded-lg py-4 px-3 h-48">
            <p className="text-sm text-slate-300">07/12/2022</p>
            <div>
              <h5 className="mb-2 vertical-hide">This is Title Tedasdaxt</h5>
              <span className="text-sm text-slate-400 leading-6 vertical-hide">L sadasd asdasdorem Ipsum Dolor sit amet amet constectura lililili</span>
              
            </div>
          </div>
          <div className="flex flex-col justify-between bg-base-2 text-2xl rounded-lg py-4 px-3 h-48">
            <p className="text-sm text-slate-300">07/12/2022</p>
            <div>
              <h5 className="mb-2 vertical-hide">This is Title Tedasdaxt</h5>
              <span className="text-sm text-slate-400 leading-6 vertical-hide">L sadasd asdasdorem Ipsum Dolor sit amet amet constectura lililili</span>
              
            </div>
          </div>
          <div className="flex flex-col justify-between bg-base-2 text-2xl rounded-lg py-4 px-3 h-48">
            <p className="text-sm text-slate-300">07/12/2022</p>
            <div>
              <h5 className="mb-2 vertical-hide">This is Title Tedasdaxt</h5>
              <span className="text-sm text-slate-400 leading-6 vertical-hide">L sadasd asdasdorem Ipsum Dolor sit amet amet constectura lililili</span>
              
            </div>
          </div>
          <div className="flex flex-col justify-between bg-base-2 text-2xl rounded-lg py-4 px-3 h-48">
            <p className="text-sm text-slate-300">07/12/2022</p>
            <div>
              <h5 className="mb-2 vertical-hide">This is Title Tedasdaxt</h5>
              <span className="text-sm text-slate-400 leading-6 vertical-hide">L sadasd asdasdorem Ipsum Dolor sit amet amet constectura lililili</span>
              
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default NoteList;
  