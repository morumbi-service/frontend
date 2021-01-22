import Image from 'next/image'

import {
  Container,
  Navigation,
  NavigationItem,
  NavigationButton,
  Text
} from './styles'

function Header() {
  return (
    <Container>
      <Image
        src='/mbLogo.svg'
        width={30}
        height={80}
      />
      <Navigation>
        <NavigationItem>Sobre Nós</NavigationItem>
        <NavigationItem>Serviços</NavigationItem>
        <NavigationButton>
          <Text>Fale Conosco</Text>
        </NavigationButton>
      </Navigation>
    </Container>
  )
}

export default Header
