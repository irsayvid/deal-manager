import * as React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'

export default function preferredRoute(props) {
  return (
    <React.Fragment>
      <Typography variant="subtitle2" m={3} gutterBottom>
        Preferred Route {props.id}
      </Typography>
      <Grid container spacing={3} ml={0.5}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="fromstate"
            name="fromstate"
            label="From State"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="fromcity"
            name="fromcity"
            label="From City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="tostate"
            name="tostate"
            label="To State"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="tocity"
            name="tocity"
            label="To City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
