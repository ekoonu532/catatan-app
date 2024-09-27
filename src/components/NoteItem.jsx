import React from "react";

function NoteItem({ note, showFormattedDate, handleDelete, handleArchive }) {
    return (
        <div className="note-item">
            <div className="note-item__content">
                <h3 className="note-item__title">{note.title}</h3>
                <p className="note-item__body">{note.body}</p>
                <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
            </div>
            <div className="note-item__action">
                <button className="note-item__archive-button" onClick={() => handleArchive(note.id)}>
                    {note.archived ? 'Pindahkan ke Aktif' : 'Arsipkan'}
                </button>
                <button className="note-item__delete-button" onClick={() => handleDelete(note.id)}>Hapus</button>
            </div>
        </div>
    );
}

export default NoteItem;