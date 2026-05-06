export default function DashboardIndex () {
  return (
    <div className="p-6 bg-slate-50 min-h-screen">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-4xl font-black">
          <span className="bg-linear-to-r from-[#802D43] to-red-500 bg-clip-text text-transparent">
            Dashboard
          </span>
        </h1>
        <p className="text-gray-500 mt-2">
          Selamat datang di panel admin Invofest 🚀
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition">
          <h3 className="text-sm text-gray-500">Total Peserta</h3>
          <p className="text-3xl font-black text-[#802D43] mt-2">1,250</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition">
          <h3 className="text-sm text-gray-500">Total Event</h3>
          <p className="text-3xl font-black text-[#802D43] mt-2">12</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition">
          <h3 className="text-sm text-gray-500">Pendaftar Hari Ini</h3>
          <p className="text-3xl font-black text-[#802D43] mt-2">45</p>
        </div>

      </div>

      {/* MAIN CONTENT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* CARD 1 */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
          <h2 className="text-xl font-bold text-[#802D43] mb-4">
            Aktivitas Terbaru
          </h2>

          <ul className="text-sm text-gray-600 flex flex-col gap-2">
            <li>• User baru mendaftar di IT Workshop</li>
            <li>• Update kategori Competition</li>
            <li>• Speaker baru ditambahkan</li>
          </ul>
        </div>

        {/* CARD 2 */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
          <h2 className="text-xl font-bold text-[#802D43] mb-4">
            Quick Action
          </h2>

          <div className="flex flex-col gap-3">
            <button className="bg-linear-to-r from-[#802D43] to-red-500 text-white py-2 rounded-xl font-semibold hover:scale-105 transition">
              Tambah Event
            </button>
            <button className="border border-[#802D43] text-[#802D43] py-2 rounded-xl font-semibold hover:bg-red-50 transition">
              Kelola Peserta
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}