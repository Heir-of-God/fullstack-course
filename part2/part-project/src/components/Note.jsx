const Note = ({ note, toggleImportance }) => {
  return (
    <p>
      <li style={{ color: note.important ? "red" : "black" }}>
        {note.content}
      </li>
      <button onClick={toggleImportance}>Change Importance</button>
    </p>
  );
};

export default Note;
