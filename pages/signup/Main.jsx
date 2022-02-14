import * as React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Input from '@mui/material/Input'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import FormControl from '@mui/material/FormControl'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
export default function Main({ values, setValues }) {
  console.log(values)

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Basic Info
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField
            value={values.fullName}
            onChange={(e) =>
              setValues((values) => ({ ...values, fullName: e.target.value }))
            }
            required
            id="fullName"
            name="fullName"
            label="Full name"
            fullWidth
            autoComplete="name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            value={values.email}
            onChange={(e) =>
              setValues((values) => ({ ...values, email: e.target.value }))
            }
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={values.mobile}
            onChange={(e) =>
              setValues((values) => ({ ...values, mobile: e.target.value }))
            }
            required
            type="number"
            id="mobile"
            name="mobile"
            label="Mobile Number"
            fullWidth
            autoComplete="mobile"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl variant="standard" fullWidth>
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={(e) =>
                setValues((values) => ({ ...values, password: e.target.value }))
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
