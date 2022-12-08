import PropTypes from 'prop-types'
import parser from 'html-react-parser'
import { Link } from 'react-router-dom'

function NoteCard({ id, createdAt, title, body, clickable }) {
    createdAt = new Date(createdAt)
    body = (body === "") ? "Catatan ini Kosong" : body
    return (
        <Link to={"/detail/"+id} className="flex flex-col overflow-hidden justify-between bg-base-2 text-2xl rounded-lg py-4 px-3 h-44">
            <p className="text-sm text-slate-300">{createdAt.toLocaleString()}</p>
            <div>
              <h5 className="mb-2 vertical-hide before:hidden before:absolute before:none before:content-[attr(content)] before:hover:block before:text-xs before:bg-base-1/90 before:p-1 before:rounded before:-translate-y-full" content={title}>{title}</h5>
              <span className="text-sm text-slate-400 leading-6 vertical-hide">{parser(body)}</span>
              
            </div>
        </Link>
    )
}

NoteCard.propType = {
    createdAt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string
}

export default NoteCard