import {
  Box,
  Container,
  styled,
  IconButton,
  Typography,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const StyledFooter = styled("footer")(() => ({
  width: "100%",
  padding: "24px 0",
  backgroundColor: "#111827",
    color: "#fff",
}));

const Footer = () => {
  return (
    <StyledFooter id="contato">
      <Container maxWidth="sm">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={2}
        >
          <Box
            display="flex"
            justifyContent="center"
            gap={2}
          >
            <IconButton
              component="a"
              href="https://github.com/EvandroR2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir perfil no GitHub"
              sx={{ color: "#fff" }}
            >
              <GitHubIcon />
            </IconButton>

            <IconButton
              component="a"
              href="https://www.linkedin.com/in/evandro-edgariano-b8b627184/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir perfil no LinkedIn"
              sx={{ color: "#fff" }}
            >
              <LinkedInIcon />
            </IconButton>

            <IconButton
              component="a"
              href="mailto:evandroedgariano@gmail.com"
              aria-label="Enviar e-mail"
              sx={{ color: "#fff" }}
            >
              <EmailIcon />
            </IconButton>
          </Box>

          <Typography
            variant="body2"
            textAlign="center"
          >
            © {new Date().getFullYear()} Evandro Edgariano — Todos os direitos
            reservados
          </Typography>
        </Box>
      </Container>
    </StyledFooter>
  );
};

export default Footer;