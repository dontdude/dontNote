import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
  
  const [Entry, setEntry] = useState({});
  const [Notes, setNotes] = useState([]);

  function handleChange(event){
    const EntryPoint = event.target.name;
    const Value = event.target.value;

    setEntry((prevEntry) => {
      return {
        ...prevEntry,
        [EntryPoint] : Value
      }
    });

    event.preventDefault();
  }
  
  function addNote(event){
    
    setNotes((prevNotes) => {
       return([...prevNotes, Entry]);
    });

    event.preventDefault();
  }  

  function handleDelete(deleteNote){
    setNotes((prevNotes) => {
      return prevNotes.filter(function(note){
        return(note.title != deleteNote.title || note.content != deleteNote.content);
      });
    })
  }

  return (
    <div>
      <Header />
      <CreateArea 
        onEntry={handleChange}
        onAdd={addNote} 
       />
      {Notes.map((note) => {
        return <Note 
                title={note.title} 
                content={note.content}
                binClick={handleDelete}
                 />
      })}
      <Footer />
    </div>
  );
}

export default App;
