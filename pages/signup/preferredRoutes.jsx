import * as React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import PreferredRoute from '../components/PreRoute'
export default function preferredRoutes() {
  const items = []

  for (let i = 0; i < 3; i++) {
    items.push(<PreferredRoute id={i + 1} />)
  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Preferred Routes
      </Typography>
      <Grid container spacing={3}>
        {items}
      </Grid>
    </React.Fragment>
  )
}
