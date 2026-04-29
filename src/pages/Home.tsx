import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { Collapse } from '../ui/Collapse';
import maskot from '../assets/maskot 2.png';
import logo from '../assets/logo-full.png';
import CardProduct from '../components/CardProduct';
import wave from '../assets/wave-haikei (3).png';
import wave_bot from '../assets/wave-haikei (4).png';
import SpeakerCard from '../ui/SpeakerCard';
import useInView from '../hooks/useInView';

export default function Home() {
  const navigate = useNavigate();
  const [heroRef, heroShow] = useInView();
  const [aboutRef, aboutShow] = useInView();
  const [speakerRef, speakerShow] = useInView();

  const speakers = [
    {
      name: "Dery Agung Triyadi",
      role: "AWS Indonesia",
      imageUrl: "https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png",
    },
    {
      name: "Sowam Habibi",
      role: "Google Indonesia",
      imageUrl: "https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png",
    },
    {
      name: "Lhuqita Fazry",
      role: "Founder Rumah Coding Indonesia",
      imageUrl: "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png",
    },
  ];

  return (
    <div className="bg-white overflow-x-hidden font-sans">
      
      {/* 1. HERO SECTION */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-10 pb-20 overflow-hidden">
        {/* Glow Background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full -mr-32 -mt-32"></div>
        
        <div className="container mx-auto px-6 z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            
            <div className="flex flex-col gap-8 max-w-2xl text-left">
              <div className={`reveal ${heroShow ? "show animate-left" : ""}`}>
                <img src={logo} alt="Invofest Logo" className="w-60 md:w-72 drop-shadow-md" />
              </div>

              <h1 className={`text-4xl md:text-6xl font-black leading-tight reveal ${heroShow ? "show animate-left" : ""}`}>
                <span className="bg-gradient-to-r from-red-900 to-blue-800 bg-clip-text text-transparent">Beyond Limits,</span> <br />
                <span className="text-slate-800">Innovate Together</span>
              </h1>

              <p className={`text-lg md:text-xl text-slate-600 leading-relaxed reveal ${heroShow ? "show animate-left" : ""}`}>
                Selamat datang di <span className="font-bold text-red-700">Invofest 2026</span>. Arena kolaborasi teknologi terbesar untuk melahirkan inovator muda. Ubah ide gilamu menjadi solusi nyata bersama ribuan talenta digital lainnya.
              </p>

              <div className={`flex flex-wrap gap-4 reveal ${heroShow ? "show animate-up" : ""}`}>
                <Button 
                  title="Amankan Kursi Sekarang" 
                  variant="primary" 
                  onClick={() => navigate('/register')}
                  className="px-10 py-4 rounded-2xl bg-gradient-to-r from-red-700 to-blue-700 hover:from-red-800 hover:to-blue-800 text-white shadow-xl shadow-blue-100 font-bold transition-transform hover:scale-105" 
                />
                <Button 
                  title="Masuk Akun" 
                  variant="secondary" 
                  onClick={() => navigate('/login')}
                  className="px-10 py-4 rounded-2xl border-2 border-slate-200 bg-white text-slate-700 font-bold hover:bg-slate-50 transition-all" 
                />
              </div>
            </div>

            <div className={`w-full lg:w-1/2 flex justify-center reveal ${heroShow ? "show animate-right" : ""}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-blue-400/20 blur-3xl rounded-full scale-75 animate-pulse"></div>
                <img src={maskot} alt="Mascot Invofest" className="relative w-full max-w-md drop-shadow-2xl animate-pulse-slow" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <img src={wave} alt="Wave Decoration" className="w-full opacity-20 -mt-24 pointer-events-none" />

      {/* 2. ABOUT SECTION */}
      <section ref={aboutRef} className="bg-slate-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className={`text-4xl md:text-5xl font-black text-red-900 mb-6 reveal ${aboutShow ? "show animate-left" : ""}`}>
              Why Invofest?
            </h2>
            <p className={`text-xl text-slate-700 leading-relaxed reveal ${aboutShow ? "show animate-left" : ""}`}>
              Kami bukan sekadar festival teknologi biasa. Kami adalah titik temu antara <span className="text-blue-600 font-bold">Ambisi, Kreativitas, dan Teknologi</span> masa depan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'IT Competition', desc: 'Buktikan kemampuanmu di panggung nasional.' },
              { title: 'IT Workshop', desc: 'Kuasai skill praktis yang dicari industri.' },
              { title: 'IT Seminar', desc: 'Serap ilmu langsung dari para tech-leader.' },
              { title: 'IT Talkshow', desc: 'Bedah tuntas masa depan kolaborasi AI.' },
            ].map((item, i) => (
              <div 
                key={i} 
                className={`reveal ${aboutShow ? "show animate-up" : ""}`} 
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <CardProduct title={item.title} description={item.desc}>
                  <Button title="Jelajahi" variant="primary" className="w-full py-3 rounded-xl font-bold bg-blue-600 hover:bg-blue-700 text-white transition-colors" />
                </CardProduct>
              </div>
            ))}
          </div>
        </div>
      </section>

      <img src={wave_bot} alt="Wave Bottom" className="w-full opacity-20 pointer-events-none" />

      {/* 3. SPEAKERS SECTION */}
      <section ref={speakerRef} className="py-24 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -ml-20 -mb-20"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl font-black text-red-900 uppercase tracking-tight">The Visionaries</h2>
          <p className="text-slate-500 mt-4 text-lg italic">Belajar dari mereka yang membangun <span className="text-blue-500 font-bold">masa depan.</span></p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className={`reveal ${speakerShow ? "show animate-up" : ""}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <SpeakerCard
                  name={speaker.name}
                  role={speaker.role}
                  imageUrl={speaker.imageUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ SECTION - Clean & Professional */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-12 bg-gradient-to-r from-red-900 to-blue-800 bg-clip-text text-transparent uppercase">
            Sering Ditanyakan
          </h2>
          <div className="flex flex-col gap-4 text-left">
            {[
              { 
                q: "Siapa yang bisa bergabung?", 
                a: "Seluruh mahasiswa dan pelajar aktif di Indonesia yang punya semangat untuk berinovasi dan belajar teknologi terbaru!" 
              },
              { 
                q: "Acara diselenggarakan online atau offline?", 
                a: "Invofest 2026 hadir secara Hybrid. Seminar dan talkshow bisa diakses lewat streaming, sedangkan babak final kompetisi akan diadakan langsung di Tegal." 
              },
              { 
                q: "Bagaimana cara pendaftarannya?", 
                a: "Klik tombol 'Amankan Slotmu' di atas, buat akun, dan pilih kategori event yang ingin kamu ikuti. Gampang banget bray!" 
              }
            ].map((item, index) => (
              <div key={index} className="group border border-slate-200 hover:border-blue-300 bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-blue-50">
                <Collapse 
                  title={item.q} 
                  description={item.a} 
                />
              </div>
            ))}
          </div>
          
          <p className="mt-12 text-slate-500">
            Butuh bantuan lebih lanjut? <span className="text-blue-600 font-semibold cursor-pointer hover:underline">Chat admin kami</span>
          </p>
        </div>
      </section>

    </div>
  );
}