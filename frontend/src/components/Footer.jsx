import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Welcome to QuickDocVisit — your reliable digital partner in healthcare management. We understand that finding the right doctor and managing appointments can be overwhelming, and that’s where we step in.

At QuickDocVisit, we simplify your healthcare journey by offering a seamless platform to book appointments, consult with experienced doctors, and access your medical history — all in one place.

We are committed to revolutionizing healthcare through technology. By combining user-friendly design with cutting-edge features, we ensure that healthcare is not only accessible but also personalized to your needs.

Our mission is to empower individuals to take control of their health with confidence and convenience. Whether it’s your first visit or a follow-up, QuickDocVisit is with you at every step, making your well-being our top priority.

---

**Our Vision**

To bridge the gap between healthcare providers and patients using smart technology, ensuring quality care is just a click away for everyone, everywhere.
.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91748867XXXX</li>
            <li>anand@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025 @ QuickDocVisit.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
