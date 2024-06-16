import stock from '../../assets/stock.svg'
const Vision = () => {
  return (
    <div className="px-14 pb-24">
      <h2 className="font-bold text-center text-[48px]">Vision & Mission</h2>
      <div className="flex justify-between mt-10 mb-6">
        <div className="bg-primaryColor rounded-lg px-6 py-10 md:w-[60%]">
          <div className='flex items-center gap-2'>
            <h2 className='text-white font-bold text-3xl'>Vision</h2>
            <img src={stock} alt="" />
          </div>
          <p className='text-white text-lg mt-4'>We aim to provide a premium platform for African Professional Freelance Creatives to connect with their clients with ease, no matter the location.</p>
        </div>
        <div className='md:block hidden'>

        </div>
      </div>
      <div className="flex justify-between mt-10 mb-6">
        <div className='md:block hidden'>

        </div>
        <div className="bg-secondaryColor rounded-lg px-6 py-10 md:w-[60%]">
          <div className='flex items-center gap-2'>
            <h2 className='text-white font-bold text-3xl'>Mission</h2>
            <img src={stock} alt="" />
          </div>
          <p className='text-white text-lg mt-4'>Our goal is to contribute to the growth of the creative industry in Kenya, and ultimately Africa, so that African creatives can live fulfilling lives through their skills and passion.</p>
        </div>

      </div>
    </div>
  )
}
export default Vision