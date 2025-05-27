import { Container } from 'src/components/Container/Container'
import { Page } from 'src/components/Page/Page'
import SectionContainer from './section/SectionContainer'

export default function Home() {
  const device = 'desktop'

  return (
    <Page device={device}>
      <Container device={device} variant="default" className="!px-0">
        <div className={['flex pt-[40px] flex-col'].join(' ').trim()}>
          <SectionContainer deviceClass={'w-full'} />
        </div>
      </Container>
    </Page>
  )
}
