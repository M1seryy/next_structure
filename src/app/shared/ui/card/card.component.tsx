import { type FC } from 'react'
import { memo } from 'react'
import { Link } from '@/pkg/libraries/locale'
import Image from 'next/image'
import { mixpanelUtils } from '@/pkg/libraries/mixpanel'

// interface
interface IProps {
  id?: string
  title: string
  author?: string
  coverUrl?: string
  year?: number
}

// component
const CardComponent: FC<Readonly<IProps>> = (props) => {
  const { id, title, author, coverUrl, year } = props

  // Handle book click with tracking
  const handleBookClick = () => {
    if (id) {
      mixpanelUtils.trackBookClick(id, title, {
        author,
        year,
        has_cover: !!coverUrl,
      })
    }
  }
  const content = (
    <div className='group rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-lg'>
      <div className='flex flex-col items-start'>
        <p className='text-xs font-bold text-gray-500 uppercase'>Book</p>
        {(author || year) && (
          <small className='text-gray-500'>
            {author ? `by ${author}` : ''}
            {author && year ? ' • ' : ''}
            {year ?? ''}
          </small>
        )}
        <h4 className='mt-1 text-lg font-bold'>{title}</h4>
      </div>
      <div className='mt-4'>
        <Image
          alt={title}
          className='rounded-xl object-cover transition-transform duration-200 group-hover:scale-[1.02]'
          src={coverUrl || 'https://placehold.co/270x360/jpg?text=Book'}
          width={270}
          height={360}
        />
      </div>
    </div>
  )

  // return
  return id ? (
    <Link
      href={{ pathname: '/book/[id]', params: { id } }}
      className='block'
      aria-label={`Open ${title}`}
      onClick={handleBookClick}
    >
      {content}
    </Link>
  ) : (
    content
  )
}

export default memo(CardComponent)
