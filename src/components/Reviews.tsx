const REVIEWS = [
  {
    name: "Айгерим Б.",
    text: "Замерили быстро, монтаж сделали за полдня. Потолок ровный, швов почти не видно. Рекомендую!",
  },
  {
    name: "Данияр С.",
    text: "Делали парящий потолок с подсветкой в гостиной — результат превзошёл ожидания, всё как на картинке.",
  },
  {
    name: "Мадина К.",
    text: "Цена не менялась с момента замера до сдачи объекта. Приятно, что не пытались накрутить в процессе.",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="border-t border-white/5 py-16 sm:py-20">
      <div className="section-shell">
        <h2 className="brand-heading text-2xl font-bold sm:text-3xl">
          Отзывы клиентов
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              className="rounded-2xl border border-white/10 bg-brand-bg-soft/60 p-6"
            >
              <p className="text-sm leading-relaxed text-brand-white/75">
                “{r.text}”
              </p>
              <p className="mt-4 text-sm font-semibold text-brand-green-light">
                {r.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
