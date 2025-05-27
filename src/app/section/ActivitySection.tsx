import DescriptionIcon from '@mui/icons-material/Description'
import { CustomSection } from '@/components/Section/CustomSection'
import { CustomSectionTitle } from '@/components/Section/SectionTitle'
import { Text } from '@/foundation/Text/Text'
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react'
import Link from 'next/link'

const ActivitySection = () => {
  const tableHeader = ['이름', '내용', '상세정보']

  const FirstActivityView = () => {
    return (
      <TableRow key={'algorithm study'}>
        <TableCell>
          <Text variant="subtitle5">알고리즘 스터디</Text>
        </TableCell>
        <TableCell>
          <Text variant="body2" className="text-sm font-semibold">
            · 7개월간 주 5문제씩 알고리즘 문제 해결, 팀원들과 토론을 통해 코드
            개선
          </Text>
          <Text variant="body2" className="text-sm font-semibold">
            · 프로그래머스 216문제, 백준 265문제 해결
          </Text>
          <Text variant="body2" className="text-sm font-semibold">
            · Solved AC 골드2 달성
          </Text>
        </TableCell>

        <TableCell>
          <Link
            href={'https://github.com/singyuKang/Swift_Cording_Test'}
            target="_blank"
          >
            <DescriptionIcon color="primary" />
          </Link>
        </TableCell>
      </TableRow>
    )
  }

  const SecondActivityView = () => {
    return (
      <TableRow key={'woowacourse'}>
        <TableCell>
          <Text variant="subtitle5">우아한테크코스 7기 웹 프리코스</Text>
        </TableCell>
        <TableCell>
          <Text variant="body2" className="text-sm font-semibold">
            · Javascript 프로그래밍 기술
          </Text>
          <Text variant="body2" className="text-sm font-semibold">
            · Jest를 활용한 단위 테스트 경험
          </Text>
        </TableCell>

        <TableCell>
          <Link
            href={
              'https://singyukang.tistory.com/category/%EC%9A%B0%EC%95%84%ED%95%9C%ED%85%8C%ED%81%AC%EC%BD%94%EC%8A%A4'
            }
            target="_blank"
          >
            <DescriptionIcon color="primary" />
          </Link>
        </TableCell>
      </TableRow>
    )
  }

  const ThirdActivityView = () => {
    return (
      <TableRow key={'naverboostcamp'}>
        <TableCell>
          <Text variant="subtitle5">네이버 부스트캠프 iOS 베이직 과정</Text>
        </TableCell>
        <TableCell>
          <Text variant="body2" className="text-sm font-semibold">
            · Swift 프로그래밍 기술
          </Text>
          <Text variant="body2" className="text-sm font-semibold">
            · 팀 과제를 통해 커뮤니케이션과 문제 해결의 중요성
          </Text>
        </TableCell>

        <TableCell>
          <Link
            href={
              'https://gist.github.com/singyuKang/bbff61ea299448420e8409c80b69b454'
            }
            target="_blank"
          >
            <DescriptionIcon color="primary" />
          </Link>
        </TableCell>
      </TableRow>
    )
  }

  return (
    <CustomSection id={'Activity'}>
      <CustomSectionTitle title={'Activity'} />
      <Table aria-label="customized activity table">
        <TableHeader>
          {tableHeader.map((headerItem, index) => (
            <TableColumn key={index}>{headerItem}</TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {FirstActivityView()}
          {SecondActivityView()}
          {ThirdActivityView()}
        </TableBody>
      </Table>
    </CustomSection>
  )
}

export default ActivitySection
