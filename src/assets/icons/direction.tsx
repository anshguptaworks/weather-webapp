import { IconProps } from '../index'

const Direction = ({ className, pathClassName }: IconProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="24"
      height="24"
      x="0"
      y="0"
      viewBox="0 0 24 24"
      className={className}
    >
      <g>
        <path
          d="M7.75 14.569v3.681a.748.748 0 0 0 .75.75c.207 0 .41-.086.555-.246l2.49-2.741zM23.76.2a.75.75 0 0 0-.782-.149l-22.5 8.75a.75.75 0 0 0 .005 1.4l6.203 2.359 13.48-8.643-11.12 9.54 9.187 3.494a.749.749 0 0 0 .985-.481l4.75-15.5A.754.754 0 0 0 23.76.2z"
          fill="#000000"
          opacity="1"
          data-original="#000000"
        />
        <path
          d="M8.236 19.854a1 1 0 0 1-.832-1.553 8.96 8.96 0 0 0 .456-.759 1 1 0 0 1 1.78.913s-.203.399-.569.951a.998.998 0 0 1-.835.448zM4.25 22.75c-.613 0-1.14-.072-1.609-.22a1 1 0 0 1 .6-1.908c.414.131 1.015.241 1.663.006a1 1 0 1 1 .681 1.881c-.441.16-.891.241-1.335.241zM1.029 19.251a1 1 0 0 1-.997-.935A16.958 16.958 0 0 1 0 17.25a1 1 0 1 1 2 0c0 .331.009.644.028.936a1 1 0 0 1-.933 1.063l-.066.002z"
          fill="#000000"
          opacity="1"
          data-original="#000000"
          className={pathClassName}
        />
      </g>
    </svg>
  )
}

export default Direction
