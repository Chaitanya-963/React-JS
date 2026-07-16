import ContactButton from "./ContactButton";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full px-4 sm:px-6 pb-6 bg-[#fbfbfb] rounded-t-[5rem]">
      {/* Outer rounded card block matching the reference panel curve */}
      <div className="max-w-7xl mx-auto bg-white border border-neutral-100/80 rounded-[2.5rem] md:rounded-[4xl] flex flex-col justify-between min-h-[50vh] pt-16 pb-6 px-6 sm:px-12 text-center">
        {/* Top Content Area: Handshake icon, Heading, and CTA Actions */}
        <div className="flex flex-col items-center max-w-xl mx-auto w-full gap-6">
          {/* Circular Handshake Graphic Base */}
          <div className="w-14 h-14 rounded-full bg-neutral-50 flex items-center justify-center border border-neutral-100">
            <span className="text-xl">🤝</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 leading-[1.2]">
            Tell me about your <br /> next project
          </h2>

          {/* Parallel Button Containers */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
            <ContactButton
              variant="primary"
              label="Email Me"
              href="mailto:chaitanyamehetre0301@gmail.com"
            />
            <ContactButton
              variant="secondary"
              label="WhatsApp"
              href="https://wa.me"
            />
          </div>
        </div>

        {/* Bottom Legal Credits & Social Nodes row layout */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-12 mt-auto border-t border-neutral-100 text-xs text-neutral-400 font-light tracking-wide">
          <p>© {currentYear} All rights reserved.</p>

          <div className="flex items-center gap-2">
            <a
              href="https://linkedin.com/in/chaitanya-mehetre"
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-600 transition-colors"
            >
              LinkedIn
            </a>
            <span>/</span>
            <a
              href="https://github.com/Chaitanya-963"
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-600 transition-colors"
            >
              Github
            </a>
            <span>/</span>
            <a
              href="https://instagram.com/chaitanya_mehetre09"
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-600 transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
