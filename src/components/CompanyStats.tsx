import Icon from "@/components/ui/icon"
import { Avatar } from "./Avatar"

export function CompanyStats() {
  return (
    <>
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-center">
          <div className="text-3xl font-bold text-blue-400 mb-1">15+</div>
          <div className="text-sm text-gray-400">лет опыта</div>
        </div>
        <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-center">
          <div className="text-3xl font-bold text-blue-400 mb-1">500+</div>
          <div className="text-sm text-gray-400">выполненных работ</div>
        </div>
      </div>

      <div className="space-y-2 mb-6 p-4 bg-white/5 rounded-xl border border-white/10">
        <div className="flex items-center gap-2">
          <Icon name="CheckCircle" fallback="Circle" size={18} className="text-green-400 flex-shrink-0" />
          <p className="text-sm text-gray-300">Сертифицированные специалисты</p>
        </div>
        <div className="flex items-center gap-2">
          <Icon name="CheckCircle" fallback="Circle" size={18} className="text-green-400 flex-shrink-0" />
          <p className="text-sm text-gray-300">Профессиональное оборудование</p>
        </div>
        <div className="flex items-center gap-2">
          <Icon name="CheckCircle" fallback="Circle" size={18} className="text-green-400 flex-shrink-0" />
          <p className="text-sm text-gray-300">Гарантия качества на все работы</p>
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 mb-8">
        <div className="flex -space-x-2">
          <Avatar initials="АК" index={0} />
          <Avatar initials="МП" index={1} />
          <Avatar initials="ЕС" index={2} />
        </div>
        <p className="text-white font-semibold">500+ клиентов доверяют нам</p>
      </div>
    </>
  )
}
