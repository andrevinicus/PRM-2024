import {Box, Container, Stack, Typography } from "@mui/material";
import MovieCard from "../MovieCard";
import { useEffect, useState } from "react";
import { ICategory, IMove } from "../../@libs/types";
import { MoviesService } from "../../services/movies-services";



type SectionProps = {
  category: ICategory;
}
function Section({
  category
}: SectionProps) {

  const [movies, setMovies] = useState<IMove[]>([]);

  useEffect(() => {
    // Executa o que esta aki dentro quando carrega o component
    if(category.id){
      MoviesService.getByCategoryId(category.id)
      .then(result => {
        console.log('=>',result);
        setMovies(result);
      });
    }
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
          { category.name }
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
            <MovieCard key={item.id} movie={item} />
          ))}

        </Stack>
      </Container>
    </Box>
  )
}

export default Section;