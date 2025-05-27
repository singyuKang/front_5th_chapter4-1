'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
// import WindowIcon from '@assets/icon/window.svg'
import { Device } from '@common/device/Device'
import { GlobalHeaderCategory } from '@components/Page/GlobalHeader/GlobalHeaderMenuCategory'
import { GlobalHeaderMenuItem } from '@components/Page/GlobalHeader/GlobalHeaderMenuItem'
import { GlobalHeaderMenuPanel } from '@components/Page/GlobalHeader/GlobalHeaderMenuPanel'
// import { GlobalHeaderSubMenuItem } from '@components/Page/GlobalHeader/GlobalHeaderSubMenuItem'
// import { links } from '@data/link'
import { Text } from '@foundation/Text/Text'
// import { Products } from '@modules/product/domain/data'
import './GlobalHeaderMenuItem.css'

type GlobalHeaderDesktopMenuProps = object

const GlobalHeaderDesktopMenu = ({}: GlobalHeaderDesktopMenuProps) => {
  const [activeTab, setActiveTab] = useState<string | null>(null)
  const pathname = usePathname()
  useEffect(() => {
    setActiveTab(null)
  }, [pathname])

  const desktop = Device.desktop

  return (
    <nav role="tablist" className="flex flex-row">
      <ul className={`flex flex-row gap-[44px] items-center`}>
        <li>
          <Text
            variant="subtitle1"
            role="tab"
            tabIndex={0}
            as="a"
            onMouseOver={() => setActiveTab('tab-deposit')}
            onFocus={() => setActiveTab('tab-deposit')}
            className={`cursor-pointer header-hover-animation ${
              activeTab === 'tab-deposit' ? 'tab-underline' : ''
            }`}
          >
            예금상품
          </Text>
          <GlobalHeaderMenuPanel
            device={desktop}
            align="left"
            active={activeTab === 'tab-deposit'}
            banner={{
              title: '매회전주기(12개월)마다\n자동회전하는 변동금리형 정기예금',
              subtitle: '비대면 회전정기예금',
              url: `/deposit/`,
            }}
            onBlur={() => setActiveTab(null)}
          >
            <GlobalHeaderCategory device={desktop} title="입출금 상품">
              {/* <GlobalHeaderMenuItem
                device={desktop}
                title="보통예금"
                href={`/deposit/${Products.checkingAccount}`}
                onFocus={() => setActiveTab('tab-deposit')}
              />
              <GlobalHeaderMenuItem
                device={desktop}
                title="비대면 보통예금"
                href={`/deposit/${Products.onlineCheckingAccount}`}
                onFocus={() => setActiveTab('tab-deposit')}
              />
              <GlobalHeaderMenuItem
                device={desktop}
                title="기업자유예금"
                href={`/deposit/${Products.businessSavingsAccount}`}
                onFocus={() => setActiveTab('tab-deposit')}
              /> */}
            </GlobalHeaderCategory>
            <GlobalHeaderCategory device={desktop} title="목돈마련 상품">
              {/* <GlobalHeaderMenuItem
                device={desktop}
                title="정기적금"
                href={`/deposit/${Products.fixedDeposit}`}
                onFocus={() => setActiveTab('tab-deposit')}
              />
              <GlobalHeaderMenuItem
                device={desktop}
                title="비대면 정기적금"
                href={`/deposit/${Products.onlineFixedDeposit}`}
                onFocus={() => setActiveTab('tab-deposit')}
              /> */}
            </GlobalHeaderCategory>
            <GlobalHeaderCategory device={desktop} title="목돈운용 상품">
              {/* <GlobalHeaderMenuItem
                device={desktop}
                title="정기예금"
                href={`/deposit/${Products.timeDeposit}`}
                onFocus={() => setActiveTab('tab-deposit')}
              />
              <GlobalHeaderMenuItem
                device={desktop}
                title="회전정기예금"
                href={`/deposit/${Products.renewableTimeDeposit}`}
                onFocus={() => setActiveTab('tab-deposit')}
              />
              <GlobalHeaderMenuItem
                device={desktop}
                title="6개월 회전정기예금"
                href={`/deposit/${Products.sixMonthRenewableTimeDeposit}`}
                onFocus={() => setActiveTab('tab-deposit')}
              />
              <GlobalHeaderMenuItem
                device={desktop}
                title="비대면 정기예금"
                href={`/deposit/${Products.onlineTimeDeposit}`}
                onFocus={() => setActiveTab('tab-deposit')}
              />
              <GlobalHeaderMenuItem
                device={desktop}
                title="비대면 회전정기예금"
                href={`/deposit/${Products.onlineRenewableTimeDeposit}`}
                onFocus={() => setActiveTab('tab-deposit')}
              />
              <GlobalHeaderMenuItem
                device={desktop}
                title="비대면 6개월 회전정기예금"
                href={`/deposit/${Products.onlineSixMonthRenewableTimeDeposit}`}
                onFocus={() => setActiveTab('tab-deposit')}
              /> */}
            </GlobalHeaderCategory>
            <GlobalHeaderCategory device={desktop} title="절세혜택">
              {/* <GlobalHeaderMenuItem
                device={desktop}
                title="비과세종합저축"
                href={`/deposit/${Products.taxFreeDeposit}`}
                onFocus={() => setActiveTab('tab-deposit')}
              /> */}
            </GlobalHeaderCategory>
            <GlobalHeaderCategory
              device={desktop}
              title="비대면서비스 이용안내"
            >
              <GlobalHeaderMenuItem
                device={desktop}
                title="비대면서비스 이용안내"
                href="/app-service-guide"
                onFocus={() => setActiveTab('tab-deposit')}
              />
            </GlobalHeaderCategory>
          </GlobalHeaderMenuPanel>
        </li>
        <li>
          <Text
            variant="subtitle1"
            role="tab"
            tabIndex={0}
            as="a"
            onMouseOver={() => setActiveTab('tab-loan')}
            onFocus={() => setActiveTab('tab-loan')}
            className={`cursor-pointer header-hover-animation ${
              activeTab === 'tab-loan' ? 'tab-underline' : ''
            }`}
          >
            대출상품
          </Text>
          <GlobalHeaderMenuPanel
            device={desktop}
            align="left"
            active={activeTab === 'tab-loan'}
            banner={{
              title: '쉽고 빠르게 받아보는\n든든한 HB 신용대출',
              subtitle: 'HB신용대출',
              url: '/loan/credit-loan',
            }}
            onBlur={() => setActiveTab(null)}
            activeTab={'tab-loan'}
          >
            <GlobalHeaderCategory device={desktop} title="신용대출 상품">
              {/* <GlobalHeaderMenuItem
                device={desktop}
                title="HB신용대출"
                href={`/loan/${Products.creditLoan}`}
                onFocus={() => setActiveTab('tab-loan')}
              />
              <GlobalHeaderMenuItem
                device={desktop}
                title="HB여행(女幸)론"
                href={`/loan/${Products.womanLoan}`}
                onFocus={() => setActiveTab('tab-loan')}
              />
              <GlobalHeaderMenuItem
                device={desktop}
                title="HB화이트론"
                href={`/loan/${Products.whiteLoan}`}
                onFocus={() => setActiveTab('tab-loan')}
              /> */}
            </GlobalHeaderCategory>
            {/* <GlobalHeaderCategory device={desktop} title="담보대출 상품">
              <GlobalHeaderMenuItem
                device={desktop}
                title="담보대출"
                href={`/loan/${Products.securedLoan}`}
                onFocus={() => setActiveTab('tab-loan')}
              />
              {
                <GlobalHeaderMenuItem
                  device={desktop}
                  title="HB뉴비즈론"
                  href={`/loan/${Products.mortgageLoan}`}
                  onFocus={() => setActiveTab('tab-loan')}
                />
              }
            </GlobalHeaderCategory> */}
            {/* <GlobalHeaderCategory device={desktop} title="예적금 담보대출">
              <GlobalHeaderMenuItem
                device={desktop}
                title="예적금 담보대출"
                href={`/loan/${Products.depositCollateralLoan}`}
                onFocus={() => setActiveTab('tab-loan')}
              />
            </GlobalHeaderCategory> */}
            {/* <GlobalHeaderCategory device={desktop} title="스탁론">
              <GlobalHeaderMenuItem
                device={desktop}
                title="스탁론 안내"
                href={`/loan/${Products.stockLoan}`}
                onFocus={() => setActiveTab('tab-loan')}
              />
            </GlobalHeaderCategory> */}
            <GlobalHeaderCategory device={desktop} title="대출지원">
              <GlobalHeaderMenuItem
                device={desktop}
                title="본인인증 (신용조회동의)"
                href="/loan/credit-inquiry-agreement"
                onFocus={() => setActiveTab('tab-loan')}
              />
              <GlobalHeaderMenuItem
                device={desktop}
                title="온라인서류제출"
                href="/loan/online-document"
                onFocus={() => setActiveTab('tab-loan')}
              />
              <GlobalHeaderMenuItem
                device={desktop}
                title="금리인하요구권 신청"
                href="/loan/rate-reduction"
                onFocus={() => setActiveTab('tab-loan')}
              />
              <GlobalHeaderMenuItem
                device={desktop}
                title="대출 청약철회 신청"
                href="/loan/cancellation"
                onFocus={() => setActiveTab('tab-loan')}
              />
            </GlobalHeaderCategory>
          </GlobalHeaderMenuPanel>
        </li>
        <li>
          <Text
            variant="subtitle3"
            role="tab"
            tabIndex={0}
            as="a"
            onMouseOver={() => setActiveTab('tab-disclosure')}
            onFocus={() => setActiveTab('tab-disclosure')}
            className={`cursor-pointer header-hover-animation ${
              activeTab === 'tab-disclosure' ? 'tab-underline' : ''
            }`}
          >
            상품공시
          </Text>
          <GlobalHeaderMenuPanel
            device={desktop}
            align="center"
            active={activeTab === 'tab-disclosure'}
            onBlur={() => setActiveTab(null)}
            // className="ml-[12px]"
          >
            <GlobalHeaderMenuItem
              device={desktop}
              title="이용메뉴얼"
              href="/product/user-manual"
              menuNameClass={'text-subtitle3 text-primary'}
              onFocus={() => setActiveTab('tab-disclosure')}
            />
            <GlobalHeaderMenuItem
              device={desktop}
              title="예금상품"
              href="/product/deposit"
              menuNameClass={'text-subtitle3 text-primary'}
              onFocus={() => setActiveTab('tab-disclosure')}
            />
            <GlobalHeaderMenuItem
              device={desktop}
              title="대출상품"
              href="/product/loan"
              menuNameClass={'text-subtitle3 text-primary'}
              onFocus={() => setActiveTab('tab-disclosure')}
            />
            <GlobalHeaderMenuItem
              device={desktop}
              title="수수료 안내"
              href="/product/fee"
              menuNameClass={'text-subtitle3 text-primary'}
              onFocus={() => setActiveTab('tab-disclosure')}
            />
          </GlobalHeaderMenuPanel>
        </li>
        <li>
          <Text
            variant="subtitle3"
            role="tab"
            tabIndex={0}
            as="a"
            onMouseOver={() => setActiveTab('tab-customer-center')}
            onFocus={() => setActiveTab('tab-customer-center')}
            className={`cursor-pointer header-hover-animation ${
              activeTab === 'tab-customer-center' ? 'tab-underline' : ''
            }`}
          >
            고객센터
          </Text>
          <GlobalHeaderMenuPanel
            device={desktop}
            align="right"
            active={activeTab === 'tab-customer-center'}
            onBlur={() => setActiveTab(null)}
            ulClassName={'mr-[130px]'}
          >
            <GlobalHeaderCategory device={desktop} title="이용안내">
              <GlobalHeaderMenuItem
                device={desktop}
                title="비대면서비스 이용안내"
                href="/app-service-guide"
                onFocus={() => setActiveTab('tab-customer-center')}
              />
              <GlobalHeaderMenuItem
                device={desktop}
                title="예금이자 계산기"
                href="/calculator/deposit"
                onFocus={() => setActiveTab('tab-customer-center')}
              />
              <GlobalHeaderMenuItem
                device={desktop}
                title="대출 가이드"
                href="/loan-guide"
                onFocus={() => setActiveTab('tab-customer-center')}
              />
              <GlobalHeaderMenuItem
                device={desktop}
                title="대출이자 계산기"
                href="/calculator/loan"
                onFocus={() => setActiveTab('tab-customer-center')}
              />
              <GlobalHeaderMenuItem
                device={desktop}
                title="타행자동이체 출금 우선순위 안내"
                href="/automatic-withdrawal"
                onFocus={() => setActiveTab('tab-customer-center')}
              />
              <GlobalHeaderMenuItem
                device={desktop}
                title="상속 금융재산 인출 안내"
                href="/inherited-assets-withdrawal-guide"
                onFocus={() => setActiveTab('tab-customer-center')}
              />
            </GlobalHeaderCategory>
            <GlobalHeaderCategory device={desktop} title="고객지원">
              <GlobalHeaderMenuItem
                device={desktop}
                title="상담전화 안내"
                href="/call-guide"
                onFocus={() => setActiveTab('tab-customer-center')}
              />
              <GlobalHeaderMenuItem
                device={desktop}
                title="보안프로그램 설치안내"
                href="/installation-guide"
                onFocus={() => setActiveTab('tab-customer-center')}
              />
              <GlobalHeaderMenuItem
                device={desktop}
                title="공동인증센터"
                href="/certification/management"
                onFocus={() => setActiveTab('tab-customer-center')}
              />
            </GlobalHeaderCategory>
            <GlobalHeaderCategory device={desktop} title="소식/자료">
              <GlobalHeaderMenuItem
                device={desktop}
                title="공지사항"
                href="/notice"
                onFocus={() => setActiveTab('tab-customer-center')}
              />
              <GlobalHeaderMenuItem
                device={desktop}
                title="자주하는 질문"
                href="/faq"
                onFocus={() => setActiveTab('tab-customer-center')}
              />
              <GlobalHeaderMenuItem
                device={desktop}
                title="서식자료"
                href="/document"
                onFocus={() => setActiveTab('tab-customer-center')}
              />
            </GlobalHeaderCategory>
            <GlobalHeaderCategory device={desktop} title="민원신청">
              <GlobalHeaderMenuItem
                device={desktop}
                title="전자민원 신청"
                href="/complaint"
                onFocus={() => setActiveTab('tab-customer-center')}
              />
              <GlobalHeaderMenuItem
                device={desktop}
                title="고객의 소리"
                href="/customer-feedback"
                onFocus={() => setActiveTab('tab-customer-center')}
              />
            </GlobalHeaderCategory>
          </GlobalHeaderMenuPanel>
        </li>
        <li>
          <Text
            variant="subtitle3"
            role="tab"
            tabIndex={0}
            as="a"
            onMouseOver={() => setActiveTab('tab-consumer-protection')}
            onFocus={() => setActiveTab('tab-consumer-protection')}
            className={`cursor-pointer header-hover-animation ${
              activeTab === 'tab-consumer-protection' ? 'tab-underline' : ''
            }`}
          >
            소비자보호
          </Text>
          <GlobalHeaderMenuPanel
            device={desktop}
            align="right"
            active={activeTab === 'tab-consumer-protection'}
            onBlur={() => setActiveTab(null)}
          >
            <GlobalHeaderCategory device={desktop} title="금융소비자보호">
              <GlobalHeaderMenuItem
                device={desktop}
                title="금융소비자보호 체계"
                href="/consumer-protection-system"
                onFocus={() => setActiveTab('tab-consumer-protection')}
              />
              <GlobalHeaderMenuItem
                device={desktop}
                title="채무조정 지원제도 안내"
                href="/debt-adjustment-support"
                onFocus={() => setActiveTab('tab-consumer-protection')}
              />
              <GlobalHeaderMenuItem
                device={desktop}
                title="개인채무자보호 안내"
                href="/debt-collection-guidelines"
                onFocus={() => setActiveTab('tab-consumer-protection')}
              />
              <GlobalHeaderMenuItem
                device={desktop}
                title="채권추심 직원조회"
                href="/employee-inquiry"
                onFocus={() => setActiveTab('tab-consumer-protection')}
              />
            </GlobalHeaderCategory>
            {/* <GlobalHeaderCategory device={desktop} title="금융소비자 공시">
              <GlobalHeaderMenuItem
                device={desktop}
                title="금융소비자 공시"
                href="/financial-consumer-disclosure"
                onFocus={() => setActiveTab('tab-consumer-protection')}
              />
              <GlobalHeaderMenuItem
                device={desktop}
                title="전기통신금융사기 공시"
                href="/telecommunications-fraud"
                onFocus={() => setActiveTab('tab-consumer-protection')}
              />
            </GlobalHeaderCategory>
            <GlobalHeaderCategory device={desktop} title="금융소비자 가이드">
              <GlobalHeaderMenuItem
                device={desktop}
                title="금융생활 가이드"
                href="/financial-life-guide"
                onFocus={() => setActiveTab('tab-consumer-protection')}
              />
              <GlobalHeaderMenuItem
                device={desktop}
                title="금융사기 유의사항 안내"
                href="/fraud-alerts"
                onFocus={() => setActiveTab('tab-consumer-protection')}
              />
              <GlobalHeaderMenuItem
                device={desktop}
                title="피싱/파밍 주의 안내"
                href="/phishing-caution"
                onFocus={() => setActiveTab('tab-consumer-protection')}
              />
              <GlobalHeaderMenuItem
                device={desktop}
                title="금융사기예방법"
                href="/fraud-prevention"
                onFocus={() => setActiveTab('tab-consumer-protection')}
              />
            </GlobalHeaderCategory>
            <GlobalHeaderCategory device={desktop} title="금융소비자의 권리">
              <GlobalHeaderMenuItem
                device={desktop}
                title="위법계약해지권 안내"
                href="/illegal-contract-termination-guide"
                onFocus={() => setActiveTab('tab-consumer-protection')}
              />
              <GlobalHeaderMenuItem
                device={desktop}
                title="자료열람요구권 안내"
                href="/data-access-request-guide"
                onFocus={() => setActiveTab('tab-consumer-protection')}
              />
              <GlobalHeaderMenuItem
                device={desktop}
                title="청약철회권 안내"
                href="/subscription-revocation-guide"
                onFocus={() => setActiveTab('tab-consumer-protection')}
              />
              <GlobalHeaderMenuItem
                device={desktop}
                title="민원사무편람"
                href="/complain-office-work"
                onFocus={() => setActiveTab('tab-consumer-protection')}
              />
            </GlobalHeaderCategory>
            <GlobalHeaderCategory device={desktop} title="개인정보보호">
              <GlobalHeaderMenuItem
                device={desktop}
                title="고객권리안내문"
                href="/customer-rights"
                onFocus={() => setActiveTab('tab-consumer-protection')}
              />
              <GlobalHeaderMenuItem
                device={desktop}
                title="개인정보처리방침"
                href="/privacy-policy"
                onFocus={() => setActiveTab('tab-consumer-protection')}
              />
              <GlobalHeaderMenuItem
                device={desktop}
                title="위탁업체 및 제공업체 현황"
                href="/delegation-status"
                onFocus={() => setActiveTab('tab-consumer-protection')}
              />
              <GlobalHeaderMenuItem
                device={desktop}
                title="신용정보 활용체제"
                href="/credit-info-system"
                onFocus={() => setActiveTab('tab-consumer-protection')}
              />
              <GlobalHeaderMenuItem
                device={desktop}
                title="본인정보이용제공조회"
                href={links.infoAccessHistory}
                target="_blank"
                onFocus={() => setActiveTab('tab-consumer-protection')}
              />
              <GlobalHeaderMenuItem
                device={desktop}
                title={`영상정보 처리기기\n운영관리방침`}
                href="/video-policy"
                onFocus={() => setActiveTab('tab-consumer-protection')}
              />
            </GlobalHeaderCategory>
            <GlobalHeaderCategory device={desktop} title="예금자보호안내">
              <GlobalHeaderMenuItem
                device={desktop}
                title="예금자보호법 안내"
                href="/depositor-protection-act-guide"
                onFocus={() => setActiveTab('tab-consumer-protection')}
              />
              <GlobalHeaderMenuItem
                device={desktop}
                title="보호금융상품등록부"
                href="/insured-financial-product-list"
                onFocus={() => setActiveTab('tab-consumer-protection')}
              />
            </GlobalHeaderCategory> */}
          </GlobalHeaderMenuPanel>
        </li>
        <li>
          <Text
            variant="subtitle3"
            role="tab"
            tabIndex={0}
            as="a"
            onMouseOver={() => setActiveTab('tab-bank-information')}
            onFocus={() => setActiveTab('tab-bank-information')}
            className={`cursor-pointer header-hover-animation ${
              activeTab === 'tab-bank-information' ? 'tab-underline' : ''
            }`}
          >
            은행안내
          </Text>
          <GlobalHeaderMenuPanel
            device={desktop}
            align="right"
            active={activeTab === 'tab-bank-information'}
            onBlur={() => setActiveTab(null)}
          >
            <GlobalHeaderCategory device={desktop} title="은행소개">
              <GlobalHeaderMenuItem
                device={desktop}
                title="CEO 인사말"
                href="/ceo-message"
                onFocus={() => setActiveTab('tab-bank-information')}
              />
              <GlobalHeaderMenuItem
                device={desktop}
                title="연혁"
                href="/history"
                onFocus={() => setActiveTab('tab-bank-information')}
              />
              <GlobalHeaderMenuItem
                device={desktop}
                title="조직도"
                href="/organization"
                onFocus={() => setActiveTab('tab-bank-information')}
              />
            </GlobalHeaderCategory>
            <GlobalHeaderCategory device={desktop} title="경영공시">
              <GlobalHeaderMenuItem
                device={desktop}
                title="요약 공시"
                href="/summary-disclosure"
                onFocus={() => setActiveTab('tab-bank-information')}
              />
              <GlobalHeaderMenuItem
                device={desktop}
                title="수시 공시"
                href="/interim-disclosure"
                onFocus={() => setActiveTab('tab-bank-information')}
              />
              <GlobalHeaderMenuItem
                device={desktop}
                title="결산 공시"
                href="/periodic-disclosure"
                onFocus={() => setActiveTab('tab-bank-information')}
              />
            </GlobalHeaderCategory>
            <GlobalHeaderCategory device={desktop} title="영업점안내">
              <GlobalHeaderMenuItem
                device={desktop}
                title="영업점 안내"
                href="/office"
                onFocus={() => setActiveTab('tab-bank-information')}
              />
            </GlobalHeaderCategory>
          </GlobalHeaderMenuPanel>
        </li>
        <li>
          <Link
            href={'links.internetBanking'}
            target="_blank"
            onMouseOver={() => setActiveTab(null)}
            onFocus={() => setActiveTab(null)}
            className="flex flex-row items-center cursor-pointer bg-animate"
            role="tab"
            prefetch={false}
          >
            <Text variant="subtitle2">인터넷뱅킹</Text>
            {/* <div className="w-[22px] h-[22px]">
              <WindowIcon />
            </div> */}
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default GlobalHeaderDesktopMenu
