import { Box, Container, Grid, Typography, styled } from "@mui/material";
import AvatarEvandro from "../../../../assets/images/perfilSite74x74.png";
import DownloadIcon from "@mui/icons-material/Download";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import StyledButton from "../../../../components/styledButton/styledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const StyledHero = styled("section")(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, #0d1b2a)`,
  color: theme.palette.primary.contrastText,
  position: "relative",
  overflow: "hidden",
}));

const StyledImg = styled("img")(({ theme }) => ({
  width: "280px",
  borderRadius: "50%",
  border: `3px solid ${theme.palette.primary.contrastText}`,
  boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
}));

const Hero = () => {
  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          
          {/* TEXTO */}
          <Grid xs={12} md={6}>
            <Typography variant="h5" mb={1} sx={{ opacity: 0.8 }}>
              Olá, eu sou
            </Typography>

            <Typography variant="h2" fontWeight="bold">
              Evandro Edgariano
            </Typography>

            <Typography variant="h4" color="secondary" mt={1}>
              Desenvolvedor Full Stack
            </Typography>

            <Typography variant="body1" mt={3} maxWidth="500px">
              Desenvolvo aplicações modernas utilizando React, C# e APIs,
              focando em performance, organização e experiência do usuário.
            </Typography>

            {/* BOTÕES */}
            <Box mt={4} display="flex" gap={2} flexWrap="wrap">
              <StyledButton
                onClick={() => window.open("/curriculoLinkedin.pdf", "_blank")}
              >
                <DownloadIcon />
                <Typography>Download CV</Typography>
              </StyledButton>

              <StyledButton
                onClick={() =>
                  (window.location.href = "mailto:evandroedgariano@gmail.com")
                }
              >
                <MailOutlineIcon />
                <Typography>Contato</Typography>
              </StyledButton>
            </Box>
          </Grid>

          {/* IMAGEM */}
          <Grid xs={12} md={6}>
            <Box position="relative" display="flex" justifyContent="center">
              
              {/* Background animado */}
              <Box position="absolute" width="140%" top={-120}>
                <AnimatedBackground />
              </Box>

              <StyledImg src={AvatarEvandro} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;