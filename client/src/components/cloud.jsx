import React, { useState } from "react";

const cloudData = {
  Storage: {
    desc: "Diverse data storage offerings with greater reliability and efficiency.",
    items: [
      "Archive Storage",
      "Backup",
      "Block Storage",
      "File Storage",
      "Object Storage",
      "Parallel File Storage",
    ],
  },
  Compute: {
    desc: "High-performance compute services for scalable applications.",
    items: ["Virtual Machines", "Auto Scaling", "Bare Metal Servers"],
  },
  Database: {
    desc: "Managed databases for modern applications.",
    items: ["SQL Database", "NoSQL Database", "In-Memory DB"],
  },
  Container: {
    desc: "Run containerized workloads at scale.",
    items: ["Kubernetes", "Container Registry", "Microservices"],
  },
  Networking: {
    desc: "Secure and high-speed cloud networking.",
    items: ["VPC", "Load Balancer", "CDN"],
  },
  Security: {
    desc: "Enterprise-grade cloud security solutions.",
    items: ["IAM", "DDoS Protection", "Cloud Firewall"],
  },
  "AI / ML": {
    desc: "AI-powered services to build intelligent systems.",
    items: ["ML Models", "Vision AI", "NLP Services"],
  },
};

const Cloud = () => {
  const [active, setActive] = useState("Storage");

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#f6f2ff] via-[#f1ecff] to-[#faf8ff] pt-32">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-12 gap-10">
        
        {/* LEFT MENU */}
        <aside className="col-span-12 md:col-span-3">
          <div className="bg-white/60 backdrop-blur-xl rounded-2xl border border-[rgba(124,58,237,0.2)] shadow-lg p-4">
            {Object.keys(cloudData).map((key) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`w-full text-left px-4 py-3 rounded-lg mb-2 font-medium transition
                  ${
                    active === key
                      ? "bg-[#7c3aed] text-white shadow-md"
                      : "text-[#2d1b69] hover:bg-[#ede9fe]"
                  }`}
              >
                {key}
              </button>
            ))}
          </div>
        </aside>

        {/* RIGHT CONTENT */}
        <div className="col-span-12 md:col-span-9">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d1b69] mb-3">
            {active}
          </h2>
          <p className="text-gray-600 max-w-3xl mb-10">
            {cloudData[active].desc}
          </p>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudData[active].items.map((item) => (
              <div
                key={item}
                className="
                  bg-white/70 backdrop-blur-xl
                  border border-[rgba(124,58,237,0.18)]
                  rounded-2xl p-6
                  shadow-[0_10px_30px_rgba(124,58,237,0.25)]
                  transition-all
                  hover:-translate-y-2
                  hover:shadow-[0_20px_40px_rgba(124,58,237,0.35)]
                "
              >
                <h3 className="text-lg font-semibold text-[#2d1b69] mb-2">
                  {item}
                </h3>
                <p className="text-sm text-gray-600">
                  Enterprise-ready {item.toLowerCase()} designed for scalability,
                  security, and performance.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cloud;
