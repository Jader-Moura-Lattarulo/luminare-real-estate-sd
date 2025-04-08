import {
  AvatarList,
  CardComponent,
  CustomChart,
  CustomTable,
  Header,
} from '@/components'
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

  const mockTableData = {
    headers: ['Name', 'Email', 'Actions'],
    rows: [
      [
        <span>Nome 1</span>,
        <span>Nome1@email.com</span>,
        <button>ACTION</button>,
      ],
      [
        <span>Nome 2</span>,
        <span>Nome2@email.com</span>,
        <button>ACTION</button>,
      ],
      [
        <span>Nome 3</span>,
        <span>Nome3@email.com</span>,
        <button>ACTION</button>,
      ],
    ],
  }

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent> CARD </CardComponent>
        <CardComponent>
          <AvatarList ListData={mockListData} />{' '}
        </CardComponent>
        <CardComponent>
          <CustomTable
            headers={mockTableData.headers}
            rows={mockTableData.rows}
          />
        </CardComponent>
        <CardComponent>
          <CustomChart labels={['Jan', 'Fev', 'Mar', 'Abr']} data={[1234.42, 4321.65, 9834.53,1235.4]} type='line'/>
        </CardComponent>
      </Container>
    </>
  )
}

export default Home
