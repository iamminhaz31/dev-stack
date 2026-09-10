import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      id="about"
      className="border-t border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Main */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="inline-flex items-center gap-2">
              <div className="bg-brand-gradient flex h-7 w-7 items-center justify-center rounded-md text-[9px] font-bold text-white">
                DS
              </div>

              <span className="text-sm font-bold text-slate-950">
                Dev
                <span className="text-brand-gradient">
                  Stack
                </span>
              </span>
            </a>

            <p className="mt-4 max-w-[300px] text-xs leading-5 text-slate-500">
              Build your perfect development stack with modern
              technologies and tools.
            </p>

            {/* Social */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-purple-300 hover:text-purple-600"
              >
                <FaGithub size={14} />
              </a>

              <a
                href="https://x.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-purple-300 hover:text-purple-600"
              >
                <FaXTwitter size={13} />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-purple-300 hover:text-purple-600"
              >
                <FaLinkedinIn size={14} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xs font-bold text-slate-900">
              Product
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#technologies"
                  className="text-[11px] text-slate-500 transition hover:text-purple-600"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="text-[11px] text-slate-500 transition hover:text-purple-600"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#technologies"
                  className="text-[11px] text-slate-500 transition hover:text-purple-600"
                >
                  Stack Builder
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold text-slate-900">
              Company
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-[11px] text-slate-500 transition hover:text-purple-600"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-[11px] text-slate-500 transition hover:text-purple-600"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[11px] text-slate-500 transition hover:text-purple-600"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-bold text-slate-900">
              Legal
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-[11px] text-slate-500 transition hover:text-purple-600"
                >
                  Privacy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[11px] text-slate-500 transition hover:text-purple-600"
                >
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-3 border-t border-slate-200 py-5 text-[10px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 DevStack. All rights reserved.</p>

          <div className="flex gap-5">
            <a
              href="#"
              className="transition hover:text-slate-700"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition hover:text-slate-700"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;