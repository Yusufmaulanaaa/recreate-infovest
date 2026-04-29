import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate, Link } from "react-router-dom";

// Import UI
import { InputText } from "../ui/InputText";
import { InputPassword } from "../ui/InputPass";
import Button from "../components/Button";

const loginSchema = z.object({
  email: z.string().min(1, "Email wajib diisi").email("Format email tidak valid"),
  password: z.string().min(8, "Password minimal 8 karakter"),
});

type LoginFields = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<LoginFields>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched", 
  });

  const handleProcessLogin = async (payload: LoginFields) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Autentikasi Berhasil:", payload);
      localStorage.setItem("auth_token", "session_active_true");
      reset();
      navigate("/", { replace: true }); 
    } catch (err) {
      console.error("Login gagal", err);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-slate-50">
      {/* Mengganti rounded-[2.5rem] dengan rounded-3xl agar lebih aman */}
      <div className="w-full max-w-md bg-white border border-slate-100 p-8 rounded-3xl shadow-2xl shadow-slate-200">
        
        <header className="mb-10 text-left">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight">
            Selamat Datang
          </h2>
          <p className="text-slate-400 mt-2 font-medium">Masuk ke akun Anda untuk melanjutkan</p>
        </header>

        <form onSubmit={handleSubmit(handleProcessLogin)} className="space-y-4">
          
          <InputText 
            label="Alamat Email"
            name="email"
            placeholder="nama@email.com"
            register={register}
            error={errors.email?.message}
          />
          
          <InputPassword 
            label="Kata Sandi"
            name="password"
            placeholder="••••••••"
            register={register}
            error={errors.password?.message}
          />

          <div className="pt-4">
            <Button 
              title={isSubmitting ? "Sedang Memproses..." : "Masuk Sekarang"} 
              variant="primary" 
              type="submit"
              className="w-full py-4 text-base font-bold rounded-2xl transition-all active:scale-95 shadow-lg shadow-blue-100"
              disabled={isSubmitting}
            />
          </div>

          <footer className="text-center pt-8 mt-4 border-t border-slate-100">
            <p className="text-sm text-slate-500 font-medium">
              Belum memiliki akun?{" "}
              <Link 
                to="/register" 
                className="font-bold text-blue-600 hover:text-blue-700 underline-offset-4 hover:underline"
              >
                Daftar Baru
              </Link>
            </p>
          </footer>
        </form>
      </div>
    </section>
  );
}