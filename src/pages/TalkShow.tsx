import Button from "../components/Button";
import { Collapse } from '../ui/Collapse';
import talkshowMascot from '../assets/maskot mic.png';
import ts1 from '../assets/talkshow daffa_20251115_104314_0003.png';
import ts2 from '../assets/talkshow ichsan_20251115_104446_0000.png';
import ts3 from '../assets/talkshow zaim.png';
import CardProduct from '../components/CardProduct';
import wave from '../assets/wave-haikei (3).png';
import wave_bot from '../assets/wave-haikei (4).png';
import SpeakerCard from '../ui/SpeakerCard';
import useInView from '../hooks/useInView';

export default function TalkShow() {
  const [heroRef, heroShow] = useInView();
  const [aboutRef, aboutShow] = useInView();
  const [speakerRef, speakerShow] = useInView();

  const speakers = [
    { name: "Daffa Zuhdan Muhtar", role: "PT. Astra Internasional", imageUrl: ts1 },
    { name: "M. Ichsan Maulana", role: "Garuda Indonesia Group", imageUrl: ts2 },
    { name: "Irfan Zamzami", role: "Developer Pertamina", imageUrl: ts3 },
  ];

  const collapseItems = [
    {
      title: "Kenapa saya harus ikut Talkshow ini?",
      description: "Ini adalah kesempatan langka untuk mendengar 'dapur' teknologi perusahaan raksasa Indonesia. Kamu akan belajar strategi adaptasi AI yang tidak diajarkan di bangku kuliah.",
    },
    {
      title: "Apakah pemula bisa ikut?",
      description: "Sangat bisa! Diskusi ini dirancang untuk semua level, dari yang baru kenal IT sampai yang sudah pro, dengan penyampaian yang santai tapi berisi.",
    },
    {
      title: "Bagaimana cara mendapatkan sertifikat?",
      description: "Seluruh peserta yang mendaftar dan mengikuti rangkaian acara hingga selesai berhak mendapatkan e-certificate resmi dari Invofest 2026.",
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
                <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-red-900 to-blue-800 bg-clip-text text-transparent leading-tight">
                  IT Talkshow
                </h1>
                <h3 className="text-2xl md:text-3xl font-bold text-red-700 mt-4 leading-snug">
                  “Humanizing Technology: Navigasi Karir di Era AI”
                </h3>
              </header>

              <p className={`text-lg md:text-xl text-slate-600 leading-relaxed reveal ${heroShow ? "show animate-left" : ""}`}>
                Jangan cuma jadi penonton di era disrupsi. Temukan rahasia bagaimana para ahli dari <span className="text-blue-600 font-bold">Astra, Garuda, dan Pertamina</span> berkolaborasi dengan teknologi untuk menciptakan solusi masa depan.
              </p>

              <div className={`flex flex-wrap gap-4 reveal ${heroShow ? "show animate-up" : ""}`}>
                <Button 
                  title="Amankan Kursi Sekarang" 
                  variant="primary" 
                  className="px-10 py-4 rounded-2xl bg-gradient-to-r from-red-700 to-blue-700 hover:from-red-800 hover:to-blue-800 shadow-xl shadow-blue-100 text-white font-bold transition-all transform hover:scale-105" 
                />
                <Button 
                  title="Tanya Panitia" 
                  variant="primary" 
                  className="px-10 py-4 rounded-2xl border-2 border-blue-100 bg-white !text-blue-700 font-bold hover:bg-blue-50 transition-all" 
                />
              </div>
            </div>

            <div className={`w-full lg:w-1/2 flex justify-center reveal ${heroShow ? "show animate-right" : ""}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-blue-400/20 blur-3xl rounded-full scale-75 animate-pulse"></div>
                <img src={talkshowMascot} alt="Talkshow Mascot" className="relative w-full max-w-md drop-shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <img src={wave} alt="" className="w-full opacity-20 -mt-24 pointer-events-none" />

      {/* ABOUT SECTION */}
      <section ref={aboutRef} className="bg-slate-50 py-24">
        <div className="container mx-auto px-6">
          <div className='max-w-4xl mb-16'>
            <h2 className={`text-4xl md:text-5xl font-black text-red-900 mb-6 reveal ${aboutShow ? "show animate-left" : ""}`}>
              The Future is Collaboration
            </h2>
            <p className={`text-xl text-slate-700 leading-relaxed reveal ${aboutShow ? "show animate-left" : ""}`}>
              Invofest 2026 bukan sekadar panggung diskusi. Ini adalah wadah di mana <span className="text-blue-600 font-bold">curiosity bertemu opportunity</span>, membantu generasi muda Indonesia menguasai teknologi tanpa kehilangan jati diri sebagai manusia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Insight Eksklusif', desc: 'Bocoran tren industri langsung dari praktisinya.' },
              { title: 'Networking', desc: 'Koneksi luas dengan sesama penggiat teknologi.' },
              { title: 'Career Path', desc: 'Bedah tuntas peluang karir IT di masa depan.' },
              { title: 'Inspirasi Luas', desc: 'Perluas sudut pandangmu terhadap dunia digital.' },
            ].map((item, i) => (
              <div key={i} className={`reveal ${aboutShow ? "show animate-up" : ""}`} style={{ animationDelay: `${i * 0.1}s` }}>
                <CardProduct title={item.title} description={item.desc}>
                  <Button title="Info Detail" variant="primary" className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold text-white" />
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
        <div className="container mx-auto px-6 text-center z-10 relative">
          <h2 className="text-4xl font-black text-red-900 mb-4">Meet The Experts</h2>
          <p className="text-slate-500 mb-16 text-lg">Belajar langsung dari mereka yang sudah <span className="text-blue-500 font-bold">berpengalaman di medan tempur digital.</span></p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {speakers.map((speaker, index) => (
              <div key={index} className={`reveal ${speakerShow ? "show animate-up" : ""}`} style={{ animationDelay: `${index * 0.2}s` }}>
                <SpeakerCard name={speaker.name} role={speaker.role} imageUrl={speaker.imageUrl} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-black mb-12 text-red">Hal yang Sering Ditanyakan</h2>
          <div className="flex flex-col gap-4 text-left">
            {collapseItems.map((item, index) => (
              <div key={index} className="bg-white/10 rounded-xl overflow-hidden backdrop-blur-md border border-white/10">
                <Collapse title={item.title} description={item.description} />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}