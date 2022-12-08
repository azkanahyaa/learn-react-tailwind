import parser from "html-react-parser"
import { Component } from "react"
import PropTypes from 'prop-types'

class NoteForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: this.props.title || '',
            body: this.props.body || ''
        }

        this.onTitleChange = this.onTitleChange.bind(this)
        this.onBodyChange = this.onBodyChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onTitleChange(event) {
        this.setState({
            title: event.target.value
        })
    }

    onBodyChange(event) {
        if (event.target.innerHTML !== '') {
            event.target.setAttribute('data-placeholder', '') 
        } else {
            event.target.setAttribute('data-placeholder', "Masukkan isi catatan di sini")
        }

        event.target.setAttribute('value', event.target.innerHTML)
        this.setState({
            body: event.target.getAttribute('value')
        })
    }

    onSubmit(event) {
        event.preventDefault()
        this.props.addNote(this.state)
    }

    render() {
        return (
            <>
                <div className="bg-base-2  text-left mx-auto rounded-lg py-8 mt-4 px-5">
                    <input className="block bg-transparent text-3xl mb-4 w-full" onChange={this.onTitleChange} placeholder="Judul Catatan" value={this.state.title} />
                    <div value={this.state.body} data-placeholder="Masukkan isi catatan di sini" contentEditable suppressContentEditableWarning={true} onInput={this.onBodyChange}>{parser(this.props.body || '')}</div>
                </div>
                <button className="bg-accent-base w-full rounded-lg mt-4 p-3 " onClick={this.onSubmit}>Simpan</button>
            </>
        )
    }
}

NoteForm.propType = {
    addContact: PropTypes.func.isRequired,
    title: PropTypes.string,
    body: PropTypes.string
}

export default NoteForm