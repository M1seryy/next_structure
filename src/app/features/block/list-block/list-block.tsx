import { CardComponent } from '@/app/shared/ui/card'
import { type FC } from 'react'
import { BooksListItem } from '@/app/entities/models'

// interface
interface IProps {
  title?: string
  items?: BooksListItem[]
  isLoading?: boolean
}

// component
const ListBlockComponent: FC<Readonly<IProps>> = (props) => {
  const { title = 'List', items = [], isLoading = false } = props

  // return
  return (
    <section className='mt-6'>
      <h2 className='mb-4 text-2xl font-bold'>{title}</h2>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          items.map((item, index) => (
            <CardComponent
              key={index}
              id={item.id}
              title={item.title}
              author={item.author}
              coverUrl={item.coverUrl}
              year={item.year}
            />
          ))
        )}
      </div>
    </section>
  )
}

export default ListBlockComponent
