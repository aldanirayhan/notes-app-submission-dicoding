import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, onArchive, title }) {
  if (notes.length === 0) {
    return (
      <>
        <h2>{title}</h2>
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      </>
    );
  }

  return (
    <>
      <h2>{title}</h2>
      <div className="notes-list">
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            onArchive={onArchive}
            {...note}
          />
        ))}
      </div>
    </>
  );
}

export default NoteList;
