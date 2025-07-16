import { Box, Container, styled, IconButton,Typography, Grid } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {

    const StyledFooter = styled("div")(({ theme }) => ({
      backgroundColor: theme.palette.secondary.contrastText,
      display:"flex",
      alignItems:"center",
      textAlign:"center"


  }))




  return (
    <>
        <StyledFooter>
            <Box pt={2} pb={2}>
                <Container maxWidth="sm" >
                    <Grid container spacing={2} display="flex" justifyContent="center" pb={3}>
                        <Grid size={{ xs: 8 ,md: 12}}>
                            <Box display="flex" alignItems="center" justifyContent="space-around" pb={1}>
                                <IconButton onClick={() => window.open("https://github.com/EvandroR2")}>
                                    <GitHubIcon />
                                </IconButton>
                                <IconButton onClick={() => window.open("https://www.linkedin.com/in/evandro-edgariano-b8b627184/")}>
                                    <LinkedInIcon />
                                </IconButton>
                                <IconButton href="mailto:evandroedgariano@gmail.com" target="_blank">
                                    <EmailIcon />
                                </IconButton>
                            </Box>
                            <Typography textAlign="center">
                                © 2025 Evandro Edgariano - All rights reserved
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </StyledFooter>
      
    </>
  )
}

export default Footer

