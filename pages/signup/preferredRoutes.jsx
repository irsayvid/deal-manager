import * as React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import PreferredRoute from '../../components/PreRoute'

export default function preferredRoutes() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Preferred Routes
      </Typography>
      <Grid container spacing={3}>
        {Array.from({ length: 3 }).map((_, i) => (
          <PreferredRoute key={i} id={i + 1} />
        ))}
      </Grid>
    </React.Fragment>
  )
}
