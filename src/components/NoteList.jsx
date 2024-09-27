import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, showFormattedDate, handleDelete, handleArchive, emptyMessage }) {
    return notes.length === 0 ? (
        <p className="notes-list__empty-message">{emptyMessage}</p>
    ) : (
        <div className="notes-list">
            {notes.map((note) => (
                <NoteItem
                    key={note.id}
                    note={note}
                    showFormattedDate={showFormattedDate}
                    handleDelete={handleDelete}
                    handleArchive={handleArchive}
                />
            ))}
        </div>
    );
}

export default NoteList;