import React from "react";
import heroVideo from "../assets/Recording.mp4";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* 🎥 VIDEO BACKGROUND */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🌑 OVERLAY */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* 🔥 HERO CONTENT */}
      <div className="relative z-10 min-h-screen flex items-start pt-28 sm:pt-32">
        <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-8">

          <div className="flex flex-col lg:flex-row items-start gap-14">

            {/* LEFT CONTENT */}
            <div className="max-w-2xl text-left">
              <h1
                className="
                  text-4xl sm:text-5xl lg:text-6xl
                  font-extrabold
                  leading-[1.15]      /* ✅ FIX: more breathing space */
                  tracking-tight      /* subtle polish */
                  mb-6
                  text-[#d1d5db]
                "
              >
                Building Intelligent AI Solutions for Tomorrow
              </h1>

              <p className="text-base sm:text-xl mb-8 text-[#d1d5db] leading-relaxed">
                • AI <br />
                • Machine Learning <br />
                • Web Platforms <br />
                • Digital Transformation
              </p>

              <a
                href="https://lms-full-stack-mcq7.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  bg-white/10 text-white
                  px-8 sm:px-10 py-4
                  text-base sm:text-lg
                  font-semibold
                  rounded-lg
                  border border-white/30
                  hover:bg-white/20
                  transition
                  inline-flex items-center justify-center
                "
              >
                Explore our Programs
              </a>
            </div>

            {/* 🌍 CLIENTS SECTION */}
            <div
              className="
                w-full
                mt-6
                lg:mt-24 xl:mt-32
                lg:ml-auto
                relative lg:translate-x-10
              "
            >
              <p className="text-xs uppercase tracking-widest text-white/60 mb-5 text-center lg:text-right">
                Our Clients Across the Globe
              </p>

              <div
                className="
                  grid grid-cols-2 gap-3
                  sm:grid-cols-3
                  lg:flex lg:flex-col lg:items-end lg:gap-4
                "
              >
                {[
                  { code: "US", name: "USA" },
                  { code: "JP", name: "Japan" },
                  { code: "KR", name: "South Korea" },
                  { code: "IN", name: "India" },
                  { code: "EU", name: "Europe" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="
                      w-full lg:w-[260px]
                      flex items-center justify-center gap-2
                      bg-white/10 backdrop-blur-md
                      text-white
                      px-4 py-2.5
                      rounded-full
                      text-xs sm:text-sm font-medium
                      border border-white/20
                      shadow-md
                      hover:bg-white/20
                      transition
                    "
                  >
                    <span className="opacity-60 font-semibold tracking-wider">
                      {item.code}
                    </span>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
