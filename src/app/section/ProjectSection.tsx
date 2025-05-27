'use client'
import { StackChip } from '@/components/Chip/StackChip'
import ExtraInfoDialog from '@/components/Dialog/ExtraInfoDialog'
import { CustomSection } from '@/components/Section/CustomSection'
import { CustomSectionTitle } from '@/components/Section/SectionTitle'
import { Titleli } from '@/components/Ul/Titleli'
import { Text } from '@/foundation/Text/Text'
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react'

const ProjectSection = () => {
  const ProjectSectionVAProp: ProjectSectionVAProp = {}
  return <ProjectSectionView {...ProjectSectionVAProp} />
}
type ProjectSectionVAProp = Record<string, unknown>

const ProjectSectionView = ({}: ProjectSectionVAProp) => {
  const tableHeader = ['프로젝트', '소개 / 사용기술', '상세정보']
  const FirstProjectView = () => {
    return (
      <TableRow key={'ibkLoan'}>
        <TableCell>
          <Text variant="subtitle5">IBK저축은행 간편대출</Text>
        </TableCell>
        <TableCell>
          <Text variant="body2" className="text-sm font-semibold">
            React 기반 IBK-저축은행 간편 대출신청 모바일 웹 개발
          </Text>
          <StackChip
            stackList={[
              'React',
              'Typescript',
              'Recoil',
              'Tailwind',
              'Axios',
              'Webpack',
              'GitHub',
            ]}
          />
        </TableCell>

        <TableCell>
          <ExtraInfoDialog
            dialogTitle={'IBK-저축은행 대출신청 - 2024.02~ 2024.06(5개월)'}
          >
            <Titleli
              title={'주요 업무'}
              list={[
                'React 기반 IBK-저축은행 대출신청 웹 애플리케이션 개발 및 유지보수',
                '보이스피싱 방지, 대출자가진단, 휴대폰인증, 약관동의, 신분증촬영, 정보입력 페이지 제작',
                'Recoil을 사용해 공통 컴포넌트 Alert, PopUp, Loading 구현, 대출신청시 필요한 데이터 관리',
                '외부 인증 서비스 연동을 통해 신분증 인증 프로세스 구현 및 리다이렉트 처리',
                '대출 재신청시 처음부터 다시 시작해야 되는 불편함 발생하여 신청번호를 기준으로 대출 이어하기 페이지 제작하여 사용자에게 편의성 제공',
              ]}
            />
            <Titleli
              title={'트러블 슈팅'}
              list={[
                '신분증 인증 또는 새로고침시 Recoil 데이터 손실문제 발생하여 sessionStorage를 사용해 이탈율 감소에 기여',
                '삼성 인터넷 다크모드에서 SVG 기반 Lottie 애니메이션의 색상 왜곡 문제를 Canvas 렌더링 방식으로 변경하여 해결하고, 안정적인 사용자 경험을 제공',
                '사용자가 버튼을 여러 번 클릭하여 API 중복 호출 문제 발생, Debounce를 적용해 추가 클릭을 차단하여 서버 부하 감소 + 호출문제 해결',
                'JWT 토큰을 통해 휴대폰 인증후(로그인) 안전하게 서비스를 이용할 수 있도록 개선',
              ]}
            />
            <Titleli
              title={'개발 성과'}
              list={[
                '대출신청 전환율 20% 달성',
                '일일 대출 신청 건수 최대 510건 달성',
              ]}
            />
          </ExtraInfoDialog>
        </TableCell>
      </TableRow>
    )
  }

  const SecondProjectView = () => {
    return (
      <TableRow key={'hbBankApp'}>
        <TableCell>
          <Text variant="subtitle5">HB저축은행 앱</Text>
        </TableCell>
        <TableCell>
          <Text variant="body2" className="text-sm font-semibold">
            React Native + TypeScript를 사용하여 HB저축은행 모바일 앱 개발
          </Text>
          <StackChip
            stackList={[
              'ReactNative',
              'Typescript',
              'ReactQuery',
              'Recoil',
              'Axios',
              'GitHub',
            ]}
          />
        </TableCell>

        <TableCell>
          <ExtraInfoDialog
            dialogTitle={'HB저축은행 앱 - 2023.05 ~ 2023.12(8개월)'}
          >
            <Titleli
              title={'주요 업무'}
              list={[
                'React Native를 사용하여 HB-저축은행 모바일 앱 개발 및 유지보수',
                '상품안내, 전계좌조회, 계좌상세, 증명서발급, 약관, 주소검색, 대출철회, 대출상환, 대출상환 스케줄 조회 페이지 제작',
                'CodePush를 활용해 고객사 요청사항을 실시간으로 빠르게 반영',
              ]}
            />
            <Titleli
              title={'트러블 슈팅'}
              list={[
                'JavaScript 코드를 TypeScript로 마이그레이션하여 코드의 안정성 향상, 개발 과정에서의 오류 발견을 용이',
                'RESTful API와 React Query 데이터 캐싱으로 로딩 시간이 길었던 전계좌조회 API 호출 횟수를 줄이고, 속도를 30% (약 3초) 개선',
                'WebView, injectedJavaScript, postMessage를 활용하여 앱 내에서 전자 계약 서명 기능을 구현, 사용자가 앱을 벗어나지 않고 서명을 완료가능하도록 구현',
                'React Native Bridge를 활용하여 금융 앱에 필요한 보안 네이티브 모듈을 크로스 플랫폼에서 사용 가능하도록 구현',
                '금융 상품 탐색 과정을 완전 탐색에서 이진 탐색으로 변경하여 탐색 속도를 0.02초 단축시키고 사용자 경험을 개선',
              ]}
            />
            <Titleli
              title={'개발 성과'}
              list={[
                'App Center 기준 Android 4500명, iOS 850명 Active Devices 증가',
                '앱을 통한 신규 예금 계좌 개설 20% 증가, 대출 건수 30% 증가',
              ]}
            />
          </ExtraInfoDialog>
        </TableCell>
      </TableRow>
    )
  }

  const ThirdProjectView = () => {
    return (
      <TableRow key={'ibkBankApp'}>
        <TableCell>
          <Text variant="subtitle5">IBK저축은행 앱</Text>
        </TableCell>
        <TableCell>
          <Text variant="body2" className="text-sm font-semibold">
            React Native + JavaScript를 사용하여 IBK저축은행 모바일 앱 개발
          </Text>
          <StackChip
            stackList={[
              'ReactNative',
              'JavaScript',
              'Redux',
              'Axios',
              'GitHub',
            ]}
          />
        </TableCell>

        <TableCell>
          <ExtraInfoDialog
            dialogTitle={'IBK-저축은행 앱 - 2022.08 ~ 2023.02(7개월)'}
          >
            <Titleli
              title={'주요 업무'}
              list={[
                'React Native를 사용하여 IBK-저축은행 앱 개발 및 유지보수',
                '예금/대출 상품, 상품 안내, 거래내역, 만기 수령 예상액 계산, 약관 페이지 제작',
                '수신상품 신청과정 구현(상품 사전안내 -> 약관동의 -> 신청 주소 입력 -> 계좌비밀번호 설정, 뱅킹 설정 -> 최종신청 완료)',
                'Sentry를 통한 Application 에러 트래킹',
                'CodePush를 통해 고객사 요청사항을 실시간으로 빠르게 반영',
              ]}
            />
            <Titleli
              title={'트러블 슈팅'}
              list={[
                'Context API 활용 : Alert, Loading, Toast 공통 컴포넌트 구현을 통해 코드 중복 제거 및 유지보수성 향상',
                '약관 동의 화면 개선 : WebView를 사용하여 약관 내용 변경 시 앱 업데이트 없이 즉시 반영 가능하도록 개선',
                '수신상품 신청 데이터 관리 : Redux를 사용하여 페이지 간 데이터 전달의 불편함 해소 및 상태 관리 개선.',
              ]}
            />
            <Titleli
              title={'개발 성과'}
              list={[
                '구글플레이 50만 다운로드 달성',
                '앱을 통한 신규 예금 계좌 개설 30% 증가, 대출 건수 30% 증가',
              ]}
            />
          </ExtraInfoDialog>
        </TableCell>
      </TableRow>
    )
  }

  return (
    <CustomSection id={'Project'}>
      <CustomSectionTitle title={'PROJECT'} subTitle={''} />
      <Table aria-label="customized project table">
        <TableHeader>
          {tableHeader.map((headerItem, index) => (
            <TableColumn key={index}>{headerItem}</TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {FirstProjectView()}
          {SecondProjectView()}
          {ThirdProjectView()}
        </TableBody>
      </Table>
    </CustomSection>
  )
}

export default ProjectSection
