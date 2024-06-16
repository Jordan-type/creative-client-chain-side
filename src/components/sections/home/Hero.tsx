import heroImg from '../../../assets/hero.png'
import Image from "next/image"

const Hero = () => {
  return (
    <div className="bg-[#E7E7E7] relative h-screen w-full">
      <Image className='absolute bottom-0 right-10' src={heroImg} alt="" />
      <div className='h-full flex items-center px-10'>
        <div className='flex flex-col gap-y-14 justify-center h-full max-w-[500px] z-10'>
          <h1 className='font-extrabold text-[50px] text-primaryColor leading-tight'>Hire the best creative freelancers for any job, online.</h1>
          <div className="flex items-center gap-10">
            <button className="bg-primaryColor rounded-lg px-6 py-2 text-white">
              Find Talent
            </button>
            <button className="border-2 border-primaryColor rounded-lg px-6 py-2 text-primaryColor">
              Find work
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Hero