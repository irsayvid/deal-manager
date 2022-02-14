import '../styles/globals.css'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Container from '@mui/material/Container'
import { AuthContextProvider } from '../components/AuthContext'
import { useRouter } from 'next/router'
import ProtectedRoute from '../components/ProtectedRoute'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <AuthContextProvider>
      <NavBar />
      <Container
        component="main"
        sx={{ minHeight: '78vh', display: 'flex', alignItems: 'center' }}
      >
        {router.pathname.startsWith('/dashboard') ? (
          <ProtectedRoute>
            <Component {...pageProps} />
          </ProtectedRoute>
        ) : (
          <Component {...pageProps} />
        )}
      </Container>
      <Footer />
    </AuthContextProvider>
  )
}

export default MyApp
