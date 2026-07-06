const BENEFITS = [
  {
    title: "Бесплатный замер",
    text: "Выезжаем в удобное время, замеряем помещение и составляем точную смету без скрытых доплат.",
  },
  {
    title: "Гарантия 10 лет",
    text: "Работаем с сертифицированными полотнами ПВХ и тканью, даём официальную гарантию на материал и монтаж.",
  },
  {
    title: "Монтаж за 1 день",
    text: "Устанавливаем потолок любой сложности за один визит бригады — без грязи и повторного ремонта.",
  },
  {
    title: "Честная цена",
    text: "Стоимость фиксируется на этапе замера и не меняется в процессе монтажа.",
  },
];

export default function Benefits() {
  return (
    <section className="border-t border-white/5 py-16 sm:py-20">
      <div className="section-shell">
        <h2 className="brand-heading text-2xl font-bold sm:text-3xl">
          Почему выбирают BIIK.TOBE
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-white/10 bg-brand-bg-soft/60 p-6"
            >
              <div className="mb-3 h-2 w-8 rounded-full bg-brand-green" />
              <h3 className="text-base font-semibold text-brand-white">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-white/65">
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
