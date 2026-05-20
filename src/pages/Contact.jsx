import { motion } from 'framer-motion';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import { BRAND_LINKS } from '../utils/constants';

export default function Contact() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      
      {/* Literary Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FDF8F0] via-[#F8F1E5] to-[#F0E8D9] z-0" />
      
      {/* Vintage paper texture overlay */}
      <div className="absolute inset-0 opacity-20 z-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpath fill='none' stroke='%238B5E3C' stroke-width='0.3' d='M10,10 L190,10 M10,30 L190,30 M10,50 L190,50 M10,70 L190,70 M10,90 L190,90 M10,110 L190,110 M10,130 L190,130 M10,150 L190,150 M10,170 L190,170 M10,190 L190,190'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '40px 40px',
        }} />
      </div>
      
      {/* Ink splatter decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="40" r="15" fill="#3E2720" />
          <circle cx="60" cy="25" r="8" fill="#3E2720" />
          <circle cx="45" cy="65" r="10" fill="#3E2720" />
          <circle cx="75" cy="55" r="6" fill="#3E2720" />
          <circle cx="20" cy="70" r="5" fill="#3E2720" />
        </svg>
      </div>
      
      {/* Floating quill pen illustration */}
      <div className="absolute bottom-20 right-10 w-40 h-40 opacity-8 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50,15 L25,70 L38,63 L32,90 L50,75 L68,90 L62,63 L75,70 Z" fill="#8B5E3C" fillOpacity="0.15" stroke="#8B5E3C" strokeWidth="0.5"/>
          <path d="M50,15 L50,75" stroke="#8B5E3C" strokeWidth="0.8" strokeOpacity="0.3"/>
          <path d="M48,18 L52,18" stroke="#8B5E3C" strokeWidth="0.8" strokeOpacity="0.3"/>
          <path d="M47,22 L53,22" stroke="#8B5E3C" strokeWidth="0.8" strokeOpacity="0.3"/>
          <path d="M48,26 L52,26" stroke="#8B5E3C" strokeWidth="0.8" strokeOpacity="0.3"/>
        </svg>
      </div>
      
      {/* Open book decorative line */}
      <div className="absolute top-1/3 right-0 w-64 h-px bg-gradient-to-l from-[#C9B896] to-transparent opacity-30 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-48 h-px bg-gradient-to-r from-[#C9B896] to-transparent opacity-30 pointer-events-none" />
      
      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Left Column - Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Decorative literary element */}
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-px bg-[#C9B896]" />
              <span className="text-[#8B5E3C] text-xs tracking-[0.3em] uppercase font-serif">Correspondence</span>
              <div className="w-8 h-px bg-[#C9B896]" />
            </div>
            
            <h1 className="font-serif text-6xl md:text-7xl text-[#3E2720] leading-tight tracking-tight">
              Connect.
            </h1>
            
            <p className="text-[#6B5B4F] font-light text-lg leading-relaxed border-l-3 border-[#C9B896] pl-5 italic">
              Whether you have a story to share, a question to ask, or simply wish to say hello, we are always listening.
            </p>
            
            {/* Quote / Literary touch */}
            <div className="pt-6">
              <div className="bg-[#F5EFE6]/60 p-5 rounded-sm border-l-4 border-[#C9B896]">
                <svg className="w-6 h-6 text-[#C9B896] mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-[#5C4B3A] text-sm italic">
                  "The written word is the truest form of connection — ink bridging souls across time and space."
                </p>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="space-y-5 pt-4">
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#8B5E3C] font-bold">
                Follow the ink
              </h3>
              <div className="flex flex-col space-y-3">
                <a 
                  href={BRAND_LINKS.YOUTUBE} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="group flex items-center gap-4 text-[#6B5B4F] hover:text-[#B85C1A] transition-all duration-200"
                >
                  <span className="w-8 text-lg group-hover:translate-x-1 transition-transform">→</span>
                  <span className="font-medium">YouTube</span>
                  <span className="text-xs text-[#C9B896] opacity-0 group-hover:opacity-100 transition-opacity">/thepenspeaks</span>
                </a>
                <a 
                  href={BRAND_LINKS.FACEBOOK} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="group flex items-center gap-4 text-[#6B5B4F] hover:text-[#B85C1A] transition-all duration-200"
                >
                  <span className="w-8 text-lg group-hover:translate-x-1 transition-transform">→</span>
                  <span className="font-medium">Facebook</span>
                  <span className="text-xs text-[#C9B896] opacity-0 group-hover:opacity-100 transition-opacity">/thepenspeaks</span>
                </a>
              </div>
            </div>
            
            {/* Small literary note */}
            <div className="flex items-center gap-2 pt-4 text-[#C9B896] text-xs">
              <span>✧</span>
              <span>Letters await your words</span>
              <span>✧</span>
            </div>
          </motion.div>
          
          {/* Right Column - Contact Form */}
          <motion.form 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }} 
            className="space-y-7 bg-white/80 backdrop-blur-sm p-8 shadow-xl border border-[#E8DEC9] rounded-sm"
          >
            {/* Form header */}
            <div className="text-center border-b border-[#E8DEC9] pb-5">
              <div className="flex justify-center mb-2">
                <svg className="w-6 h-6 text-[#C9B896]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V6Z" />
                  <path d="M21 6L12 13L3 6" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-[#3E2720]">Send a Letter</h3>
              <p className="text-[#8B5E3C] text-xs mt-1">We reply within a fortnight</p>
            </div>
            
            <Input 
              label="Name" 
              type="text" 
              placeholder="Enter the name" 
              className="font-light"
            />
            <Input 
              label="Email" 
              type="email" 
              placeholder="@example.com" 
              className="font-light"
            />
            <div className="flex flex-col space-y-2">
              <label className="text-xs uppercase tracking-widest text-[#6B5B4F] font-medium">
                Message
              </label>
              <textarea 
                className="w-full bg-[#FDF8F0] border border-[#E8DEC9] focus:border-[#C9B896] focus:ring-2 focus:ring-[#C9B896]/30 outline-none px-4 py-3 rounded-sm transition-all text-[#3E2720] font-light resize-none h-32 placeholder:text-[#C9B896]/50"
                placeholder="Your thoughts, stories, or inquiries..."
              />
            </div>
            
            <Button text="Send Message" isFullWidth />
            
            <p className="text-[#C9B896] text-[10px] text-center tracking-wide">
              Every message is treated like a handwritten letter
            </p>
          </motion.form>
        </div>
      </div>
    </div>
  );
}