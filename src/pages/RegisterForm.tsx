import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate, Link } from "react-router-dom";

// Import UI Components
import { InputText } from "../ui/InputText";
import { InputPassword } from "../ui/InputPass";
import { InputTextArea } from "../ui/InputTextArea";
import { SelectInput } from "../ui/SelectInput";
import Button from "../components/Button";

// 1. Validasi Schema yang lebih ketat
const registerSchema = z.object({
  nama: z.string().min(1, "Nama lengkap wajib diisi"),
  email: z.string().min(1, "Email wajib diisi").email("Format email tidak valid"),
  biodata_singkat: z.string().min(10, "Berikan biodata minimal 10 karakter"),
  pilih_event: z.string().min(1, "Silahkan pilih salah satu event"),
  password: z.string().min(8, "Password minimal 8 karakter"),
  password_confirm: z.string().min(8, "Konfirmasi password minimal 8 karakter"),
}).refine((data) => data.password === data.password_confirm, {
  message: "Konfirmasi password tidak cocok",
  path: ["password_confirm"],
});

type FormRegist = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormRegist>({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
  });

  const onProcessRegist = async (data: FormRegist) => {
    try {
      console.log("Mencoba mendaftar...", data);
      // Simulasi proses
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      localStorage.setItem("isLogin", "true");
      reset();
      navigate("/");
    } catch (err) {
      console.error("Registrasi gagal", err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-50/30 py-10 px-4">
      <div className="w-full max-w-xl bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100">
        
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">
            Buat Akun
          </h1>
          <p className="text-slate-400 mt-2 text-sm">
            Lengkapi data diri untuk mengikuti event seru kami
          </p>
        </header>

        <form onSubmit={handleSubmit(onProcessRegist)} className="space-y-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
            <InputText 
              label="Nama Lengkap" 
              name="nama" 
              placeholder="Contoh: Yusuf Maulana"
              register={register} 
              error={errors.nama?.message} 
            />
            <InputText 
              label="Alamat Email" 
              name="email" 
              placeholder="nama@email.com"
              register={register} 
              error={errors.email?.message} 
            />
          </div>

          <InputTextArea 
            label="Biodata Singkat" 
            name="biodata_singkat" 
            placeholder="Ceritakan sedikit tentang dirimu..."
            register={register} 
            error={errors.biodata_singkat?.message} // Diubah dari errors ke error
          />

          <SelectInput
            label="Pilih Event"
            name="pilih_event"
            register={register}
            error={errors.pilih_event?.message} // Diubah dari errors ke error
            options={[
              { label: "IT Competition", value: "IT Competition" },
              { label: "IT Seminar", value: "IT Seminar" },
              { label: "IT TalkShow", value: "IT TalkShow" },
              { label: "IT Workshop", value: "IT Workshop" }
            ]}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
            <InputPassword 
              label="Password" 
              name="password" 
              placeholder="••••••••"
              register={register} 
              error={errors.password?.message} 
            />
            <InputPassword 
              label="Konfirmasi Password" 
              name="password_confirm" 
              placeholder="••••••••"
              register={register} 
              error={errors.password_confirm?.message} 
            />
          </div>

          <div className="pt-6">
            <Button 
              title={isSubmitting ? "Mendaftarkan..." : "Daftar Sekarang"} 
              variant="primary" 
              type="submit"
              className="w-full py-4 rounded-2xl font-bold shadow-lg shadow-blue-100 transition-all active:scale-[0.98]"
              disabled={isSubmitting}
            />
          </div>

          <footer className="mt-8 text-center pt-6 border-t border-slate-50">
            <p className="text-sm text-slate-500">
              Sudah punya akun?{" "}
              <Link to="/login" className="text-blue-600 font-bold hover:underline">
                Masuk disini
              </Link>
            </p>
          </footer>
        </form>
      </div>
    </div>
  );
}