import Header from "./app/components/Header";
import Footer from "./app/components/Footer";
import MovieCard from "./app/components/MovieCard";
import Section from "./app/components/Section";
import HighlightSection from "./app/components/HighlightSection";
import { Container } from "@mui/material";

export const movies = [
  {
    poster: "/assets/poster1.jpg",
  },
  {
    poster: "/assets/poster2.jpg",
  },
  {
    poster: "/assets/poster3.jpg",
  },
  {
    poster: "/assets/poster4.jpg",
  },
  {
    poster: "/assets/poster5.jpg",
  },
  {
    poster: "/assets/poster6.jpg",
  },
  {
    poster: "/assets/poster7.jpg",
  },
  {
    poster: "/assets/poster8.jpg",
  },
  {
    poster: "/assets/poster9.jpg",
  },
  {
    poster: "/assets/poster10.jpg",
  },
];

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main style={{ marginTop: "4rem" }}>
        <HighlightSection></HighlightSection>
        <Section title="Recomendados para Você"></Section>
      </main>
      <Container>
        {movies.map((movie, index) => (
          <MovieCard key={index} capa={movie.poster} />
        ))}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
