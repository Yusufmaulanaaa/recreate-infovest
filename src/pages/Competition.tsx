import Button from "../components/Button";
import { Collapse } from '../ui/Collapse';
import ts1 from '../assets/talkshow cyber_20251115_104447_0002.png';
import ts2 from '../assets/workshop AI_20251115_104446_0001.png';
import ts3 from '../assets/workshop mobile.png';
import CardProduct from '../components/CardProduct';
import mascotCompetition from '../assets/maskot gaya 1.png';
import wave from '../assets/wave-haikei (3).png';
import wave_bot from '../assets/wave-haikei (4).png';
import SpeakerCard from '../ui/SpeakerCard';
import useInView from '../hooks/useInView';

export default function Competition() {
  const [heroRef, heroShow] = useInView();
  const [aboutRef, aboutShow] = useInView();
  const [speakerRef, speakerShow] = useInView();

  const judges = [
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

  const categories = [
    { title: 'UI/UX Design', desc: 'Rancang pengalaman pengguna yang revolusioner. Jadikan estetika dan fungsionalitas menyatu dalam harmoni digital.' },
    { title: 'Web Developer', desc: 'Tantang dirimu membangun platform masa depan yang tangguh, responsif, dan siap mendisrupsi industri.' },
    { title: 'Poster Design', desc: 'Visualisasikan pesan masa depan. Biarkan setiap garis dan warna bercerita tentang inovasi tanpa batas.' },
    { title: 'Web Design', desc: 'Rancang wajah internet masa kini. Fokus pada keindahan visual yang memanjakan mata dan memudahkan navigasi.' },
  ];

  const faqItems = [
    {
      title: "Apakah boleh mendaftar lebih dari satu cabang lomba?",
      description: "Setiap tim atau individu diperbolehkan mendaftar di cabang yang berbeda selama jadwal babak final tidak berbenturan. Cek guidebook untuk info lebih lanjut bray!",
    },
    {
      title: "Bagaimana kriteria penilaian utama juri?",
      description: "Penilaian akan menitikberatkan pada tiga pilar utama: Inovasi (30%), Teknis/Eksekusi (40%), dan Orisinalitas (30%). Pastikan karyamu benar-benar otentik!",
    },
    {
      title: "Hadiah apa yang bisa didapatkan pemenang?",
      description: "Selain Trophy dan Sertifikat Nasional, para pemenang berhak mendapatkan total hadiah jutaan rupiah serta kesempatan networking dengan juri dari industri tech ternama.",
    },
  ];

  return (
    <div className="bg-white overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center pt-10 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full -mr-20 -mt-20"></div>
        
        <div className="container mx-auto px-6 z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            
            <div className="flex flex-col gap-6 max-w-2xl">
              <header className={`reveal ${heroShow ? "show animate-left" : ""}`}>
                <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-red-900 to-blue-800 bg-clip-text text-transparent leading-tight uppercase">
                  IT Competition
                </h1>
                <h3 className="text-2xl md:text-3xl font-bold text-red-700 mt-2">
                  "Showcase Your Genius, Shape The Future"
                </h3>
              </header>

              <p className={`text-lg md:text-xl text-slate-600 leading-relaxed reveal ${heroShow ? "show animate-left" : ""}`}>
                Saatnya keluar dari zona nyaman. Tunjukkan karyamu di panggung nasional dan jadilah bagian dari <span className="text-blue-600 font-bold">Generasi Inovator</span> yang akan mengubah wajah teknologi Indonesia.
              </p>

              <div className={`flex flex-wrap gap-4 reveal ${heroShow ? "show animate-up" : ""}`}>
                <Button 
                  title="Ambil Tantangan" 
                  variant="primary" 
                  className="px-10 py-4 rounded-2xl bg-gradient-to-r from-red-700 to-blue-700 hover:from-red-800 hover:to-blue-800 shadow-xl shadow-blue-100 text-white font-bold transition-all transform hover:scale-105" 
                />
                <Button 
                  title="Unduh Guidebook" 
                  variant="primary" 
                  className="px-10 py-4 rounded-2xl border-2 border-blue-100 bg-white !text-blue-700 font-bold hover:bg-blue-50 transition-all" 
                />
              </div>
            </div>

            <div className={`w-full lg:w-1/2 flex justify-center reveal ${heroShow ? "show animate-right" : ""}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-blue-400/20 blur-3xl rounded-full scale-75 animate-pulse"></div>
                <img src={mascotCompetition} alt="Mascot Competition" className="relative w-full max-w-md drop-shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <img src={wave} alt="" className="w-full opacity-20 -mt-24 pointer-events-none" />

      {/* CATEGORIES SECTION */}
      <section ref={aboutRef} className="bg-slate-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className={`text-4xl md:text-5xl font-black text-red-900 mb-6 reveal ${aboutShow ? "show animate-left" : ""}`}>
              Battle Ground
            </h2>
            <p className={`text-xl text-slate-700 leading-relaxed reveal ${aboutShow ? "show animate-left" : ""}`}>
              Pilih arena bertarungmu. Setiap kategori adalah kesempatan untuk membuktikan bahwa kamu bukan sekadar pengguna teknologi, tapi <span className="text-blue-600 font-bold">sang pencipta.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((item, i) => (
              <div 
                key={i} 
                className={`reveal ${aboutShow ? "show animate-up" : ""}`} 
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <CardProduct title={item.title} description={item.desc}>
                  <Button title="Pelajari Aturan" variant="primary" className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold text-white transition-colors" />
                </CardProduct>
              </div>
            ))}
          </div>
        </div>
      </section>

      <img src={wave_bot} alt="" className="w-full opacity-20 pointer-events-none" />

      {/* JUDGES SECTION */}
      <section ref={speakerRef} className="py-24 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -ml-20 -mb-20"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-black text-red-900 mb-4 uppercase">The Council of Judges</h2>
          <p className="text-slate-500 mb-16 text-lg italic">Karyamu akan dikurasi oleh para <span className="text-blue-500 font-bold">pakar dan praktisi industri.</span></p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {judges.map((judge, index) => (
              <div key={index} className={`reveal ${speakerShow ? "show animate-up" : ""}`} style={{ animationDelay: `${index * 0.2}s` }}>
                <SpeakerCard name={judge.name} role={judge.role} imageUrl={judge.imageUrl} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION - Clean Style (No Blue BG) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-12 bg-gradient-to-r from-red-900 to-blue-800 bg-clip-text text-transparent">
            Seputar Kompetisi
          </h2>
          
          <div className="flex flex-col gap-4 text-left">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className="group border border-slate-200 hover:border-blue-300 bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-blue-50"
              >
                <Collapse title={item.title} description={item.description} />
              </div>
            ))}
          </div>
          
          <p className="mt-12 text-slate-500 italic">
            Masih ada yang bingung? <span className="text-blue-600 font-semibold cursor-pointer hover:underline">Tanya Official Account kami</span>
          </p>
        </div>
      </section>

    </div>
  );
}