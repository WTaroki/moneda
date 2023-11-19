import { PEOPLE_URL } from '@/contants';
import Image from 'next/image'
import React from 'react'

interface FurnitureProps{
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined : string
}
const FurnitureDesign = ({backgroundImage, title, subtitle, peopleJoined} : FurnitureProps) => {
  return(
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
      <div className='flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10 '>
        <div className='flexCenter gap-4 '>
          <div className='rounded-full bg-gray-700 p-4'>
            <Image
              src='folded-map.svg'
              alt='map'
              width={28}
              height={28}
            />
          </div>
          <div className='flex flex-col gap-1'>
            <h4 className='bold-18 text-white'>{title}</h4>
            <p className='regular-14 text-white'> {subtitle}</p>
          </div>
        </div>
        <div className='flexCenter gap-6 backdrop-blur-2xl bg-white/30 p-4 rounded-2xl'>
          <span className='flex -space-x-4 overflow-hidden'>
            {
              PEOPLE_URL.map((url)=>(
                <Image
                className='inline-block h-10 w-10 rounded-full'
                  src={url}
                  key={url}
                  alt='people'
                  width={40}
                  height={40}
                />
              ))
            }
          </span>
          <p className='bold-16 md:bold-20 text-gray-100'>{peopleJoined}</p>
        </div>
      </div>
    </div>
  )
}
const DisplayFurniture = () => {
  return (
    <div className='2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'>
      <div className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
        <FurnitureDesign
          backgroundImage = "bg-bg-img-1"
          title="Famous Bakery Inspiration"
          subtitle = "Nordic Bakery"
          peopleJoined = "50+ Approved"
        />

        <FurnitureDesign
          backgroundImage = "bg-bg-img-2"
          title="Famous Cafe Inspiration"
          subtitle = "Southern Cafe"
          peopleJoined = "50+ Approved"
        />
      </div>

      <div className='flexEnd mt-10 px-6 md:-mt-60 lg:mr-6'>
        <div className='bg-gray-700 p-6 md:max-w-[300px] lg:max-w-[450px] xl:max-w-[650px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl'>
          <h2 className='regular-20 md:regular-24 xl:regular-40 text-white'>
            <strong>No Inspiration</strong> and Confused To Design Your Cafe?
          </h2>
          <p className='regular-14 xl:regular-16 mt-5 text-white'>
            a delectable delight at your fingertips! Satisfy your sweet cravings and indulge in the art of baking with the ultimate convenience of our user-friendly application. From mouthwatering cupcakes to artisanal bread, our app brings the bakery experience directly to your mobile device.
          </p>
          <Image
            src="/quote.svg"
            alt='camp-2'
            width={186}
            height={219}
            className='camp-quote'
          />
        </div>
      </div>
    </div>
  )
}

export default DisplayFurniture
