'use client'
import WaveCard from '@/components/Card/WaveCard'
import Image from 'next/image'
import GitWhiteIcon from '@assets/icon/github-mark-white.png'
import { useTheme } from 'next-themes'
import { Text } from '@/foundation/Text/Text'
import { CustomSection } from '@/components/Section/CustomSection'
import { CustomSectionTitle } from '@/components/Section/SectionTitle'
import { useEffect, useState } from 'react'
import profileImage from '@assets/image/profile.png'
import { stackIcons } from '@/utils/getsvgIcon'

const IntroSection = () => {
  const { theme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  const photoBox = () => {
    return (
      <div className="flex flex-col items-center justify-center flex-1 gap-4 min-w-[40rem] mt-4">
        <Image
          className="rounded-full bg-[#d5d9db]"
          alt={''}
          src={profileImage}
          width={200}
          height={200}
          priority={true}
        />
        <div className="px-4">
          <Text variant="subtitle2">
            사용자의 편리함을 추구하는 개발자,{' '}
            <Text as="span" variant="subtitle1" color="blue">
              강신규
            </Text>
            입니다
          </Text>

          <div className="text-sm font-light text-gray-600 dark:text-gray-300"></div>
        </div>
      </div>
    )
  }

  const stackBox = () => {
    return (
      <div className="flex flex-1 max-h-[20rem] min-w-[21rem] mt-4 justify-center items-center ">
        <div className="grid grid-cols-4 grid-rows-2 items-center justify-center gap-4">
          <WaveCard content="JavaScript" duration={4}>
            <Image
              src={stackIcons['javascript']}
              alt=""
              height={30}
              width={30}
            />
          </WaveCard>
          <WaveCard content="TypeScript" duration={4}>
            <Image
              src={stackIcons['typescript']}
              alt=""
              height={30}
              width={30}
            />
          </WaveCard>
          <WaveCard content="Swift" duration={4}>
            <Image src={stackIcons['swift']} alt="" height={30} width={30} />
          </WaveCard>
          <WaveCard content="React" duration={4}>
            <Image src={stackIcons['react']} alt="" height={30} width={30} />
          </WaveCard>
          <WaveCard content="ReactNative" duration={4}>
            <Image
              src={stackIcons['reactnative']}
              alt=""
              height={30}
              width={30}
            />
          </WaveCard>
          <WaveCard content="NextJs" duration={4}>
            <Image src={stackIcons['nextjs']} alt="" height={30} width={30} />
          </WaveCard>
          <WaveCard content="Git" duration={4}>
            {theme === 'light' ? (
              <>
                <Image
                  src={stackIcons['github']}
                  alt=""
                  height={30}
                  width={30}
                />
              </>
            ) : (
              <Image
                src={GitWhiteIcon}
                alt="GitHub 아이콘"
                priority={true}
                style={{ width: '30px', height: '30px' }}
              />
            )}
          </WaveCard>
          <WaveCard content="Zeplin" duration={4}>
            <Image src={stackIcons['zeplin']} alt="" height={30} width={30} />
          </WaveCard>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col flex-1 justify-center items-center overflow-hidden">
      <div className="flex flex-wrap flex-1 w-full min-h-[30rem] mt-2  max-w-[1200px] justify-center items-center">
        {photoBox()}
        {stackBox()}
      </div>
      <CustomSection id="sample">
        <CustomSectionTitle
          title={'Intro'}
          subTitle={'안녕하세요, 3년차 프론트엔드 개발자 강신규입니다.'}
        />
        <div className="flex flex-col flex-wrap w-full justify-evenly">
          <div className="text-sm font-normal w-full flex flex-col gap-6">
            <Text variant="subtitle5">
              저는 React, React-Native 를 사용해 3개의 웹/앱을 출시, 개발 및
              유지보수하며 50만+ 다운로드를 달성한 경험이 있습니다.
            </Text>
            <Text variant="subtitle5">
              7개월 동안 매주 5개의 알고리즘 문제를 풀어 골드2를 달성하였고,
              블로그를 통해 최신 기술 트렌드를 학습하고 공부한 내용을 정리하고
              있습니다.
            </Text>
            {/* <Text variant="subtitle5">
              디자이너, PM, 백엔드 개발자와의 협업 경험을 바탕으로 다양한 팀과
              원활한 커뮤니케이션을 유지하며, 최적의 결과물을 도출하기 위해
              노력합니다.
            </Text> */}
          </div>
        </div>
      </CustomSection>
    </div>
  )
}

export default IntroSection
