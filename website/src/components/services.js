import  Navd  from "./nav_3.js";

export default function Services() {
  return (
      <div className="">
        
        <h3> click buttons below for code samples, results, summaries, visuals, and more from my completed and in-progress projects! </h3>
        <Navd Data="/data" Algorithms="/algorithms"  Codes="/codes" Consulting="/consulting" />
        <hr></hr>
        <a className="github" href="https://github.com/TREYCSE/GitHub_Portfolio">GitHub PortFolio README.md for Engineers: Click here for code samples, etc.</a>

        <h1 className="white">Skills</h1>

        <div className="black">

          <h2> Tools | Technologies </h2>
          <h4> My Go-to Tech Stack: TensorFlow, Python, SQL, Node.js, React.js </h4>
          <p> Programming: Python, Javascript, React, Node, MongoDB, Django </p>
          <p> Data Science & Machine Learning | AI: NumPy, TensorFlow, SQL, pandas, scipy, matplotlib </p>
          <p> Big Data tools: Google Cloud, AWS, Azure, Spark </p>

<hr className="hrhr"></hr>

          <h2> Administrative | Consulting | Management</h2>
          <p> Project planning and scope management: Microsoft Suite & Google Suite </p>
          <p> Troubleshooting and Debugging: GitHub, online planners and ^^ </p>
          <p> Research: experience navigating various types of databases </p>
          
        </div>
      </div>
    )
  }
