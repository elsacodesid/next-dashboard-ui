import UserCard from '@/components/UserCard'
import React from 'react'

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
{/* Left */}
<div className='w-full lg:w-2/3'>L</div>

{/* User Cards */}
<div className="flex gap-4 justify-between">
  <UserCard type='student' />
  <UserCard type='teacher' />
  <UserCard type='parent' />
  <UserCard type='staff' />
</div>

{/* Right */}
<div className='w-full lg:w-1/3'>R</div>
    </div>
  )
}

export default AdminPage