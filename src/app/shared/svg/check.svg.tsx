import type { FC, SVGProps } from 'react'

const CheckSvg: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10' aria-hidden='true' {...props}>
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M13.22.21a.714.714 0 0 1 0 1.01L5.361 9.076a.714.714 0 0 1-1.01 0L.781 5.505a.714.714 0 0 1 1.01-1.01L4.857 7.56 12.21.21a.714.714 0 0 1 1.01 0'
      clipRule='evenodd'
    />
  </svg>
)

export default CheckSvg
