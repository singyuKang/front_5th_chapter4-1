import { CustomSection } from '@/components/Section/CustomSection'
import { CustomSectionTitle } from '@/components/Section/SectionTitle'
import { Stack } from '@mui/material'
import Link from 'next/link'

const BlogSection = () => {
  const BlogSectionVAProp: BlogSectionVAProp = {}
  return <BlogSectionView {...BlogSectionVAProp} />
}
type BlogSectionVAProp = Record<string, unknown>

const BlogSectionView = ({}: BlogSectionVAProp) => {
  return (
    <CustomSection id={'Blog'}>
      <CustomSectionTitle
        title={'Blog'}
        subTitle={'기록, 지식공유를 위해 작성 하고 있습니다.'}
      />
      <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'center'}>
        <ul style={{ flex: '1', minWidth: '300px' }}></ul>
        <Stack direction={'row'}>
          <Stack direction={'row'} alignItems={'center'}>
            <Link href={'https://singyukang.tistory.com/'} target="_blank">
              블로그 바로가기
            </Link>
          </Stack>
        </Stack>
      </Stack>
      <iframe
        title={'tistory blog'}
        src="https://singyukang.tistory.com/"
        width={'100%'}
        height={'100%'}
        style={{ minHeight: '400px', background: 'white' }}
      />
    </CustomSection>
  )
}

export default BlogSection
