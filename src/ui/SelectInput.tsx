interface SelectInputProps {
  label: string;
  name: string;
  register: any;
  options: { label: string; value: string }[];
  error?: string; // Diubah dari errors ke error agar konsisten
}

export const SelectInput: React.FC<SelectInputProps> = ({
  label,
  name,
  register,
  error,
  options,
}) => {
  return (
    <div className="flex flex-col gap-1.5 mb-2">
      {/* Label dengan style font-bold dan warna slate agar selaras */}
      <label 
        className="text-sm font-bold text-slate-700 ml-1" 
        htmlFor={name}
      >
        {label}
      </label>

      <select
        id={name}
        {...register(name)}
        className={`border rounded-xl text-sm p-3 w-full appearance-none transition-all duration-200 outline-none bg-white
          ${error 
            ? "border-red-400 bg-red-50 focus:ring-2 focus:ring-red-100" 
            : "border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
          }`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 0.75rem center',
          backgroundSize: '1rem'
        }}
      >
        <option value="" disabled>Pilih {label}...</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {/* Kontainer error stabil (min-h-5) */}
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