"use client";

import { useMemo, useState } from "react";

type RoomType = "Гостиная" | "Спальня" | "Кухня" | "Ванная" | "Коридор" | "Другое";
type LevelType = "Одноуровневый" | "Многоуровневый" | "Парящий";
type Material = "Матовое" | "Сатиновое" | "Глянцевое" | "Тканевое";
type ContactTime = "Утром" | "Днём" | "Вечером";

const ROOM_TYPES: RoomType[] = [
  "Гостиная",
  "Спальня",
  "Кухня",
  "Ванная",
  "Коридор",
  "Другое",
];

const LEVEL_TYPES: { id: LevelType; multiplier: number; hint: string }[] = [
  { id: "Одноуровневый", multiplier: 1, hint: "Простой ровный потолок" },
  { id: "Многоуровневый", multiplier: 1.4, hint: "Несколько уровней и ниш" },
  { id: "Парящий", multiplier: 1.6, hint: "С парящей подсветкой по контуру" },
];

const MATERIALS: { id: Material; pricePerM2: number; hint: string }[] = [
  { id: "Матовое", pricePerM2: 2500, hint: "Классика, без бликов" },
  { id: "Сатиновое", pricePerM2: 2900, hint: "Мягкий перламутровый блеск" },
  { id: "Глянцевое", pricePerM2: 3200, hint: "Зеркальный эффект" },
  { id: "Тканевое", pricePerM2: 4500, hint: "Дышащий premium-материал" },
];

const CONTACT_TIMES: ContactTime[] = ["Утром", "Днём", "Вечером"];

const TOTAL_STEPS = 4;

function formatPrice(value: number) {
  return new Intl.NumberFormat("ru-RU").format(Math.round(value / 100) * 100);
}

