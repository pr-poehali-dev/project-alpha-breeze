import Icon from "@/components/ui/icon"
import { WaitlistForm } from "./WaitlistForm"
import type { ServiceTab } from "./ServiceMenu"

interface ServiceContentProps {
  activeService: ServiceTab
  onSuccess: (count: number) => void
}

export function ServiceContent({ activeService, onSuccess }: ServiceContentProps) {
  return (
    <div className="flex flex-col justify-center">
      {activeService === 'well-drilling' && (
        <>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-100 to-gray-400 text-center">
            Бурение скважин под воду
          </h2>
          <p className="text-xl sm:text-2xl font-bold text-blue-400 mb-6 tracking-wide text-center">
            ЧИСТАЯ ВОДА ДЛЯ ВАШЕГО ДОМА ИЛИ УЧАСТКА
          </p>
          
          <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 h-64 sm:h-80 flex items-center justify-center mb-6">
            <img 
              src="https://cdn.poehali.dev/projects/75e3b623-6dd7-42bb-a412-70f93fe3f4f2/bucket/087eb7cf-bada-46a4-8f65-643d67945860.jpg" 
              alt="Бурение скважины на участке"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
              <Icon name="Search" fallback="Circle" size={24} className="text-blue-400 flex-shrink-0 mt-1" />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-white mb-1">Поиск водоносного слоя</h3>
                <p className="text-base text-gray-400">Геологоразведка с гарантией обнаружения воды на вашем участке</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
              <Icon name="Drill" fallback="Circle" size={24} className="text-blue-400 flex-shrink-0 mt-1" />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-white mb-1">Бурение скважины</h3>
                <p className="text-base text-gray-400">Современное оборудование для бурения на глубину до 150 метров</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
              <Icon name="Zap" fallback="Circle" size={24} className="text-blue-400 flex-shrink-0 mt-1" />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-white mb-1">Установка насоса</h3>
                <p className="text-base text-gray-400">Подбор и монтаж насосного оборудования под ваши потребности</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
              <Icon name="Droplet" fallback="Circle" size={24} className="text-blue-400 flex-shrink-0 mt-1" />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-white mb-1">Обустройство скважины</h3>
                <p className="text-base text-gray-400">Полное обустройство с кессоном, трубопроводом и системой фильтрации</p>
              </div>
            </div>
          </div>
        </>
      )}

      {activeService === 'diamond-drilling' && (
        <>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-100 to-gray-400 text-center">
            Алмазное бурение
          </h2>
          <p className="text-xl sm:text-2xl font-bold text-blue-400 mb-6 tracking-wide text-center">
            ТОЧНОЕ СВЕРЛЕНИЕ БЕЗ ПЫЛИ И ВИБРАЦИИ
          </p>
          
          <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 h-64 sm:h-80 flex items-center justify-center mb-6">
            <img 
              src="https://cdn.poehali.dev/projects/75e3b623-6dd7-42bb-a412-70f93fe3f4f2/bucket/bb5c6e38-482f-42a4-bcaa-8562318172b0.jpg" 
              alt="Алмазное бурение в бетоне"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
              <Icon name="Home" fallback="Circle" size={24} className="text-blue-400 flex-shrink-0 mt-1" />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-white mb-1">Отверстия под коммуникации</h3>
                <p className="text-base text-gray-400">Сверление в бетоне и кирпиче для труб, вентиляции, кабелей</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
              <Icon name="DoorOpen" fallback="Circle" size={24} className="text-blue-400 flex-shrink-0 mt-1" />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-white mb-1">Дверные и оконные проемы</h3>
                <p className="text-base text-gray-400">Создание проемов в несущих стенах без ущерба конструкции</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
              <Icon name="Sparkles" fallback="Circle" size={24} className="text-blue-400 flex-shrink-0 mt-1" />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-white mb-1">Работа любой сложности</h3>
                <p className="text-base text-gray-400">Диаметр от 20 до 500 мм, глубина до 3 метров</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
              <Icon name="Shield" fallback="Circle" size={24} className="text-blue-400 flex-shrink-0 mt-1" />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-white mb-1">Безопасность и чистота</h3>
                <p className="text-base text-gray-400">Водяное охлаждение исключает пыль, минимальный шум</p>
              </div>
            </div>
          </div>
        </>
      )}

      {activeService === 'excavator' && (
        <>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-100 to-gray-400 text-center">
            Услуги мини-экскаватора
          </h2>
          <p className="text-xl sm:text-2xl font-bold text-blue-400 mb-6 tracking-wide text-center">
            ЗЕМЛЯНЫЕ РАБОТЫ ЛЮБОЙ СЛОЖНОСТИ
          </p>
          
          <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 h-64 sm:h-80 flex items-center justify-center mb-6">
            <img 
              src="https://cdn.poehali.dev/projects/75e3b623-6dd7-42bb-a412-70f93fe3f4f2/files/2943819d-ef84-4e7d-ba22-6f90748c12b7.jpg" 
              alt="Работа мини-экскаватора Kubota"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
              <Icon name="Move" fallback="Circle" size={24} className="text-blue-400 flex-shrink-0 mt-1" />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-white mb-1">Рытье траншей и котлованов</h3>
                <p className="text-base text-gray-400">Под фундамент, коммуникации, водопровод и канализацию</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
              <Icon name="Mountain" fallback="Circle" size={24} className="text-blue-400 flex-shrink-0 mt-1" />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-white mb-1">Планировка участка</h3>
                <p className="text-base text-gray-400">Выравнивание территории, уборка грунта и строительного мусора</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
              <Icon name="Trees" fallback="Circle" size={24} className="text-blue-400 flex-shrink-0 mt-1" />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-white mb-1">Ландшафтные работы</h3>
                <p className="text-base text-gray-400">Создание водоемов, террасирование склонов, подготовка под газон</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
              <Icon name="Construction" fallback="Circle" size={24} className="text-blue-400 flex-shrink-0 mt-1" />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-white mb-1">Компактная техника Kubota</h3>
                <p className="text-base text-gray-400">Работа в ограниченном пространстве, бережное отношение к участку</p>
              </div>
            </div>
          </div>
        </>
      )}

      {activeService === 'contracting' && (
        <>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-100 to-gray-400 text-center">
            Подрядные работы
          </h2>
          <p className="text-xl sm:text-2xl font-bold text-blue-400 mb-6 tracking-wide text-center">
            КОМПЛЕКСНОЕ ВЫПОЛНЕНИЕ РАБОТ ПОД КЛЮЧ
          </p>
          
          <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 h-64 sm:h-80 flex items-center justify-center mb-6">
            <img 
              src="https://cdn.poehali.dev/projects/75e3b623-6dd7-42bb-a412-70f93fe3f4f2/bucket/bb5c6e38-482f-42a4-bcaa-8562318172b0.jpg" 
              alt="Подрядные строительные работы"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
              <Icon name="HardHat" fallback="Circle" size={24} className="text-blue-400 flex-shrink-0 mt-1" />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-white mb-1">Строительные работы</h3>
                <p className="text-base text-gray-400">Фундаменты, кладка, монтаж конструкций любой сложности</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
              <Icon name="Wrench" fallback="Circle" size={24} className="text-blue-400 flex-shrink-0 mt-1" />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-white mb-1">Монтажные работы</h3>
                <p className="text-base text-gray-400">Установка систем водоснабжения, канализации, отопления</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
              <Icon name="PaintBucket" fallback="Circle" size={24} className="text-blue-400 flex-shrink-0 mt-1" />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-white mb-1">Отделочные работы</h3>
                <p className="text-base text-gray-400">Штукатурка, покраска, облицовка, напольные покрытия</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
              <Icon name="ClipboardCheck" fallback="Circle" size={24} className="text-blue-400 flex-shrink-0 mt-1" />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-white mb-1">Работа под ключ</h3>
                <p className="text-base text-gray-400">Полный цикл от проекта до сдачи объекта с гарантией</p>
              </div>
            </div>
          </div>
        </>
      )}

      <WaitlistForm onSuccess={onSuccess} />
    </div>
  )
}