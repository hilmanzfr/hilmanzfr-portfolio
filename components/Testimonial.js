import react from "react";
import { FaQuoteRight } from "react-icons/fa";

function Testimonial() {
  return (
    <section>
      <div className="font-ilisarniq max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-6xl mx-auto px-12 py-10 lg:mt-10">
        <div className="flex flex-row justify-center items-center">
          <h1 className="text-xl font-semibold sm:text-2xl md:text-4xl text-slate-300">
            Testimonial
          </h1>
          <img
            className="w-6 sm:w-7 md:w-8 lg:w-9 m-1 pt-1"
            src="/verified.png"
            alt="verified"
          />
        </div>
        {/* <div className="flex pt-2 pl-2 w-full sm:w-2/5 mt-16 rounded-3xl mx-auto bg-gradient-to-br from-slate-400 via-blue-200 to-pink-500 hover:shadow-md"> */}
        <div className="flex pt-2 pl-2 w-full sm:w-2/5 mt-16 rounded-3xl mx-auto bg-gradient-to-br from-[#50d89f]  to-[#6a7eda] hover:shadow-md">
          <div className="flex flex-col w-full sm:w-full bg-slate-100 bg-opacity-60 rounded-3xl mx-auto items-center justify-center">
            <FaQuoteRight className="mt-10 text-3xl sm:text-4xl text-slate-800 hover:text-black" />
            <p className="mt-5 mx-8 text-s sm:text-lg text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, neque quod rerum culpa tempora temporibus sequi
              voluptatum quasi quaerat.
            </p>
            <img
              className="mt-5 rounded-full w-20 h-20 shadow-sm shadow-white"
              src="/jenny.png"
            />
            <h3 className="mt-3 font-semibold hover:text-black text-s sm:text-md">
              Jenny Khoo Su Yean
            </h3>
            <p className="mb-10 hover:text-black text-s sm:text-md">
              BPS Manager, Bosch
            </p>
          </div>
        </div>{" "}
      </div>
    </section>
  );
}

export default Testimonial;
