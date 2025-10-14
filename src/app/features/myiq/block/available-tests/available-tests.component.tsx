import type { FC } from 'react'
import { Card, CardBody, CardHeader } from '@heroui/card'
import { Button } from '@heroui/button'
import { Clock, FileText, ArrowRight } from 'lucide-react'

// props
interface IProps {}

// tests
const tests = [
  {
    key: 'iq',
    title: 'IQ / Intelligence Test',
    minutes: 15,
    questions: 25,
    cta: 'Start IQ Test Now',
    status: 'active' as const,
    icon: '🧠',
  },
  {
    key: 'personality',
    title: 'Personality Type',
    minutes: 20,
    questions: 90,
    cta: 'Start Personality Test',
    status: 'active' as const,
    icon: '🤝',
  },
  {
    key: 'love',
    title: 'Love Style',
    minutes: 30,
    questions: 120,
    cta: 'Start Love Style Test',
    status: 'active' as const,
    icon: '💞',
  },
  {
    key: 'career',
    title: 'Career',
    minutes: 25,
    questions: 35,
    cta: 'Coming Soon',
    status: 'disabled' as const,
    icon: '💡',
  },
]

// component
const IqAvailableTestsComponent: FC<Readonly<IProps>> = () => {
  // return
  return (
    <section className='w-full'>
      <div className='mx-[calc(50%-50vw)] w-screen bg-[#EEF6FB] py-[100px]'>
        <div className='mx-auto max-w-7xl px-4'>
          <h2 className='text-center text-[32px] font-extrabold tracking-tight text-[#2A3342] sm:text-[36px] lg:text-[40px]'>
            Available Tests
          </h2>
          <p className='mx-auto mt-2 max-w-4xl text-center text-[14px] text-slate-600'>
            Each test reveals a new part of you. Start with intelligence, with more tests coming soon
          </p>

          <div className='mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6'>
            {tests.map((t) => (
              <Card
                key={t.key}
                shadow='sm'
                radius='lg'
                className='relative min-h-[218px] w-full rounded-xl border border-[#E2EDF6] bg-white shadow-[0_4px_14px_rgba(20,58,94,0.06)]'
              >
                <CardBody className='p-0'>
                  <div className='place-content-inherit align-items-inherit relative flex h-auto w-full flex-auto flex-col gap-2.5 overflow-y-auto p-3 px-4 py-6 text-left break-words antialiased md:gap-3'>
                    <span className='h-[38px] w-[38px] text-[#1D63F0]' aria-hidden>
                      {t.icon}
                    </span>
                    <p className='text-start text-[18px] font-semibold text-[#2C3345]'>{t.title}</p>
                    <div className='flex flex-wrap gap-x-4 gap-y-2 text-sm text-[#454F69]'>
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
                          className='z-0 h-12 w-full rounded-xl bg-[#0E7C66] px-6 text-sm font-semibold text-white shadow-sm transition hover:opacity-95'
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
        </div>
      </div>
    </section>
  )
}

export default IqAvailableTestsComponent
