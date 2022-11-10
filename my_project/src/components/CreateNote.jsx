import React, {useState} from "react";
import axios from "axios";
import "./Navbar.css";



function CreateNote(){

 const [input,setInput] = useState({
   title:'',
   content:''
 })
 let [msg,setmsg] = useState('');

  function handleChange(event){
    const {name,value} = event.target;

    setInput(prevInput =>{
      return{
        ...prevInput,
        [name]: value
      }
    })
  }

  function handleClick(event){

    event.preventDefault();

setmsg(msg="submitted")
    const newNote = {
      title:input.title,
      content:input.content
    }
    axios.post('http://localhost:5000/create',newNote)
  }





  return(
  <div className='container'>
<h1>Create Note page</h1>
<form>

<div className='form-group'>
<input onChange ={handleChange} name ="title" value={input.title} className="form-control"></input>
</div>

<div className='form-group'>
<textarea onChange ={handleChange} name ="content" value={input.content} className="form-control"></textarea>
</div>

<button onClick ={handleClick} className="btn btn-lg btn-info">ADD NOTE</button>

<h1>{msg}</h1>

</form>
  </div>)

}

export default CreateNote;
