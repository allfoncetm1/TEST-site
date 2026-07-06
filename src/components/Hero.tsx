const STATS = [
  { value: "5000+", label: "потолков установлено" },
  { value: "10 лет", label: "гарантии на монтаж" },
  { value: "1 день", label: "средний срок монтажа" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[420px] w-[420px] rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--brand-green)" }}
      />
      <div className="section-shell relative flex flex-col gap-10 py-16 sm:py-24">
        <div className="max-w-2xl">
          <p className="brand-heading mb-4 inline-block rounded-full border border-brand-green/40 px-3 py-1 text-xs uppercase tracking-widest text-brand-green-light">
            Натяжные потолки под ключ
          </p>
          <h1 className="text-3xl font-bold leading-tight sm:text-5xl">
            Идеальный потолок за{" "}
            <span className="text-brand-green-light">1 день</span>, без пыли и
            ремонта заново
          </h1>
          <p className="mt-5 text-base text-brand-white/70 sm:text-lg">
            Бесплатный выезд замерщика, честный расчёт стоимости и монтаж
            любой сложности — от классической матовой до парящих
            многоуровневых потолков.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#calculator"
              className="rounded-full bg-brand-green px-6 py-3 text-center text-sm font-semibold text-brand-bg transition-colors hover:bg-brand-green-light sm:text-base"
            >
              Рассчитать стоимость и заказать замер
            </a>
            <a
              href="#types"
              className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-semibold text-brand-white/90 transition-colors hover:border-brand-green-light hover:text-brand-green-light sm:text-base"
            >
              Смотреть виды потолков
            </a>
          </div>
        </div>

        <dl className="grid grid-cols-1 gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dt className="brand-heading text-2xl font-bold text-brand-green-light sm:text-3xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-sm text-brand-white/60">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
