import React from 'react';
import { getInitialData } from '../utils/data.js';
import NoteInput from './Noteinput.jsx';
import NoteList from './NoteList.jsx';
import SearchBar from './SearchBar.jsx';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      keyword: '',
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onSeachHandler = this.onSeachHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          archived: !note.archived,
        };
      }
      return note;
    });
    this.setState({ notes });
  }

  onSeachHandler(keyword) {
    this.setState({ keyword });
  }

  render() {
    const filteredNotes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.keyword.toLowerCase())
    );
    const activeNotes = filteredNotes.filter((note) => !note.archived);
    const archivedNotes = filteredNotes.filter((note) => note.archived);
    return (
      <>
        <div className="note-app__header">
          <h1>Notes</h1>
          <SearchBar
            query={this.state.keyword}
            handleChange={this.onSeachHandler}
          />
        </div>
        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler} />
          <NoteList
            title="Catatan Aktif"
            notes={activeNotes}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
          <NoteList
            title="Catatan Arsip"
            notes={archivedNotes}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
        </div>
      </>
    );
  }
}

export default NoteApp;
