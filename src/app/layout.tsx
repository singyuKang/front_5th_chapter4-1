import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import TopBtnIcon from '@assets/icon/main/top_btn.png'
import { ModalProvider } from '@/components/Modal/ModalProvider'
import { GlobalHeader } from '@/components/Page/GlobalHeader/GlobalHeader'
import { NextUIProvders } from '@/components/Provider/NextUIProvider'
import { NextThemeProvider } from '@/components/Provider/NextThemeProvider'

export const metadata: Metadata = {
  title: 'KANG SIN GYU',
  description: 'KANG SIN GYU Portfolio',
  icons: {
    icon: '/profile.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // 정적 빌드를 위해 기본값 사용, CSS로 반응형 처리
  const device = 'desktop'

  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="relative h-[100vh] overflow-y-scroll">
        <NextUIProvders>
          <NextThemeProvider>
            <ModalProvider>
              <div className="relative flex flex-col w-full min-h-[100vh]">
                <GlobalHeader device={device} />
                <div className="grow">{children}</div>
              </div>
            </ModalProvider>

            {/* Top 버튼 - 반응형 클래스 사용 */}
            <div
              className={[
                'w-[48px] h-[48px] bg-white rounded-full fixed z-30',
                'flex justify-center items-center top-btn-box-shadow p-[12px]',
                'bottom-[40px] right-[25px] md:right-[50px]', // 모바일: 25px, 데스크톱: 50px
              ]
                .join(' ')
                .trim()}
            >
              <Link href={'#'} className="flex justify-center items-center">
                <Image src={TopBtnIcon} alt="위로가기 아이콘" />
              </Link>
            </div>
          </NextThemeProvider>
        </NextUIProvders>
      </body>
    </html>
  )
}
