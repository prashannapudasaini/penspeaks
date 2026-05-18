export default function Input({ label, type = "text", placeholder }) {
  return (
    <div className="flex flex-col space-y-2">
      {label && <label className="text-xs uppercase tracking-widest text-secondaryText">{label}</label>}
      <input 
        type={type} 
        placeholder={placeholder}
        className="w-full bg-secondaryBg border border-borderLight/50 focus:border-bronze focus:ring-1 focus:ring-bronze outline-none px-4 py-3 rounded-sm transition-all text-primaryText font-light"
      />
    </div>
  );
}