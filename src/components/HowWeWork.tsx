import { useEffect, useRef, useState } from "react"
import Icon from "@/components/ui/icon"
import reachGoal from "@/lib/metrika"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const phones = [
  { raw: "79494816485", label: "+7 (949) 481-64-85" },
  { raw: "79494816419", label: "+7 (949) 481-64-19" },
  { raw: "79180445186", label: "+7 (918) 044-51-86" },
]

const steps = [
  {
    icon: "PhoneCall",
    title: "Звонок или заявка",
    text: "Уточняем задачу, район и отвечаем на все ваши вопросы по телефону.",
    badge: "5 минут",
  },
  {
    icon: "MapPin",
    title: "Выезд на участок",
    text: "Изучаем грунт, определяем место и глубину скважины, называем точную цену.",
    badge: "Бесплатно",
  },
  {
    icon: "Drill",
    title: "Бурение и обустройство",
    text: "Приезжаем с малогабаритной техникой, бурим, ставим обсадную трубу и насос.",
    badge: "За 1 день",
  },
  {
    icon: "FileCheck",
    title: "Сдача работ",
    text: "Прокачиваем до чистой воды, проверяем напор и выдаём гарантию на работы.",
    badge: "Гарантия 3 года",
  },
]

export function HowWeWork() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="mb-10">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
          Как мы работаем
        </h2>
        <p className="text-base text-gray-600 font-medium">
          Четыре понятных шага от звонка до чистой воды в доме
        </p>
      </div>

      <div className="relative">
        <div className="hidden sm:block absolute left-0 right-0 top-8 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className={`relative transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="relative flex sm:flex-col items-start sm:items-center gap-4 sm:gap-0 sm:text-center">
                <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg ring-4 ring-white">
                  <Icon name={step.icon} fallback="Circle" size={28} className="text-white" />
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-orange-500 text-white text-xs font-extrabold flex items-center justify-center shadow ring-2 ring-white">
                    {i + 1}
                  </span>
                </div>

                <div className="sm:mt-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 lg:min-h-[3.5rem] lg:flex lg:items-center lg:justify-center">
                    {step.title}
                  </h3>
                  {step.badge && (
                    <span className="inline-block mb-2 px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-700 text-xs font-extrabold uppercase tracking-wide">
                      {step.badge}
                    </span>
                  )}
                  <p className="text-sm text-gray-700 font-medium leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 shadow-lg">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-lg sm:text-xl font-extrabold text-white mb-1">
              Не нашли воду — не платите за бурение
            </p>
            <p className="text-sm text-blue-100 font-medium">
              Выезд специалиста и расчёт стоимости — бесплатно
            </p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 font-bold rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all focus:outline-none"
              >
                <Icon name="Phone" size={20} />
                Вызвать специалиста
                <Icon name="ChevronDown" fallback="Circle" size={18} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white border-gray-200 w-56">
              {phones.map((phone) => (
                <DropdownMenuItem key={phone.raw} asChild>
                  <a
                    href={`tel:+${phone.raw}`}
                    onClick={() =>
                      reachGoal("click_phone", { phone: phone.raw, location: "how_we_work" })
                    }
                    className="flex items-center gap-2 cursor-pointer text-gray-900 hover:text-blue-600 font-semibold"
                  >
                    <Icon name="Phone" size={16} />
                    {phone.label}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </section>
  )
}

export default HowWeWork