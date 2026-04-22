export default function Hero() {
  return (
    <section className="relative  min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-neutral-50 to-white dark:from-black dark:via-neutral-950 dark:to-black">
      {/* Ambient background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-cyan-500/5 dark:bg-cyan-400/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Subtle eyebrow */}
        <span className="inline-block mb-6 text-sm font-medium tracking-widest text-neutral-500 dark:text-neutral-400 uppercase opacity-0 animate-[fadeIn_0.6s_ease-out_0.2s_forwards]">
          Digital Excellence
        </span>

        {/* Headline with gradient */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-balance opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
          <span className="inline-block bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 dark:from-white dark:via-neutral-300 dark:to-white bg-clip-text text-transparent">
            Build.
          </span>
          <br className="sm:hidden" />
          <span className="inline-block bg-gradient-to-r from-neutral-700 via-neutral-500 to-neutral-700 dark:from-neutral-300 dark:via-neutral-400 dark:to-neutral-300 bg-clip-text text-transparent">
            {" "}Scale.
          </span>
          <br className="sm:hidden" />
          <span className="inline-block bg-gradient-to-r from-neutral-500 via-neutral-400 to-neutral-500 dark:from-neutral-400 dark:via-neutral-500 dark:to-neutral-400 bg-clip-text text-transparent">
            {" "}Grow.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-balance opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
          Web Development & Digital Marketing Agency
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-[fadeIn_0.8s_ease-out_0.8s_forwards]">
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-full text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-neutral-900/20 dark:hover:shadow-white/20"
          >
            <span className="relative z-10">Start a Project</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neutral-800 to-neutral-900 dark:from-neutral-100 dark:to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#portfolio"
            className="px-8 py-4 rounded-full text-base font-medium text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-white transition-all duration-300 hover:scale-105"
          >
            View Our Work →
          </a>
        </div>
      </div>
    </section>
  );
}