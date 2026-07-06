const TYPES = [
  {
    title: "Матовые",
    text: "Классика без бликов, подходит под любой интерьер.",
    gradient: "from-[#0f4f4d] to-[#0a2b2a]",
  },
  {
    title: "Глянцевые",
    text: "Зеркальный эффект визуально увеличивает высоту потолка.",
    gradient: "from-[#0ac278] to-[#046b41]",
  },
  {
    title: "Сатиновые",
    text: "Мягкий перламутровый отблеск без резких бликов.",
    gradient: "from-[#1c6b64] to-[#0a2b2a]",
  },
  {
    title: "Тканевые",
    text: "Дышащий материал, широкие полотна почти без швов.",
    gradient: "from-[#4ee0a6] to-[#0a4443]",
  },
  {
    title: "Парящие",
    text: "Подсветка по контуру создаёт эффект левитации потолка.",
    gradient: "from-[#089259] to-[#013334]",
  },
  {
    title: "Многоуровневые",
    text: "Сложная геометрия и зонирование светом для любых задач.",
    gradient: "from-[#0f4f4d] to-[#013334]",
  },
];

export default function CeilingTypes() {
  return (
    <section id="types" className="border-t border-white/5 py-16 sm:py-20">
      <div className="section-shell">
        <h2 className="brand-heading text-2xl font-bold sm:text-3xl">
          Виды натяжных потолков
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-brand-white/65 sm:text-base">
          Подберём фактуру и уровень сложности под ваш бюджет и интерьер —
          обсудим варианты на бесплатном замере.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TYPES.map((type) => (
            <div
              key={type.title}
              className="overflow-hidden rounded-2xl border border-white/10"
            >
              <div
                className={`h-32 w-full bg-gradient-to-br ${type.gradient}`}
              />
              <div className="bg-brand-bg-soft/60 p-5">
                <h3 className="text-base font-semibold">{type.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-white/65">
                  {type.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
