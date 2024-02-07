import { IconProps } from '../index'

const Search = ({ className, pathClassName }: IconProps): JSX.Element => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clip-path="url(#clip0_55_75)">
        <path
          className={pathClassName}
          d="M23.233 21.8602L17.5209 15.9194C18.9901 14.1763 19.7954 11.9697 19.7943 9.68999C19.7943 4.34701 15.4473 0 10.1043 0C4.76132 0 0.414307 4.34701 0.414307 9.68999C0.414307 15.033 4.76132 19.38 10.1043 19.38C12.1101 19.38 14.0216 18.775 15.6558 17.6265L21.4113 23.6124C21.6518 23.8622 21.9754 24 22.3221 24C22.6503 24 22.9616 23.8749 23.198 23.6474C23.4392 23.4148 23.5784 23.096 23.5849 22.761C23.5915 22.426 23.4649 22.102 23.233 21.8602ZM10.1043 2.52782C14.0536 2.52782 17.2665 5.74069 17.2665 9.68999C17.2665 13.6393 14.0536 16.8522 10.1043 16.8522C6.15499 16.8522 2.94213 13.6393 2.94213 9.68999C2.94213 5.74069 6.15499 2.52782 10.1043 2.52782Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_55_75">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Search