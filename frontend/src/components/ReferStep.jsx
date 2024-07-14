import { UserPlusIcon } from '@heroicons/react/24/outline'
import React from 'react'

const ReferStep = () => {
  return (
   <section className="flex flex-col justify-center items-center w-full  h-auto mx-auto my-auto  bg-blue-100 ">
    <h1 className=' text-center text-3xl font-bold block  uppercase text-nowrap mx-auto'>How do i<span className='text-primary'> Refer?</span></h1>
    <div className="relative">
      <div className="relative">
        {/* Replace 'your-image.png' with your actual image path */}
        <img src="https://s3-alpha-sig.figma.com/img/f8bf/9271/2c05e77a4b76d26c35bb05a554cb6838?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n9wLhOj-H7BJ1YhVCjgp-FkGJ7kwu8rFzn5~X~9Sw87NE1ULfPsE1Sxib44MVhMgSvwMLWWsMIxu4CDyJ2ljtgIw2lp0Yj~hwqDurPNEK9D3WhlY3gk4M4mHr9SyAqOTZkxDiXuOfBsUOsS6IDjSDZi9~WWg32WLVcq1mwOQdbhwBvjtnRhSfyig6Y4in2YO8Z5JEGumb4G-nt5ub-thDZMoA6bNkbtufIehkpWRAeIVdMGI1p~1lqikHWvTItsEf6mj0Ki-UL56P2QCDyPeLp7H2G1t~OJKy9mz0BhBEtiFnfL2wE58fUKzySOk9RgnMnUPCadXMWFJ1X47RQ8SJw__" width={1087} height={180} alt="Image with overlay " className="mx-auto"/>
        <div className="absolute top-24 left-20 right-[648px] bottom-6 flex items-center justify-center my-5">
          <div className="bg-transparent p-4 ">
            <h2 className=" font-bold text-primary w-12 h-12 text-center rounded-full my-5 mx-auto p-5 bg-white hover:shadow-lg "><UserPlusIcon width={20} height={20}/></h2>
            <p className="text-gray-700  text-nd mx-auto">Submit referrals <span className='block'>easily via our</span> <span className='block'>website’s referral</span><span>section.</span></p>
          </div>
        </div>
        <div className="absolute top-24 left-[648px] right-0 bottom-0 flex items-center justify-center my-5">
          <div className="bg-transparent p-4 ">
            <h2 className=" font-bold text-primary w-12 h-12 text-center rounded-full my-5 mx-auto  p-5 bg-white hover:shadow-lg "><UserPlusIcon width={20} height={20}/></h2>
            <p className="text-gray-700  text-nd mx-auto">Submit referrals <span className='block'>easily via our</span> <span className='block'>website’s referral</span><span>section.</span></p>
          </div>
        </div>
        <div className="absolute top-24 left-0  right-0 bottom-0 flex items-center justify-center my-5">
          <div className="bg-transparent p-4 ">
            <h2 className=" font-bold text-primary w-12 h-12 text-center rounded-full my-5 mx-auto p-5 bg-white hover:shadow-lg "><UserPlusIcon width={20} height={20}/></h2>
            <p className="text-gray-700  text-nd mx-auto">Submit referrals <span className='block'>easily via our</span> <span className='block'>website’s referral</span><span>section.</span></p>
          </div>
        </div>
      </div>
    </div>
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 my-6 px-4 rounded">Refer Now</button>
   </section>
  )
}

export default ReferStep
