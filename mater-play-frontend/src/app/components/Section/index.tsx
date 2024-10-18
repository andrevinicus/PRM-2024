import {Box, Container, Stack, Typography } from "@mui/material";
import MovieCard from "../MovieCard";
import { useEffect, useState } from "react";
import { IMove } from "../../@libs/types";
import { MoviesService } from "../../services/movies-services";



type SectionProps = {
  title: string;
}
function Section({
  title
}: SectionProps) {

  const [movies, setMovies] = useState<IMove[]>([]);

  useEffect(() => {
    // Executa o que esta aki dentro quando carrega o component
    MoviesService.getMovies()
    .then(result => {
      setMovies(result);
    });

  }, []);

  return (
    <Box>
      <Container>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 400,
            paddingTop: '2rem'
          }}
        >
          { title }
        </Typography>
        <Stack
          direction="row"
          gap={0.5}
          sx={{
            overflowY: 'hidden',
            whiteSpace: 'nowrap',
            paddingY: '1rem'
          }}
        >
          {movies.map(item => (
            <MovieCard key={item.id} poster={'assets/'+ item.posters} />
          ))}

        </Stack>
      </Container>
    </Box>
  )
}

export default Section;