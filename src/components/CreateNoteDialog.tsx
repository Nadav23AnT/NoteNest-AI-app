'use client'
import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Plus } from 'lucide-react'
import { Input } from './ui/input'
import { Button } from './ui/button'

type Props = {}

const CreateNoteDialog = (props: Props) => {
  const [input, setInput] = React.useState('')
  return (
    <Dialog>
      <DialogTrigger>
        <div className='border-dashed border-2 flex border-blue-600 h-full rounded-lg items-center justidy-center sm:flex-col hover:shadow-xl transition hover:-translate-y-1 flex-row p-4'>
          <Plus className="w-6 h-6 text-blue-600" strokeWidth={3} />
          <h2 className='font-semibold text-blue-600 sm-mt-2'>New Notebook</h2>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            New notebook
          </DialogTitle>
          You can create a new note by clicking the button below
        </DialogHeader>
        <form>
          <Input value={input} 
          onChange={e=>setInput(e.target.value)} 
          placeholder='Name...' />
          <div className="h-4"></div>
          <div className="flex items-center">
            <Button type='reset' variant={'secondary'}>
              Cancel
              </Button>
            <Button type='submit' className='bg-blue-600'>
              Submit
              </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>

  )
}

export default CreateNoteDialog