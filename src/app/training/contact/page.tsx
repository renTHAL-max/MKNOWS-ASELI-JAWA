import ContactWrapper from "@/Components/contactWrapper";
import React from "react";

const contactFields = [
  {
    name: "nama_lengkap",
    type: "text",
    label: "Nama Lengkap",
    required: true,
    placeholder: "Ketik Nama Lengkap Anda Disini",
  },
  {
    name: "nama_perusahaan",
    type: "text",
    label: "Nama Perusahaan",
    required: true,
    placeholder: "Ketik Nama Perusahaan Anda Disini",
  },
  {
    name: "jabatan",
    type: "text",
    label: "Jabatan",
    required: true,
    placeholder: "Ketik Jabatan Nama Anda Disini",
  },
  {
    name: "hp",
    type: "tel",
    label: "Nomor Handphone",
    required: true,
    placeholder: "62xxxxxxxxxx",
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    required: true,
    placeholder: "Ketik Email Anda Disini",
  },
];

const page = () => {
  return (
    <React.Fragment>
      <ContactWrapper fields={contactFields}></ContactWrapper>
    </React.Fragment>
  );
};

export default page;
