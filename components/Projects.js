import Image from "next/image";

function Projects() {
  return (
    <section>
      <div className="font-ilisarniq max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-6xl mx-auto px-12 py-10 lg:mt-20">
        {/* <hr className="border-slate-700 mb-14"/> */}
        {/* Heading */}
        <div>
          <h1 className="text-2xl text-center font-semibold sm:text-4xl md:text-left text-transparent bg-clip-text bg-gradient-to-r from-[#50d89f]  to-[#6a7eda]">
            Works / Projects
          </h1>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-10 justify-between items-center">
          <div className="flex flex-col bg-gradient-to-r bg-transparent hover:from-[#50d89f]  hover:to-[#6a7eda] border-none shadow-md rounded-3xl md:w-1/2 mt-5 sm:mt-10 md:mt-10 p-0.5">
            <div className="flex flex-col bg-[#191C25] border-none shadow-md rounded-3xl">
              <div className="">
                <img
                  className="border-none rounded-3xl p-3"
                  src="/kpidashboard.png"
                  alt="Bosch KPI Dashboard"
                />
              </div>
              <div className="flex flex-row mx-8 mt-4">
                <div className="bg-[#273a3a] rounded-lg mr-2">
                  <p className="text-[#81a19f] text-xs sm:text-base py-1 px-3">
                    Robert Bosch
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap flex-row mx-8 my-2">
                <div className="bg-[#272B3A] rounded-lg mr-2 mb-2">
                  <p className="text-slate-400 text-xs sm:text-base py-1 px-3">Power BI</p>
                </div>
                <div className="bg-[#272B3A] rounded-lg mr-2 mb-2">
                  <p className="text-slate-400 text-xs sm:text-base py-1 px-3">Excel</p>
                </div>
              </div>
              <p className="text-lg sm:text-2xl font-semibold text-slate-300 mx-8 mb-2">
                Production Line KPI Dashboard
              </p>
              <p className="text-base sm:text-xl font-medium text-slate-300 mx-8 mb-10">
                Developed Bosch production line KPI Dashboard for Penang Plant,
                Malaysia and Sebnitz Plant, Germany.
              </p>
            </div>
          </div>

          <div className="flex flex-col bg-gradient-to-r bg-transparent hover:from-[#50d89f]  hover:to-[#6a7eda] border-none shadow-md rounded-3xl md:w-1/2 mt-5 md:mt-10 p-0.5">
            <div className="flex flex-col bg-[#191C25] border-none shadow-md rounded-3xl">
              <div className="">
                <img className="border-none rounded-3xl p-3" src="/mysj.png" alt="MySejahtera Vaccination Status Detector"/>
              </div>
              <div className="flex flex-row mx-8 mt-4">
                <div className="bg-[#273a3a] rounded-lg mr-2">
                  <p className="text-[#81a19f] text-xs sm:text-base py-1 px-3">
                    MACD Engineered
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap flex-row mx-8 my-2 ">
                <div className="bg-[#272B3A] rounded-lg mr-2 mb-2">
                  <p className="text-slate-400 text-xs sm:text-base py-1 px-3">Python</p>
                </div>
                <div className="bg-[#272B3A] rounded-lg mr-2 mb-2">
                  <p className="text-slate-400 text-xs sm:text-base py-1 px-3">OpenCV</p>
                </div>
                <div className="bg-[#272B3A] rounded-lg mr-2 mb-2">
                  <p className="text-slate-400 text-xs sm:text-base py-1 px-3">
                    PyTesseract
                  </p>
                </div>
                <div className="bg-[#272B3A] rounded-lg mr-2 mb-2">
                  <p className="text-slate-400 text-xs sm:text-base py-1 px-3">PyQt5</p>
                </div>
              </div>
              <p className="text-lg sm:text-2xl font-semibold text-slate-300 mx-8 mb-2">
                MySJ Vaccination Status Detector
              </p>
              <p className="text-base sm:text-xl font-medium text-slate-300 mx-8 mb-10">
                Developed a computer-vision based application to scan and read
                MySejahtera vaccination status through camera.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-10 items-center">
          <div className="flex flex-col bg-gradient-to-r bg-transparent hover:from-[#50d89f]  hover:to-[#6a7eda] border-none shadow-md rounded-3xl md:w-1/2 mt-5 md:mt-10 p-0.5">
            <div className="flex flex-col bg-[#191C25] border-none shadow-md rounded-3xl">
              <div className="">
                <img
                  className="border-none rounded-3xl p-3"
                  src="/portfolio.png"
                  alt="Portfolio"
                />
              </div>
              <div className="flex flex-row mx-8 mt-4">
                <div className="bg-[#273a3a] rounded-lg mr-2">
                  <p className="text-[#81a19f] text-xs sm:text-base py-1 px-3">
                    Personal Project
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap flex-row mx-8 my-2">
                <div className="bg-[#272B3A] rounded-lg mr-2 mb-2">
                  <p className="text-slate-400 text-xs sm:text-base py-1 px-3">HTML/CSS</p>
                </div>
                <div className="bg-[#272B3A] rounded-lg mr-2 mb-2">
                  <p className="text-slate-400 text-xs sm:text-base py-1 px-3">
                    JavaScript
                  </p>
                </div>
                <div className="bg-[#272B3A] rounded-lg mr-2 mb-2">
                  <p className="text-slate-400 text-xs sm:text-base py-1 px-3">Next.js</p>
                </div>
                <div className="bg-[#272B3A] rounded-lg mr-2 mb-2">
                  <p className="text-slate-400 text-xs sm:text-base py-1 px-3">Tailwind</p>
                </div>
              </div>
              <p className="text-lg sm:text-2xl font-semibold text-slate-300 mx-8 mb-2">
                Personal Portfolio
              </p>
              <p className="text-base sm:text-xl font-medium text-slate-300 mx-8 mb-10">
                Developed live personal portfolio with a focus on design, accessibility, and performance optimization.
              </p>
            </div>
          </div>

          <div className="flex flex-col bg-gradient-to-r bg-transparent hover:from-[#50d89f]  hover:to-[#6a7eda] border-none shadow-md rounded-3xl md:w-1/2 mt-5 md:mt-10 p-0.5">
            <div className="flex flex-col bg-[#191C25] border-none shadow-md rounded-3xl">
              <div className="">
                <img className="border-none rounded-3xl p-3" src="/fitai.png" alt="FitAI Workout Posture Corrector"/>
              </div>
              <div className="flex flex-row mx-8 mt-4">
                <div className="bg-[#273a3a] rounded-lg mr-2">
                  <p className="text-[#81a19f] text-xs sm:text-base py-1 px-3">
                    Final Year Project
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap flex-row mx-8 my-2">
                <div className="bg-[#272B3A] rounded-lg mr-2 mb-2">
                  <p className="text-slate-400 text-xs sm:text-base py-1 px-3">Python</p>
                </div>
                <div className="bg-[#272B3A] rounded-lg mr-2 mb-2">
                  <p className="text-slate-400 text-xs sm:text-base py-1 px-3">OpenCV</p>
                </div>
                <div className="bg-[#272B3A] rounded-lg mr-2 mb-2">
                  <p className="text-slate-400 text-xs sm:text-base py-1 px-3">OpenPose</p>
                </div>
                <div className="bg-[#272B3A] rounded-lg mr-2 mb-2">
                  <p className="text-slate-400 text-xs sm:text-base py-1 px-3">Flutter</p>
                </div>
              </div>
              <p className="text-lg sm:text-2xl font-semibold text-slate-300 mx-8 mb-2">
                FitAI: Workout Posture Analysis
              </p>
              <p className="text-base sm:text-xl font-medium text-slate-300 mx-8 mb-10">
                Currently developing home-based workout posture corrector with
                computer vision and machine learning approaches.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
