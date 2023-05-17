import { Button } from '@/components/ui/button'
import { Medal } from 'lucide-react'

export default function ContributeCTA() {
  return (
    <div className='flex items-center justify-between p-5 border border-b rounded-lg'>
      <div className='flex items-center gap-3'>
        <Medal />
        <div className=''>
          <div className='font-semibold'>Rank Boost</div>
          <p className='text-sm text-slate-500'>Build more rank correcting and adding info.</p>
        </div>

      </div>
      <Button variant='outline'>Add & Update</Button>
    </div>
  )
}
