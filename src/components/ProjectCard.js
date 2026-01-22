export default function ProjectCard({ title, description, link, tags = [] }) {
  return (
    <div className="group relative flex flex-col h-full w-full bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/60 rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.15)] hover:border-orange-500/30">
      
      {/* Decorative Glow Background */}
      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-orange-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Project Title */}
      <h3 className="text-2xl font-bold mb-3 text-slate-800 dark:text-white group-hover:text-orange-500 transition-colors duration-300 tracking-tight">
        {title}
      </h3>

      {/* Dynamic Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="text-[10px] px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest border border-transparent group-hover:border-orange-500/30 transition-all"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Project Description */}
      <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed flex-grow line-clamp-4">
        {description}
      </p>

      {/* Modern Action Link */}
      <div className="pt-5 border-t border-slate-100 dark:border-slate-800/40">
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer" 
          className="inline-flex items-center text-xs font-black text-orange-500 group-hover:translate-x-2 transition-transform uppercase tracking-[0.2em]"
        >
          Explore Project <span className="ml-2 text-lg">→</span>
        </a>
      </div>
      
      {/* Subtle bottom indicator */}
      <div className="absolute bottom-6 right-8 w-1 h-1 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-150" />
    </div>
  );
}