import { FiMail } from "react-icons/fi";

const ContactButton = ({ variant = "primary", label, href }) => {
  const isPrimary = variant === "primary";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`
        inline-flex items-center gap-2 text-xs sm:text-sm font-normal px-5 py-2.5 rounded-full 
        transition-all duration-300 active:scale-95 border
        ${
          isPrimary
            ? "bg-neutral-900 border-neutral-900 text-white hover:bg-neutral-800"
            : "bg-white border-neutral-200 text-neutral-800 hover:bg-neutral-50 shadow-sm"
        }
      `}
    >
      {isPrimary && <FiMail className="text-sm" />}
      <span>{label}</span>
    </a>
  );
};

export default ContactButton;
