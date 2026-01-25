import { Link } from "react-router-dom";

export default function Nave({YoutubeEmbed, YoutubeEmbed2, YoutubeEmbed3}) {
  return (
    <div>
      
      <nav className="tutorialsnav">
    

          <Link className="link2 black" to={YoutubeEmbed}> Frontend </Link>
          <Link className="link2 black" to={YoutubeEmbed3}> Backend </Link>
          <Link className="link2 black" to={YoutubeEmbed2}> Artificial Intelligence </Link>
   

      </nav>
    </div>
  );
}
