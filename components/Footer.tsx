export default function Footer() {
  return (
    <footer className="bg-[#081C33] text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center gap-4 text-center">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <img
              src="/brand/icon.png"
              alt="Stellar North Services"
              className="w-6 h-6"
            />
            <span className="font-semibold text-white">
              Stellar North Services
            </span>
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-slate-600/40" />

          {/* Copyright */}
          <p className="text-sm">
            © {new Date().getFullYear()} Stellar North Services. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
