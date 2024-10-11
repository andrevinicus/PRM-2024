import { Box, Container, Stack, Typography } from "@mui/material";
import MovieCard from "../MovieCard";

const movies = [
  { poster: 'assets/poster1.jpg' },
  { poster: 'assets/poster2.jpg' },
  { poster: 'assets/poster3.jpg' },
  { poster: 'assets/poster4.jpg' },
  { poster: 'assets/poster5.jpg' },
];

function Section() {
  return (
    <Box>
      <Container>
        <Typography variant="h6" 
                sx={{ fontWeight: 400 , paddingTop: '2rem', }}>Para Toda a Familia</Typography>
        <Stack direction="row" 
                gap={0.5} 
                sx={{overflowY: 'hidden', 
                whiteSpace: 'nowrap',
                paddingY: '1rem',  }}>
          {movies.map(item => (
            <MovieCard poster={'assets/' + item.poster} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default Section;