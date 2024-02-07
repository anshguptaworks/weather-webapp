import { TYPOGRAPHY_SIZE } from '../constant/typography.constant'
import { FontSize, FontWeight } from '../types/typography.type'

export const sizeClassNames = new Map<FontSize, string>([
  [TYPOGRAPHY_SIZE[8], 'text-[0.5rem]'],
  [TYPOGRAPHY_SIZE[10], 'text-[0.625rem]'],
  [TYPOGRAPHY_SIZE[11], 'text-[0.688rem]'],
  [TYPOGRAPHY_SIZE[12], 'text-xs'],
  [TYPOGRAPHY_SIZE[13], 'text-[0.8125rem]'],
  [TYPOGRAPHY_SIZE[14], 'text-sm'],
  [TYPOGRAPHY_SIZE[16], 'text-base'],
  [TYPOGRAPHY_SIZE[18], 'text-lg'],
  [TYPOGRAPHY_SIZE[20], 'text-xl'],
  [TYPOGRAPHY_SIZE[24], 'text-2xl'],
  [TYPOGRAPHY_SIZE[30], 'text-3xl'],
  [TYPOGRAPHY_SIZE[32], 'text-[2rem]'],
  [TYPOGRAPHY_SIZE[34], 'text-[2.125rem]'],
  [TYPOGRAPHY_SIZE[36], 'text-4xl'],
  [TYPOGRAPHY_SIZE[40], 'text-[2.5rem]'],
  [TYPOGRAPHY_SIZE[48], 'text-5xl'],
  [TYPOGRAPHY_SIZE[96], 'text-8xl']
])

export const fontWeightClassNames = new Map<FontWeight, string>([
  [400, 'font-normal'],
  [500, 'font-medium'],
  [600, 'font-semibold'],
  [700, 'font-bold'],
  [800, 'font-extrabold']
])
