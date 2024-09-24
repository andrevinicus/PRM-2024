import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const MenuButton = styled(Button)({
  color: "white",
  fontWeight: 400,
});

function Header() {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6">Mater Play</Typography>
          <Box sx={{ ml: 2 }}>
            <MenuButton variant="text">Todos</MenuButton>
            <MenuButton variant="text">Séries</MenuButton>
            <MenuButton variant="text">Filmes</MenuButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
