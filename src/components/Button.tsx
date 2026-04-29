interface ButtonProps {
  title: string;
  type?: "submit" | "button" | "reset";
  variant?: "primary" | "secondary";
  className?: string; // Tambahkan ini agar tidak error 'type string'
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  title,
  type = "button",
  variant = "primary",
  className = "", // Berikan default value string kosong
  disabled,
  onClick,
}) => {
  // Style dasar tombol
  const baseStyle = "transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";
  
  // Style berdasarkan variant
  const variantStyle = variant === "primary" 
    ? "bg-blue-600 text-white hover:bg-blue-700" 
    : "bg-slate-200 text-slate-800 hover:bg-slate-300";

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      // Gabungkan baseStyle, variantStyle, dan className dari luar
      className={`${baseStyle} ${variantStyle} ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;