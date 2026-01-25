import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed3 = ({embedId}) => (
  <div>
  
<iframe className="video-big" width="1121" height="631" src="https://www.youtube.com/embed/qYNweeDHiyU" title="AI, Machine Learning, Deep Learning and Generative AI Explained" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<iframe className="video-big" width="1121" height="631" src="https://www.youtube.com/embed/z-EtmaFJieY" title="Machine Learning &amp; Artificial Intelligence: Crash Course Computer Science #34" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
);

YoutubeEmbed3.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed3;
