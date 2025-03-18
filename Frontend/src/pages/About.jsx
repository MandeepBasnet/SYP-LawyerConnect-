// eslint-disable-next-line no-unused-vars
import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-grey-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:mx-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi repudiandae aspernatur sit quaerat repellendus, porro perspiciatis odio ab voluptatum dolores, illum libero quod illo praesentium? Voluptas vero officiis ratione excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste saepe dolorum mollitia minus tempora, illo nobis iusto voluptatem, quia asperiores corporis eius pariatur praesentium voluptates, quos cupiditate aliquid. Corrupti, suscipit!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis laudantium nisi dolorum nulla amet aliquam consequatur consequuntur odit, reiciendis minus beatae, sint eveniet vero! Praesentium, ab? Odit quis labore facere. Fuga provident voluptatibus architecto doloribus ut unde facilis error ipsum nam, sint veniam reprehenderit voluptatum repudiandae sit iure maiores labore quo fugit repellendus porro libero eos? Voluptatem ipsam ipsum quia.</p>
          <p className='text-gray-800'>Our Vision</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere distinctio dolores odit voluptatem tenetur cumque modi aperiam perspiciatis? Possimus ipsa corporis illum temporibus pariatur dolore quam reprehenderit ullam similique voluptatum!</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white trasition-all duration-300 text-gray-600 cursor-pointer'>
          <b>abcdefghij</b>
          <p>Lorem ipsum, dolor sit amet adipisicing elit.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white trasition-all duration-300 text-gray-600 cursor-pointer'>
          <b>klmnopqrst</b>
          <p>Lorem ipsum, dolor sit amet adipisicing elit.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white trasition-all duration-300 text-gray-600 cursor-pointer'>
          <b>uvwxyzabcd</b>
          <p>Lorem ipsum, dolor sit amet adipisicing elit.</p>
        </div>
      </div>
    </div>
  )
}

export default About