export default function Calculator() {
  const [step, setStep] = useState(1);
  const [roomType, setRoomType] = useState<RoomType | null>(null);
  const [area, setArea] = useState<number>(15);
  const [levelType, setLevelType] = useState<LevelType | null>(null);
  const [material, setMaterial] = useState<Material | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [contactTime, setContactTime] = useState<ContactTime | null>(null);

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const estimate = useMemo(() => {
    if (!material || !levelType) return null;
    const materialInfo = MATERIALS.find((m) => m.id === material)!;
    const levelInfo = LEVEL_TYPES.find((l) => l.id === levelType)!;
    const base = area * materialInfo.pricePerM2 * levelInfo.multiplier;
    return { low: base * 0.9, high: base * 1.15 };
  }, [area, material, levelType]);

  const canGoNext =
    (step === 1 && roomType) ||
    (step === 2 && area > 0 && levelType) ||
    (step === 3 && material);

  const handleNext = () => {
    if (!canGoNext) return;
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  };

  const handleBack = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = async () => {
    if (!name.trim() || !phone.trim()) {
      setError("Укажите имя и телефон");
      return;
    }
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          roomType,
          area,
          levelType,
          material,
          name,
          phone,
          city,
          contactTime,
          estimate,
        }),
      });
      if (!res.ok) throw new Error("request-failed");
      setSubmitted(true);
    } catch {
      setError("Не удалось отправить заявку. Попробуйте ещё раз или позвоните нам.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="calculator" className="border-t border-white/5 py-16 sm:py-20">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-brand-bg-soft/60 p-6 sm:p-10">
          <h2 className="brand-heading text-2xl font-bold sm:text-3xl">
            Рассчитайте стоимость и закажите замер
          </h2>
          <p className="mt-2 text-sm text-brand-white/65">
            4 коротких шага — узнаете примерную цену и оставите заявку на
            бесплатный выезд замерщика.
          </p>

          {!submitted && (
            <div className="mt-8 mb-2 flex items-center gap-2">
              {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 flex-1 rounded-full ${
                    i < step ? "bg-brand-green" : "bg-white/10"
                  }`}
                />
              ))}
            </div>
          )}

          {submitted ? (
            <div className="mt-8 rounded-2xl border border-brand-green/30 bg-brand-green/10 p-6">
              <h3 className="text-lg font-semibold text-brand-green-light">
                Заявка принята!
              </h3>
              <p className="mt-2 text-sm text-brand-white/75">
                Мы свяжемся с вами{" "}
                {contactTime ? contactTime.toLowerCase() : "в ближайшее время"}
                , чтобы согласовать бесплатный выезд замерщика.
              </p>
              {estimate && (
                <p className="mt-4 text-sm text-brand-white/75">
                  Ориентировочная стоимость:{" "}
                  <span className="font-semibold text-brand-green-light">
                    {formatPrice(estimate.low)} – {formatPrice(estimate.high)} ₸
                  </span>
                  <br />
                  <span className="text-xs text-brand-white/50">
                    Точная цена определяется на замере.
                  </span>
                </p>
              )}
            </div>
          ) : (
            <div className="mt-6">
              {step === 1 && (
                <div>
                  <p className="mb-4 text-sm font-medium text-brand-white/80">
                    Какое помещение хотите оформить?
                  </p>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {ROOM_TYPES.map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => setRoomType(r)}
                        className={`rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
                          roomType === r
                            ? "border-brand-green bg-brand-green/15 text-brand-green-light"
                            : "border-white/10 text-brand-white/75 hover:border-white/25"
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <p className="mb-3 text-sm font-medium text-brand-white/80">
                    Площадь потолка, м²
                  </p>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min={5}
                      max={100}
                      value={area}
                      onChange={(e) => setArea(Number(e.target.value))}
                      className="w-full accent-[var(--brand-green)]"
                    />
                    <span className="brand-heading w-16 shrink-0 text-right text-lg font-bold text-brand-green-light">
                      {area} м²
                    </span>
                  </div>

                  <p className="mt-6 mb-3 text-sm font-medium text-brand-white/80">
                    Тип конструкции
                  </p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {LEVEL_TYPES.map((l) => (
                      <button
                        key={l.id}
                        type="button"
                        onClick={() => setLevelType(l.id)}
                        className={`rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors ${
                          levelType === l.id
                            ? "border-brand-green bg-brand-green/15 text-brand-green-light"
                            : "border-white/10 text-brand-white/75 hover:border-white/25"
                        }`}
                      >
                        {l.id}
                        <span className="mt-1 block text-xs font-normal text-brand-white/50">
                          {l.hint}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <p className="mb-4 text-sm font-medium text-brand-white/80">
                    Выберите тип полотна
                  </p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {MATERIALS.map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setMaterial(m.id)}
                        className={`rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors ${
                          material === m.id
                            ? "border-brand-green bg-brand-green/15 text-brand-green-light"
                            : "border-white/10 text-brand-white/75 hover:border-white/25"
                        }`}
                      >
                        {m.id}
                        <span className="mt-1 block text-xs font-normal text-brand-white/50">
                          {m.hint} · от {formatPrice(m.pricePerM2)} ₸/м²
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div>
                  {estimate && (
                    <div className="mb-6 rounded-xl border border-brand-green/30 bg-brand-green/10 p-4 text-sm">
                      <span className="text-brand-white/70">
                        Ориентировочная стоимость:{" "}
                      </span>
                      <span className="font-semibold text-brand-green-light">
                        {formatPrice(estimate.low)} – {formatPrice(estimate.high)} ₸
                      </span>
                    </div>
                  )}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="rounded-xl border border-white/10 bg-brand-bg px-4 py-3 text-sm text-brand-white placeholder:text-brand-white/40 focus:border-brand-green focus:outline-none"
                    />
                    <input
                      type="tel"
                      placeholder="Телефон"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="rounded-xl border border-white/10 bg-brand-bg px-4 py-3 text-sm text-brand-white placeholder:text-brand-white/40 focus:border-brand-green focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Город / район (необязательно)"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="rounded-xl border border-white/10 bg-brand-bg px-4 py-3 text-sm text-brand-white placeholder:text-brand-white/40 focus:border-brand-green focus:outline-none sm:col-span-2"
                    />
                  </div>

                  <p className="mt-5 mb-3 text-sm font-medium text-brand-white/80">
                    Удобное время для связи
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {CONTACT_TIMES.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setContactTime(t)}
                        className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                          contactTime === t
                            ? "border-brand-green bg-brand-green/15 text-brand-green-light"
                            : "border-white/10 text-brand-white/75 hover:border-white/25"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>

                  {error && (
                    <p className="mt-4 text-sm text-red-400">{error}</p>
                  )}
                </div>
              )}

              <div className="mt-8 flex items-center justify-between gap-3">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-brand-white/80 transition-colors hover:border-white/30"
                  >
                    Назад
                  </button>
                ) : (
                  <span />
                )}

                {step < TOTAL_STEPS ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!canGoNext}
                    className="rounded-full bg-brand-green px-6 py-2.5 text-sm font-semibold text-brand-bg transition-colors hover:bg-brand-green-light disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Далее
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="rounded-full bg-brand-green px-6 py-2.5 text-sm font-semibold text-brand-bg transition-colors hover:bg-brand-green-light disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting ? "Отправляем..." : "Заказать замер"}
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
