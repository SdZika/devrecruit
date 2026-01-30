import Link from "next/link";
import { projects } from "@/lib/data";

export default function HomePage() {
  return (
    <div className="pt-16">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#081C33] via-[#0B2A4A] to-[#0E3A66] text-white overflow-hidden">
        {/* Decorative background icon */}
        <div className="absolute inset-0 opacity-[0.06] flex items-center justify-center">
          <img src="/brand/icon.png" alt="" className="w-[520px] rotate-12" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Navigate Your
            <span className="block bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              Digital North
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto">
            Stellar North Services helps companies build reliable software and
            find exceptional technical talent — with clarity and direction.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/works"
              className="px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-900 rounded-lg font-semibold hover:shadow-xl hover:-translate-y-0.5 transition"
            >
              View Our Work
            </Link>

            <Link
              href="/contact"
              className="px-8 py-4 border border-slate-400/30 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">What We Do</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Software */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 hover:shadow-xl transition">
              <div className="w-12 h-12 bg-[#0E3A66] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">{"</>"}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Software Development</h3>
              <p className="text-gray-700">
                We design and build scalable, maintainable software solutions
                using modern technologies — from web platforms to internal
                systems.
              </p>
            </div>

            {/* Recruiting */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 hover:shadow-xl transition">
              <div className="w-12 h-12 bg-[#0E3A66] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">★</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Technical Recruiting</h3>
              <p className="text-gray-700">
                We help you navigate the hiring landscape and connect with
                engineers and technical leaders who move your business forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">
            Featured Projects
          </h2>

          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Selected work that reflects our focus on clarity, quality, and
            long-term value.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {projects.slice(0, 3).map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/works"
              className="inline-block px-8 py-4 bg-[#0E3A66] text-white rounded-lg font-semibold hover:shadow-xl hover:-translate-y-0.5 transition"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
