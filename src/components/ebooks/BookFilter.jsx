import { CATEGORIES } from '../../utils/constants';

export default function BookFilter({ activeCategory, setActiveCategory }) {
  const filters = ['All', ...CATEGORIES];

  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b border-borderLight/50 pb-6">
      
      {/* Categories */}
      <div className="flex flex-wrap gap-2 md:gap-4">
        {filters.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`text-sm tracking-widest uppercase transition-colors px-3 py-1 rounded-sm ${
              activeCategory === category 
                ? 'bg-primaryText text-white' 
                : 'text-secondaryText hover:text-bronze hover:bg-secondaryBg'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Sorting / Extra Filters */}
      <div className="flex items-center space-x-4">
        <select className="bg-transparent border-none text-sm tracking-widest uppercase text-secondaryText outline-none cursor-pointer hover:text-primaryText">
          <option value="latest">Latest Releases</option>
          <option value="popular">Most Popular</option>
          <option value="alphabetical">A - Z</option>
        </select>
        
        <select className="bg-transparent border-none text-sm tracking-widest uppercase text-secondaryText outline-none cursor-pointer hover:text-primaryText">
          <option value="en">English</option>
          <option value="fr">French</option>
        </select>
      </div>
    </div>
  );
}