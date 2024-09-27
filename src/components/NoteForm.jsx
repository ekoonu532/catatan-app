import React from "react";

function NoteForm({ title, body, remainingTitleChars, handleTitleChange, handleBodyChange, handleAddNote }) {
    return (
        <div className="note-input">
            <h2 className="note-input__title">Tambah Catatan</h2>
            <input
                type="text"
                className="note-input__title"
                placeholder="Judul catatan"
                value={title}
                onChange={handleTitleChange}
            />
            <p className="note-input__title__char-limit">Sisa karakter: {remainingTitleChars}</p>
            <textarea
                className="note-input__body"
                placeholder="Isi catatan"
                value={body}
                onChange={handleBodyChange}
            />
            <button className="note-input__button" onClick={handleAddNote}>Tambah</button>
        </div>
    );
}

export default NoteForm;