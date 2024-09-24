import { Box, Button, Container, Stack, Typography } from "@mui/material"

function HighlightSection() {
    return (
        <Box>
            <Container>
                <Stack direction="row">
                    <img src="/assets/poster4.jpg" alt="Poster 1" />
                    <Stack justifyContent="center" paddingLeft="3rem">
                        <Typography variant="h4">A Casa do Dragão</Typography>
                        <Typography variant="subtitle2" marginBottom="2rem">
                            <span style={{ borderStyle: "solid", borderWidth: "1px", padding: "0.25rem", marginRight: "0.5rem", fontSize: "1rem" }}>16</span>
                            Sci & Fantasy, Drama, Action & Adventure
                        </Typography>
                        <Typography variant="subtitle1" marginBottom="0.5rem">
                            Sinopse
                        </Typography>
                        <Typography variant="body2" marginBottom="0.75rem">
                        Cerca de 200 anos antes dos acontecimentos de "Game of Thrones", a Casa Targaryen enfrentou seu primeiro grande inimigo: um poderoso dragão. Esse lendário confronto marcou o início de uma era turbulenta para a dinastia, e envolveu também o rei de Gondor, um soberano distante e envolto em mistérios. O rei era o único sobrevivente de sua linhagem, devastada por tragédias e batalhas épicas, e sua conexão com os Targaryens estabeleceu uma aliança inesperada que mudaria o curso da história dos Sete Reinos.
                        </Typography>
                        <Stack direction={"row"} gap={1}>
                        <Button variant="outlined">Assistir</Button>
                        <Button variant="outlined">Detalhes</Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}

export default HighlightSection