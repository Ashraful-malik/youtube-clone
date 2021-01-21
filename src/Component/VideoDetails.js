import React from "react";
import { Paper, Typography } from "@material-ui/core";
export default function VideoDetails({ Video }) {
  if (!Video) return <div>Loading..</div>;

  const videoSrc = `https://www.youtube.com/embed/${Video.id.videoId}`;
  return (
    <>
      <Paper elevation={6} style={{ height: "20rem" }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={6} square style={{ padding: "12px" }}>
        <Typography variant="subtitle1">
          {Video.snippet.channelTitle}
        </Typography>
        <Typography variant="h5">{Video.snippet.title}</Typography>
        <Typography ariant="subtitle2">{Video.snippet.description}</Typography>
      </Paper>
    </>
  );
}
