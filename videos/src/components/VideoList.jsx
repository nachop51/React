import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const video_list = videos.map((video) => {
    return <VideoItem video={video} />;
  });

  return <div className="ui relaxed divided list">{video_list}</div>;
};

export default VideoList;
