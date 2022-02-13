import * as React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'

export default function DriverInfo() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Material Info
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="transporterName"
            label="Transporter Name"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="capacity"
            label="Vehicle Capacity"
            helperText="Mention in kilograms"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id=" drivingExperience"
            label="Driving Experience"
            helperText="Mention in years"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id=" age"
            label="Age"
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
