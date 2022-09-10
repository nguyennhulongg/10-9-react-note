import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  const handleChange = (e) => {
    const value = e.target.value;
    if(noteText.length < 200) {
      setNoteText(value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim()) {
      handleAddNote(noteText);
      setNoteText('');
    }
  }

  return (
    <div className="note new">
      <textarea 
        rows ='8'
        col = "10"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={ handleChange }
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} remaining</small>
        <button className="save" onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  )
}

export default AddNote;
