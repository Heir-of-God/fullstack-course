import Note from "./components/Note";
import { useState, useEffect } from "react";
import noteService from "./services/notes";

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("a new note...");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    noteService.getAll().then((notes) => {
      setNotes(notes);
    });
  }, []);

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  function addNote(event) {
    event.preventDefault();

    noteService
      .create({
        content: newNote,
        important: Math.random() < 0.5,
      })
      .then((createdNote) => {
        const newNotes = notes.concat([createdNote]);
        setNotes(newNotes);
      });

    setNewNote("");
  }

  function handleNoteChange(event) {
    setNewNote(event.target.value);
  }

  function toggleImportanceOf(noteId) {
    const curNote = notes.find((note) => note.id === noteId);
    const changedNote = { ...curNote, important: !curNote.important };

    noteService
      .update(noteId, changedNote)
      .then((updatedNote) => {
        setNotes(
          notes.map((note) => (note.id === noteId ? updatedNote : note)),
        );
      })
      .catch(() => {
        alert(`the note '${curNote.content}' was already deleted from server`);
        setNotes(notes.filter((n) => n.id !== noteId));
      });
  }

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
}

export default App;
