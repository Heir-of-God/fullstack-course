const Note = ({ note, toggleImportance }) => {
  return (
    <p>
      <li className="note" style={{ color: note.important ? "red" : "grey" }}>
        {note.content}
      </li>
      <button onClick={toggleImportance}>Change Importance</button>
    </p>
  );
};

export default Note;
