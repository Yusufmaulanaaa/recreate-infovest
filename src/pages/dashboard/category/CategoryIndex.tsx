import { Link } from "react-router-dom";

export default function CategoryIndex() {
   return (
  <div className="p-6 max-w-6xl mx-auto">

    {/* HEADER */}
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
      <div>
        <h1 className="text-3xl font-black text-[#802D43]">
          Manajemen Kategori
        </h1>
        <p className="text-gray-500">
          Kelola kategori event Invofest dengan mudah
        </p>
      </div>

      <Link
        to="/dashboard/category/create"
        className="px-6 py-3 rounded-xl bg-[#802D43] text-white font-bold shadow-md hover:bg-[#6b2437] hover:shadow-lg transition-all"
      >
        + Tambah Kategori
      </Link>
    </div>

    {/* CARD LIST */}
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">

      {/* HEADER */}
      <div className="px-6 py-4 border-b bg-gray-50 flex justify-between items-center">
        <h2 className="font-semibold text-gray-700">
          Daftar Kategori
        </h2>
      </div>

      {/* EMPTY STATE */}
      <div className="p-10 text-center">
        <p className="text-gray-400 mb-4">
          Belum ada kategori tersedia
        </p>

        <Link
          to="/dashboard/category/create"
          className="inline-block px-5 py-2 rounded-lg bg-[#802D43] text-white text-sm font-semibold hover:bg-[#6b2437] transition"
        >
          Tambah Sekarang
        </Link>
      </div>

    </div>
  </div>
);
}