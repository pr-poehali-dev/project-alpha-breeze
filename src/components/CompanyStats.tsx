import Icon from "@/components/ui/icon"
import { Avatar } from "./Avatar"

export function CompanyStats() {
  return (
    <>
      <div className="rounded-xl overflow-hidden border border-white/20 bg-white/10 mb-6 animate-slide-in">
        <img 
          src="https://cdn.poehali.dev/projects/75e3b623-6dd7-42bb-a412-70f93fe3f4f2/files/5acb3e38-a72c-4a27-b74e-a8110edee461.jpg" 
          alt="Наш прораб приветствует вас"
          className="w-full h-auto object-contain"
        />
      </div>

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
          <Icon name="CheckCircle" fallback="Circle" size={18} className="text-green-400 flex-shrink-0" />
          <p className="text-sm text-gray-100 font-medium">Сертифицированные специалисты</p>
        </div>
        <div className="flex items-center gap-2">
          <Icon name="CheckCircle" fallback="Circle" size={18} className="text-green-400 flex-shrink-0" />
          <p className="text-sm text-gray-100 font-medium">Профессиональное оборудование</p>
        </div>
        <div className="flex items-center gap-2">
          <Icon name="CheckCircle" fallback="Circle" size={18} className="text-green-400 flex-shrink-0" />
          <p className="text-sm text-gray-100 font-medium">Гарантия качества на все работы</p>
        </div>
      </div>
    </>
  )
}