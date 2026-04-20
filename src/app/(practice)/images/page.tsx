import React from 'react'
import Image from 'next/image'

const ImagesPage = () => {
  return (
    <>
      <h1>Images Page</h1>
      <Image src="/150x150.png" alt="Sample Image" width={150} height={150} />
        <div className='relative w-1/2 h-screen'>
          <Image src="/150x150.png" alt="Sample Image" sizes='50vw' fill objectFit="cover" />
      </div>
       <div className='relative w-full lg:w-1/2 h-screen'>
        <Image src="/150x150-2.png" alt="Sample Image" fill objectFit="cover"  sizes='(max-width: 64rem) 50vw, 25vw' />
      </div>
       <Image src="/150x150-3.png" alt="Sample Image" width={150} height={150} quality={100} />
       <Image src="/150x150-4.png" alt="Sample Image" width={150} height={150} quality={25} />
       <Image src="https://placehold.jp/150x150.png" alt="Sample Image" width={150} height={150}  />

    </>
  )
}

export default ImagesPage
