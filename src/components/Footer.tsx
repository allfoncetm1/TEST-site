import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="section-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="BIIK.TOBE" width={28} height={28} />
          <span className="brand-heading text-base font-bold">
            BIIK.TOBE
          </span>
        </div>

        <div className="flex flex-col gap-1 text-sm text-brand-white/60 sm:text-right">
          <a href="tel:+77000000000" className="hover:text-brand-green-light">
            +7 700 000 00 00
          </a>
          <a
            href="mailto:info@biik.tobe"
            className="hover:text-brand-green-light"
          >
            info@biik.tobe
          </a>
        </div>
      </div>
      <div className="section-shell mt-6 border-t border-white/5 pt-6 text-xs text-brand-white/40">
        © {new Date().getFullYear()} BIIK.TOBE — натяжные потолки. Все права
        защищены.
      </div>
    </footer>
  );
}
