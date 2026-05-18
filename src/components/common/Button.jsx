export default function Button({ text, onClick, variant = 'primary', isFullWidth = false }) {
  const baseStyles = "px-8 py-3 text-sm tracking-widest uppercase transition-all duration-300 rounded-sm shadow-sm";
  const variants = {
    primary: "bg-primaryText text-white hover:bg-bronze",
    outline: "border border-borderLight text-primaryText hover:bg-secondaryBg hover:border-bronze"
  };
  
  return (
    <button 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${isFullWidth ? 'w-full' : ''}`}
    >
      {text}
    </button>
  );
}