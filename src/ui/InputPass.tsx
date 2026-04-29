import { useState } from "react";

interface InputPasswordProps {
  label: string;
  name: string;
  error?: string;
  register: any;
  placeholder?: string;
}

export const InputPassword: React.FC<InputPasswordProps> = ({
  label,
  name,
  error,
  register,
  placeholder,
}) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-1.5 mb-2">
      <label className="text-sm font-bold text-slate-700 ml-1" htmlFor={name}>
        {label}
      </label>

      <div className="relative">
        <input
          id={name}
          type={show ? "text" : "password"}
          className={`border rounded-xl text-sm p-3 w-full transition-all outline-none
            ${error 
              ? "border-red-400 bg-red-50 focus:ring-2 focus:ring-red-100" 
              : "border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
            }`}
          {...register(name)}
          placeholder={placeholder || `Masukkan ${label}...`}
        />

        <button
          className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold uppercase text-slate-400 hover:text-blue-600 transition-colors"
          type="button"
          onClick={() => setShow(!show)}
        >
          {show ? "Sembunyikan" : "Lihat"}
        </button>
      </div>

      {/* Container Error: Menggunakan min-h-5 agar layout tidak loncat */}
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