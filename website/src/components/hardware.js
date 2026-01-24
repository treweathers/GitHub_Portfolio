import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({embedId}) => (
  <div>
<iframe className="video-big" width="1121" height="631" src="https://www.youtube.com/embed/qyHyFsT7Hig" title="Frontend Development explained in 2 minutes // Tech in 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;
/*
<iframe
      className="video-big"
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
*/

