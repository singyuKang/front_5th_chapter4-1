import { ReadonlyHeaders } from 'next/dist/server/web/spec-extension/adapters/headers'
import UAParser from 'ua-parser-js'

const desktop = 'desktop' as const
const mobile = 'mobile' as const

const allRawDevices = [desktop, mobile] as const
export type RawDevice = (typeof allRawDevices)[number]

export abstract class Device {
  abstract map<T>({ desktop, mobile }: { desktop: () => T; mobile: () => T }): T
  abstract isDesktop(): this is Desktop
  abstract isMobile(): this is Mobile
  static of(name: typeof desktop | typeof mobile) {
    switch (name) {
      case desktop:
        return new Desktop()
      case mobile:
        return new Mobile()
    }
  }
  abstract get name(): RawDevice
  static desktop = desktop
  static mobile = mobile
  static _values = allRawDevices

  static fromEnv = (): Device =>
    process.env.TARGET_DEVICE === 'mobile' ? new Mobile() : new Desktop()

  static fromUserAgent = (userAgent: string): Device => {
    const deviceType = new UAParser(userAgent).getDevice().type
    return deviceType && (deviceType === 'mobile' || deviceType === 'tablet')
      ? new Mobile()
      : new Desktop()
  }

  static fromHeaders = (headers: ReadonlyHeaders) => {
    const targetDevice = headers.get('x-target-device')
    return targetDevice === 'mobile' ? new Mobile() : new Desktop()
  }

  static getDeviceTypeFromClient = () => {
    if (typeof window !== 'undefined') {
      return /Mobi|Android/i.test(window.navigator.userAgent)
        ? new Mobile()
        : new Desktop()
    }
    return new Desktop() // 기본값
  }

  static getDeviceTypeFromHeaders = async (
    headers: Promise<ReadonlyHeaders>
  ) => {
    const headersObject = Object.fromEntries(await headers) // ReadonlyHeaders를 일반 객체로 변환
    const userAgent = headersObject['user-agent'] || ''
    const isMobile = /Mobi|Android/i.test(userAgent)
    return isMobile ? new Mobile() : new Desktop()
  }

  static getDevice = async (headers: Promise<ReadonlyHeaders>) => {
    let deviceType: Desktop | Mobile
    if (typeof window === 'undefined') {
      deviceType = await this.getDeviceTypeFromHeaders(headers)
    } else {
      deviceType = this.getDeviceTypeFromClient()
    }
    return deviceType
  }
}

class Desktop extends Device {
  map = <T>({ desktop }: { desktop: () => T; mobile: () => T }) => desktop()
  isDesktop = (): this is Desktop => true
  isMobile = (): this is Mobile => false
  toString = () => desktop
  get name() {
    return desktop
  }
}
class Mobile extends Device {
  map = <T>({ mobile }: { desktop: () => T; mobile: () => T }) => mobile()
  isDesktop = (): this is Desktop => false
  isMobile = (): this is Mobile => true
  toString = () => mobile
  get name() {
    return mobile
  }
}

export interface HasDevice {
  device: RawDevice
}
