import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';


function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false);

  function Expand(){
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note" onChange={props.onEntry}>
        {isExpanded && 
          <input  name="title"  placeholder="Title" /> 
        }
        <textarea 
         onClick={Expand} 
         name="content" 
         placeholder="Take a note..." 
         rows={isExpanded ? 3 : 1} 
        />
        <Zoom in={isExpanded}>
          <Fab onClick={props.onAdd}><AddIcon /></Fab>    
        </Zoom> 
      </form>
    </div>
  );
}

export default CreateArea;
