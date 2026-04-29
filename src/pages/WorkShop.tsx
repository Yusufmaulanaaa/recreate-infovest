import Button from "../components/Button";
import { Collapse } from '../ui/Collapse';
import workshopMascot from '../assets/maskot 2.png';
import ts1 from '../assets/talkshow cyber_20251115_104447_0002.png';
import ts2 from '../assets/workshop AI_20251115_104446_0001.png';
import ts3 from '../assets/workshop mobile.png';
import CardProduct from '../components/CardProduct';
import wave from '../assets/wave-haikei (3).png';
import wave_bot from '../assets/wave-haikei (4).png';
import SpeakerCard from '../ui/SpeakerCard';
import useInView from '../hooks/useInView';

export default function Workshop() {
  const [heroRef, heroShow] = useInView();
  const [aboutRef, aboutShow] = useInView();
  const [speakerRef, speakerShow] = useInView();

  const mentors = [
    {
      name: "Danang Avan Maulana",
      role: "Security Analyst & Founder | Contributor Tegalsec",
      imageUrl: ts1,
    },
    {
      name: "M. Dendi Purwanto",
      role: "Software Engineering from PT. Mayor Kernel Supernova",
      imageUrl: ts2,
    },
    {
      name: "Lhuqita Fazry",
      role: "Developer & Founder Rumah Coding Indonesia",
      imageUrl: ts3,
    },
  ];

  const collapseItems = [
    {
      title: "Apakah saya perlu bawa laptop?",
      description: "Sangat disarankan! Karena ini adalah workshop teknis (Hands-on), kamu akan langsung mempraktekkan materi bersama para mentor berpengalaman menggunakan perangkat masing-masing.",
    },
    {
      title: "Software apa yang harus diinstal sebelum datang?",
      description: "Tergantung kelas yang kamu pilih (Cyber, AI, atau Mobile). Detail daftar software akan dikirimkan melalui email setelah pendaftaran kamu dikonfirmasi oleh panitia.",
    },
    {
      title: "Dapat sertifikat dan materi latihan?",
      description: "Tentu saja bray! Kamu akan mendapatkan modul eksklusif, source code latihan, dan e-certificate resmi dari Invofest 2026 yang diakui secara nasional.",
    },
  ];

  return (
    <div className="bg-white overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center pt-10 pb-20 overflow-hidden">
        {/* Glow Biru Halus di Pojok Atas */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full -mr-32 -mt-32"></div>
        
        <div className="container mx-auto px-6 z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            
            <div className="flex flex-col gap-6 max-w-2xl">
              <div className={`reveal ${heroShow ? "show animate-left" : ""}`}>
                <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-red-900 to-blue-800 bg-clip-text text-transparent leading-tight uppercase">
                  IT Workshop
                </h1>
                <h3 className="text-2xl md:text-3xl font-bold text-red-700 mt-4 leading-snug">
                  “Mastering Digital Craft: Build, Protect, and Innovate”
                </h3>
              </div>

              <p className={`text-lg md:text-xl text-slate-600 leading-relaxed reveal ${heroShow ? "show animate-left" : ""}`}>
                Jangan cuma jadi penonton. Terjun langsung ke dunia <span className="text-blue-600 font-bold">Cyber Security, AI, dan Mobile Dev</span>. Ubah baris kode menjadi solusi nyata bersama para mentor industri terkemuka.
              </p>

              <div className={`flex flex-wrap gap-4 reveal ${heroShow ? "show animate-up" : ""}`}>
                <Button 
                  title="Pilih Kelas Sekarang" 
                  variant='primary' 
                  className="px-10 py-4 rounded-2xl bg-gradient-to-r from-red-700 to-blue-700 hover:from-red-800 hover:to-blue-800 text-white font-bold shadow-xl shadow-blue-100 transition-all transform hover:scale-105" 
                />
                <Button 
                  title="Konsultasi Kelas" 
                  variant='primary' 
                  className="px-10 py-4 rounded-2xl border-2 border-blue-100 bg-white !text-blue-700 font-bold hover:bg-blue-50 transition-all" 
                />
              </div>
            </div>

            <div className={`w-full lg:w-1/2 flex justify-center reveal ${heroShow ? "show animate-right" : ""}`}>
              <div className="relative">
                {/* Glow di belakang maskot */}
                <div className="absolute inset-0 bg-blue-400/20 blur-3xl rounded-full scale-75"></div>
                <img src={workshopMascot} alt="Workshop Mascot" className="relative w-full max-w-md drop-shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <img src={wave} alt="" className="w-full opacity-20 -mt-24 pointer-events-none" />

      {/* ABOUT SECTION */}
      <section ref={aboutRef} className="bg-slate-50 py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 max-w-3xl">
            <h2 className={`text-4xl md:text-5xl font-black text-red-900 mb-6 reveal ${aboutShow ? "show animate-left" : ""}`}>
              Hands-On Experience
            </h2>
            <p className={`text-xl text-slate-700 leading-relaxed reveal ${aboutShow ? "show animate-left" : ""}`}>
              Kami percaya cara terbaik untuk belajar adalah dengan praktek. Di sini, <span className="text-blue-600 font-bold">curiosity bertemu opportunity</span> untuk menciptakan talenta digital yang siap kerja.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {title:'IT Competition', desc:'Ajang pembuktian inovasi digitalmu.'},
              {title:'IT Workshop', desc:'Praktek langsung teknologi mutakhir.'},
              {title:'IT Seminar', desc:'Insight strategis dari pakar global.'},
              {title:'IT Talkshow', desc:'Diskusi santai tapi berisi soal tren IT.'},
            ].map((item, i) => (
              <div key={i} className={`reveal ${aboutShow ? "show animate-up" : ""}`} style={{ animationDelay: `${i * 0.1}s` }}>
                <CardProduct title={item.title} description={item.desc}>
                  <Button title='Detail Program' variant='primary' className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors" />
                </CardProduct>
              </div>
            ))}
          </div>
        </div>
      </section>

      <img src={wave_bot} alt="" className="w-full opacity-20 pointer-events-none" />

      {/* MENTORS SECTION */}
      <section ref={speakerRef} className="py-24 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -ml-20 -mb-20"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl font-black text-red-900 mb-4 uppercase tracking-tight">Meet Your Mentors</h2>
          <p className="text-slate-500 mb-16 text-lg italic">Dibimbing langsung oleh para praktisi yang <span className="text-blue-500 font-bold">ahli di bidangnya.</span></p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {mentors.map((mentor, index) => (
              <div key={index} className={`reveal ${speakerShow ? "show animate-up" : ""}`} style={{ animationDelay: `${index * 0.2}s` }}>
                <SpeakerCard name={mentor.name} role={mentor.role} imageUrl={mentor.imageUrl} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION - Clean Style (Sesuai Permintaan) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-12 bg-gradient-to-r from-red-900 to-blue-800 bg-clip-text text-transparent">
            Hal yang Sering Ditanyakan
          </h2>
          
          <div className="flex flex-col gap-4 text-left">
            {collapseItems.map((item, index) => (
              <div 
                key={index} 
                className="group border border-slate-200 hover:border-blue-300 bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-blue-50"
              >
                <Collapse title={item.title} description={item.description} />
              </div>
            ))}
          </div>
          
          <p className="mt-12 text-slate-500">
            Punya pertanyaan lain? <span className="text-blue-600 font-semibold cursor-pointer hover:underline">Hubungi admin kami di WhatsApp</span>
          </p>
        </div>
      </section>

    </div>
  );
}