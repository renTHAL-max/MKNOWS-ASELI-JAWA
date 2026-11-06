"use client";
import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nama_lengkap: "",
    nama_perusahaan: "",
    jabatan: "",
    nomor_wa: "",
    email: "",
    kategori: "",
    deskripsi: "",
  });

  const onHandleValueChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((value) => ({
      ...value,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const pesan = `Halo M-Knows Consulting Team, Berikut data saya:\nNama Lengkap: ${formData.nama_lengkap}\nNama Perusahaan: ${formData.nama_perusahaan}\nJabatan: ${formData.jabatan}\nNomor WA: ${formData.nomor_wa}\nEmail: ${formData.email}\nKategori: ${formData.kategori}\nDeskripsi: ${formData.deskripsi}`;

    const url = `https://wa.me/6281210468281?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank");

    setFormData({
      nama_lengkap: "",
      nama_perusahaan: "",
      jabatan: "",
      nomor_wa: "",
      email: "",
      kategori: "",
      deskripsi: "",
    });

    const link = document.createElement("a");
    link.href =
      "/utility/xlsx/Jadwal_Public_Training_M-Knows_Consulting_2027.xlsx";
    link.download = "Jadwal_Public_Training_M-Knows_Consulting_2027.xlsx";
    link.click();
    link.remove();
  };

  return (
    <section
      className="relative w-full h-full bg-cover bg-center bg-no-repeat px-4 sm:px-6 lg:px-10 py-14"
      style={{
        backgroundImage: "url('/images/contact/bg-contact.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative max-w-4xl mx-auto">
        <div className="rounded-[32px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl px-6 sm:px-8 md:px-10 py-8 md:py-10 text-white">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nama Lengkap */}
            <div>
              <label className="block text-xl mb-1">Nama Lengkap</label>
              <input
                name="nama_lengkap"
                type="text"
                className="w-full bg-transparent border-0 border-b border-white/60 focus:border-white outline-none py-1 text-lg placeholder-white/60"
                placeholder="Nama Lengkap"
                value={formData.nama_lengkap}
                onChange={onHandleValueChange}
                required
              />
            </div>

            {/* Nama Perusahaan */}
            <div>
              <label className="block text-xl mb-1">Nama Perusahaan</label>
              <input
                name="nama_perusahaan"
                type="text"
                className="w-full bg-transparent border-0 border-b border-white/60 focus:border-white outline-none py-1 text-lg placeholder-white/60"
                placeholder="Nama Perusahaan"
                value={formData.nama_perusahaan}
                onChange={onHandleValueChange}
                required
              />
            </div>

            {/* Jabatan */}
            <div>
              <label className="block text-xl mb-1">Jabatan</label>
              <input
                name="jabatan"
                type="text"
                className="w-full bg-transparent border-0 border-b border-white/60 focus:border-white outline-none py-1 text-lg placeholder-white/60"
                placeholder="Jabatan"
                value={formData.jabatan}
                onChange={onHandleValueChange}
                required
              />
            </div>

            {/* Nomor WhatsApp */}
            <div>
              <label className="block text-xl mb-1">Nomor Whatsapp</label>
              <input
                name="nomor_wa"
                type="tel"
                className="w-full bg-transparent border-0 border-b border-white/60 focus:border-white outline-none py-1 text-lg placeholder-white/60"
                placeholder="08xxxxxxxxxx"
                value={formData.nomor_wa}
                onChange={onHandleValueChange}
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xl mb-1">Email</label>
              <input
                name="email"
                type="email"
                className="w-full bg-transparent border-0 border-b border-white/60 focus:border-white outline-none py-1 text-lg placeholder-white/60"
                placeholder="email@contoh.com"
                value={formData.email}
                onChange={onHandleValueChange}
                required
              />
            </div>

            {/* Kategori */}

            <div>
              <label className="block text-xl mb-1">Kategori</label>
              <select
                name="kategori"
                className="w-full bg-transparent border-0 border-b border-white/60 focus:border-white outline-none py-1 text-lg text-white"
                value={formData.kategori}
                onChange={onHandleValueChange}
                required
              >
                <option value="" disabled className="text-slate-800">
                  Pilih kategori
                </option>
                <option className="text-slate-800" value="training">
                  Training
                </option>
                <option className="text-slate-800" value="consulting">
                  Consulting
                </option>
                <option className="text-slate-800" value="assessment">
                  Assessment
                </option>
                <option className="text-slate-800" value="lainnya">
                  Lainnya
                </option>
              </select>
            </div>

            {/* Deskripsi */}
            <div>
              <label className="block text-xl mb-1">Deskripsi</label>
              <textarea
                name="deskripsi"
                className="w-full bg-transparent border-0 border-b border-white/60 focus:border-white outline-none py-1 text-lg placeholder-white/60"
                rows={3}
                placeholder="Ceritakan kebutuhan Anda…"
                value={formData.deskripsi}
                onChange={onHandleValueChange}
                required
              />
            </div>

            {/* Tombol Submit */}
            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                className="px-6 py-1.5 rounded-full bg-white text-slate-900 text-xl font-semibold shadow hover:bg-gray-300 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
