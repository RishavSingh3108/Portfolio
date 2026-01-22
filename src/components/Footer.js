import { FaGithub, FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-orange-200/50 dark:border-slate-800/50 bg-orange-50 dark:bg-[#020617] transition-colors duration-500">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Left: Branding & Copyright */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="flex items-center space-x-2">
               <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-black text-sm">
                R
              </div>
              <span className="text-lg font-black tracking-tighter text-slate-900 dark:text-white">
                Rishav<span className="text-orange-500">.Raj</span>
              </span>
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Center: Quick Quote */}
          <div className="hidden lg:block text-center">
             <p className="text-sm italic text-slate-400 dark:text-slate-500 font-medium">
               "Building scalable solutions with precision."
             </p>
          </div>

          {/* Right: Social Icons with Original Branding */}
          <div className="flex items-center space-x-4">
            <SocialIcon 
              href="https://github.com/RishavSingh3108" 
              icon={<FaGithub size={20} />} 
              label="GitHub"
              brandColor="text-slate-900 dark:text-white" // GitHub original
            />
            <SocialIcon 
              href="mailto:rishav310805@gmail.com" 
              icon={<FaEnvelope size={20} />} 
              label="Email"
              brandColor="text-[#EA4335]" // Google Red
            />
            <SocialIcon 
              href="https://leetcode.com/u/Singh-Rishav/" 
              icon={<SiLeetcode size={20} />} 
              label="LeetCode"
              brandColor="text-[#FFA116]" // LeetCode Orange
            />
            <SocialIcon 
              href="https://www.linkedin.com/in/rishav-raj-499b79253/" 
              icon={<FaLinkedinIn size={20} />} 
              label="LinkedIn"
              brandColor="text-[#0077B5]" // LinkedIn Blue
            />
          </div>
        </div>

        {/* Bottom Decorative Bar */}
        <div className="mt-8 h-1 w-full bg-gradient-to-r from-transparent via-orange-500/20 to-transparent rounded-full" />
      </div>
    </footer>
  );
}

/* ---------- Updated Sub-component ---------- */
function SocialIcon({ href, icon, brandColor, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`p-3 rounded-xl bg-white dark:bg-slate-900 border border-orange-100 dark:border-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-orange-500/10 ${brandColor}`}
    >
      {/* Icon now inherits the brandColor directly */}
      <span className="flex items-center justify-center">
        {icon}
      </span>
    </a>
  );
}