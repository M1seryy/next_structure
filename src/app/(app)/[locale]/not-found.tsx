'use client'

import Link from 'next/link'
import { Button } from '@heroui/button'
import { Card, CardBody } from '@heroui/card'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-50'>
      <Card className='mx-4 w-full max-w-md'>
        <CardBody className='p-8 text-center'>
          <div className='mb-6'>
            <h1 className='mb-2 text-6xl font-bold text-gray-300'>404</h1>
            <h2 className='mb-2 text-2xl font-semibold text-gray-800'>Page Not Found</h2>
            <p className='text-gray-600'>The page you're looking for doesn't exist or has been moved.</p>
          </div>

          <div className='flex flex-col justify-center gap-3 sm:flex-row'>
            <Button
              as={Link}
              href='/'
              color='primary'
              size='lg'
              startContent={<Home className='h-4 w-4' />}
              className='font-medium'
            >
              Go Home
            </Button>

            <Button
              variant='bordered'
              size='lg'
              startContent={<ArrowLeft className='h-4 w-4' />}
              className='font-medium'
              onClick={() => window.history.back()}
            >
              Go Back
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
