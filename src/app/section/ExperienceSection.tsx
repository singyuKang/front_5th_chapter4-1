'use client'
import { StackChip } from '@/components/Chip/StackChip'
import { UrlChip } from '@/components/Chip/UrlChip'
import ExtraInfoDialog from '@/components/Dialog/ExtraInfoDialog'
import { CustomSection } from '@/components/Section/CustomSection'
import { CustomSectionTitle } from '@/components/Section/SectionTitle'
import { Companyli } from '@/components/Ul/Companyli'
import { Titleli } from '@/components/Ul/Titleli'
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react'

const ExperienceSection = () => {
  const tableHeaderItem = ['회사', '업무', '서비스']

  return (
    <CustomSection id={'Experience'}>
      <CustomSectionTitle title={'Experience'} />
      <Table aria-label="경력 정보 테이블">
        <TableHeader>
          {tableHeaderItem.map((headerItem) => (
            <TableColumn key={headerItem} align="center">
              {headerItem}
            </TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          <TableRow key={'엔투소프트'}>
            <TableCell>
              <Companyli
                name={'엔투소프트'}
                homepageUrl={'https://www.n2soft.co.kr'}
                position={['프론트엔드 개발자']}
                period={{
                  start: '2022/08',
                  end: new Date(),
                }}
              />
            </TableCell>
            <TableCell>
              <Titleli
                list={[
                  'React, React Native를 활용해 저축은행 앱과 웹 개발 및 유지보수',
                  '저축은행 사용자에게 편리한 경험을 주는 서비스 개발',
                ]}
              />
            </TableCell>
            <TableCell align="center">
              <ExtraInfoDialog dialogTitle={'엔투소프트'}>
                <div>
                  <Titleli
                    title={'IBK저축은행 간편대출 모바일 웹'}
                    list={[
                      'IBK저축은행 앱을 통한 대출 신청 수 는 6,102건 그중 대출 승인 수는 529건으로 전환율이 9%(23.06 / 햇살론 상품 기준)',
                      '앱설치 -> 휴대폰 본인인증 -> 전자금융가입 -> 공동인증서&금융인증서 등 필요로 단계별 요구사항에 따른 이탈율 증가',
                      '이를 개선하기 위해 모바일 웹을 통한 간편 신청 서비스 구현 <본인인증 -> 서류제출 간편인증(네이버,토스,카카오,패스) -> 대출조건확인 -> 계좌인증/대출실행 완료>',
                    ]}
                  />
                  <div className="flex flex-row">
                    <UrlChip
                      title={'홈페이지'}
                      url={'https://webloan.ibksb.co.kr/?GOODS_CD=760143'}
                    />
                    {/* <UrlChip
                      title={'간편대출 접근 홈페이지'}
                      url={
                        'https://sbloan.ibksb.co.kr/ibk/m/loan_form/loan_step00.jsp'
                      }
                    /> */}
                  </div>
                </div>
                <div>
                  <Titleli
                    title={'IBK저축은행 앱, HB저축은행 앱'}
                    list={[
                      '여/수신, 저축은행 미가입자 고객들을 위한 모바일 앱',
                      '저축은행 OPEN API를 활용한 여/수신 서비스',
                      '수신계좌개설, 대출신청, 계좌관리, 즉시이체, 온라인 서류제출 등 저축은행 비대면 서비스 제공',
                    ]}
                  />
                  <div className="flex flex-row ">
                    <UrlChip
                      title={'IBK App Store'}
                      url={
                        'https://play.google.com/store/apps/details?id=kr.co.ibksb.ibank&hl=ko'
                      }
                    />
                    <UrlChip
                      title={'HB App Store'}
                      url={
                        'https://apps.apple.com/kr/app/hb%EC%A0%80%EC%B6%95%EC%9D%80%ED%96%89/id1537521778'
                      }
                    />
                  </div>
                </div>
                <StackChip
                  title={'What I used'}
                  stackList={[
                    'ReactNative',
                    'React',
                    'JavaScript',
                    'Typescript',
                    'ReactQuery',
                    'Redux',
                    'Recoil',
                    'StyledComponent',
                    'Webpack',
                    'GitHub',
                  ]}
                />
              </ExtraInfoDialog>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </CustomSection>
  )
}

export default ExperienceSection
