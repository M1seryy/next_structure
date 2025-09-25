import { CardComponent } from '@/app/shared/ui/card'
import { type FC } from 'react'

// interface
interface IProps {
  title?: string
  items?: any[]
  isLoading?: boolean
}

// component
const ListBlockComponent: FC<Readonly<IProps>> = (props) => {
  const { title = 'Список', items = [], isLoading = false } = props

  // return
  return (
    <section className='mt-6'>
      <h2 className='mb-4 text-2xl font-bold'>{title}</h2>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
        {isLoading ? (
          <div>Завантаження...</div>
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
