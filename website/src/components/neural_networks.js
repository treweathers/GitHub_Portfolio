import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed2 = ({embedId3, embedId2}) => (
<div>
    <p></p>
<iframe className="video-big" width="1121" height="631" src="https://www.youtube.com/embed/cbSrsYiRamo" title="Backend Development explained in 2 minutes // Tech in 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <p></p>
    
<iframe className="video-big" width="1121" height="631" src="https://www.youtube.com/embed/4r6WdaY3SOA" title="How The Backend Works" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
);

YoutubeEmbed2.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed2;
