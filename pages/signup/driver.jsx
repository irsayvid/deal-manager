import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import DriverInfo from './DriverInfo'
import Main from './Main'
import PreferredRoutes from './preferredRoutes'
import axios from 'axios'
import { useRouter } from 'next/router'

const steps = ['Basic Info', 'Vehicle & Experience', 'Preferred Routes']

function StepContent({
  step,
  mainValues,
  setMainValues,
  driverValues,
  setDriverValues,
  routes,
  setRoutes,
}) {
  switch (step) {
    case 0:
      return <Main values={mainValues} setValues={setMainValues} />
    case 1:
      return <DriverInfo values={driverValues} setValues={setDriverValues} />
    case 2:
      return <PreferredRoutes routes={routes} setRoutes={setRoutes} />
    default:
      throw new Error('Unknown step')
  }
}

const theme = createTheme()

export default function Checkout() {
  const router = useRouter()
  const [loading, setLoading] = React.useState(false)
  const [activeStep, setActiveStep] = React.useState(0)
  const [mainValues, setMainValues] = React.useState({
    password: '',
    showPassword: false,
    fullName: '',
    email: '',
    mobile: '',
  })
  const [driverValues, setDriverValues] = React.useState({
    transporterName: '',
    capacity: '',
    drivingExperience: '',
    age: '',
    truckNumber: '',
  })

  const [routes, setRoutes] = React.useState({
    1: { fromState: '', fromCity: '', toState: '', toCity: '' },
    2: { fromState: '', fromCity: '', toState: '', toCity: '' },
    3: { fromState: '', fromCity: '', toState: '', toCity: '' },
  })

  const handleNext = async () => {
    if (activeStep !== 2) {
      setActiveStep(activeStep + 1)
    }
    if (activeStep === 2) {
      const data = {
        ...mainValues,
        ...driverValues,
        routes: {
          ...routes,
        },
      }
      try {
        setLoading(true)
        await axios.post('/api/signup/driver', data)
        setLoading(false)
        router.push('/login')
      } catch (err) {
        setLoading(false)
        console.log(err.message)
      }
    }
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Sign Up
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for choosing us.
                </Typography>
                <Typography variant="subtitle1">
                  Your can find the list of dealers who chose you from the
                  dashboard.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <StepContent
                  step={activeStep}
                  mainValues={mainValues}
                  setMainValues={setMainValues}
                  driverValues={driverValues}
                  setDriverValues={setDriverValues}
                  routes={routes}
                  setRoutes={setRoutes}
                />{' '}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                    disabled={loading}
                  >
                    {activeStep === steps.length - 1 ? 'Sign Up' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  )
}
