'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { isNotNil } from 'ramda'
import CloseIcon from '@assets/icon/close.svg'
import MenuIcon from '@assets/icon/menu.svg'
import { Device } from '@common/device/Device'
import { GlobalHeaderCategory } from '@components/Page/GlobalHeader/GlobalHeaderMenuCategory'
import { GlobalHeaderMenuItem } from '@components/Page/GlobalHeader/GlobalHeaderMenuItem'
import { GlobalHeaderMenuPanel } from '@components/Page/GlobalHeader/GlobalHeaderMenuPanel'
import { GlobalHeaderMobileTab } from '@components/Page/GlobalHeader/GlobalHeaderMobileTab'
import { GlobalHeaderSubMenuItem } from '@components/Page/GlobalHeader/GlobalHeaderSubMenuItem'
// import { Products } from '@modules/product/domain/data'
// import { links } from '@data/link'

const Button = ({
  active,
  onClickOpen,
  onClickClose,
}: {
  active: boolean
  onClickOpen: () => void
  onClickClose: () => void
}) => (
  <div
    className="text-gray2 w-[20px] h-[20px]"
    onClick={() => (active ? onClickClose() : onClickOpen())}
  >
    {/* {active ? <CloseIcon /> : <MenuIcon />} */}
    {active ? <></> : <></>}
  </div>
)

