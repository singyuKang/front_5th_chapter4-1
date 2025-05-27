import { Fragment, HTMLAttributes } from 'react'
import Link from 'next/link'
import { Device, HasDevice } from '@common/device/Device'
import { Divider } from '@components/Divider/Divider'

import { GlobalFooterExternalSites } from '@components/Page/GlobalFooter/GlobalFooterExternalSites'
import { Text } from '@foundation/Text/Text'
import { TypographyVariant } from '@foundation/Text/TypographyVariant'
import { Container } from '@/components/Container/Container'

interface GlobalFooterProps extends HasDevice, HTMLAttributes<HTMLDivElement> {}

const getClassNameByDevice = (device: Device) => {
  return [
    'w-full mt-[64px] pt-[24px]',
    device.map({ desktop: () => 'pb-[60px]', mobile: () => 'pb-[52px]' }),
  ]
    .join(' ')
    .trim()
}

const getMarginRightByDevice = (device: Device) =>
  device.map({ desktop: () => 'mr-[6px]', mobile: () => 'mr-[6px]' })

const getSeparator = (totalCount: number, idx: number, device: Device) => {
  if (idx === totalCount - 1) {
    return <></>
  }

  return (
    <div
      className={[
        'inline-block align-middle relative top-[-1px]',
        getMarginRightByDevice(device),
      ]
        .join(' ')
        .trim()}
    >
      ·
    </div>
  )
}

interface FooterMenuItem {
  title: string
  url: string
  target?: '_blank'
}
const menu: FooterMenuItem[] = [
  { title: '고객권리안내문', url: '/customer-rights' },
  { title: '보호금융상품등록부', url: '/insured-financial-product-list' },
  { title: '신용정보 활용체제', url: '/credit-info-system' },
  { title: '개인정보처리방침', url: '/privacy-policy' },
  { title: '영상정보처리기기운영방침', url: '/video-policy' },
  { title: '채권추심업무 가이드라인', url: '/debt-collection-guidelines' },
  {
    title: '불법금융사기 피해신고센터',
    url: 'https://www.fss.or.kr/fss/cvpl/unlawDistb/forInsertAgre.do?menuNo=200309',
    target: '_blank',
  },
  {
    title: '서민금융 1332서비스',
    url: 'https://www.fss.or.kr/fss/s1332/s1332Index/sub.do?menuNo=200037',
    target: '_blank',
  },
  {
    title: '저축은행비리신고센터',
    url: 'https://www.fss.or.kr/fss/main/contents.do?menuNo=200334',
    target: '_blank',
  },
]

export const GlobalFooter = ({
  device: rawDevice,
  className: defaultClassName = '',
  ...props
}: GlobalFooterProps) => {
  const device = Device.of(rawDevice)

  const className = [
    getClassNameByDevice(device),
    'bg-gray2 text-gray4',
    defaultClassName,
  ]
    .join(' ')
    .trim()

  const mainTextVariant = device.map<TypographyVariant>({
    desktop: () => 'body2',
    mobile: () => 'caption2',
  })
  const subTextVariant = device.map<TypographyVariant>({
    desktop: () => 'caption2',
    mobile: () => 'caption3',
  })

  const containerClassName = [
    `relative flex mb-[12px]`,
    device.map({
      desktop: () => 'flex-row gap-x-[72px] items-center',
      mobile: () => 'flex-col gap-y-[18px] items-start',
    }),
  ]
    .join(' ')
    .trim()
  return (
    <footer {...props} className={className}>
      <Container device={rawDevice} variant="widest">
        <div className={containerClassName}>
          <div
            className={device.map({
              desktop: () => '',
              mobile: () => 'flex flex-col items-start',
            })}
          >
            <Text
              variant={mainTextVariant}
              color="white"
              className="inline-block"
            >
              고객센터 1833-8889 신용대출 1670-5252,6789
            </Text>
            <Text
              variant={mainTextVariant}
              className={device.map({
                desktop: () => 'inline-block ml-[8px]',
                mobile: () => 'inline-block',
              })}
              color="gray5"
              as="small"
            >
              (운영시간: 평일 9시 ~ 6시)
            </Text>
            <Text
              variant={subTextVariant}
              className="pt-[2px] break-keep"
              as="p"
            >
              디지털뱅킹고객센터(24시간 365일 연중무휴) 1544-3637 | 금융사기
              신고 야간콜센터 02-3978-800
            </Text>
          </div>
          <div
            className={device.map({
              desktop: () => 'absolute right-0 top-1 bottom-0',
              mobile: () => undefined,
            })}
          >
            <GlobalFooterExternalSites
              options={[
                { value: 'https://www.fss.or.kr/', label: '금융감독원' },
                {
                  value: 'https://www.kdic.or.kr/main.do',
                  label: '예금보험공사',
                },
                {
                  value: 'https://www.fsb.or.kr/index.act',
                  label: '상호저축은행 중앙회',
                },
                { value: 'https://www.nts.go.kr/', label: '국세청' },
                {
                  value: 'https://www.ccrs.or.kr/main.do',
                  label: '신용회복위원회',
                },
              ]}
            />
          </div>
        </div>

        <Divider color="gray3" />
        <section
          className={[
            'pt-[24px]',
            device.map({
              desktop: () => 'relative',
              mobile: () => 'flex justify-between flex-col gap-y-[42px]',
            }),
          ]
            .join(' ')
            .trim()}
        >
          <div>
            <div>
              {menu.map((item, idx) => {
                const separator = getSeparator(menu.length, idx, device)
                const textView = (
                  <Text
                    variant={subTextVariant}
                    className={[
                      'inline-block cursor-pointer',
                      getMarginRightByDevice(device),
                    ]
                      .join(' ')
                      .trim()}
                    color="gray5"
                  >
                    {item.title}
                  </Text>
                )
                return (
                  <Fragment key={idx}>
                    {
                      <Link
                        href={item.url}
                        target={item.target}
                        prefetch={false}
                        className="inline-block"
                      >
                        {textView}
                      </Link>
                    }
                    {separator}
                  </Fragment>
                )
              })}
            </div>
            <div className="pt-[20px]">
              <Text variant={subTextVariant} className="break-keep">
                서울시 강남구 강남대로 556 (논현동, 이투데이빌딩) | 대표이사
                주성범 | 사업자번호 114-81-50870
              </Text>
            </div>
            <div className="pt-[20px]">
              <Text variant={subTextVariant} className="break-keep">
                Copyright© HB Savings Bank. All rights reserved.
              </Text>
            </div>
          </div>
          <div
            className={device.map({
              desktop: () => 'absolute right-0 top-[80px]',
              mobile: () => undefined,
            })}
          >
            {/* <Link
              href="https://fine.fss.or.kr/"
              target="_blank"
              prefetch={false}
            >
              <Image
                src={LogoFine}
                alt="Fine 파인 금융소비자 정보포털"
                height={40}
              />
            </Link> */}
          </div>
        </section>
      </Container>
    </footer>
  )
}
