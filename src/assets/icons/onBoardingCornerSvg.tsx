import { IconProps } from '../index'

const onBoardingCornerSvg = ({ className }: IconProps): JSX.Element => {
  return (
    <svg
      width="226"
      height="276"
      viewBox="0 0 226 276"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="162.631"
        y="-27.0352"
        width="268.71"
        height="268.71"
        rx="67"
        transform="rotate(45 162.631 -27.0352)"
        fill="url(#paint0_linear_31_729)"
        fill-opacity="0.9"
      />
      <defs>
        <linearGradient
          id="paint0_linear_31_729"
          x1="169.563"
          y1="-7.10713"
          x2="451.287"
          y2="21.1897"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#271340" />
          <stop offset="0.97" stop-color="#4B237D" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default onBoardingCornerSvg
