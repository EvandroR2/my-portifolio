import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  styled,
} from "@mui/material";


const StyledProjects = styled("section")(({ theme }) => ({
  minHeight: "100vh",
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.primary.contrastText,
  paddingTop: "80px",
  paddingBottom: "80px",
}));

const Projects = () => {
  const projects = [
  {
    title: "Calendário e Agenda",
    description:
      "Calendário anual responsivo desenvolvido com HTML, CSS e JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/EvandroR2/meucalendario2023",
    demoUrl: "https://meucalendario2023.vercel.app/",
    image: "/images/Calendario2023.gif",
  },
];

  return (
    <StyledProjects id="projetos">
      <Container maxWidth="lg">

        {/* TÍTULO */}
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" fontWeight="bold">
            Projetos
          </Typography>

          <Typography variant="h6" mt={2} sx={{ opacity: 0.8 }}>
            Alguns projetos desenvolvidos para estudo e prática
          </Typography>
        </Box>

        {/* GRID DE CARDS */}
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Card
                sx={{
                  height: "100%",
                  backgroundColor: "#1b263b",
                  color: "#fff",
                  borderRadius: "16px",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h5" fontWeight="bold">
                    {project.title}
                  </Typography>

                  <Typography mt={2}>
                    {project.description}
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button
                    component="a"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver código
                  </Button>

                  <Button
                    component="a"
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver projeto
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

      </Container>
    </StyledProjects>
  );
};

export default Projects;