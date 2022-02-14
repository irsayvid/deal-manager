import { Button, Container, Grid, Paper } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../components/AuthContext'
import axios from 'axios'
import Typography from '@mui/material/Typography'

const DealerDashboard = () => {
  const { user } = useAuth()
  const [drivers, setDrivers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      try {
        const token = localStorage.getItem('token')
        if (token) {
          const resp = await axios.get('/api/dashboard/dealer', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          setDrivers(resp.data.results)
        }
      } catch (err) {
        console.log(err)
      }
      setLoading(false)
    })()
  }, [])

  const handleClick = async () => {}

  const handleDriverBooking = (driver) => {}

  return (
    <div style={{ minHeight: '100vh' }}>
      <Container>
        <h1>
          Welcome {user.fullName} to{' '}
          {`${user.type[0].toUpperCase()}${user.type.slice(1)}`} Dashboard
        </h1>

        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <section>
              <Grid container spacing={2}>
                {drivers.length > 0
                  ? drivers.map((driver) => (
                      <Grid key={driver.id} item xs={4}>
                        <Paper elevation={3} sx={{ padding: '1rem' }}>
                          <Typography variant="h5" gutterBottom component="div">
                            {driver.driver.fullName}
                          </Typography>
                          <Typography variant="p" gutterBottom component="div">
                            {driver.driver.email}
                          </Typography>
                          <div style={{ marginTop: '1rem' }}>
                            <div>
                              <Typography
                                variant="subtitle"
                                gutterBottom
                                component="div"
                              >
                                From &rarr; {driver.fromCity},{' '}
                                {driver.fromState}
                              </Typography>
                              <Typography
                                variant="subtitle"
                                gutterBottom
                                component="div"
                              >
                                To &larr; {driver.toCity}, {driver.toState}
                              </Typography>
                            </div>
                          </div>
                          <Button
                            onClick={() => handleDriverBooking(driver)}
                            sx={{ marginTop: '1rem' }}
                            variant="contained"
                          >
                            Book Now
                          </Button>
                        </Paper>
                      </Grid>
                    ))
                  : null}
              </Grid>
            </section>

            {/* <section style={{ marginTop: '2rem' }}>
              <h2>Your Bookings</h2>
            </section> */}
          </>
        )}
      </Container>
    </div>
  )
}

export default DealerDashboard
