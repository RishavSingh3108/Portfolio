import Footer from '../components/Footer'
import Navbar from '../components/navbar'
import Image from 'next/image'
import {
  FaHtml5, FaJs, FaJava, FaPython, FaDatabase,
} from 'react-icons/fa'
import {
  SiTailwindcss, SiCplusplus, SiLeetcode, SiCodeforces, SiCodechef, SiMongodb, SiExpress, SiPostman, SiHackerrank,
} from 'react-icons/si'

export default function About() {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 size={32} className="text-orange-500" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={32} className="text-cyan-400" /> },
    { name: 'JavaScript', icon: <FaJs size={32} className="text-yellow-400" /> },
    { name: 'Java', icon: <FaJava size={32} className="text-red-500" /> },
    { name: 'C++', icon: <SiCplusplus size={32} className="text-blue-500" /> },
    { name: 'Python', icon: <FaPython size={32} className="text-blue-400" /> },
    { name: 'SQL', icon: <FaDatabase size={32} className="text-green-500" /> },
    { name: 'Node.js', icon: <FaJs size={32} className="text-green-600" /> },
    { name: 'Express.js', icon: <SiExpress size={32} className="text-gray-700 dark:text-gray-200" /> },
    { name: 'MongoDB', icon: <SiMongodb size={32} className="text-green-500" /> },
    { name: 'Postman', icon: <SiPostman size={32} className="text-orange-400" /> },
    { name: 'Problem Solving', icon: <SiLeetcode size={32} className="text-yellow-500" /> },
  ]

  const codingProfiles = [
    { name: 'LeetCode', icon: <SiLeetcode size={32} className="text-yellow-500" />, link: 'https://leetcode.com/u/Singh-Rishav/' },
    { name: 'Codeforces', icon: <SiCodeforces size={32} className="text-blue-500" />, link: 'https://codeforces.com/profile/_Rishav_Singh_' },
    { name: 'CodeChef', icon: <SiCodechef size={32} className="text-purple-500" />, link: 'https://www.codechef.com/users/rishav_310' },
    { name: 'HackerRank', icon: <SiHackerrank size={32} className="text-green-500" />, link: 'https://www.hackerrank.com/profile/Singh_Rishav' },
  ]

  return (
    <div className="relative min-h-screen flex flex-col bg-[#fafafa] dark:bg-[#020617] transition-colors duration-500 selection:bg-orange-500/30">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-orange-500/5 dark:bg-orange-600/10 blur-[140px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-600/10 blur-[140px] rounded-full -z-10" />

      <Navbar />

      {/* Main container set to max-w-7xl to allow horizontal stretch */}
      <main className="flex-grow container mx-auto px-4 py-8 max-w-7xl">
        
        {/* ================= ABOUT ME HERO (STRETCHED) ================= */}
        <section className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/40 dark:bg-slate-900/40 backdrop-blur-md rounded-[2.5rem] p-6 md:px-12 md:py-10 border border-white/20 dark:border-slate-800/50 shadow-2xl">
            
            {/* Image Span 3 to match Home page stretch */}
            <div className="lg:col-span-3 flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-orange-500 to-indigo-500 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-700"></div>
                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-[6px] border-white dark:border-slate-900 shadow-xl transition-transform duration-500 group-hover:scale-[1.03]">
                  <Image
                    src="/saurabh.jpg" 
                    alt="Rishav Raj"
                    fill
                    className="object-cover transform transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>

            {/* Content Span 9 to match Home page stretch */}
            <div className="lg:col-span-9 text-center lg:text-left space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tighter">
                About <span className="text-orange-500">Me</span>
              </h1>
              
              <div className="h-1.5 w-20 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mx-auto lg:mx-0"></div>

              <div className="space-y-3 text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                <p>
                  Hi, I’m <span className="text-slate-900 dark:text-white font-bold">Rishav Raj</span>, a 
                  final-year <span className="text-orange-500 font-bold">Computer Science Engineering</span> student at 
                  <span className="italic font-semibold block md:inline"> Bhagalpur College of Engineering (BCE).</span>
                </p>
                <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 border-l-4 border-orange-500/40 pl-6 italic max-w-4xl">
                  I specialize in backend architecture and scalable systems, fueled by a deep interest in Data Structures and Algorithms. I believe in writing code that isn't just functional, but clean and efficient.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= TECHNICAL SKILLS (TIGHTER GRID) ================= */}
        <section className="mb-16">
          <div className="flex flex-col items-center mb-10 space-y-2">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">
              Technical <span className="text-orange-500">Skills</span>
            </h2>
            <div className="h-1.5 w-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full"></div>
          </div>

          {/* gap-5 matches the tighter Home page style */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group relative flex flex-col items-center justify-center p-6 rounded-2xl transition-all duration-500 
                           bg-white/80 dark:bg-slate-900/40 backdrop-blur-sm
                           hover:shadow-xl hover:border-orange-500/30 border border-slate-200/50 dark:border-slate-800/50 hover:-translate-y-1"
              >
                <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
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

        {/* ================= CODING PROFILES (MATCHING STYLE) ================= */}
        <section className="mb-10">
          <div className="flex flex-col items-center mb-10 space-y-2">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">
              Coding <span className="text-orange-500">Profiles</span>
            </h2>
            <div className="h-1.5 w-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full"></div>
          </div>

          {/* Reduced gap and adjusted card sizing for consistency */}
          <div className="flex flex-wrap justify-center gap-6">
            {codingProfiles.map((profile) => (
              <a
                key={profile.name}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-36 h-36 md:w-40 md:h-40 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md rounded-2xl border border-white/20 dark:border-slate-800/50 
                           shadow-lg hover:shadow-orange-500/10 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center justify-center"
              >
                <div className="transform group-hover:scale-110 transition-transform duration-500">
                  {profile.icon}
                </div>
                <span className="mt-4 text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-300 group-hover:text-orange-500 transition-colors">
                  {profile.name}
                </span>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                   <svg className="w-3 h-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}