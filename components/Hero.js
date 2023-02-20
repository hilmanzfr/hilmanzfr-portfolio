import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

import { AiFillLinkedin, AiOutlineGithub, AiOutlineBehance, AiFillInstagram } from "react-icons/ai";

function Hero() {
  return (
    <section>
      <div className="font-ilisarniq max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-6xl mx-auto px-12 py-10 mt-8 lg:mt-14">
        <div className="flex flex-col-reverse items-start justify-between md:flex-row md:space-x-20 ">
          <div className="flex flex-col w-full">
            <p className="text-4xl font-extrabold pb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#50d89f]  to-[#6a7eda] sm:text-5xl lg:text-6xl md:text-left mb-6">
              Hey, I&apos;m Hilman.
            </p>
            <p className="text-xl text-slate-300 sm:text-2xl text-center md:text-left md:leading-9 mb-5">
              I&apos;m currently a final year student at Universiti Teknologi PETRONAS 🇲🇾 studying Information Technology with Data Analytics major
            </p>
            <p className="text-xl text-slate-300 sm:text-2xl text-center md:text-left mb-6">
              Previously intern at{" "}
              <span className="font-medium text-[#b2eed5]">
                Robert Bosch
              </span>
            </p>

            <div className="flex justify-center md:justify-start space-x-4 mt-1 mb-8">
              <a href="https://www.linkedin.com/in/hilmanzfr/" className="">
                <AiFillLinkedin className="text-3xl sm:text-4xl lg:text-5xl text-slate-300 hover:text-white" />
              </a>
              <a href="https://github.com/hilmanzfr" className="">
                <AiOutlineGithub className="text-3xl sm:text-4xl lg:text-5xl text-slate-300 hover:text-white" />
              </a>
              <a href="https://www.behance.net/hilmanzfr" className="">
                <AiOutlineBehance className="text-3xl sm:text-4xl lg:text-5xl text-slate-300 hover:text-white" />
              </a>
              <a href="https://www.instagram.com/hilmanzafri" className="">
                <AiFillInstagram className="text-3xl sm:text-4xl lg:text-5xl text-slate-300 hover:text-white" />
              </a>
            </div>

            <div className="flex items-center md:flex-row justify-center md:justify-start space-x-5">
              <Link href="/about">
                <div className="p-0.5 rounded-2xl bg-gradient-to-r from-[#50d89f]  to-[#6a7eda]  hover:shadow-sm hover:shadow-[#44d3f7]">
                  <btn className="flex items-center px-4 pt-2 pb-3 text-md sm:text-lg md:text-xl lg:text-2xl font-medium rounded-2xl cursor-pointer text-slate-300 bg-slate-900 bg-opacity-70 hover:text-white md:pt-3 md:pb-4 md:px-5">
                    About me{" "}
                    <span>
                      <FiArrowUpRight className="text-2xl text-slate-300 ml-2 mt-1" />
                    </span>
                  </btn>
                </div>
              </Link>
              <Link href="https://drive.google.com/file/d/1Q5VdrFAEwRT1Rxmh-_rEVxxVQPEwdhV_/view?usp=sharing">
                <div className="p-0.5 rounded-2xl bg-gradient-to-r from-[#50d89f]  to-[#6a7eda]  hover:shadow-sm hover:shadow-[#44d3f7]">
                  <btn className="flex items-center px-5 pt-2 pb-3 text-md sm:text-lg md:text-xl lg:text-2xl  font-medium rounded-2xl cursor-pointer text-slate-300 bg-slate-900 hover:text-white md:pt-3 md:pb-4 md:px-8">
                    Resume
                  </btn>
                </div>
              </Link>
            </div>
          </div>

          <div className="flex flex-col mb-10 mx-auto md:mb-0 w-5/6 md:w-4/6">
            <img src="/dp.png" alt="My Picture"/>
            {/* <Image src={"/dp.png"} width={300} height={450} objectFit="contain" quality={100}  /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
