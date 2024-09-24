import Paper from "@mui/material/Paper";
import { TMovieCardProps } from "./movie-card-type";

function MovieCard({ capa }: TMovieCardProps) {
  return (
    <Paper
      elevation={0}
      component="a"
      href="/1"
      sx={{
        minWidth: "10rem",
        margin: "0.5rem",
      }}
    >
      <img
        src={capa}
        alt="Movie capa"
        style={{
          width: "200px",
          paddingTop: "1rem",
        }}
      />
    </Paper>
  );
}

export default MovieCard;
