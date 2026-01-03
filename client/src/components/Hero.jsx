import React from "react";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative w-full min-h-screen overflow-hidden
        bg-gradient-to-b
        from-[#ede9fe]
        via-[#e4ddfb]
        to-[#f3eeff]
      "
    >
      {/* FULL-SCREEN SPLINE */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/9qnaOKyR4OdZISIn/scene.splinecode" />
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-[1400px] w-full mx-auto px-8">
          <div className="max-w-2xl text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-[#d1d5db]">
              Building Intelligent AI Solutions for Tomorrow
            </h1>

            <p className="text-xl mb-10 text-[#d1d5db]">
              AI • Machine Learning • Web Platforms • Digital Transformation
            </p>

            <div className="flex gap-6">
              <button className="bg-white/10 backdrop-blur-md text-white px-10 py-4 rounded-lg border border-white/20 hover:bg-white/20 transition">
                Get a Quote
              </button>
              <button className="bg-white/20 backdrop-blur-md text-white px-10 py-4 rounded-lg hover:bg-white/30 transition">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
