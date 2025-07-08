import { Box, Container, Grid, styled, Typography } from "@mui/material"
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground"
import Avatar from "../../../../assets/images/avatar.jpg"
import StyledButton from "../../../../components/styledButton/styledButton"

const Projects = () => {
    
    const StyledProjects = styled("div")(({ theme }) => ({
      backgroundColor: theme.palette.primary.dark,
      display:"flex",
      alignItems:"center",
      height:"100vh",
      [theme.breakpoints.up('xs')]:{
        paddingTop:"100px"

      },
      [theme.breakpoints.up('md')]:{
        paddingTop:"0"

      }


  }))
  const StyledImg = styled("img")(({ theme }) => ({
    width: "75%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText} `

  }))
  return (
    <StyledProjects>
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid size={{ xs: 12 ,md: 5}}>
                    <Typography color="primary.contrastText" variant="h2" textAlign={"center"} pb={2}>
                      Projetos
                    </Typography>
                    <Typography color="primary.contrastText" variant="h3" textAlign={"center"} >
                      Abaixo segue pequenos projetos que estão adicionado, com apenas HTML, 
                      CSS e JavaScript espero que todos gostem.
                    </Typography>
                </Grid>
                <Grid size={{ xs: 12 ,md: 5}}>
                  <Box position="relative" >
                    <Box position="absolute" width={"150%"} top={-100} right={0} >
                      <AnimatedBackground />
                    </Box>
                  </Box>
                  <Box position="relative" textAlign={"center"} >
                    <StyledImg src={Avatar} />
                  </Box>
                </Grid>
                <Grid size={{ xs: 12 ,md: 12}} display="flex" justifyContent="center" alignItems={"center"}>
                  <Box>
                    <Box padding={"0.5rem"} >
                      <StyledButton onClick={()=> console.log("Donwload")}>
                        <Typography>Videos</Typography>
                      </StyledButton>
                      </Box>
                      <Box padding={"0.5rem"} >
                      <StyledButton onClick={()=> console.log("Donwload")}>
                          <Typography>PlayList</Typography>
                      </StyledButton>
                      </Box>
                      <Box padding={"0.5rem"} >
                      <StyledButton onClick={()=> console.log("Donwload")}>
                          <Typography>Livros</Typography>
                      </StyledButton>
                      </Box>
                      <Box padding={"0.5rem"} >
                      <StyledButton onClick={()=> console.log("Donwload")}>
                          <Typography>Streaming</Typography>
                      </StyledButton>
                      </Box>
                      <Box padding={"0.5rem"} >
                      <StyledButton onClick={()=> console.log("Donwload")}>
                          <Typography>Tabela</Typography>
                      </StyledButton>
                      </Box>
                      <Box padding={"0.5rem"} >
                      <StyledButton onClick={()=> console.log("Donwload")}>
                          <Typography>Formulario</Typography>
                      </StyledButton>
                      </Box>
                      <Box padding={"0.5rem"} >
                      <StyledButton onClick={()=> console.log("Donwload")}>
                          <Typography>Calendario 2023</Typography>
                      </StyledButton>
                      </Box>
                      <Box padding={"0.5rem"} >
                        <StyledButton onClick={()=> console.log("Donwload")}>
                            <Typography>Lista de compras</Typography>
                        </StyledButton>
                      </Box>
                  </Box>
                </Grid>
            </Grid>
        </Container>
    </StyledProjects>
  )
}

export default Projects
