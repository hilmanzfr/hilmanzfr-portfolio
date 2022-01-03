import Image from 'next/image'

function Projects() {
  return (
    <section>
      <div className="font-ilisarniq max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-6xl mx-auto px-12 py-10 lg:mt-20">
        {/* <hr className="border-slate-700 mb-14"/> */}
        {/* Heading */}
        <div>
          <h1 className="text-3xl font-semibold sm:text-2xl md:text-4xl text-left text-slate-300">
            Works / Projects
          </h1>
        </div>

        {/* Project 1 */}
        <div className="relative mt-7 sm:mt-16">
          <div className="container mx-auto flex flex-col lg:flex-row items-start justify-center gap-x-12">
            {/* <!-- Image --> */}
            <div className="flex flex-1 justify-center mb-10 lg:mb-0 md:h-4/6">
              <img className="rounded-2xl" src="/kpidashboard.png" />
            </div>
            {/* Content */}
            <div className="flex flex-1 flex-col items-start">
            <div className="flex flex-row">
                <div className="bg-transparent border border-blue-300 rounded-lg mb-4">
                  <p className="text-blue-300 text-base py-1 px-3">Robert Bosch</p>
                </div>
              </div>
              <h1 className="text-2xl sm:text-3xl font-semibold text-slate-300">
                Production Line KPI Dashboard
              </h1>
              <p className="text-slate-300 text-xl font-light mt-4 lg:text-left">
                Developed Bosch production line KPI Dashboard for Penang Plant,
                Malaysia and Sebnitz Plant, Germany.
              </p>

              <div className="flex flex-wrap flex-row mt-4">
                <div className="bg-[#323241] rounded-lg mr-2">
                  <p className="text-[#9595a4] text-base py-1 px-3">Power BI</p>
                </div>
                <div className="bg-[#323241] rounded-lg mr-2">
                  <p className="text-[#9595a4] text-base py-1 px-3">Excel</p>
                </div>
              </div>
            </div>
          </div>
        </div>

         {/* Project 2 */}
         <div className="relative mt-10 lg:mt-16">
          <div className="container mx-auto flex flex-col lg:flex-row items-start justify-center gap-x-12">
            {/* <!-- Image --> */}
            <div className="flex flex-1 justify-center mb-10 lg:mb-0 md:h-4/6">
              <img className="rounded-2xl" src="/mysj.png" />
            </div>
            {/* Content */}
            <div className="flex flex-1 flex-col items-start">
            <div className="bg-transparent border border-blue-300 rounded-lg mb-4">
                  <p className="text-blue-300 text-base py-1 px-3">MACD Engineered</p>
                </div> 
              <h1 className="text-2xl sm:text-3xl font-semibold text-slate-300">
                MySJ Vaccination Status Detector
              </h1>
              <p className="text-slate-300 text-xl font-light mt-4 lg:text-left">
              Developed a computer-vision based application to scan and read MySejahtera vaccination status through camera.
              </p>
              {/* <p className="text-slate-300 text-xl font-normal mt-4 lg:text-left">
                Tech-stack: Python, OpenCV, PyTesseract, PyQt5
              </p> */}
              <div className="flex flex-wrap flex-row mt-4">
                <div className="bg-[#323241] rounded-lg mr-2">
                  <p className="text-[#9595a4] text-base py-1 px-3">Python</p>
                </div>
                <div className="bg-[#323241] rounded-lg mr-2">
                  <p className="text-[#9595a4] text-base py-1 px-3">OpenCV</p>
                </div>
                <div className="bg-[#323241] rounded-lg mr-2">
                  <p className="text-[#9595a4] text-base py-1 px-3">PyTesseract</p>
                </div>
                <div className="bg-[#323241] rounded-lg mr-2">
                  <p className="text-[#9595a4] text-base py-1 px-3">PyQt5</p>
                </div>
              </div>
            </div>
          </div>
        </div>

         {/* Project 3 */}
         <div className="relative mt-10 lg:mt-16">
          <div className="container mx-auto flex flex-col lg:flex-row items-start justify-center gap-x-12">
            {/* <!-- Image --> */}
            <div className="flex flex-1 justify-center mb-10 lg:mb-0 md:h-4/6">
              <img className="rounded-2xl" src="/portfolio.png" />
            </div>
            {/* Content */}
            <div className="flex flex-1 flex-col items-start">
            <div className="bg-transparent border border-blue-300 rounded-lg mb-4">
                  <p className="text-blue-300 text-base py-1 px-3">Personal Project</p>
                </div>  
              <h1 className="text-2xl sm:text-3xl font-semibold text-slate-300">
                Personal Portfolio
              </h1>
              <p className="text-slate-300 text-xl font-light mt-4 lg:text-left">
                Developed live personal portfolio with a focus on accessibility, testing, and performance optimization.
              </p>
              <div className="flex flex-wrap flex-row mt-4">
                <div className="bg-[#323241] rounded-lg mr-2">
                  <p className="text-[#9595a4] text-base py-1 px-3">HTML</p>
                </div>
                <div className="bg-[#323241] rounded-lg mr-2">
                  <p className="text-[#9595a4] text-base py-1 px-3">CSS</p>
                </div>
                <div className="bg-[#323241] rounded-lg mr-2">
                  <p className="text-[#9595a4] text-base py-1 px-3">JavaScript</p>
                </div>
                <div className="bg-[#323241] rounded-lg mr-2">
                  <p className="text-[#9595a4] text-base py-1 px-3">Next.js</p>
                </div>
                <div className="bg-[#323241] rounded-lg mr-2">
                  <p className="text-[#9595a4] text-base py-1 px-3">Tailwind</p>
                </div>
              </div>
            </div>
          </div>
        </div>

         {/* Project 4 */}
         <div className="relative mt-10 lg:mt-16">
          <div className="container mx-auto flex flex-col lg:flex-row items-start justify-center gap-x-12">
            {/* <!-- Image --> */}
            <div className="flex flex-1 justify-center mb-10 lg:mb-0 md:h-4/6">
              <Image className="rounded-2xl" src="/fitai.png" width={485} height={275} objectFit="contain" quality={100} />
            </div>
            {/* Content */}
            <div className="flex flex-1 flex-col items-start">
            <div className="bg-transparent border border-blue-300 rounded-lg mb-4">
                  <p className="text-blue-300 text-base py-1 px-3">Final Year Project</p>
                </div>  
              <h1 className="text-2xl sm:text-3xl font-semibold text-slate-300">
                FitAI: Workout Posture Corrector
              </h1>
              <p className="text-slate-300 text-xl font-light mt-4 lg:text-left">
              Currently developing home-based workout posture corrector with computer vision and deep learning approaches. 
              </p>
              <div className="flex flex-wrap flex-row mt-4">
                <div className="bg-[#323241] rounded-lg mr-2">
                  <p className="text-[#9595a4] text-base py-1 px-3">Python</p>
                </div>
                <div className="bg-[#323241] rounded-lg mr-2">
                  <p className="text-[#9595a4] text-base py-1 px-3">OpenCV</p>
                </div>
                <div className="bg-[#323241] rounded-lg mr-2">
                  <p className="text-[#9595a4] text-base py-1 px-3">OpenPose</p>
                </div>
                <div className="bg-[#323241] rounded-lg mr-2">
                  <p className="text-[#9595a4] text-base py-1 px-3">Flutter</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
