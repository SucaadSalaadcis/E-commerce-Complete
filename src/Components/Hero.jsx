import React from 'react'

function Hero() {
  return (
    <div className='h-[500px]  pt-16 sm:flex sm:px-20 justify-between'>
        <div className='sm:mt-20 sm:ml-12 mt-10 w-[580px]'>
      <h1 className='sm:text-3xl text-md ml-7  font-bold'>Best Place For Shopping</h1>
      <p className='sm:mt-8 mt-5 sm:text-2xl text-md px-5 ml-3 '>We got you every thing that you need. <br/>visit us anywhere any time.</p>

      <button className='bg-orange-500 sm:ml-10 mt-7 sm:px-10 px-8 ml-6 py-3 text-white rounded sm:text-3xl'>Explore More</button>
      </div>
      <img className='rounded-xl mt-16 block px-10 ' src="https://img.freepik.com/free-photo/female-friends-out-shopping-together_53876-25041.jpg?size=626&ext=jpg&ga=GA1.2.407266189.1693377002&semt=sph" alt="" />
    </div>
  ) 
}

export default Hero
