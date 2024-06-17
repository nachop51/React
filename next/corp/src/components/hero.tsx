import Image from 'next/image'

interface HeroProps {
  image: string
  title: string
  imgAlt: string
}

const Hero = ({ image, title, imgAlt }: HeroProps) => {
  return (
    <div className='relative h-screen'>
      <div className='absolute -z-10 inset-0'>
        <Image src={image} alt={imgAlt} fill className='object-cover' />
        <div className='absolute inset-0 bg-gradient-to-r from-slate-900' />
      </div>

      <div className='pt-48 flex justify-center items-center'>
        <h1 className='text-white text-6xl'>
          {title}
        </h1>
      </div>
    </div>
  )
}

export default Hero
