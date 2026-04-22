export default function About() {
  return (
    <section id="about" className="relative px-6 pt-20 pb-24  md:py-32 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-neutral-50/50 to-transparent dark:via-neutral-900/30" />

      <div className="max-w-7xl mx-auto">
        {/* Section label with line */}
        <div className="flex items-center gap-4 mb-12 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
          <span className="h-px w-12 bg-neutral-300 dark:bg-neutral-700" />
          <span className="text-sm font-medium tracking-widest text-neutral-500 dark:text-neutral-400 uppercase">
            Who We Are
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left column - Headline & description */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance opacity-0 animate-[fadeInUp_0.6s_ease-out_0.1s_forwards]">
              <span className="bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent">
                About Us
              </span>
            </h2>

            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl opacity-0 animate-[fadeInUp_0.6s_ease-out_0.2s_forwards]">
              We are a team of developers and marketers helping businesses
              build strong digital presence.
            </p>

            {/* Stats - optional but adds minimal visual interest */}
            <div className="pt-8 flex flex-wrap gap-8 opacity-0 animate-[fadeIn_0.6s_ease-out_0.3s_forwards]">
              <div>
                <div className="text-3xl font-semibold text-neutral-900 dark:text-white">
                  5+
                </div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-neutral-900 dark:text-white">
                  50+
                </div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400">
                  Projects Delivered
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Abstract visual or placeholder for image */}
          <div className="relative opacity-0 animate-[fadeIn_0.8s_ease-out_0.2s_forwards]">
            <div className="aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 p-8 shadow-xl shadow-neutral-900/5 dark:shadow-black/20">
              <div className="h-full w-full rounded-2xl bg-white/80 dark:bg-black/40 backdrop-blur-sm border border-white/20 dark:border-neutral-800 flex items-center justify-center">
                <div className="text-center space-y-3">
                  <div className="text-5xl">✨</div>
                  <p className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
                    Building digital<br />excellence
                  </p>
                </div>
              </div>
            </div>

            {/* Floating accent dots */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-500/10 dark:bg-purple-400/5 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}