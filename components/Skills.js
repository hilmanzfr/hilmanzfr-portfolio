import {
  SiPython,
  SiPandas,
  SiOpencv,
  SiJupyter,
  SiTensorflow,
  SiScikitlearn,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiReact,
  SiC,
  SiCplusplus,
  SiFlutter,
  SiJava,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiFigma,
} from "react-icons/si";
import {
  AiOutlineRadarChart,
  AiOutlineCode,
  AiOutlineChrome,
  AiOutlineRadiusSetting,
} from "react-icons/ai";

function Skills() {
  return (
    <section>
      <div className="font-ilisarniq max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-6xl mx-auto px-12 py-10 lg:mt-10">
        {/* <hr className="border-slate-700 mb-10" /> */}
        <div>
          <h1 className="text-3xl font-semibold sm:text-2xl md:text-4xl text-left text-slate-300">
            Skills
          </h1>
        </div>

        <div className="flex flex-col justify-between lg:flex-row mt-16">
          <div className="bg-[#212939] w-full mr-4 rounded-2xl">
            <div className="mt-7 mb-4 mx-5 flex flex-row items-center">
              <div className="bg-[#455574] mx-2 rounded-lg bg-opacity-60">
                <AiOutlineRadarChart className="text-3xl text-gray-900 m-0.5" />
              </div>
              <h1 className="text-lg sm:text-xl lg:text-2xl font-medium text-blue-300">
                Data Science
              </h1>
            </div>
            <p className="mb-7 mx-7 text-s sm:text-lg text-slate-300 font-medium">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, quidem debitis. Fugiat debitis, exercitationem quo, sit nam.
            </p>
            <div className="mx-8 mb-7 flex flex-row justify-center">
              <SiPython className="text-3xl mx-1 text-slate-500" />
              <SiPandas className="text-3xl mx-1 text-slate-500" />
              <SiOpencv className="text-3xl mx-1 text-slate-500" />
              <SiJupyter className="text-3xl mx-1 text-slate-500" />
              <SiTensorflow className="text-3xl mx-1 text-slate-500" />
              <SiScikitlearn className="text-3xl mx-1 text-slate-500" />
            </div>
          </div>

          <div className="bg-[#212939] w-full mt-4 lg:mt-0 lg:ml-4 rounded-2xl">
            <div className="mt-7 mb-4 mx-5 flex flex-row items-center">
              <div className="bg-[#455574] mx-2 rounded-lg bg-opacity-60">
                <AiOutlineChrome className="text-3xl text-gray-900 m-0.5" />
              </div>
              <h1 className="text-lg sm:text-xl lg:text-2xl font-medium text-blue-300">
                Web Development
              </h1>
            </div>
            <p className="mb-7 mx-7 text-s sm:text-lg text-slate-300 font-medium">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, quidem debitis. Fugiat debitis, exercitationem quo, sit nam.
            </p>
            <div className="mx-8 mb-7 flex flex-row justify-center">
              <SiHtml5 className="text-3xl mx-1 text-slate-500" />
              <SiCss3 className="text-3xl mx-1 text-slate-500" />
              <SiJavascript className="text-3xl mx-1 text-slate-500" />
              <SiTailwindcss className="text-3xl mx-1 text-slate-500" />
              <SiNextdotjs className="text-3xl mx-1 text-slate-500" />
              <SiReact className="text-3xl mx-1 text-slate-500" />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between lg:flex-row mt-4 lg:mt-8">
          <div className="bg-[#212939] w-full mr-4 rounded-2xl">
            <div className="mt-7 mb-4 mx-5 flex flex-row items-center">
              <div className="bg-[#455574] mx-2 rounded-lg bg-opacity-60">
                <AiOutlineCode className="text-3xl text-gray-900 m-0.5" />
              </div>
              <h1 className="text-lg sm:text-xl lg:text-2xl font-medium text-blue-300">
                General Programming
              </h1>
            </div>
            <p className="mb-7 mx-7 text-s sm:text-lg text-[#9eaec4] font-medium">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, quidem debitis. Fugiat debitis, exercitationem quo, sit nam.
            </p>
            <div className="mx-8 mb-7 flex flex-row justify-center">
              <SiC className="text-3xl mx-1 text-slate-500" />
              <SiCplusplus className="text-3xl mx-1 text-slate-500" />
              <SiFlutter className="text-3xl mx-1 text-slate-500" />
              <SiJava className="text-3xl mx-1 text-slate-500" />
            </div>
          </div>

          <div className="bg-[#212939] w-full mt-4 lg:mt-0 lg:ml-4  rounded-2xl">
            <div className="mt-7 mb-4 mx-5 flex flex-row items-center">
              <div className="bg-[#455574] mx-2 rounded-lg bg-opacity-60">
                <AiOutlineRadiusSetting className="text-3xl text-gray-900 m-0.5" />
              </div>
              <h1 className="text-lg sm:text-xl lg:text-2xl font-medium text-blue-300">
                Graphic Design
              </h1>
            </div>
            <p className="mb-7 mx-7 text-s sm:text-lg text-slate-300 font-medium">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, quidem debitis. Fugiat debitis, exercitationem quo, sit nam.
            </p>
            <div className="mx-8 mb-7 flex flex-row justify-center">
              <SiAdobephotoshop className="text-3xl mx-1 text-slate-500" />
              <SiAdobeillustrator className="text-3xl mx-1 text-slate-500" />
              <SiFigma className="text-3xl mx-1 text-slate-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
