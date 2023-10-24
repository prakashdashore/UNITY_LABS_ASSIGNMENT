import Spinner from '@/app/components/Spinner'
import React from 'react'

const loading = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
        <Spinner/>
    </div>
  )
}

export default loading