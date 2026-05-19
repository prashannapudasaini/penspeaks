import { Link } from 'react-router-dom';
import { BRAND_LINKS, NAV_LINKS } from '../../utils/constants';

export default function Footer() {
  // Custom navigation links including Home and Blog
  const footerNavLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'eBooks', path: '/ebooks' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="relative bg-secondaryBg/90 border-t border-borderLight/40 overflow-hidden">
      {/* Subtle paper texture */}
      <div className="absolute inset-0 opacity-3 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpath fill='none' stroke='%238b7355' stroke-width='0.2' d='M20,20 L180,20 M20,40 L180,40 M20,60 L180,60 M20,80 L180,80 M20,100 L180,100 M20,120 L180,120 M20,140 L180,140 M20,160 L180,160 M20,180 L180,180'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '30px 30px',
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              {/* Larger, more visible logo */}
              <img 
                src="/logo.png" 
                alt="The Pen Speaks Logo" 
                className="w-10 h-10 rounded-full object-cover border-2 border-bronze/50 shadow-md"
              />
              <Link to="/" className="text-2xl font-bold tracking-tight text-primaryText">
                The Pen Speaks
              </Link>
              <svg className="w-5 h-5 text-amber-500/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                <path d="M4 6C4 4.89543 4.89543 4 6 4H12V20H6C4.89543 20 4 19.1046 4 18V6Z" fill="currentColor" fillOpacity="0.15"/>
                <path d="M20 6C20 4.89543 19.1046 4 18 4H12V20H18C19.1046 20 20 19.1046 20 18V6Z" fill="currentColor" fillOpacity="0.15"/>
              </svg>
            </div>
            
            <p className="text-base text-secondaryText leading-relaxed font-light max-w-sm">
              A sanctuary for the written word — where ink meets imagination and every story finds its home.
            </p>
            
            <div className="flex items-center gap-2">
              <div className="h-px w-10 bg-amber-500/40"></div>
              <span className="text-softAccent text-sm italic tracking-wide font-medium">since 2024</span>
              <div className="h-px w-10 bg-amber-500/40"></div>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-4">
            <h4 className="text-sm uppercase tracking-[0.2em] text-softAccent font-bold mb-5">
              Discover
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              {footerNavLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className="text-secondaryText hover:text-primaryText text-base transition-colors duration-200 group flex items-center gap-2 font-medium"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-amber-500/60 transition-all duration-200"></span>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-3">
            <h4 className="text-sm uppercase tracking-[0.2em] text-softAccent font-bold mb-5">
              Connect
            </h4>
            
            <div className="space-y-4">
              <a 
                href={BRAND_LINKS.YOUTUBE} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-3 text-secondaryText hover:text-primary transition-colors group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform text-red-500/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22.54 6.42C22.421 5.94541 22.1793 5.51057 21.8387 5.15941C21.498 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.46C2.92924 4.59318 2.50201 4.84824 2.16133 5.19941C1.82065 5.55057 1.57902 5.98541 1.46 6.46C1.06452 8.19358 0.872857 9.96686 0.89 11.74C0.872857 13.5131 1.06452 15.2864 1.46 17.02C1.57902 17.4946 1.82065 17.9294 2.16133 18.2806C2.50201 18.6318 2.92924 18.8868 3.4 19.02C5.12 19.48 12 19.48 12 19.48C12 19.48 18.88 19.48 20.6 19.02C21.0708 18.8868 21.498 18.6318 21.8387 18.2806C22.1793 17.9294 22.421 17.4946 22.54 17.02C22.9355 15.2864 23.1271 13.5131 23.11 11.74C23.1271 9.96686 22.9355 8.19358 22.54 6.42Z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"/>
                </svg>
                <span className="text-base font-medium">YouTube</span>
              </a>
              
              <a 
                href={BRAND_LINKS.FACEBOOK} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-3 text-secondaryText hover:text-primary transition-colors group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform text-blue-600/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" />
                </svg>
                <span className="text-base font-medium">Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-borderLight/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-center">
            <div className="text-sm text-softAccent/70 tracking-wide font-medium">
              © {new Date().getFullYear()} The Pen Speaks. Crafted with ink & intention.
            </div>
            
            <div className="flex items-center gap-5 text-sm text-softAccent/50">
              <span className="text-amber-500/50">✦</span>
              <span className="tracking-wide font-medium">Where words find wings</span>
              <span className="text-amber-500/50">✦</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}