import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import GlobalStyles from '@mui/material/GlobalStyles'

function PricingContent() {
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
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Company name
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="/"
              underline="hover"
              sx={{ my: 1, mx: 1.5 }}
            >
              Home
            </Link>
          </nav>
          <Button href="/signup" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Signup
          </Button>
          <Button href="/login" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Signin
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}

export default function Pricing() {
  return <PricingContent />
}
