import { HiSearch } from 'react-icons/hi'

function SearchInput({ placeholder }) {
    return (
        <div className=" flex-1 flex gap-2 focus:border-accent-base bg-base-2 border border-accent-base rounded-lg px-2">
            <label className="h-full flex-none text-xl text-accent-light"><HiSearch className="h-full"></HiSearch></label>
            <input name="search" placeholder={placeholder} className="max-w-[35vw] flex-1 bg-transparent text-slate-300" />
        </div>
    )
}

export default SearchInput;