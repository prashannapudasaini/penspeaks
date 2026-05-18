import { Link } from 'react-router-dom';
import { BRAND_LINKS, NAV_LINKS } from '../../utils/constants';

export default function Footer() {
  return (
    <footer className="bg-secondaryBg border-t border-borderLight/50 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
        <div className="text-center md:text-left">
          <Link to="/" className="font-heading text-2xl font-semibold text-primaryText">The Pen Speaks.</Link>
          <p className="text-secondaryText text-sm mt-4 font-light max-w-sm">
            A refined digital sanctuary for readers, thinkers, writers, and storytellers.
          </p>
        </div>
        
        <div className="flex space-x-8 text-sm uppercase tracking-widest text-secondaryText">
          {NAV_LINKS.slice(0, 3).map(link => (
            <Link key={link.name} to={link.path} className="hover:text-primaryText transition-colors">{link.name}</Link>
          ))}
        </div>

        <div className="flex space-x-6">
          <a href={BRAND_LINKS.YOUTUBE} target="_blank" rel="noreferrer" className="text-secondaryText hover:text-bronze transition-colors">YouTube</a>
          <a href={BRAND_LINKS.FACEBOOK} target="_blank" rel="noreferrer" className="text-secondaryText hover:text-bronze transition-colors">Facebook</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-borderLight/30 text-center text-xs text-softAccent uppercase tracking-widest">
        &copy; {new Date().getFullYear()} The Pen Speaks. All rights reserved.
      </div>
    </footer>
  );
}