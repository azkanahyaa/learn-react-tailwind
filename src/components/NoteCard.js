function NoteCard({ createdAt, title, body }) {
    createdAt = new Date(createdAt)
    return (
        <div className="flex flex-col justify-between bg-base-2 text-2xl rounded-lg py-4 px-3 h-44">
            <p className="text-sm text-slate-300">{createdAt.toLocaleString()}</p>
            <div>
              <h5 className="mb-2 vertical-hide before:hidden before:absolute before:none before:content-[attr(content)] before:hover:block before:text-xs before:bg-base-1/90 before:p-1 before:rounded before:-translate-y-full" content={title}>{title}</h5>
              <span className="text-sm text-slate-400 leading-6 vertical-hide" content={body}>{body}</span>
              
            </div>
        </div>
    )
}

export default NoteCard