import Image from "next/image";

const NAV_LINKS = [
  { href: "#types", label: "Виды потолков" },
  { href: "#process", label: "Как работаем" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#calculator", label: "Контакты" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-brand-bg/90 backdrop-blur">
      <div className="section-shell flex h-16 items-center justify-between gap-4 sm:h-20">
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.png"
            alt="BIIK.TOBE"
            width={36}
            height={36}
            className="h-8 w-8 sm:h-9 sm:w-9"
            priority
          />
          <span className="brand-heading text-lg font-bold tracking-tight sm:text-xl">
            BIIK.TOBE
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-brand-white/80 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-brand-green-light"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+77000000000"
            className="hidden text-sm font-medium text-brand-white/90 sm:block"
          >
            +7 700 000 00 00
          </a>
          <a
            href="#calculator"
            className="rounded-full bg-brand-green px-4 py-2 text-sm font-semibold text-brand-bg transition-colors hover:bg-brand-green-light sm:px-5"
          >
            Заказать замер
          </a>
        </div>
      </div>
    </header>
  );
}
