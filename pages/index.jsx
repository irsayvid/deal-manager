import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import NextLink from 'next/link'
import ServicesCard from '../components/servicescard'
// import Hero from '../public/hero.jpg'
const featuredPosts = [
  {
    title: 'For Dealers',
    description:
      'Dealers can book drivers through our application for transporting their goods in their interested routes.',
    image:
      'https://images.unsplash.com/photo-1628846231746-b4ed87a0abef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80',
    imageLabel: 'Image Text',
  },
  {
    title: 'For Drivers',
    description:
      'Drivers Home can see the list of Dealers that have booked them having similar interest routes.',
    image:
      'https://images.unsplash.com/photo-1611448746128-7c39e03b71e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80',
    imageLabel: 'Image Text',
  },
]

const theme = createTheme()

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <Paper
            sx={{
              position: 'relative',
              backgroundColor: 'grey.800',
              color: '#fff',
              mb: 4,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundImage:
                'https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1118&q=80',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                backgroundColor: 'rgba(0,0,0,.3)',
              }}
            />
            <Grid container>
              <Grid item md={6}>
                <Box
                  sx={{
                    position: 'relative',
                    p: { xs: 3, md: 6 },
                    pr: { md: 0 },
                  }}
                >
                  <Typography
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom
                  >
                    Dealiver
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    Waiting for a perfect Deal? We have your back.
                  </Typography>
                  <NextLink href="/signup">
                    <Button variant="contained">Find a deal now !</Button>
                  </NextLink>
                </Box>
              </Grid>
            </Grid>
          </Paper>
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <ServicesCard key={post.title} post={post} />
            ))}
          </Grid>
        </main>
      </Container>
    </ThemeProvider>
  )
}
