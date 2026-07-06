import Image from "next/image";

const TYPES = [
  {
    title: "Матовые",
    text: "Классика без бликов, подходит под любой интерьер.",
    photo: "/ceilings/matte.webp",
  },
  {
    title: "Глянцевые",
    text: "Зеркальный эффект визуально увеличивает высоту потолка.",
    gradient: "from-[#0ac278] to-[#046b41]",
  },
  {
    title: "Сатиновые",
    text: "Мягкий перламутровый отблеск без резких бликов.",
    photo: "/ceilings/satin.png",
  },
  {
    title: "Тканевые",
    text: "Дышащий материал, широкие полотна почти без швов.",
    photo: "/ceilings/fabric.webp",
  },
  {
    title: "Парящие",
    text: "Подсветка по контуру создаёт эффект левитации потолка.",
    photo: "/ceilings/floating.webp",
  },
  {
    title: "Многоуровневые",
    text: "Сложная геометрия и зонирование светом для любых задач.",
    photo: "/ceilings/multilevel.webp",
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
              {type.photo ? (
                <div className="relative h-40 w-full">
                  <Image
                    src={type.photo}
                    alt={`${type.title} натяжной потолок`}
                    fill
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div
                  className={`h-40 w-full bg-gradient-to-br ${type.gradient}`}
                />
              )}
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
