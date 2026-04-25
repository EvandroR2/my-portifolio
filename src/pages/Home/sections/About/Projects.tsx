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
      title: "Lista de Compras",
      description: "Aplicação simples utilizando HTML, CSS e JavaScript.",
      link: "#",
    },
    {
      title: "Calendário",
      description: "Projeto com manipulação de datas.",
      link: "#",
    },
    {
      title: "Formulário",
      description: "Validação de campos com JavaScript.",
      link: "#",
    },
  ];

  return (
    <StyledProjects>
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
            <Grid xs={12} md={4} key={index}>
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
                    size="small"
                    onClick={() => window.open(project.link)}
                  >
                    Ver Projeto
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