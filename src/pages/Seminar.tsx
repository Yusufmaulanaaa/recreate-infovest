import Button from "../components/Button";
import { Collapse } from '../ui/Collapse';
import seminarMascot from '../assets/maskot gaya 5.png';
import CardProduct from '../components/CardProduct';
import wave from '../assets/wave-haikei (3).png';
import wave_bot from '../assets/wave-haikei (4).png';
import SpeakerCard from '../ui/SpeakerCard';
import useInView from '../hooks/useInView';

export default function Seminar() {
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
  ];

  const collapseItems = [
    {
      title: "Siapa yang wajib ikut seminar ini?",
      description: "Mahasiswa, developer, dan tech-enthusiast yang ingin tahu bagaimana AI akan mengubah cara kita bekerja dalam 5 tahun ke depan. Jangan sampai tertinggal arus teknologi!",
    },
    {
      title: "Apakah saya akan dapat sertifikat?",
      description: "Tentu saja! E-certificate resmi berskala nasional akan diberikan kepada seluruh peserta yang mengikuti sesi seminar hingga selesai.",
    },
    {
      title: "Di mana lokasi seminar diselenggarakan?",
      description: "Seminar utama akan diselenggarakan secara hybrid. Kamu bisa hadir langsung di lokasi utama atau bergabung secara virtual melalui platform streaming eksklusif kami.",
    },
  ];

  return (
    <div className="bg-white overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center pt-10 pb-20 overflow-hidden">
        {/* Digital Glow BG */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full -mr-20 -mt-20"></div>
        
        <div className="container mx-auto px-6 z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            
            <div className="flex flex-col gap-6 max-w-2xl">
              <header className={`reveal ${heroShow ? "show animate-left" : ""}`}>
                <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-red-900 to-blue-800 bg-clip-text text-transparent leading-tight uppercase">
                  IT SEMINAR
                </h1>
                <h3 className="text-2xl md:text-3xl font-bold text-red-700 mt-2">
                  “Human-AI Integration”
                </h3>
              </header>

              <p className={`text-lg md:text-xl text-slate-600 leading-relaxed reveal ${heroShow ? "show animate-left" : ""}`}>
                Jadilah saksi bagaimana kolaborasi <span className="text-blue-600 font-bold">Manusia dan AI</span> melahirkan revolusi baru. Bedah tuntas strategi teknologi masa depan bersama para pemimpin industri global.
              </p>

              <div className={`flex flex-wrap gap-4 reveal ${heroShow ? "show animate-up" : ""}`}>
                <Button 
                  title="Daftar Sekarang" 
                  variant="primary" 
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-red-700 to-blue-700 hover:from-red-800 hover:to-blue-800 shadow-xl shadow-blue-100 text-white font-bold transition-all transform hover:scale-105" 
                />
                <Button 
                  title="Hubungi Panitia" 
                  variant="primary" 
                  className="px-8 py-4 rounded-2xl border-2 border-blue-100 bg-white !text-blue-700 font-bold hover:bg-blue-50 transition-all" 
                />
              </div>
            </div>

            <div className={`w-full lg:w-1/2 flex justify-center reveal ${heroShow ? "show animate-right" : ""}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-blue-400/20 blur-3xl rounded-full scale-75 animate-pulse"></div>
                <img src={seminarMascot} alt="Seminar Mascot" className="relative w-full max-w-md drop-shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <img src={wave} alt="" className="w-full opacity-20 -mt-24 pointer-events-none" />

      {/* ABOUT SECTION */}
      <section ref={aboutRef} className="bg-slate-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className={`text-4xl md:text-5xl font-black text-red-900 mb-6 reveal ${aboutShow ? "show animate-left" : ""}`}>
              Unlock Your Potential
            </h2>
            <p className={`text-xl text-slate-700 leading-relaxed reveal ${aboutShow ? "show animate-left" : ""}`}>
              Invofest 2026 hadir untuk menjembatani kamu dengan realita industri IT yang super cepat. Saatnya <span className="text-blue-600 font-bold">naik level</span> dan kuasai teknologi yang akan mendominasi masa depan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {title:'IT Competition', desc:'Wadahkan inovasi liarmu jadi solusi.'},
              {title:'IT Workshop', desc:'Praktek langsung bersama ahlinya.'},
              {title:'IT Seminar', desc:'Insight eksklusif dari raksasa teknologi.'},
              {title:'IT Talkshow', desc:'Diskusi hangat seputar tren masa kini.'},
            ].map((item, i) => (
              <div key={i} className={`reveal ${aboutShow ? "show animate-up" : ""}`} style={{ animationDelay: `${i * 0.1}s` }}>
                <CardProduct title={item.title} description={item.desc}>
                  <Button title="Info Detail" variant="primary" className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold text-white transition-colors" />
                </CardProduct>
              </div>
            ))}
          </div>
        </div>
      </section>

      <img src={wave_bot} alt="" className="w-full opacity-20 pointer-events-none" />

      {/* SPEAKERS SECTION */}
      <section ref={speakerRef} className="py-24 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -ml-20 -mb-20"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-black text-red-900 mb-4 uppercase">Elite Speakers</h2>
          <p className="text-slate-500 mb-16 text-lg italic">Mendengarkan langsung dari para <span className="text-blue-500 font-bold">punggawa teknologi dunia.</span></p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {speakers.map((s, i) => (
              <div key={i} className={`reveal ${speakerShow ? "show animate-up" : ""}`} style={{ animationDelay: `${i * 0.2}s` }}>
                <SpeakerCard name={s.name} role={s.role} imageUrl={s.imageUrl} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION - Clean Style (No Blue BG) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-12 bg-gradient-to-r from-red-900 to-blue-800 bg-clip-text text-transparent">
            Seputar Seminar
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
          
          <p className="mt-12 text-slate-500 italic">
            Masih ragu? Tanyakan saja pada tim kami via <span className="text-blue-600 font-semibold cursor-pointer hover:underline">WhatsApp Panitia</span>
          </p>
        </div>
      </section>

    </div>
  );
}