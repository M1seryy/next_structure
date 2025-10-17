import type { FC } from 'react'

// props
interface IProps {
  title: string
  description?: string
  className?: string
  titleClassName?: string
  descriptionClassName?: string
}

// component
const MyIqSectionHeading: FC<Readonly<IProps>> = (props) => {
  const { title, description, className, titleClassName, descriptionClassName } = props

  // return
  return (
    <div className={['text-center', className].filter(Boolean).join(' ')}>
      <h2
        className={['text-brand-ink text-[36px] font-extrabold tracking-tight lg:text-[40px]', titleClassName]
          .filter(Boolean)
          .join(' ')}
      >
        {title}
      </h2>
      {description && (
        <p
          className={['mx-auto mt-2 max-w-3xl text-[16px] text-slate-600', descriptionClassName]
            .filter(Boolean)
            .join(' ')}
        >
          {description}
        </p>
      )}
    </div>
  )
}

export default MyIqSectionHeading
