import TypewriterTitle from '@/components/ui/TypewriterTitle'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='bg-gradient-to-r min-h-screen from-rose-100 to-blue-100'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <h1 className='font-semibold text-7x1 text-center'>
          Note Nest - <span className='text-blue-600'> Note taking </span> AI
        </h1>
        <div className='mt-4'></div>
        <h2 className='font-semibold text-3x1 text-center text-slate-700'>
          <TypewriterTitle />
        </h2>
        <div className='mt-8'></div>
        <div className='flex justify-center'>
          <Link href='/dashboard'>
            <Button className='bg-blue-600'>Get Started</Button>
          </Link>
        </div>
          
      </div>
    </div>
  )
}
