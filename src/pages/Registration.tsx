import { Box, Container, Grid } from '@mui/material'
import { BannerImage } from '@/components'

function Registration() {
  return (
    <>
      <Box>
        <Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ alignItems: 'center', display: 'flex', height: '100vh' }}
          >
            <Container maxWidth="sm">
              <h1>REGISTRATION</h1>
            </Container>
            <Grid item sm={6} sx={{ display: { xs: 'none', sm: 'block' } }}>
              <BannerImage />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Registration
