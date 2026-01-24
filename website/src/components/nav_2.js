import { Link } from "react-router-dom";
//Skills, Projects
//<Link className="link black" to={Skills}> Skills </Link>
export default function Navs({Education}) {
  return (
    <div>
      <nav className="aboutmenav">
          <Link className="link black" to={Education}> Education and Work History </Link>
      </nav>
    </div>
  );
}
