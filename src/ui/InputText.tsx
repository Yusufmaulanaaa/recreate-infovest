interface InputTextProps {
  label: string;
  name: string;
  error?: string;
  register: any;
  placeholder?: string; // Ditambah agar bisa custom dari LoginForm
}

export const InputText: React.FC<InputTextProps> = ({
  label,
  name,
  error,
  register,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-1.5 mb-2">
      {/* Label disamakan style-nya dengan InputPass */}
      <label 
        className="text-sm font-bold text-slate-700 ml-1" 
        htmlFor={name}
      >
        {label}
      </label>

      <input
        id={name}
        type="text"
        className={`border rounded-xl text-sm p-3 w-full transition-all duration-200 outline-none
          ${error 
            ? "border-red-400 bg-red-50 focus:ring-2 focus:ring-red-100" 
            : "border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
          }`}
        {...register(name)}
        placeholder={placeholder || `Masukkan ${label}...`}
      />

      {/* Kontainer error yang tingginya tetap (min-h-5) */}
      <div className="min-h-5 mt-0.5">
        {error && (
          <p className="text-[11px] font-medium text-red-500 flex items-center gap-1 ml-1">
            <span className="w-1 h-1 bg-red-500 rounded-full" />
            {error}
          </p>
        )}
      </div>
    </div>
  );
};