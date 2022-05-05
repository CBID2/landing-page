import React, { FC } from 'react'
import Testimonial from './Testimonial'

interface TestimonialsProps{
    
}

const testimonial = [
    {
        username: 'shamimbinnur',
        date: 'Feb 12',
        comment: `Cilignam accuptatur @OpenSauced core quistia ad moluptat.`,
        photo: '/temp/user1.png'
    },
    {
        username: 'brian',
        date: 'Feb 12',
        comment: `Cilignam accuptatur @OpenSauced core quistia ad moluptat.`,
        photo: '/temp/user1.png'
    },
    {
        username: 'rolef',
        date: 'Feb 12',
        comment: `Cilignam accuptatur @OpenSauced core quistia ad moluptat.`,
        photo: '/temp/user1.png'
    },
    {
        username: 'david',
        date: 'Feb 12',
        comment: `Cilignam accuptatur @OpenSauced core quistia ad moluptat.`,
        photo: '/temp/user1.png'
    },
    {
        username: 'roreffs',
        date: 'Feb 12',
        comment: `Cilignam accuptatur @OpenSauced core quistia ad moluptat.`,
        photo: '/temp/user1.png'
    },
    {
        username: 'benawad',
        date: 'Feb 12',
        comment: `Cilignam accuptatur @OpenSauced core quistia ad moluptat.`,
        photo: '/temp/user1.png'
    },
]

const Testimonials: FC<TestimonialsProps> = ({}) => {
  return (
    <div className=' py-28 '>
        <h1 className=' font-bold text-[38px] text-center text-gray400 '>Itam harum a <span className='text-blueAccent'>Testimonials.</span></h1>

        <div className=' grid mobile:grid-cols-1 tablet:grid-cols-3 gap-[10px] py-20 '>
            {
                testimonial.map( testimonial => (
                    <Testimonial key={testimonial.username} testimonial={testimonial} />
                ))
            }
        </div>
    </div>
  )
}

export default Testimonials