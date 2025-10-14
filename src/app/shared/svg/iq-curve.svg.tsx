import { type FC } from 'react'

interface IqCurveProps {
  className?: string
}

export const IqCurveSvg: FC<Readonly<IqCurveProps>> = ({ className }) => (
  <svg viewBox='0 0 840 260' className={className ?? 'h-auto w-full'}>
    <defs>
      <linearGradient id='bg' x1='0' x2='0' y1='0' y2='1'>
        <stop offset='0%' stopColor='#E6F0FF' stopOpacity='.6' />
        <stop offset='100%' stopColor='#E6F0FF' stopOpacity='0' />
      </linearGradient>
      <linearGradient id='g' x1='0' x2='0' y1='0' y2='1'>
        <stop offset='0%' stopColor='#2563EB' stopOpacity='.18' />
        <stop offset='100%' stopColor='#2563EB' stopOpacity='0' />
      </linearGradient>
    </defs>
    {/* soft background gradient */}
    <rect x='0' y='0' width='840' height='260' fill='url(#bg)' />
    {/* gradient area under the curve */}
    <path
      d='M20 220 C 220 220, 300 40, 420 40 C 540 40, 640 220, 820 220 L 820 260 L 20 260 Z'
      fill='url(#g)'
      stroke='none'
    />
    {/* main curve stroke */}
    <path
      d='M20 220 C 220 220, 300 40, 420 40 C 540 40, 640 220, 820 220'
      stroke='#2563EB'
      strokeWidth='6'
      fill='none'
    />
    {[100, 200, 300, 420, 540, 640, 740].map((x) => (
      <g key={x}>
        <line x1={x} y1={220} x2={x} y2={70} stroke='#A8B3C6' strokeDasharray='5 7' />
      </g>
    ))}
    {[
      { x: 420, t: '34.1%' },
      { x: 300, t: '13.6%' },
      { x: 540, t: '13.6%' },
      { x: 220, t: '2.1%' },
      { x: 640, t: '2.1%' },
      { x: 160, t: '0.1%' },
      { x: 700, t: '0.1%' },
    ].map(({ x, t }) => (
      <text key={x} x={x} y={60} textAnchor='middle' fontSize='14' fill='#4B5563'>
        {t}
      </text>
    ))}
    {[
      { x: 140, t: '55' },
      { x: 220, t: '70' },
      { x: 300, t: '85' },
      { x: 420, t: '100' },
      { x: 540, t: '115' },
      { x: 640, t: '130' },
      { x: 720, t: '145' },
    ].map(({ x, t }) => (
      <text key={t} x={x} y={240} textAnchor='middle' fontSize='14' fill='#6B7280'>
        {t}
      </text>
    ))}
  </svg>
)

export default IqCurveSvg
