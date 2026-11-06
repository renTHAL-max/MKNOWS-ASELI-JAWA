"use client";
import { ContactUsType } from "@/Types/ContactUsType";
import React, { useEffect, useRef, useState } from "react";

const ContactUs = ({ fields, onSubmit, BackGroundImage }: ContactUsType) => {
  const initialData = fields.reduce((acc: any, field: any) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;

      const defaults = fields.reduce((acc: any, field: any) => {
        acc[field.name] = field.defaultValue || "";
        return acc;
      }, {});

      setFormData(defaults);
    }
  }, [fields]);

  const validateField = (name: string, value: string) => {
    let error = "";

    switch (name) {
      case "nama_lengkap":
        if (value.length < 3) {
          error = "Nama lengkap minimal 3 karakter";
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = "Nama lengkap hanya boleh berisi huruf";
        }
        break;

      case "nama_perusahaan":
        if (value.length < 3) {
          error = "Nama perusahaan minimal 3 karakter";
        }
        break;

      case "jabatan":
        if (value.length < 2) {
          error = "Jabatan minimal 2 karakter";
        }
        break;

      case "hp":
        if (!/^62[0-9]{9,13}$/.test(value)) {
          error = "Format: 62xxxxxxxxxx (10-15 digit, contoh: 628123456789)";
        }
        break;

      case "email":
        if (!value.includes("@")) {
          error = "Email harus memiliki tanda @ atau email Anda tidak dikenal";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Format email tidak valid (contoh: nama@domain.com)";
        }
        break;
    }

    return error;
  };

  const handleValueChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));

    // Real-time validation
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: { [key: string]: string } = {};
    let hasError = false;

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        hasError = true;
      }
    });

    setErrors(newErrors);

    if (hasError) {
      return;
    }

    onSubmit(formData);
  };
  return (
    <section
      className="relative bg-cover bg-center flex items-center justify-center w-full px-4 sm:px-6 lg:px-8 pt-[140px] pb-20"
      style={{
        backgroundImage: `url(${BackGroundImage})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay dengan pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/60 via-green-800/50 to-slate-900/60" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />

      <div className="relative max-w-2xl w-full mx-auto my-auto">
        {/* Form Container dengan efek modern */}
        <div className="relative rounded-3xl bg-white shadow-[0_20px_80px_rgba(0,0,0,0.3)] overflow-hidden">
          {/* Top accent border dengan gradasi */}
          <div className="h-2 bg-gradient-to-r from-[#70B946] via-[#5fa037] to-[#70B946]" />
          
          {/* Decorative elements */}
          <div className="absolute top-8 right-8 w-32 h-32 bg-green-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-8 left-8 w-40 h-40 bg-teal-500/5 rounded-full blur-3xl" />
          
          <div className="relative px-6 sm:px-8 md:px-12 py-10 md:py-12">
            {/* Header Form */}
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#70B946] to-[#5fa037] bg-clip-text text-transparent mb-2">
                Download Jadwal Training
              </h2>
              <p className="text-[#70B946]/70 text-sm">
                Isi form di bawah untuk mengunduh jadwal lengkap
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              suppressHydrationWarning={true}
            >
              {fields.map((field: any) => (
                <div key={field.name} className="group">
                  <label className="block text-sm font-bold text-[#02353C] mb-2 uppercase tracking-wide">
                    {field.label}
                  </label>
                  {field.type === "select" ? (
                    <select
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleValueChange}
                      required={field.required}
                      className="w-full bg-gray-50 border-2 border-gray-300 rounded-xl outline-none px-4 py-3 text-base text-[#02353C] focus:border-[#70B946] focus:bg-white transition-all duration-300 focus:shadow-lg focus:shadow-green-500/10"
                    >
                      {!field.defaultValue && (
                        <option value="" disabled className="text-slate-800">
                          {field.placeholder || "Pilih"}
                        </option>
                      )}
                      {field.options?.map((opt: any) => (
                        <option
                          key={opt.value}
                          value={opt.value}
                          className="text-slate-800"
                        >
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  ) : field.type === "textarea" ? (
                    <textarea
                      name={field.name}
                      rows={5}
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={handleValueChange}
                      required={field.required}
                      className={`w-full bg-gray-50 border-2 rounded-xl outline-none px-4 py-3 text-base text-[#02353C] placeholder-gray-400 transition-all duration-300 focus:bg-white focus:shadow-lg resize-none ${
                        errors[field.name]
                          ? "border-red-400 focus:border-red-500 focus:shadow-red-500/10"
                          : "border-gray-300 focus:border-[#70B946] focus:shadow-green-500/10"
                      }`}
                    ></textarea>
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={handleValueChange}
                      required={field.required}
                      className={`w-full bg-gray-50 border-2 rounded-xl outline-none px-4 py-3 text-base text-[#02353C] placeholder-gray-400 transition-all duration-300 focus:bg-white focus:shadow-lg ${
                        errors[field.name]
                          ? "border-red-400 focus:border-red-500 focus:shadow-red-500/10"
                          : "border-gray-300 focus:border-[#70B946] focus:shadow-green-500/10"
                      }`}
                    />
                  )}
                  {/* Error Message */}
                  {errors[field.name] && (
                    <div className="flex items-start gap-2 mt-2 animate-shake">
                      <svg
                        className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-red-500 text-sm font-semibold">
                        {errors[field.name]}
                      </p>
                    </div>
                  )}
                </div>
              ))}

              {/* Tombol Download dengan style baru */}
              <div className="pt-6 flex justify-center">
                <button
                  type="submit"
                  className="relative px-10 py-4 rounded-2xl bg-gradient-to-r from-[#70B946] to-[#5fa037] text-white text-lg font-bold shadow-xl shadow-green-500/30 hover:shadow-2xl hover:shadow-green-500/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center gap-3 overflow-hidden group"
                >
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                  
                  <svg
                    className="w-6 h-6 relative z-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span className="relative z-10">Download Sekarang</span>
                </button>
              </div>

              {/* Info footer */}
              <div className="mt-6 p-4 bg-blue-50 border-l-4 border-[#70B946] rounded-r-xl">
                <p className="text-sm text-[#02353C]">
                  <span className="font-semibold">💡 Info:</span> Data Anda aman dan hanya digunakan untuk mengirimkan jadwal training.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
