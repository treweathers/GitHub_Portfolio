import React from "react";  //useState, useEffect } 
import { Routes, Route } from 'react-router-dom';
import { Nav, Home, Aboutme, Algorithms, Codes, Contact, Data, Education, Skills, Learn, YoutubeEmbed, YoutubeEmbed2, YoutubeEmbed3} from './components/index.js'
import './App.css';

//use HashRouter to fix manual reloading? - make sure to import up top, change keywords below, and change from BrowserRouter in index.js
//hasrouter not recommended
//Consulting
//<Route path="/consulting" element={<Consulting />}/> 
//Consulting="/consulting"
// Skills,
//Skills="/skills" 
//        <Route path="/skills" element={<Skills />}/>
// Projects, 
//<Route path="/projects" element={<Projects />}/>
//Projects="/projects"

function App() {
  return (
    <div className="App">
      <Nav Home="/" Aboutme="/aboutme" Algorithms="/algorithms" Codes="/codes" Contact="/contact" Data="/data" Education="/education"  Skills="/skills"
      Learn="/learn" YoutubeEmbed="/frontend" YoutubeEmbed2="backend" YoutubeEmbed3="/ai"/>

        <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/aboutme" element={<Aboutme />}/>
        <Route path="/algorithms" element={<Algorithms />}/> 
        <Route path="/data" element={<Data />}/> 
        <Route path="/codes" element={<Codes />}/>
        <Route path="/contact" element={<Contact />}/> 
        <Route path="/education" element={<Education />}/>
        <Route path="/skills" element={<Skills />}/> 
        <Route path="/learn" element={<Learn />} />
        <Route path="/frontend" element={<YoutubeEmbed embedId="Utwnm2kjYAM" embedId3="4SA6t_tcFQA"/>} />
        <Route path="/backend" element={<YoutubeEmbed2 embedId2="_c_x8A3mNDk"/>} />
        <Route path="/ai" element={<YoutubeEmbed3 embedId="NgWujOrCZFo"/>} />
        </Routes>

    </div>
  );
}


export default App;


/* non-static option
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/message")
      .then((res) => res.json())
      .then((data) => setMessage(message));
  }, []);

//fetch failing - get API from node server.
*/

