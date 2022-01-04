import Image from 'next/image'

function About() {
  return (
    <section>
    <div className="font-ilisarniq max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-6xl mx-auto px-12 py-10 lg:mt-14">

      <div className="flex flex-col items-center justify-center md:justify-between lg:flex-row mb-20 md:space-x-14">
        <img className= "w-5/6 mb-10 lg:mb-0" src="/dp2.png" alt='dp2'/>
        {/* <div className='flex justify-center w-5/6 mb-10 lg:mb-0 lg:justify-start'>
          <Image src={'/dp2.png'} width={440} height={480} objectFit='contain' quality={100} />
        </div> */}
        <div className="flex flex-col md:ml-10 w-full">
          <h1 className="text-4xl sm:text-5xl text-slate-300 mb-7 text-center lg:text-left">👋🏼</h1>
          <p className="text-xl sm:text-2xl text-slate-300 mb-7 leading-9 text-center sm:text-left">
            I&apos;ve spent the past 3+ years working and trying out different areas of technologies; front-end development, mobile-app development, UI/UX, artificial intelligence, and game development.</p>
          <p className="text-xl sm:text-2xl text-slate-300 mb-7 leading-9 text-center sm:text-left">I&apos;m into any sort of software development that requires visualization and creativity. My other areas of interest include machine/deep learning, front-end development and UI/UX.</p>
          <p className="text-xl sm:text-2xl text-slate-300 mb-7 leading-9 text-center sm:text-left">Beside tech-related stuffs, I spend my time building fun projects, listening to podcasts, playing guitar, and sometimes draw!</p>
        </div>
      </div>

      <div className="flex flex-col space-y-14 md:flex-row md:space-x-14 md:space-y-0">
        <div className="flex flex-col w-5/6">
          <h1 className="text-4xl sm:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#50d89f]  to-[#6a7eda] mb-7">Work.</h1>
          <p className="text-xl sm:text-2xl text-slate-300 mb-4">MACD Engineered<span className="text-xl sm:text-2xl text-slate-500 pl-3">09/21-11/21</span></p>
          <p className="text-xl sm:text-2xl text-slate-300 mb-4">Robert Bosch<span className="text-xl sm:text-2xl text-slate-500 pl-3">09/20-04/21</span></p>
          <p className="text-xl sm:text-2xl text-slate-300 mb-4">Matte Brands<span className="text-xl sm:text-2xl text-slate-500 pl-3">04/21-06/22</span></p>
        </div>    
        <div className="flex flex-col w-full">
          <h1 className="text-4xl sm:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#50d89f]  to-[#6a7eda] mb-7">Studies.</h1>
          <p className="text-xl sm:text-2xl font-medium text-slate-300 mb-4">Universiti Teknologi PETRONAS</p>
          <p className="text-xl sm:text-2xl text-slate-300 mb-4">Bachelor of Information Technology (Hons)</p>
          <p className="text-xl sm:text-2xl text-slate-300 mb-4">Major in Data Analytics</p>
          <p className="text-xl sm:text-2xl text-slate-500 mb-4">2018-2022</p>
        </div>       
      </div>

    </div>
  </section>
  )
}

export default About
