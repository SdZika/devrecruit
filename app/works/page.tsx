import { projects } from "@/lib/data";

export default function WorksPage() {
  return (
    <div className="pt-16 min-h-screen bg-slate-50">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-[#081C33] via-[#0B2A4A] to-[#0E3A66] text-white overflow-hidden">
        {/* Decorative icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.05]">
          <img src="/brand/icon.png" alt="" className="w-[420px] rotate-12" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Work</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A selection of projects that showcase how we help teams navigate
            complexity and deliver reliable digital products.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
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
                  <h3 className="text-xl font-bold mb-2 text-slate-900">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-sm bg-sky-100 text-sky-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
