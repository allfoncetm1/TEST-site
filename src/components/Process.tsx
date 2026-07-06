const STEPS = [
  {
    n: "01",
    title: "Заявка",
    text: "Оставляете заявку на сайте или звоните — согласуем удобное время.",
  },
  {
    n: "02",
    title: "Бесплатный замер",
    text: "Замерщик выезжает на объект, снимает размеры и уточняет пожелания по дизайну.",
  },
  {
    n: "03",
    title: "Расчёт и договор",
    text: "Формируем точную смету, фиксируем сроки и стоимость в договоре.",
  },
  {
    n: "04",
    title: "Монтаж",
    text: "Бригада устанавливает потолок за один визит — обычно за 2–4 часа.",
  },
];

export default function Process() {
  return (
    <section id="process" className="border-t border-white/5 py-16 sm:py-20">
      <div className="section-shell">
        <h2 className="brand-heading text-2xl font-bold sm:text-3xl">
          Как мы работаем
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div key={step.n} className="relative pl-1">
              <span className="brand-heading block text-4xl font-bold text-brand-green/30">
                {step.n}
              </span>
              <h3 className="mt-3 text-base font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-white/65">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
