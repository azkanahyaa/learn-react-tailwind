import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="pt-4 pb-10">
            <Link to="."><h2 className="uppercase font-bold text-2xl text-center">NoteApp01</h2></Link>
            <hr className="w-20 h-1.5 bg-accent-base mx-auto mt-1 text-transparent"></hr>
        </header>        
    )
}

export default Header;