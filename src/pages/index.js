import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Footer from '../components/Footer'
import Navbar from '../components/navbar'
import {
  FaHtml5, FaJs, FaJava, FaPython, FaDatabase,
} from 'react-icons/fa'
import {
  SiTailwindcss, SiCplusplus, SiLeetcode, SiMongodb, SiExpress, SiPostman,
} from 'react-icons/si'
import Image from 'next/image'

/* ================= PROJECT DATA ================= */
const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive personal portfolio built using Next.js and Tailwind CSS to showcase projects, skills, and coding profiles.',
    link: 'https://github.com/RishavSingh3108', 
    tags: ['Development', 'Next.js', 'Tailwind']
  },
  {
    title: 'Canteen-X (Enterprise Platform)',
    description: 'Enterprise-level platform to record daily sales, track revenue and profit, manage inventory, and handle automated stock returns.',
    link: 'https://github.com/RishavSingh3108', 
    tags: ['Node', 'Database', 'Express']
  },
  {
    title: 'Algo-Engine using Word Embedding',
    description: 'A smart search platform that aggregates coding problems using contextual word embedding techniques like BERT and TF-IDF.',
    link: 'https://github.com/RishavSingh3108', 
    tags: ['ML', 'NLP', 'Python']
  },
  {
    title: 'Job Application Portal',
    description: 'Full-stack job application portal with authentication, role-based access, job postings, and admin control.',
    link: 'https://github.com/RishavSingh3108', 
    tags: ['Development', 'Node', 'Database']
  },
]

const skills = [
  { name: 'HTML5', icon: <FaHtml5 size={32} className="text-orange-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={32} className="text-cyan-400" /> },
  { name: 'JavaScript', icon: <FaJs size={32} className="text-yellow-400" /> },
  { name: 'Java', icon: <FaJava size={32} className="text-red-500" /> },
  { name: 'C++', icon: <SiCplusplus size={32} className="text-blue-500" /> },
  { name: 'Python', icon: <FaPython size={32} className="text-blue-400" /> },
  { name: 'SQL', icon: <FaDatabase size={32} className="text-green-500" /> },
  { name: 'Node.js', icon: <FaJs size={32} className="text-green-600" /> },
  { name: 'Express.js', icon: <SiExpress size={32} className="text-gray-700 dark:text-slate-100" /> },
  { name: 'MongoDB', icon: <SiMongodb size={32} className="text-green-500" /> },
  { name: 'Postman', icon: <SiPostman size={32} className="text-orange-400" /> },
  { name: 'Problem Solving', icon: <SiLeetcode size={32} className="text-yellow-500" /> },
]

export default function Home() {
  const router = useRouter()
  const [isClicked, setIsClicked] = useState(false)
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const fullText = 'Hi, I am Rishav Raj'

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText.charAt(index))
        setIndex(index + 1)
      }, 90)
      return () => clearTimeout(timeout)
    }
  }, [index])

  const handleWorkClick = () => {
    setIsClicked(true)
    setTimeout(() => router.push('/projects'), 250)
  }

  return (
    <div className="relative min-h-screen bg-[#fafafa] dark:bg-[#020617] overflow-x-hidden selection:bg-orange-500/30 transition-colors duration-500">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-orange-500/5 dark:bg-orange-600/10 blur-[140px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-600/10 blur-[140px] rounded-full -z-10" />

      <Navbar />

      <main className="container mx-auto px-4 py-6 max-w-7xl">
        
        {/* HERO SECTION */}
        <section className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/40 dark:bg-slate-900/40 backdrop-blur-md rounded-[2.5rem] p-6 md:px-12 md:py-10 border border-white/20 dark:border-slate-800/50 shadow-2xl">
            <div className="lg:col-span-3 flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-orange-500 to-indigo-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-700"></div>
                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-[6px] border-white dark:border-slate-900 shadow-xl">
                  <Image
                    src="/rishav.jpeg"
                    alt="Rishav Raj"
                    width={240}
                    height={240}
                    priority
                    className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-9 text-center lg:text-left space-y-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                {text.includes('Rishav Raj') ? (
                  <>Hi, I am <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 bg-clip-text text-transparent">Rishav Raj</span></>
                ) : (
                  <span className="inline-block min-h-[1em]">{text}</span>
                )}
              </h1>
              <div className="space-y-2">
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                  Final-year <span className="text-slate-900 dark:text-orange-400 font-bold">Computer Science Engineering</span> student at <span className="font-semibold italic">BCE, Bhagalpur</span>. 
                </p>
                <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed italic border-l-4 border-orange-500/40 pl-4 max-w-4xl">
                  Focused on building high-performance backend systems with clean architecture.
                </p>
              </div>
              <div className="pt-2">
                <button 
                  onClick={handleWorkClick}
                  className={`px-8 py-3 rounded-full font-black uppercase tracking-widest text-xs transition-all duration-300 active:scale-95 shadow-lg border-2 
                    ${isClicked 
                      ? "bg-[#66ff00] border-[#66ff00] text-slate-900 shadow-[#66ff00]/40 scale-95" 
                      : "bg-slate-900 dark:bg-orange-500 border-slate-900 dark:border-orange-500 text-white dark:text-slate-900 hover:shadow-orange-500/20"
                    }`}
                >
                  {isClicked ? "Redirecting..." : "View My Work"}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section className="mb-16">
          <div className="flex flex-col items-center mb-10 space-y-2">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">
              Featured <span className="text-orange-500">Projects</span>
            </h2>
            <div className="h-1.5 w-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            {projects.map(({ title, description, link, tags }) => (
              <div key={title} className="group relative">
                <div className="relative flex flex-col h-full w-full bg-white/70 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200 dark:border-slate-800/60 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-orange-500/40">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-slate-800 dark:text-white group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-orange-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {tags.map((tag) => (
                      <span key={tag} className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:text-orange-500 transition-all border border-transparent group-hover:border-orange-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-snug flex-grow line-clamp-3">
                    {description}
                  </p>
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60">
                    {/* FIXED: Using a high z-index and pointer-events-auto */}
                    <a 
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-50 pointer-events-auto inline-flex items-center text-[10px] font-black tracking-widest text-orange-500 hover:text-orange-600 transition-all uppercase cursor-pointer"
                      onClick={(e) => {
                        console.log("Redirecting to:", link);
                      }}
                    >
                      EXPLORE CODE <span className="ml-1.5 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TECHNICAL STACK */}
        <section className="mb-10">
          <div className="flex flex-col items-center mb-10 space-y-2">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">
              Technical <span className="text-orange-500">Stack</span>
            </h2>
            <div className="h-1.5 w-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group relative bg-white/80 dark:bg-slate-900/40 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center justify-center border border-slate-200/50 dark:border-slate-800/50 hover:border-orange-500/30 hover:-translate-y-1"
              >
                <div className="transform group-hover:scale-110 transition-transform duration-300 z-10">
                  {skill.icon}
                </div>
                <span className="mt-4 text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-orange-500 transition-colors">
                  {skill.name}
                </span>
                <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/[0.02] transition-colors rounded-2xl" />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}