import { Link } from "react-router-dom";

export default function Navd({Data, Algorithms, Codes}) {
  return (
    <div>
      <nav className="servicesnav">

          <Link className="link2 black" to={Codes}> Frontend Engineering </Link>
            <div className="black">
            <p className="tiny">🌘Front-End Development: Code Websites using React.js and other compatible frameworks</p>
            <p className="tiny">🌖Backend Development: Algorithms and Data Structures with Java </p>
            </div>

         <Link className="link2 black" to={Algorithms}> Machine Learning </Link>
            <div className="black">
            <p className="tiny">🌘Problem Solving using Machine and Deep Learning Algorithms </p>
            <p className="tiny">🌖Model Training & Fine-Tuning </p>
            <p className="tiny">🌕Model Use for Web Development </p>
            </div>
          
          <Link className="link2 black" to={Data}> Data Science & Engineering </Link>
            <div className="black">
            <p className="tiny">🌘Data Science, Engineering, Analysis: Data cleaning, Web Services API and Web Scraping, database management and more with SQL, Python, Pandas, and more.</p>
            </div>

      </nav>
    </div>
  );
}

/* Switching portfolio style from from a broad compilation of skills to a focused display of specialties
| Diagnostics | Models from TensorFlow.js Hub for Developers
            <hr></hr>
            <Link className="link2 black" to={Consulting}> Project Consulting </Link>
            <div className="black">
            <p className="tiny">🌕 Project Scope Management</p>
            <p className="tiny">🌕 Algorithm Anomaly Detection | Troubleshooting | Debugging </p>
            
            </div>
            
<p className="tiny">🌖Backend Development: Data Seeding, Modeling, etc. with MongoDB and Django </p>

          <h4>🦿 Types of Learning Algorithms</h4>

            <h5> 🦾Supervised Learning </h5>
            <p className="tiny">Linear Regression | Logistic Regression | Binary, Multiclass, & Multilabel Classification | Deep Learning</p>
            <h5> 🦾Unsupervised Learning </h5>
            <p className="tiny">Recommender Systems | Reinforcement Learning</p>

*/


//            <p className="tiny">🌖Data Analysis:  </p>
