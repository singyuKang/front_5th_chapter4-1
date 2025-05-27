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

const CertificateSection = () => {
  const tableHeader = ['이름', '취득일자']
  const FirstCertificateView = () => {
    return (
      <TableRow key={'algorithm study'}>
        <TableCell>
          <Text variant="subtitle5">정보처리기사</Text>
        </TableCell>
        <TableCell>
          <Text variant="subtitle5">2019.11.22</Text>
        </TableCell>
      </TableRow>
    )
  }

  return (
    <CustomSection id={'Certificate'}>
      <CustomSectionTitle title={'Certificate'} />
      <Table aria-label="customized certificate table">
        <TableHeader>
          {tableHeader.map((headerItem, index) => (
            <TableColumn key={index}>{headerItem}</TableColumn>
          ))}
        </TableHeader>
        <TableBody>{FirstCertificateView()}</TableBody>
      </Table>
    </CustomSection>
  )
}

export default CertificateSection
