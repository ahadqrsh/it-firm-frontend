import { ExternalLink } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "Fintech Dashboard",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Eco Beauty Brand",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
      color: "from-emerald-500/20 to-teal-500/20",
    },
    {
      title: "Tech Startup SEO",
      category: "SEO Optimization",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      color: "from-purple-500/20 to-pink-500/20",
    },
  ];

  return (
    <section id="portfolio" className="relative px-6 py-24 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-neutral-50/30 to-transparent dark:via-neutral-900/20" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
          <span className="h-px w-12 bg-neutral-300 dark:bg-neutral-700" />
          <span className="text-sm font-medium tracking-widest text-neutral-500 dark:text-neutral-400 uppercase">
            Selected Work
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 max-w-2xl opacity-0 animate-[fadeInUp_0.6s_ease-out_0.1s_forwards]">
          <span className="bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent">
            Projects we're proud of
          </span>
        </h2>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Card container */}
              <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-2xl transition-all duration-500">
                {/* Image area */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Hover overlay with link */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-6 py-3 bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-full text-sm font-medium text-neutral-900 dark:text-white shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      View Project
                      <ExternalLink className="inline ml-2 w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs font-medium tracking-wider text-neutral-500 dark:text-neutral-400 uppercase mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                {/* Subtle border animation */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-neutral-300 dark:group-hover:border-neutral-700 pointer-events-none transition-colors duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-12 text-center opacity-0 animate-[fadeIn_0.6s_ease-out_0.8s_forwards]">
          <a
            href="#"
            className="inline-flex items-center text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300 group"
          >
            <span className="text-sm font-medium">View all projects</span>
            <svg
              className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}