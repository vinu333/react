
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CreateNote from "./components/CreateNote";
import Notes from "./components/Notes"

function App() {
  return (


<Router>
<Navbar/>
<Routes>
    <Route exact path="/" element={<Home />} />


    <Route path="/notes" element={<Notes />} />

    <Route path="/create" element={<CreateNote />} />
  </Routes>

    </Router>


  )
}

export default App;
