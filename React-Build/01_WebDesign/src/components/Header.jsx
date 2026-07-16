import {
  FaCopy,
  FaGithub,
  FaLinkedin,
  FaSquareInstagram,
} from "react-icons/fa6";
import { useState } from "react";
import { theme } from "../constant/theme.js";

const Header = () => {
  const email = "chaitanyamehetre0301@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      alert("Copy failed");
      console.error("Copy failed", error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-4 px-6">
      
      <div className="flex flex-wrap items-center justify-center gap-4">
        <span
          className="text-xs sm:text-sm font-light px-2 py-1 border-b border-slate-900 break-all"
          
        >
          {email}
        </span>
        
        <button onClick={handleCopy} aria-label="Copy email address">
          {copied ? (
            <span className="rounded px-2 py-1 bg-slate-100 text-red-600 text-sm">
              👍🏻
            </span>
          ) : (
            <span
              className="flex gap-1 rounded-full p-2.5 transition-transform active:scale-95"
              style={{ backgroundColor: theme.accent }}
            >
              <FaCopy fill="white" size={14} />
            </span>
          )}
        </button>

        <a
          href="/Chaitanya_Mehetre_8999283512.pdf"
          download="Chaitanya_Mehetre_CV.pdf"
        >
          <button
            className="px-6 sm:px-8 py-1 font-semibold cursor-pointer text-slate-100 rounded-2xl transition-transform active:scale-95"
            style={{ backgroundColor: theme.accent }}
            type="button"
          >
            CV
          </button>
        </a>
      </div>

      <div className="flex gap-4 justify-center">
        <span
          className="p-2 flex items-center justify-center rounded-full transition-transform hover:scale-110"
          style={{ backgroundColor: theme.black }}
        >
          <a
            href="https://linkedin.com/in/chaitanya-mehetre"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin fill="white" size={20} />
          </a>
        </span>
        <span
          className="p-2 flex items-center justify-center rounded-full transition-transform hover:scale-110"
          style={{ backgroundColor: theme.black }}
        >
          <a
            href="https://github.com/Chaitanya-963"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
          >
            <FaGithub fill="white" size={20} />
          </a>
        </span>
        <span
          className="p-2 flex items-center justify-center rounded-full transition-transform hover:scale-110"
          style={{ backgroundColor: theme.black }}
        >
          <a
            href="https://instagram.com/chaitanya_mehetre09"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram Profile"
          >
            <FaSquareInstagram fill="white" size={20} />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Header;
