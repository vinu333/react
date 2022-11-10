import React, {useState, useEffect} from "react";
import axios from "axios";

function Notes(){


  const [notes,setNotes] = useState([{
    title:'',
    content:''
  }])




  axios.get('http://localhost:5000/notes')
  .then(jsonRes => {
  setNotes(jsonRes.data);


  });










  return (<div className='container'>

<h1>Notes page</h1>





<div>
  <table className='table_width'>
  <thead>
        <tr>
          <th>Title</th>
          <th>Content</th>
          </tr>
      </thead>
      <tbody>
      {notes.map(note =>
        <tr>
          <td>{note.title}</td>
          <td>{note.content}</td>
          </tr>
          )}
          </tbody>
          </table>

</div>









</div>




  )
}

export default Notes;
