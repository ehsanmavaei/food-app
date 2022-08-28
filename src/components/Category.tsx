import React, { useState } from 'react'
import { categories } from '../data/data'

export const Category = () => {
    const [category, setCategory] = useState(categories)
    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
            <div className='grid grid-cols-2   lg:grid-cols-4 gap-3  py-2'>
                {category.map((item) => (
                    <div className='shadow-lg rounded-lg bg-gray-100 flex items-center  justify-between ' >
                        <p className=' font-bold  p-3 '>{item.name}</p>
                        <img className='w-20' src={item.image} alt="" />
                    </div>

                ))}

            </div>
        </div>
    )
}

export default Category;