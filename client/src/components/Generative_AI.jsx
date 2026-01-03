import React, { useState } from "react";

const genAIData = {
  "Text Generation": {
    desc: "Leverage Large Language Models (LLMs) for content creation, summarization, and intelligent chatbots.",
    items: [
      "Custom LLM Fine-tuning",
      "Chatbot Development",
      "Content Summarization",
      "Automated Reporting",
      "Language Translation",
    ],
  },
  "Image Synthesis": {
    desc: "Create stunning visuals and edit images automatically using state-of-the-art diffusion models.",
    items: [
      "Text-to-Image Generation",
      "Image Inpainting",
      "Style Transfer",
      "Product Photography AI",
      "Marketing Assets",
    ],
  },
  "Code Generation": {
    desc: "Accelerate software development with AI-powered code completion and refactoring tools.",
    items: [
      "Code Autocompletion",
      "Legacy Code Migration",
      "Automated Testing",
      "Documentation Generation",
      "Bug Detection",
    ],
  },
  "Audio & Video": {
    desc: "Synthesize realistic voiceovers and generate video content from textual descriptions.",
    items: [
      "Text-to-Speech (TTS)",
      "Voice Cloning",
      "Video Generation",
      "Avatar Animation",
      "Audio Enhancement",
    ],
  },
  "Strategic Consulting": {
    desc: "Expert guidance on integrating Generative AI into your existing business workflows.",
    items: [
      "AI Readiness Assessment",
      "Use Case Identification",
      "Ethical AI Frameworks",
      "Model Selection Strategy",
      "ROI Analysis",
    ],
  },
};

const Generative_AI = () => {
  const [active, setActive] = useState("Text Generation");

  return (
    <section className="min-h-screen bg-[#fdfcff] pt-32 pb-20">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-12 gap-10">
        {/* LEFT SIDEBAR */}
        <aside className="col-span-12 md:col-span-3">
          <div className="sticky top-24">
            <div className="bg-white rounded-2xl border border-[rgba(124,58,237,0.18)] shadow-md p-3">
              {Object.keys(genAIData).map((key) => (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg mb-2 font-medium transition-all
                    ${
                      active === key
                        ? "bg-[#7c3aed] text-white shadow"
                        : "text-[#2d1b69] hover:bg-[#ede9fe]"
                    }`}
                >
                  {key}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* RIGHT CONTENT */}
        <main className="col-span-12 md:col-span-9">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#2d1b69] mb-3">
              {active}
            </h1>
            <p className="text-gray-600 max-w-3xl text-sm md:text-base">
              {genAIData[active].desc}
            </p>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {genAIData[active].items.map((item) => (
              <div
                key={item}
                className="
                  bg-white
                  border border-[rgba(124,58,237,0.16)]
                  rounded-xl p-6
                  shadow-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                <h3 className="text-lg font-semibold text-[#2d1b69] mb-2">
                  {item}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Advanced {item.toLowerCase()} solutions tailored for enterprise scalability.
                </p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
};

export default Generative_AI;