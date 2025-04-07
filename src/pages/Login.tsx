import { Box, Container, Grid } from '@mui/material'
import {
  BannerImage,
  FormComponent,
  Logo,
  StyledH1,
  StyledP,
} from '@/components'
import { pxToRem } from '@/utils'

function Login() {
  return (
    <>
      <Box>
        <Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              alignItems: 'center',
              display: 'flex',
              height: '100vh',
              justifyContent: 'center',
            }}
          >
            <Container maxWidth="sm">
              <Box sx={{ marginBottom: pxToRem(24) }}>
                <Logo height={180} width={220} />
              </Box>
              <Box sx={{ marginBottom: pxToRem(24) }}>
                <StyledH1>Bem-vindo</StyledH1>
                <StyledP>Digite sua senha e email para logar</StyledP>
              </Box>
              <FormComponent
                inputs={[
                  { type: 'email', placeholder: 'Email' },
                  { type: 'password', placeholder: 'Senha' },
                ]}
                buttons={[
                  { className: 'primary', type: 'submit', children: 'Login' },
                ]}
                message={{
                  msg: 'Sucesso!!!',
                  type: 'success',
                }}
              />
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

export default Login
