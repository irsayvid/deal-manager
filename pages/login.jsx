import * as React from 'react'
import { styled } from '@mui/system'
import TabsUnstyled from '@mui/base/TabsUnstyled'
import TabsListUnstyled from '@mui/base/TabsListUnstyled'
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled'
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled'
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useAuth } from '../components/AuthContext'

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
}

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
    border-radius: 3px;
    outline: 2px solid ${blue[200]};
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${blue[50]};
    color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: ${blue[500]};
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`

const theme = createTheme()

export default function SignIn() {
  const { login } = useAuth()
  const [data, setData] = React.useState({
    email: '',
    password: '',
    opt: '',
  })

  const handlePasswordSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    }
    login(data)
  }

  const handleOtpSubmit = () => {}

  return (
    <Container
      component="main"
      sx={{ minHeight: '78vh', display: 'flex', alignItems: 'center' }}
    >
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" mb={3}>
              Sign in
            </Typography>
            <TabsUnstyled defaultValue={0}>
              <TabsList>
                <Tab>Login with password</Tab>
                <Tab>Login with OTP</Tab>
              </TabsList>
              <TabPanel value={0}>
                <Box
                  component="form"
                  onSubmit={handlePasswordSubmit}
                  noValidate
                  sx={{ mt: 1 }}
                >
                  <TextField
                    value={data.email}
                    onChange={(e) =>
                      setData((data) => ({ ...data, email: e.target.value }))
                    }
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    value={data.password}
                    onChange={(e) =>
                      setData((data) => ({ ...data, password: e.target.value }))
                    }
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>
                </Box>
              </TabPanel>
              <TabPanel value={1}>
                <Box
                  component="form"
                  onSubmit={handleOtpSubmit}
                  noValidate
                  sx={{ mt: 1 }}
                >
                  <TextField
                    value={data.email}
                    onChange={(e) =>
                      setData((data) => ({ ...data, email: e.target.value }))
                    }
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    value={data.otp}
                    onChange={(e) =>
                      setData((data) => ({ ...data, otp: e.target.value }))
                    }
                    margin="normal"
                    required
                    fullWidth
                    id="otp"
                    label="OTP"
                    name="otp"
                    inputProps={{ inputMode: 'numeric', pattern: '^d{6}$' }}
                    autoFocus
                    disabled
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Send OTP
                  </Button>
                </Box>
              </TabPanel>
            </TabsUnstyled>
            <Grid container>
              <Grid item>
                New to this site?&nbsp;
                <Link href="#" variant="body2">
                  {'Sign Up'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </ThemeProvider>
    </Container>
  )
}
