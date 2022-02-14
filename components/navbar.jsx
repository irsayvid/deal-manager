import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import GlobalStyles from '@mui/material/GlobalStyles'
import NextLink from 'next/link'
import { useAuth } from './AuthContext'
import { useRouter } from 'next/router'

function PricingContent() {
  const { user, logout } = useAuth()
  const router = useRouter()

  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
      />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <NextLink href="/">
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1, cursor: 'pointer' }}
            >
              Deal Manager
            </Typography>
          </NextLink>
          <nav></nav>
          {user ? (
            <>
              <Button
                variant="text"
                onClick={() => router.push(`/dashboard/${user.type}`)}
                sx={{ my: 1, mx: 1.5 }}
              >
                Dashboard
              </Button>
              <Button
                variant="outlined"
                onClick={() => logout()}
                sx={{ my: 1, mx: 1.5 }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <NextLink href="/signup">
                <Button variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                  Signup
                </Button>
              </NextLink>
              <NextLink href="/login">
                <Button variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                  Login
                </Button>
              </NextLink>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}

export default function Pricing() {
  return <PricingContent />
}
