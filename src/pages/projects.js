import Navbar from '../components/navbar'
import Footer from '../components/Footer'

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive personal portfolio built with Next.js and Tailwind CSS to showcase projects, skills, and coding profiles.',
    link: 'https://github.com/RishavSingh3108', 
    tags: ['Development', 'Next.js', 'Tailwind']
  },
  {
    title: 'Canteen-X (Enterprise Platform)',
    description: 'An enterprise-based platform to record daily transactions and sales, track revenue and profit, and manage inventory.',
    link: 'https://github.com/RishavSingh3108', 
    tags: ['Node', 'Database', 'Express']
  },
  {
    title: 'Algo-Engine using Word Embedding',
    description: 'A smart search platform that aggregates coding problems using contextual word embedding techniques such as BERT and TF-IDF.',
    link: 'https://github.com/RishavSingh3108',
    tags: ['ML', 'NLP', 'Python']
  },
  {
    title: 'Job Application Portal',
    description: 'A full-stack job application portal featuring authentication, role-based access, and admin control for managing applicants.',
    link: 'https://github.com/RishavSingh3108',
    tags: ['Development', 'Node', 'Database']
  },
]

export default function Projects() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#fafafa] dark:bg-[#020617] overflow-hidden transition-colors duration-500">
      
      {/* Subtle Background Image (Light Mode Only) */}
      <div 
        className="absolute inset-0 z-[-1] opacity-[0.05] dark:opacity-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: "url('/background.jpg')" }}
      />

      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl">
        
        {/* Compact Heading Section */}
        <div className="flex flex-col items-center mb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter mb-2">
            My <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-md text-sm md:text-base">
            Technical builds focused on backend architecture and data systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-8">
          {projects.map(({ title, description, link, tags }) => (
            <div key={title} className="group w-full relative">
              <div className="relative flex flex-col h-full bg-white/70 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/60 backdrop-blur-md rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-orange-500/40">
                
                {/* Title with Gradient Hover */}
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-slate-800 dark:text-white group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-orange-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {title}
                </h3>

                {/* Compact Keywords */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:text-orange-500 transition-all border border-transparent group-hover:border-orange-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-snug flex-grow line-clamp-3">
                  {description}
                </p>

                {/* Explore Link - FIXED REDIRECT */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60">
                  <a 
                    href={link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-50 pointer-events-auto inline-flex items-center text-[10px] font-black tracking-widest text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 transition-all uppercase cursor-pointer"
                  >
                    EXPLORE CODE <span className="ml-1.5 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}