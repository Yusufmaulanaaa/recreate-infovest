interface ButtonProps {
  title: string;
  variant?: "primary" | "outline";
  type? : "button" | "submit";
}

const Button: React.FC<ButtonProps> = ({ title, variant = "primary" , type="button"}) => {
  const baseStyle = "px-5 py-3 rounded-lg font-medium transition ";

  const variants = {
    primary: "bg-red-900 text-white hover:bg-red-800",
    outline: "border border-red-900 text-red-900 hover:bg-red-100",
  };

  return (
    <button type={type} className={`${baseStyle} ${variants[variant]}`}>
      {title}
    </button>
  );
};

export default Button;