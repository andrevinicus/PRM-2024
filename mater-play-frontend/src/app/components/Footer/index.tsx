import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Instagram from "@mui/icons-material/Instagram";
import Facebook from "@mui/icons-material/Facebook";
import YouTube from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <footer>
      <Container sx={{ padding: "3rem" }}>
        <Typography component="p" variant="overline" textAlign="center">
          Mater Play 2024 - Todos os direitos são reservados
        </Typography>
        <Stack direction="row" justifyContent="center" sx={{ mt: 2 }}>
          <IconButton aria-label="Instagram">
            <Instagram />
          </IconButton>
          <IconButton aria-label="Facebook">
            <Facebook />
          </IconButton>
          <IconButton aria-label="YouTube">
            <YouTube />
          </IconButton>
        </Stack>
      </Container>
    </footer>
  );
}

export default Footer;
