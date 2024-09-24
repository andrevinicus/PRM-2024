import { Box, Container, Stack, Typography } from "@mui/material";
import { TSectionProps } from "./section-props-type";

function Section ({ title }: TSectionProps){
  return (
    <Box>
      <Container>
        <Typography variant="h6" sx={{ paddingTop: '2rem', fontWeight: 400 }}>{title}</Typography>
        <Stack direction="row" gap={2} sx={{ paddingY: '1rem', overflowY: 'hidden', whiteSpace: 'nowrap' }}></Stack>
      </Container>
    </Box>
  );
};

export default Section;