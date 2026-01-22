import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import {
  FaWhatsapp,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa'

export default function Contact() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#fafafa] dark:bg-[#020617] transition-colors duration-500 selection:bg-orange-500/30">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-orange-500/5 dark:bg-orange-600/10 blur-[140px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-600/10 blur-[140px] rounded-full -z-10" />

      <Navbar />

      <main className="flex-grow container mx-auto px-6 pt-10 pb-2 max-w-7xl">
        
        {/* ================= HEADING SECTION (No Container) ================= */}
        <div className="mb-14 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter">
            Get in <span className="text-orange-500">Touch</span>
          </h1>
          <div className="h-1.5 w-20 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mt-4"></div>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl pt-6 font-medium leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
          </p>
        </div>

        {/* ================= CONTACT GRID ================= */}
        <section className="mb-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <ContactItem
              icon={<FaWhatsapp size={24} />}
              label="WhatsApp"
              subtitle="+91 6205809417"
              link="https://wa.me/6205809417"
              color="text-green-500"
              hoverBorder="hover:border-green-500/30"
            />
            <ContactItem
              icon={<FaInstagram size={24} />}
              label="Instagram"
              subtitle="@rishav"
              link="https://instagram.com/rishavraj9866"
              color="text-pink-500"
              hoverBorder="hover:border-pink-500/30"
            />
            <ContactItem
              icon={<FaPhone size={24} />}
              label="Phone"
              subtitle="+91 6205809417"
              link="tel:+916205809417"
              color="text-blue-500"
              hoverBorder="hover:border-blue-500/30"
            />
            <ContactItem
              icon={<FaEnvelope size={24} />}
              label="Email"
              subtitle="rishav310805@gmail.com"
              link="mailto:rishav310805@gmail.com"
              color="text-red-500"
              hoverBorder="hover:border-red-500/30"
            />
            <ContactItem
              icon={<FaGithub size={24} />}
              label="GitHub"
              subtitle="RishavSingh3108"
              link="https://github.com/RishavSingh3108"
              color="text-slate-800 dark:text-white"
              hoverBorder="hover:border-orange-500/30"
            />
            <ContactItem
              icon={<FaLinkedin size={24} />}
              label="LinkedIn"
              subtitle="Rishav Singh"
              link="https://www.linkedin.com/in/rishav-raj-499b79253/"
              color="text-blue-600"
              hoverBorder="hover:border-blue-600/30"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

function ContactItem({ icon, label, subtitle, link, color, hoverBorder }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative bg-white/70 dark:bg-slate-900/40 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl dark:hover:shadow-orange-500/10 ${hoverBorder} flex flex-col items-center text-center`}
    >
      <div className={`transition-transform duration-300 group-hover:scale-110 mb-4 ${color}`}>
        {icon}
      </div>

      <h3 className="text-base font-black text-slate-800 dark:text-white group-hover:text-orange-500 transition-colors tracking-widest uppercase">
        {label}
      </h3>
      
      <p className="text-[11px] font-bold text-slate-400 dark:text-slate-500 mt-1 tracking-wider">
        {subtitle}
      </p>

      {/* Subtle indicator dot */}
      <div className="mt-4 w-1 h-1 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
      
      <span className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
         <svg className="w-3 h-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
         </svg>
      </span>
    </a>
  )
}