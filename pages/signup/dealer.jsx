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
import DealerInfo from './DealerInfo'
import Main from './Main'
import axios from 'axios'
import { useRouter } from 'next/router'

const steps = ['Basic Info', 'Material Info']

function StepContent({
  step,
  mainValues,
  setMainValues,
  dealerValues,
  setDealerValues,
}) {
  switch (step) {
    case 0:
      return <Main values={mainValues} setValues={setMainValues} />
    case 1:
      return <DealerInfo values={dealerValues} setValues={setDealerValues} />
    default:
      throw new Error('Unknown step')
  }
}

const theme = createTheme()

export default function Checkout() {
  const router = useRouter()
  const [activeStep, setActiveStep] = React.useState(0)

  const [mainValues, setMainValues] = React.useState({
    password: '',
    showPassword: false,
    fullName: '',
    email: '',
    mobile: '',
  })

  const [dealerValues, setDealerValues] = React.useState({
    natureOfMaterial: '',
    quantity: '',
    weight: '',
    state: '',
    city: '',
  })
  const [loading, setLoding] = React.useState(false)

  const handleNext = async () => {
    if (activeStep === 0) {
      setActiveStep(activeStep + 1)
    }
    if (activeStep === 1) {
      const fullData = {
        ...mainValues,
        ...dealerValues,
      }
      try {
        setLoding(true)
        await axios.post('/api/signup/dealer', fullData)
        setLoding(false)
        router.push('/login')
      } catch (err) {
        console.error(err.message)
        setLoding(false)
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
                  Your can find the list of drivers at your current location
                  from the dashboard.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <StepContent
                  step={activeStep}
                  mainValues={mainValues}
                  setMainValues={setMainValues}
                  dealerValues={dealerValues}
                  setDealerValues={setDealerValues}
                />
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
