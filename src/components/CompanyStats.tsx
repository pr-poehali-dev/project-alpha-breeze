import Icon from "@/components/ui/icon"
import { Avatar } from "./Avatar"

export function CompanyStats() {
  return (
    <>
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="p-4 bg-white/10 rounded-xl border border-white/20 shadow-md text-center transition-transform duration-300 hover:scale-105">
          <div className="text-3xl font-bold text-white mb-1">15+</div>
          <div className="text-sm text-gray-100 font-medium">лет опыта</div>
        </div>
        <div className="p-4 bg-white/10 rounded-xl border border-white/20 shadow-md text-center transition-transform duration-300 hover:scale-105">
          <div className="text-3xl font-bold text-white mb-1">500+</div>
          <div className="text-sm text-gray-100 font-medium">выполненных работ</div>
        </div>
      </div>

      <div className="space-y-2 mb-6 p-4 bg-white/10 rounded-xl border border-white/20 shadow-md transition-transform duration-300 hover:scale-105">
        <div className="flex items-center gap-2">
          <Icon name="ShieldCheck" fallback="CheckCircle" size={18} className="text-green-400 flex-shrink-0" />
          <p className="text-sm text-gray-100 font-medium">
            <span className="font-bold text-white">Гарантия 3 года</span> на пробуренную скважину
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Icon name="Droplets" fallback="CheckCircle" size={18} className="text-green-400 flex-shrink-0" />
          <p className="text-sm text-gray-100 font-medium">
            <span className="font-bold text-white">Не нашли воду</span> — не платите за бурение
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Icon name="CheckCircle" fallback="Circle" size={18} className="text-green-400 flex-shrink-0" />
          <p className="text-sm text-gray-100 font-medium">
            Выезд и расчёт стоимости — <span className="font-bold text-white">бесплатно</span>
          </p>
        </div>
      </div>
    </>
  )
}