import type { FC } from 'react'
import { MyIqSection } from '@/app/shared/ui'
import { Card, CardBody, CardHeader } from '@heroui/card'
import { AVAILABLE_TESTS } from '.'
import { Button } from '@heroui/button'
import { Clock, FileText, ArrowRight } from 'lucide-react'

// props
interface IProps {}

// component
const IqAvailableTestsComponent: FC<Readonly<IProps>> = () => {
  // return
  return (
    <MyIqSection fullBleedBgClassName='bg-support-surface py-12'>
      <h2 className='text-center text-[32px] font-extrabold tracking-tight text-[#2A3342] sm:text-[36px] lg:text-[40px]'>
        Available Tests
      </h2>

      <p className='mx-auto mt-2 max-w-4xl text-center text-[14px] text-slate-600'>
        Each test reveals a new part of you. Start with intelligence, with more tests coming soon
      </p>

      <div className='mt-6 grid gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-6'>
        {AVAILABLE_TESTS.map((t) => (
          <Card
            key={t.key}
            shadow='sm'
            radius='lg'
            className='border-support-border relative min-h-[218px] w-full rounded-xl border bg-white shadow-[0_4px_14px_rgba(20,58,94,0.06)]'
          >
            <CardBody className='p-0'>
              <div className='place-content-inherit align-items-inherit relative flex h-auto w-full flex-auto flex-col gap-2.5 overflow-y-auto p-3 px-4 py-6 text-left break-words antialiased md:gap-3'>
                <span className='h-[38px] w-[38px] text-[#1D63F0]' aria-hidden>
                  {t.icon}
                </span>
                <p className='text-primary-dark text-start text-[18px] font-semibold'>{t.title}</p>
                <div className='text-support-muted flex flex-wrap gap-x-4 gap-y-2 text-sm'>
                  <span className='inline-flex items-center gap-1.5'>
                    <Clock className='h-4 w-4' />
                    <span>{t.minutes} minutes</span>
                  </span>
                  <span className='inline-flex items-center gap-1.5'>
                    <FileText className='h-4 w-4' />
                    <span>{t.questions} questions</span>
                  </span>
                </div>

                <div className='mt-auto'>
                  {t.status === 'active' ? (
                    <Button
                      radius='lg'
                      size='md'
                      className='bg-primary-green z-0 h-12 w-full rounded-xl px-6 text-sm font-semibold text-white shadow-sm transition hover:opacity-95'
                    >
                      {t.cta}
                      <ArrowRight className='ml-2 h-3.5 w-3.5' />
                    </Button>
                  ) : (
                    <Button
                      isDisabled
                      radius='lg'
                      size='md'
                      className='z-0 h-12 w-full rounded-xl bg-slate-200 px-6 text-sm font-semibold text-slate-600'
                    >
                      {t.cta}
                    </Button>
                  )}
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </MyIqSection>
  )
}

export default IqAvailableTestsComponent
