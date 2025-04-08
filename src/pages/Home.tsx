import { AvatarList, CardComponent, Header } from '@/components'
import { Container } from '@mui/material'
import { currencyConverter } from '@/utils'

function Home() {
  const mockListData = [
    {
      avatar: '/luminare-avatar.png',
      name: 'Nome Sobrenome 1',
      subtitle: currencyConverter(1000.0),
    },
    {
      avatar: '/luminare-avatar.png',
      name: 'Nome Sobrenome 2',
      subtitle: currencyConverter(2000.0),
    },
    {
      avatar: '/luminare-avatar.png',
      name: 'Nome Sobrenome 3',
      subtitle: currencyConverter(3000.0),
    },
  ]

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent> CARD </CardComponent>
        <CardComponent>
          <AvatarList ListData={mockListData} />{' '}
        </CardComponent>
      </Container>
    </>
  )
}

export default Home
