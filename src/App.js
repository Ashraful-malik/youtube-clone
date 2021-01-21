import React, { useState, useEffect } from "react";
import { VideoDetails, VideoList } from "./Component";
import { Paper, TextField, Grid, Typography } from "@material-ui/core";
import youtube from "./api/youtube";
export default function App() {
  const [userData, SetUserData] = useState("");
  const [query, setQuery] = useState("Javascript");
  const [Videos, setVideos] = useState([]);
  const [selectVideo, setselectVideo] = useState(null);

  const OnVideoSelect = (video) => {
    setselectVideo(video);
  };

  useEffect(() => {
    const youtubeSearchData = async () => {
      const response = await youtube.get("search", {
        params: {
          part: "snippet",
          maxResults: 5,
          key: "AIzaSyBYv3OM9dohRcZhiA2jlCLiECuyUbtp86M",
          q: { query },
        },
      });
      setVideos(response.data.items);
      setselectVideo(response.data.items[0]);
      // console.log(response.data.items);
    };
    youtubeSearchData();
  }, [query]);

  const FormSubmit = (e) => {
    e.preventDefault();
    setQuery(userData);
    e.target.reset();
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {/* Search Bar */}
              <Paper elevation={3} style={{ padding: "10px" }}>
                <form onSubmit={FormSubmit}>
                  <TextField
                    fullWidth
                    label="Search Videos.."
                    onChange={(events) => {
                      const userTextData = events.target.value;
                      SetUserData(userTextData);
                    }}
                  />
                </form>
              </Paper>
            </Grid>
            <Grid item xs={7}>
              <VideoDetails Video={selectVideo} />
            </Grid>
            <Grid item xs={5}>
              <VideoList Videos={Videos} OnVideoSelect={OnVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
