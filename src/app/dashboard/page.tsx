import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from "next/link"
import React from 'react'

type Props = {}

const DashboardPage = (props: Props) => {
  return (
    <>
    <div className="bg-gradient-to-r min-h-screen from-white-100 to-blue-100 min-h-screen">
      <div className='max-w-7x1 mx-auto p-10'>
        <div className='h-14'></div>
        <div className='flex justify-between items-center md:flex-row flex-col'>
          <div className='flex items-center'>
            <Link href='/'>
              <Button className='bg-blue-600' size="sm"> 
                <ArrowLeft className='mr-1 w-4 h-4'></ArrowLeft>
                Back
              </Button>
            </Link>
            <div className="w-4"></div>
            <h1 className="text-3x1 font-bold text-gray-900">
              My Notes
            </h1>
            <div className="w-4"></div>
            <UserButton />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default DashboardPage