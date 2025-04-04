import styled from 'styled-components'

const LoginArea = styled.div`
  background: #777;
`

const LoginImage = styled.div`
  background-image: url(/login-image.png);
  background-size: cover;
  height: 100vh;
  width: 50vw;
`

function Registration() {
  return (
    <>
      <LoginArea>REGISTRATION</LoginArea>
      <LoginImage />
    </>
  )
}

export default Registration
