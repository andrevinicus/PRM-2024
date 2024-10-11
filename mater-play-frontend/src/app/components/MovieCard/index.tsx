import React from "react";
import Paper from "@mui/material/Paper";

type MovieCardProps = {
  poster: string;
};

const MovieCard: React.FC<MovieCardProps> = ({ poster }:MovieCardProps) => {
  return (
    <Paper elevation={0} component="a" href="/1" sx={{ minWidth: "10rem" }}>
      <img src={poster} style={{ width: "100%" }} />
    </Paper>
  );
};

export default MovieCard;
