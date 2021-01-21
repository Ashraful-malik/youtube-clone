import React from "react";
import VideoItems from "./VideoItems";

export default function VideoList({ Videos, OnVideoSelect }) {
  const listOfVideos = Videos.map((videos, id) => (
    <VideoItems key={id} video={videos} OnVideoSelect={OnVideoSelect} />
  ));
  return listOfVideos;
}
