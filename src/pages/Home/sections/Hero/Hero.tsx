import { Box, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../components/styledButton/styledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {

  const StyledHero = styled("div")(({ theme }) => ({
      backgroundColor: theme.palette.primary.main,
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
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
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
            <Grid size={{ xs: 12 ,md: 7}}>
              <Typography color="primary.contrastText" variant="h1" textAlign={"center"} pb={2}>Evandro Edgariano</Typography>
              <Typography color="primary.contrastText" variant="h2" textAlign={"center"} >Developer</Typography>
              <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                <Grid size={{ xs: 12, md: 5}} display="flex" justifyContent="center">
                  <StyledButton onClick={()=> console.log("Donwload")}>
                      <DownloadIcon />
                      <Typography>
                        Download CV
                      </Typography>
                  </StyledButton>
                </Grid>
                <Grid size={{ xs: 12, md: 5}} display="flex" justifyContent="center">
                  <StyledButton onClick={()=> console.log("Contact Me")}>
                    <MailOutlineIcon />
                    <Typography>
                      Contact Me
                    </Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
      
    </>
  )
}

export default Hero
