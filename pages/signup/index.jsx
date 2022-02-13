import * as React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Link } from '@mui/material'
const theme = createTheme()

export default function index() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6}>
            <Link href="/signup/dealer" underline="none">
              <Box
                sx={{
                  display: 'flex',
                  padding: '20px',
                  color: 'primary.dark',
                  '&:hover': {
                    color: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                  },

                  borderColor: 'primary.dark',
                  borderBottom: 2,
                  justifyContent: 'space-between',
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    fontSize: 20,
                  }}
                  variant="subtitle1"
                  gutterBottom
                  component="div"
                >
                  Find a driver
                </Typography>
                <ArrowRightAltIcon sx={{ gridArea: 'icon', fontSize: 40 }} />
              </Box>
            </Link>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Link href="/signup/driver" underline="none">
              <Box
                sx={{
                  display: 'flex',
                  padding: '20px',
                  color: 'primary.dark',
                  '&:hover': {
                    color: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                  },

                  borderColor: 'primary.dark',
                  borderBottom: 2,
                  justifyContent: 'space-between',
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    fontSize: 20,
                  }}
                  variant="subtitle1"
                  gutterBottom
                  component="div"
                >
                  Deliver Goods
                </Typography>
                <ArrowRightAltIcon sx={{ gridArea: 'icon', fontSize: 40 }} />
              </Box>{' '}
            </Link>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  )
}
