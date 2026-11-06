"use client";
import ContactUs from "./UI/ContactUs";

const ContactWrapper = ({ fields }: any) => {
  const handleSubmit = (formData: any) => {
    console.log("Submitted:", formData);
  };
  return (
    <div className="w-full">
      <ContactUs
        fields={fields}
        onSubmit={handleSubmit}
        BackGroundImage="/images/contact/bg-contact.png"
      />
    </div>
  );
};

export default ContactWrapper;