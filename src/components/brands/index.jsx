import Image from 'next/image'

import {
  Container,
  Wrapper,
  Card,
} from './styles'

function Brands() {
  return (
    <Container>
      <Wrapper>
        <Card>
          <Image
          src="/brastemplogo.svg"
          width={65}
          height={65}
          />
        </Card>

        <Card>
          <Image
          src="/consullogo.svg"
          width={65}
          height={65}
          />
        </Card>

        <Card>
        <Image
          src="/eletroluxlogo.svg"
          width={65}
          height={65}
          />
        </Card>

        <Card>
        <Image
          src="/lglogo.svg"
          width={65}
          height={65}
          />
        </Card>

        <Card>
        <Image
          src="/samsunglogo.svg"
          width={65}
          height={65}
          />
        </Card>

        <Card>
        <Image
          src="/generaleletriclogo.svg"
          width={65}
          height={65}
          />
        </Card>
      </Wrapper>
    </Container>
  )
}

export default Brands;
