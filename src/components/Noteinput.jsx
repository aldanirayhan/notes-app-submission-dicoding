import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    if (event.target.value.length <= 50) {
      this.setState(() => {
        return {
          title: event.target.value,
        };
      });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    const maxTitleLength = 50;
    const remainingTitleLength = maxTitleLength - this.state.title.length;

    return (
      <>
        <div className="note-input">
          <h2>Buat Catatan</h2>
          <form onSubmit={this.onSubmitEventHandler}>
            <p className="note-input__title__char-limit">
              Sisa karakter: {remainingTitleLength}
            </p>
            <input
              className="note-input__title"
              type="text"
              placeholder="Ini adalah judul ..."
              value={this.state.title}
              onChange={this.onTitleChangeEventHandler}
            />
            <textarea
              className="note-input__body"
              type="text"
              placeholder="Ketik catatan ..."
              value={this.state.body}
              onChange={this.onBodyChangeEventHandler}
              required
            ></textarea>
            <button type="submit">Buat</button>
          </form>
        </div>
      </>
    );
  }
}

export default NoteInput;
