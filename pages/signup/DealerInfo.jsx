import * as React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'

export default function DealerInfo({ values, setValues }) {
  console.log(values)
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Material Info
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            value={values.natureOfMaterial}
            onChange={(e) =>
              setValues((values) => ({
                ...values,
                natureOfMaterial: e.target.value,
              }))
            }
            required
            id="natureOfMaterial"
            label="Nature of Material"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            value={values.quantity}
            onChange={(e) =>
              setValues((values) => ({
                ...values,
                quantity: e.target.value,
              }))
            }
            required
            type="number"
            id="quantity"
            label="Quantity"
            helperText="Mention number of units"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            value={values.weight}
            onChange={(e) =>
              setValues((values) => ({
                ...values,
                weight: e.target.value,
              }))
            }
            required
            type="number"
            id="weight"
            label="Total Weight"
            helperText="Mention in kilograms"
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            value={values.state}
            onChange={(e) =>
              setValues((values) => ({
                ...values,
                state: e.target.value,
              }))
            }
            required
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={values.city}
            onChange={(e) =>
              setValues((values) => ({
                ...values,
                city: e.target.value,
              }))
            }
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
