'use client'

import { Suspense } from 'react'
import ExperienceSection from './ExperienceSection'
import IntroSection from './IntroSection'
import dynamic from 'next/dynamic'

const DynamicLazyProjectSection = dynamic(
  () => import('@/app/section/ProjectSection'),
  {
    ssr: false,
  }
)

const DynamicLazyActivitySection = dynamic(
  () => import('@/app/section/ActivitySection'),
  {
    ssr: false,
  }
)

const DynamicLazyBlogSection = dynamic(
  () => import('@/app/section/BlogSection'),
  {
    ssr: false,
  }
)

const DynamicLazyCertificateSection = dynamic(
  () => import('@/app/section/CertificateSection'),
  {
    ssr: false,
  }
)

const DynamicLazyEducationSection = dynamic(
  () => import('@/app/section/EducationSection'),
  {
    ssr: false,
  }
)

const SectionContainer = ({ deviceClass }: { deviceClass: string }) => {
  return (
    <section className={deviceClass}>
      <IntroSection />
      <ExperienceSection />
      <Suspense fallback={`loading`}>
        <DynamicLazyProjectSection />
        <DynamicLazyActivitySection />
        <DynamicLazyBlogSection />
        <DynamicLazyCertificateSection />
        <DynamicLazyEducationSection />
      </Suspense>
    </section>
  )
}

export default SectionContainer
