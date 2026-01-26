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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-center">
            Бурение скважин на воду
          </h2>
          <p className="text-xl sm:text-2xl font-bold text-blue-600 mb-4 tracking-wide text-center">
            ЧИСТАЯ ВОДА ДЛЯ ВАШЕГО ДОМА ИЛИ УЧАСТКА
          </p>

          <div className="flex justify-center mb-6">
            <a href="tel:+79494816485" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg">
              <Icon name="Phone" size={20} />
              Позвонить
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-md animate-slide-in transition-transform duration-300 hover:scale-105">
              <img 
                src="https://cdn.poehali.dev/projects/75e3b623-6dd7-42bb-a412-70f93fe3f4f2/bucket/6cbdaaf2-21c4-41e5-8fc1-77f837e30eaf.jpg" 
                alt="Бурение скважины на участке"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-md animate-slide-in transition-transform duration-300 hover:scale-105">
              <img 
                src="https://cdn.poehali.dev/projects/75e3b623-6dd7-42bb-a412-70f93fe3f4f2/bucket/95edde49-4b35-41c8-bca1-d28433321733.JPG" 
                alt="Буровая установка на участке"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200 shadow-md transition-transform duration-300 hover:scale-105">
              <Icon name="Search" fallback="Circle" size={24} className="text-blue-600 flex-shrink-0 mt-1" />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Поиск водоносного слоя</h3>
                <p className="text-base text-gray-700 font-medium">Геологоразведка с гарантией обнаружения воды на вашем участке</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200 shadow-md transition-transform duration-300 hover:scale-105">
              <Icon name="Drill" fallback="Circle" size={24} className="text-blue-600 flex-shrink-0 mt-1" />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Бурение скважины</h3>
                <p className="text-base text-gray-700 font-medium">Малогабаритная техника для бурения на глубину до 200 метров</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200 shadow-md transition-transform duration-300 hover:scale-105">
              <Icon name="Zap" fallback="Circle" size={24} className="text-blue-600 flex-shrink-0 mt-1" />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Установка насоса</h3>
                <p className="text-base text-gray-700 font-medium">Подбор и монтаж насосного оборудования под ваши потребности</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200 shadow-md transition-transform duration-300 hover:scale-105">
              <Icon name="Droplet" fallback="Circle" size={24} className="text-blue-600 flex-shrink-0 mt-1" />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Обустройство скважины</h3>
                <p className="text-base text-gray-700 font-medium">Полное обустройство с кессоном, трубопроводом и системой фильтрации</p>
              </div>
            </div>
          </div>
        </>
      )}

      {activeService === 'diamond-drilling' && (
        <>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-center">
            Алмазное бурение
          </h2>
          <p className="text-xl sm:text-2xl font-bold text-blue-600 mb-4 tracking-wide text-center">
            ТОЧНОЕ СВЕРЛЕНИЕ БЕЗ ПЫЛИ И ВИБРАЦИИ
          </p>

          <div className="flex justify-center mb-6">
            <a href="tel:+79494816485" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg">
              <Icon name="Phone" size={20} />
              Позвонить
            </a>
          </div>
          
          <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 mb-6 animate-slide-in transition-transform duration-300 hover:scale-105">
            <img 
              src="https://cdn.poehali.dev/projects/75e3b623-6dd7-42bb-a412-70f93fe3f4f2/bucket/734a790e-6248-4c34-a16d-86aeab895172.jpg" 
              alt="Алмазное бурение отверстий"
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200 shadow-md transition-transform duration-300 hover:scale-105">
              <Icon name="Home" fallback="Circle" size={24} className="text-blue-600 flex-shrink-0 mt-1" />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Отверстия под коммуникации</h3>
                <p className="text-base text-gray-700 font-medium">Сверление в бетоне и кирпиче для труб, вентиляции, кабелей</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200 shadow-md transition-transform duration-300 hover:scale-105">
              <Icon name="DoorOpen" fallback="Circle" size={24} className="text-blue-600 flex-shrink-0 mt-1" />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Дверные и оконные проемы</h3>
                <p className="text-base text-gray-700 font-medium">Создание проемов в несущих стенах без ущерба конструкции</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200 shadow-md transition-transform duration-300 hover:scale-105">
              <Icon name="Sparkles" fallback="Circle" size={24} className="text-blue-600 flex-shrink-0 mt-1" />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Работа любой сложности</h3>
                <p className="text-base text-gray-700 font-medium">Диаметр от 20 до 500 мм, глубина до 3 метров</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200 shadow-md transition-transform duration-300 hover:scale-105">
              <Icon name="Shield" fallback="Circle" size={24} className="text-blue-600 flex-shrink-0 mt-1" />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Безопасность и чистота</h3>
                <p className="text-base text-gray-700 font-medium">Водяное охлаждение исключает пыль, минимальный шум</p>
              </div>
            </div>
          </div>
        </>
      )}

      {activeService === 'excavator' && (
        <>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-center">
            Услуги мини-экскаватора
          </h2>
          <p className="text-xl sm:text-2xl font-bold text-blue-600 mb-4 tracking-wide text-center">
            ЗЕМЛЯНЫЕ РАБОТЫ ЛЮБОЙ СЛОЖНОСТИ
          </p>

          <div className="flex justify-center mb-6">
            <a href="tel:+79494816485" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg">
              <Icon name="Phone" size={20} />
              Позвонить
            </a>
          </div>
          
          <div className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-md mb-6 animate-slide-in transition-transform duration-300 hover:scale-105">
            <img 
              src="https://cdn.poehali.dev/projects/75e3b623-6dd7-42bb-a412-70f93fe3f4f2/files/251fa8dc-fbda-478a-9fa2-9757006db152.jpg" 
              alt="Работа мини-экскаватора Kubota"
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200 shadow-md transition-transform duration-300 hover:scale-105">
              <Icon name="Move" fallback="Circle" size={24} className="text-blue-600 flex-shrink-0 mt-1" />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Рытье траншей и котлованов</h3>
                <p className="text-base text-gray-700 font-medium">Под фундамент, коммуникации, водопровод и канализацию</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200 shadow-md transition-transform duration-300 hover:scale-105">
              <Icon name="Mountain" fallback="Circle" size={24} className="text-blue-600 flex-shrink-0 mt-1" />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Планировка участка</h3>
                <p className="text-base text-gray-700 font-medium">Выравнивание территории, уборка грунта и строительного мусора</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200 shadow-md transition-transform duration-300 hover:scale-105">
              <Icon name="Trees" fallback="Circle" size={24} className="text-blue-600 flex-shrink-0 mt-1" />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Ландшафтные работы</h3>
                <p className="text-base text-gray-700 font-medium">Создание водоемов, террасирование склонов, подготовка под газон</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200 shadow-md transition-transform duration-300 hover:scale-105">
              <Icon name="Construction" fallback="Circle" size={24} className="text-blue-600 flex-shrink-0 mt-1" />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Компактная техника Kubota</h3>
                <p className="text-base text-gray-700 font-medium">Работа в ограниченном пространстве, бережное отношение к участку</p>
              </div>
            </div>
          </div>
        </>
      )}

      {activeService === 'contracting' && (
        <>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-center">
            Подрядные работы
          </h2>
          <p className="text-xl sm:text-2xl font-bold text-blue-600 mb-4 tracking-wide text-center">
            КОМПЛЕКСНОЕ ВЫПОЛНЕНИЕ РАБОТ ПОД КЛЮЧ
          </p>

          <div className="flex justify-center mb-6">
            <a href="tel:+79494816485" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg">
              <Icon name="Phone" size={20} />
              Позвонить
            </a>
          </div>
          
          <div className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-md mb-6 animate-slide-in">
            <img 
              src="https://cdn.poehali.dev/projects/75e3b623-6dd7-42bb-a412-70f93fe3f4f2/files/fdf240fb-6609-4dd1-9938-b20bf7a30eff.jpg" 
              alt="Подрядные строительные работы"
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200 shadow-md transition-transform duration-300 hover:scale-105">
              <Icon name="HardHat" fallback="Circle" size={24} className="text-blue-600 flex-shrink-0 mt-1" />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Строительные работы</h3>
                <p className="text-base text-gray-700 font-medium">Фундаменты, кладка, монтаж конструкций любой сложности</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200 shadow-md transition-transform duration-300 hover:scale-105">
              <Icon name="Wrench" fallback="Circle" size={24} className="text-blue-600 flex-shrink-0 mt-1" />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Монтажные работы</h3>
                <p className="text-base text-gray-700 font-medium">Установка систем водоснабжения, канализации, отопления</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200 shadow-md transition-transform duration-300 hover:scale-105">
              <Icon name="PaintBucket" fallback="Circle" size={24} className="text-blue-600 flex-shrink-0 mt-1" />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Отделочные работы</h3>
                <p className="text-base text-gray-700 font-medium">Штукатурка, покраска, облицовка, напольные покрытия</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200 shadow-md transition-transform duration-300 hover:scale-105">
              <Icon name="ClipboardCheck" fallback="Circle" size={24} className="text-blue-600 flex-shrink-0 mt-1" />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Работа под ключ</h3>
                <p className="text-base text-gray-700 font-medium">Полный цикл от проекта до сдачи объекта с гарантией</p>
              </div>
            </div>
          </div>
        </>
      )}

      <WaitlistForm onSuccess={onSuccess} serviceType={
        activeService === 'well-drilling' ? 'Бурение скважин под воду' :
        activeService === 'diamond-drilling' ? 'Алмазное бурение' :
        activeService === 'excavator' ? 'Услуги мини-экскаватора' :
        'Подрядные работы'
      } />
    </div>
  )
}