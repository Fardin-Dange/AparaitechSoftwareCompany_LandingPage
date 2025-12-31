import React from "react";
import RobotImage from "../assets/robot.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative min-h-screen flex items-center py-[120px] px-8 overflow-hidden
        bg-gradient-to-b
        from-[#ede9fe]
        via-[#e4ddfb]
        to-[#f3eeff]
      "
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden z-[1]">
        <div className="absolute w-[420px] h-[420px] -top-[120px] -left-[120px] bg-[#7c3aed]/25 rounded-full blur-[120px] animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute w-[520px] h-[520px] -bottom-[180px] -right-[180px] bg-[#6366f1]/25 rounded-full blur-[140px] animate-[float_8s_ease-in-out_infinite] animation-delay-2000" />
        <div className="absolute w-[360px] h-[360px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#818cf8]/25 rounded-full blur-[140px] animate-[float_8s_ease-in-out_infinite] animation-delay-4000" />
      </div>

      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-[2]">
        {/* Left Content */}
        <div className="animate-[fadeInUp_1s_ease]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-[#3f3c8f]">
            Building Intelligent AI Solutions for Tomorrow
          </h1>

          <p className="text-xl text-[#5b5aa6] mb-10 font-normal">
            AI • Machine Learning • Web Platforms • Digital Transformation
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-[#6d63ff] text-white px-10 py-4 text-lg font-semibold rounded-lg transition-all hover:-translate-y-1 shadow-[0_10px_40px_rgba(109,99,255,0.4)] hover:shadow-[0_15px_50px_rgba(109,99,255,0.6)]">
              Get a Quote
            </button>

            <button className="bg-white/60 backdrop-blur-md text-[#4b4a7a] border border-[#c7c2f5] px-10 py-4 text-lg font-semibold rounded-lg transition-all hover:bg-white hover:-translate-y-1">
              View Our Work
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-[600px] flex items-center justify-center animate-[fadeInRight_1s_ease]">
          <div className="absolute w-[420px] h-[420px] bg-[#818cf8]/30 blur-[140px] rounded-full" />

          <img
            src={RobotImage}
            alt="AI Robot"
            className="relative z-[2] w-[420px] max-w-full object-contain animate-[float_6s_ease-in-out_infinite]"
          />
        </div>
      </div>

      {/* 🔥 Bottom fade into Services */}
      <div
        className="
          pointer-events-none
          absolute bottom-0 left-0 w-full h-32
          bg-gradient-to-b
          from-transparent
          to-[#f3eeff]
          z-[3]
        "
      />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </section>
  );
};

export default Hero;
