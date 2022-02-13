import '../styles/globals.css'
import NavBar from './components/navbar'
import Footer from './components/footer'
import Container from '@mui/material/Container'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />

      <Container
        component="main"
        sx={{ minHeight: '78vh', display: 'flex', alignItems: 'center' }}
      >
        <Component {...pageProps} />
      </Container>
      <Footer />
    </>
  )
}

export default MyApp
