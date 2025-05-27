import { CustomSection } from '@/components/Section/CustomSection'
import { CustomSectionTitle } from '@/components/Section/SectionTitle'
import { Text } from '@/foundation/Text/Text'

const EducationeSection = () => {
  return (
    <CustomSection id={'Education'}>
      <CustomSectionTitle title={'Education'} />
      <Text variant="subtitle5">
        전북대학교 컴퓨터공학과 졸업 (2016.03 ~ 2022.08)
      </Text>
    </CustomSection>
  )
}

export default EducationeSection
