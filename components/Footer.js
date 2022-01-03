import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

function Footer() {
  return (
    <section>
      <div className="font-ilisarniq max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-6xl mx-auto px-12 py-10 lg:mt-8">
        <hr className="border-[#20202A] mb-10"/>
        <div className="flex flex-row justify-between">
          <p className="text-sm sm:text-base md:text-xl font-medium text-slate-300 py-2 px-3">© 2022 Hilman Zafri Mazlan</p>
          <a className="text-sm sm:text-base md:text-xl font-medium text-slate-300 pt-2 px-3 hover:bg-[#20202A] hover:rounded-xl hover:text-white" href="maito:hilman017@gmail.com">hilman017@gmail.com</a>
        </div>
        <div className="flex justify-center my-10">
          <p className="flex items-center text-sm sm:text-base md:text-xl font-medium text-slate-300">Designed by Hilman with Next.js<span><SiNextdotjs className="text-white mx-2" /></span>& TailwindCSS <span><SiTailwindcss className="text-cyan-400 mx-2" /></span></p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
