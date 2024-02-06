import { Variant } from './types/typography.type'

export enum FontWeight {
  Light = 300,
  Regular = 400,
  Medium = 500,
  SemiBold = 600,
  Bold = 700
}

const defaultFontSizes: Record<Variant, string> = {
  h1: '3.25rem',
  h2: '2rem',
  h3: '2rem',
  h4: '1rem',
  h5: '1rem',
  h6: '0.25rem',
  p: '1rem',
  span: '0.25rem',
  div: '1rem',
  label: '1rem'
}

const createStyledComponent = (tag: keyof JSX.IntrinsicElements, defaultSize: string) => {
  return {
    fontSize: defaultSize
  }
}

export const componentMapper = Object.entries(defaultFontSizes).reduce(
  (accum, [variant, defaultSize]) => ({
    ...accum,
    [variant]: createStyledComponent(variant as keyof JSX.IntrinsicElements, defaultSize)
  }),
  {} as Record<Variant, React.ComponentType<any>>
)

export interface StyleProps {
  fontSize?: string
  fontWeight?: FontWeight
  color?: string
  marginTop?: string
}