interface GlobalHeaderMobileMenuProps {
  className?: string
}
const GlobalHeaderMobileMenu = ({ className }: GlobalHeaderMobileMenuProps) => {
  const pathname = usePathname()

  const [activeMenu, setActiveMenu] = useState<boolean>(false)
  const [activeTab, setActiveTab] = useState<string | null>(null)
  const mobile = Device.mobile

  const tabDepositRef = useRef<HTMLLIElement>(null)
  const tabLoanRef = useRef<HTMLLIElement>(null)
  const tabProductRef = useRef<HTMLLIElement>(null)
  const tabCustomerSupportRef = useRef<HTMLLIElement>(null)
  const tabConsumerProtectionRef = useRef<HTMLLIElement>(null)
  const tabBankRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    setActiveMenu(false)
  }, [pathname])

  return (
    <>
      <div className="fixed right-[20px] top-[22px]">
        <Button
          active={activeMenu}
          onClickOpen={() => {
            setActiveMenu(true)
            if (activeTab === null) {
              setActiveTab('tab-deposit')
            }
          }}
          onClickClose={() => setActiveMenu(false)}
        />
      </div>
      <section
        className={[
          'flex flex-row w-full relative z-30 bg-white border-t border-t-gray6',
          activeMenu ? null : 'hidden',
          className ?? '',
        ]
          .filter(isNotNil)
          .join(' ')
          .trim()}
      >
        <ul className="flex flex-col gap-[24px] py-[16px] w-[156px] h-[calc(100vh-64px)] bg-gray7">
          <GlobalHeaderMobileTab
            active={activeTab === 'tab-deposit'}
            onClick={() => {
              setActiveTab('tab-deposit')
              tabDepositRef.current?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            예금 상품
          </GlobalHeaderMobileTab>
          <GlobalHeaderMobileTab
            active={activeTab === 'tab-loan'}
            onClick={() => {
              setActiveTab('tab-loan')
              tabLoanRef.current?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            대출 상품
          </GlobalHeaderMobileTab>
          <GlobalHeaderMobileTab
            active={activeTab === 'tab-product'}
            onClick={() => {
              setActiveTab('tab-product')
              tabProductRef.current?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            상품 공시
          </GlobalHeaderMobileTab>
          <GlobalHeaderMobileTab
            active={activeTab === 'tab-customer-support'}
            onClick={() => {
              setActiveTab('tab-customer-support')
              tabCustomerSupportRef.current?.scrollIntoView({
                behavior: 'smooth',
              })
            }}
          >
            고객센터
          </GlobalHeaderMobileTab>
          <GlobalHeaderMobileTab
            active={activeTab === 'tab-consumer-protection'}
            onClick={() => {
              setActiveTab('tab-consumer-protection')
              tabConsumerProtectionRef.current?.scrollIntoView({
                behavior: 'smooth',
              })
            }}
          >
            소비자보호
          </GlobalHeaderMobileTab>
          <GlobalHeaderMobileTab
            active={activeTab === 'tab-bank'}
            onClick={() => {
              setActiveTab('tab-bank')
              tabBankRef.current?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            은행안내
          </GlobalHeaderMobileTab>
          {/* <GlobalHeaderMobileTab active={false}>
            인터넷 뱅킹
          </GlobalHeaderMobileTab> */}
        </ul>
        <div className="relative overflow-y-scroll grow">
          <GlobalHeaderMenuPanel device={mobile} align="right" active={true}>
            <GlobalHeaderCategory
              device={mobile}
              title="예금 상품"
              reference={tabDepositRef}
            >
              <GlobalHeaderMenuItem device={mobile} title="입출금 상품">
                {/* <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="보통예금"
                  href={`/deposit/${Products.checkingAccount}`}
                />
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="비대면 보통예금"
                  href={`/deposit/${Products.onlineCheckingAccount}`}
                />
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="기업자유예금"
                  href={`/deposit/${Products.businessSavingsAccount}`}
                /> */}
              </GlobalHeaderMenuItem>
              <GlobalHeaderMenuItem device={mobile} title="목돈마련 상품">
                {/* <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="정기적금"
                  href={`/deposit/${Products.fixedDeposit}`}
                />
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="비대면 정기적금"
                  href={`/deposit/${Products.onlineFixedDeposit}`}
                /> */}
              </GlobalHeaderMenuItem>
              <GlobalHeaderMenuItem device={mobile} title="목돈운용 상품">
                {/* <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="정기예금"
                  href={`/deposit/${Products.timeDeposit}`}
                />
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="회전정기예금"
                  href={`/deposit/${Products.renewableTimeDeposit}`}
                />
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="6개월 회전정기예금"
                  href={`/deposit/${Products.sixMonthRenewableTimeDeposit}`}
                />
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="비대면 정기예금"
                  href={`/deposit/${Products.onlineTimeDeposit}`}
                />
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="비대면 회전정기예금"
                  href={`/deposit/${Products.onlineRenewableTimeDeposit}`}
                />
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="비대면 6개월 회전정기예금"
                  href={`/deposit/${Products.onlineSixMonthRenewableTimeDeposit}`}
                /> */}
              </GlobalHeaderMenuItem>
              <GlobalHeaderMenuItem device={mobile} title="절세혜택">
                {/* <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="비과세종합저축"
                  href={`/deposit/${Products.taxFreeDeposit}`}
                /> */}
              </GlobalHeaderMenuItem>
              <GlobalHeaderMenuItem
                device={mobile}
                title="비대면서비스 이용안내"
              >
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="비대면서비스 이용안내"
                  href="/app-service-guide"
                />
              </GlobalHeaderMenuItem>
            </GlobalHeaderCategory>
            <GlobalHeaderCategory
              device={mobile}
              title="대출 상품"
              reference={tabLoanRef}
            >
              <GlobalHeaderMenuItem device={mobile} title="신용대출 상품">
                {/* <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="HB신용대출"
                  href={`/loan/${Products.creditLoan}`}
                />
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="HB여행(女幸)론"
                  href={`/loan/${Products.womanLoan}`}
                />
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="HB화이트론"
                  href={`/loan/${Products.whiteLoan}`}
                /> */}
                {/* <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="대출신청"
                  href={`/loan/credit-loan`}
                />
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="한도조회"
                  href="/loan/prequalification"
                /> */}
              </GlobalHeaderMenuItem>
              <GlobalHeaderMenuItem device={mobile} title="담보대출 상품">
                {/* <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="담보대출"
                  href={`/loan/${Products.securedLoan}`}
                />
                {
                  <GlobalHeaderSubMenuItem
                    device={mobile}
                    title="HB뉴비즈론"
                    href={`/loan/${Products.mortgageLoan}`}
                  />
                } */}
              </GlobalHeaderMenuItem>
              <GlobalHeaderMenuItem device={mobile} title="예적금 담보대출">
                {/* <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="예적금 담보대출"
                  href={`/loan/${Products.depositCollateralLoan}`}
                /> */}
              </GlobalHeaderMenuItem>
              <GlobalHeaderMenuItem device={mobile} title="스탁론">
                {/* <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="스탁론 안내"
                  href={`/loan/${Products.stockLoan}`}
                /> */}
              </GlobalHeaderMenuItem>
              <GlobalHeaderMenuItem device={mobile} title="대출지원">
                {/* <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="전자계약서 작성"
                  href="/loan/electronic-contract"
                /> */}
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="본인인증 (신용조회동의)"
                  href="/loan/credit-inquiry-agreement"
                />
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="온라인서류제출"
                  href="/loan/online-document"
                />
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="금리인하요구권"
                  href="/loan/rate-reduction"
                />
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="대출 청약철회 신청"
                  href="/loan/cancellation"
                />
              </GlobalHeaderMenuItem>
            </GlobalHeaderCategory>
            <GlobalHeaderCategory
              device={mobile}
              title="상품공시"
              reference={tabProductRef}
            >
              <GlobalHeaderMenuItem
                device={mobile}
                title="이용메뉴얼"
                href="/product/user-manual"
              />
              <GlobalHeaderMenuItem
                device={mobile}
                title="예금상품"
                href="/product/deposit"
              />
              <GlobalHeaderMenuItem
                device={mobile}
                title="대출상품"
                href="/product/loan"
              />
              <GlobalHeaderMenuItem
                device={mobile}
                title="수수료 안내"
                href="/product/fee"
              />
            </GlobalHeaderCategory>
            <GlobalHeaderCategory
              device={mobile}
              title="고객센터"
              reference={tabCustomerSupportRef}
            >
              <GlobalHeaderMenuItem device={mobile} title="이용안내">
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="비대면서비스 이용안내"
                  href="/app-service-guide"
                />
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="예금이자 계산기"
                  href="/calculator/deposit"
                />
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="대출 가이드"
                  href="/loan-guide"
                />
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="대출이자 계산기"
                  href="/calculator/loan"
                />
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="타행자동이체 출금 우선순위 안내"
                  href="/automatic-withdrawal"
                />
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="상속 금융재산 인출 안내"
                  href="/inherited-assets-withdrawal-guide"
                />
              </GlobalHeaderMenuItem>
              <GlobalHeaderMenuItem device={mobile} title="고객지원">
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="공지사항"
                  href="/notice"
                />
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="상담전화 안내"
                  href="/call-guide"
                />
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="자주하는 질문"
                  href="/faq"
                />
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="서식자료"
                  href="/document"
                />
                {/* <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="APP 이용안내"
                  href="/app-guide"
                /> */}
              </GlobalHeaderMenuItem>
              <GlobalHeaderMenuItem
                device={mobile}
                title="고객의 소리"
                href="/customer-feedback"
              />
              <GlobalHeaderMenuItem
                device={mobile}
                title="전자민원 신청"
                href="/complaint"
              />
            </GlobalHeaderCategory>
            <GlobalHeaderCategory
              device={mobile}
              title="소비자보호"
              reference={tabConsumerProtectionRef}
            >
              <GlobalHeaderMenuItem device={mobile} title="금융소비자보호">
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="금융소비자보호 체계"
                  href="/consumer-protection-system"
                />
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="채무조정 지원제도 안내"
                  href="/debt-adjustment-support"
                />
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="개인채무자보호 안내"
                  href="/debt-collection-guidelines"
                />
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="채권추심 직원조회"
                  href="/employee-inquiry"
                />
              </GlobalHeaderMenuItem>
              <GlobalHeaderMenuItem device={mobile} title="금융소비자 공시">
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="금융소비자 공시"
                  href="/financial-consumer-disclosure"
                />
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="전기통신금융사기 공시"
                  href="/telecommunications-fraud"
                />
              </GlobalHeaderMenuItem>
              <GlobalHeaderMenuItem device={mobile} title="금융소비자 가이드">
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="금융생활 가이드"
                  href="/financial-life-guide"
                />
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="금융사기 유의사항 안내"
                  href="/fraud-alerts"
                />
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="피싱/파밍 주의 안내"
                  href="/phishing-caution"
                />
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="금융사기예방법"
                  href="/fraud-prevention"
                />
              </GlobalHeaderMenuItem>
              <GlobalHeaderMenuItem device={mobile} title="금융소비자의 권리">
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="위법계약해지권 안내"
                  href="/illegal-contract-termination-guide"
                />
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="자료열람요구권 안내"
                  href="/data-access-request-guide"
                />
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="청약철회권 안내"
                  href="/subscription-revocation-guide"
                />
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="민원사무편람"
                  href="/complain-office-work"
                />
              </GlobalHeaderMenuItem>
              <GlobalHeaderMenuItem device={mobile} title="개인정보보호">
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="고객권리안내문"
                  href="/customer-rights"
                />
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="개인정보처리방침"
                  href="/privacy-policy"
                />
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="위탁업체 및 제공업체 현황"
                  href="/delegation-status"
                />
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="신용정보 활용체제"
                  href="/credit-info-system"
                />
                {/* <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="본인정보이용제공조회"
                  href={links.infoAccessHistory}
                  target="_blank"
                /> */}
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="영상정보 처리기기 운영관리방침"
                  href="/video-policy"
                />
              </GlobalHeaderMenuItem>
              <GlobalHeaderMenuItem device={mobile} title="예금자보호안내">
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="예금자보호법 안내"
                  href="/depositor-protection-act-guide"
                />
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="보호금융상품등록부"
                  href="/insured-financial-product-list"
                />
              </GlobalHeaderMenuItem>
            </GlobalHeaderCategory>
            <GlobalHeaderCategory
              device={mobile}
              title="은행안내"
              reference={tabBankRef}
            >
              <GlobalHeaderMenuItem device={mobile} title="은행 소개">
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="CEO 인사말"
                  href="/ceo-message"
                />
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="연혁"
                  href="/history"
                />
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="조직도"
                  href="/organization"
                />
              </GlobalHeaderMenuItem>
              <GlobalHeaderMenuItem device={mobile} title="경영 공시">
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="요약 공시"
                  href="/summary-disclosure"
                />
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="수시 공시"
                  href="/interim-disclosure"
                />
                <GlobalHeaderSubMenuItem
                  device={mobile}
                  title="결산 공시"
                  href="periodic-disclosure"
                />
              </GlobalHeaderMenuItem>
              <GlobalHeaderMenuItem
                device={mobile}
                title="영업점 안내"
                href="/office"
              />
              {/* <GlobalHeaderMenuItem
                device={mobile}
                title="채용 안내"
                href="/careers"
              /> */}
            </GlobalHeaderCategory>
          </GlobalHeaderMenuPanel>
        </div>
      </section>
    </>
  )
}

export default GlobalHeaderMobileMenu
