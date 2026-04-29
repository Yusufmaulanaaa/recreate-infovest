interface InputTextAreaProps {
  label: string;
  name: string;
  register: any;
  error?: string; // Diubah dari errors ke error agar konsisten dengan yang lain
  placeholder?: string;
}

export const InputTextArea: React.FC<InputTextAreaProps> = ({
  label,
  name,
  register,
  error,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-1.5 mb-2">
      {/* Label selaras dengan komponen input lainnya */}
      <label 
        className="text-sm font-bold text-slate-700 ml-1" 
        htmlFor={name}
      >
        {label}
      </label>

      <textarea
        id={name}
        className={`border rounded-xl text-sm p-3 w-full h-40 transition-all duration-200 outline-none resize-none
          ${error 
            ? "border-red-400 bg-red-50 focus:ring-2 focus:ring-red-100" 
            : "border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
          }`}
        {...register(name)}
        placeholder={placeholder || `Masukkan ${label}...`}
      />

      {/* Kontainer Error stabil (min-h-5) */}
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