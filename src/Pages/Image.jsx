import React from 'react'

const Image = ({ img }) => {
    return (
        <div className='bg-slate-900 h-[350px]'> <img className='size-full' src={img} /> </div>
    )
}

export default Image
