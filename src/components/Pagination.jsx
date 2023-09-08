import React from 'react'

const Pagination = ({pages = 5}) => {
  return (
    <div className='pagination flex gap-2 bg-white w-[50%]'>
        <div className="page px-7 py-5 border rounded-full">1</div>
        <div className="page px-7 py-5 border rounded-full">2</div>
        <div className="page px-7 py-5 border rounded-full">3</div>
        <div className="page px-7 py-5 border rounded-full">4</div>
        <div className="page px-7 py-5 border rounded-full">5</div>
    </div>
  )
}

export default Pagination;