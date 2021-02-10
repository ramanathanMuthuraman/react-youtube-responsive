import React, { useState } from "react";
import PropTypes from "prop-types";
import Youtube from "react-youtube";
import { YoutubePlayerContainerStyles } from "./YoutubePlayer.style";

const DEFAULT_VIDEO_PLAYER_HEIGHT = 300;

const YoutubePlayer = (props) => {
  const [isYoutubeAccessible, setIsYoutubeAccessible] = useState(true);
  const { youtubePlayerProps } = props;
  const { opts } = youtubePlayerProps || {};
  const { height = DEFAULT_VIDEO_PLAYER_HEIGHT } = opts || {};
  const onError = () => {
    setIsYoutubeAccessible(false);
  };
  return (
    <>
      {isYoutubeAccessible && (
        <>
          <YoutubePlayerContainerStyles />
          <Youtube
            containerClassName={"youtubeContainer"}
            onError={onError}
            {...youtubePlayerProps}
          />
        </>
      )}
    </>
  );
};

YoutubePlayer.propTypes = {
  youtubePlayerProps: PropTypes.shape({
    videoId: PropTypes.string,
    opts: PropTypes.shape({
      height: PropTypes.number,
    }),
  }),
};

YoutubePlayer.defaultProps = {
  youtubePlayerProps: {
    videoId: "",
    opts: {
      height: DEFAULT_VIDEO_PLAYER_HEIGHT,
    },
  },
};

export default YoutubePlayer;
