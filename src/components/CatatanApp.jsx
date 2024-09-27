import React, { Component } from "react";
import { getInitialData, showFormattedDate } from '../utils/index';
import SearchBar from "./SearchBar";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

class CatatanApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            searchKeyword: '',
            title: '',
            body: '',
            archived: false,
            remainingTitleChars: 50,
        };

        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddNote = this.handleAddNote.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleArchive = this.handleArchive.bind(this);
    }

    handleDelete(id) {
        this.setState((prevState) => ({
            notes: prevState.notes.filter((note) => note.id !== id),
        }));
    }

    handleAddNote() {
        const { title, body } = this.state;
        if (title && body) {
            const newNote = {
                id: +new Date(),
                title: title,
                body: body,
                archived: false,
                createdAt: new Date().toISOString(),
            };
            this.setState((prevState) => ({
                notes: [...prevState.notes, newNote],
                title: '',
                body: '',
                remainingTitleChars: 50,
            }));
        }
    }

    handleSearch(event) {
        this.setState({
            searchKeyword: event.target.value,
        });
    }

    handleTitleChange(event) {
        const maxChars = 50;
        const currentChars = event.target.value.length;
        if (currentChars <= maxChars) {
            this.setState({
                title: event.target.value,
                remainingTitleChars: maxChars - currentChars,
            });
        }
    }

    handleBodyChange(event) {
        this.setState({
            body: event.target.value,
        });
    }

    handleArchive(id) {
        this.setState((prevState) => ({
            notes: prevState.notes.map((note) =>
                note.id === id ? { ...note, archived: !note.archived } : note
            ),
        }));
    }

    render() {
        const { notes, searchKeyword, title, body, remainingTitleChars } = this.state;
        const filteredNotes = notes.filter((note) =>
            note.title.toLowerCase().includes(searchKeyword.toLowerCase())
        );
        const activeNotes = filteredNotes.filter((note) => !note.archived);
        const archivedNotes = filteredNotes.filter((note) => note.archived);

        return (
            <div className="catatan-app">
                <h1 className="catatan-app__title">Aplikasi Catatan Pribadi</h1>

                <SearchBar searchKeyword={searchKeyword} handleSearch={this.handleSearch} />

                <NoteForm
                    title={title}
                    body={body}
                    remainingTitleChars={remainingTitleChars}
                    handleTitleChange={this.handleTitleChange}
                    handleBodyChange={this.handleBodyChange}
                    handleAddNote={this.handleAddNote}
                />

                <h2 className="catatan-app__subtitle">Catatan Aktif</h2>
                <NoteList
                    notes={activeNotes}
                    showFormattedDate={showFormattedDate}
                    handleDelete={this.handleDelete}
                    handleArchive={this.handleArchive}
                    emptyMessage="Tidak ada catatan"
                />

                <h2 className="catatan-app__subtitle">Catatan Diarsipkan</h2>
                <NoteList
                    notes={archivedNotes}
                    showFormattedDate={showFormattedDate}
                    handleDelete={this.handleDelete}
                    handleArchive={this.handleArchive}
                    emptyMessage="Tidak ada catatan diarsipkan"
                />
            </div>
        );
    }
}

export default CatatanApp;