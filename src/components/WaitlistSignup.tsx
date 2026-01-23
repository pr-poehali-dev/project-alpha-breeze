import { useState } from "react"
import { XIcon } from "./icons/x-icon"
import { InstagramIcon } from "./icons/instagram-icon"
import { DiscordIcon } from "./icons/discord-icon"
import { FacebookIcon } from "./icons/facebook-icon"
import { LinkedInIcon } from "./icons/linkedin-icon"
import { Avatar } from "./Avatar"
import { SocialIcon } from "./SocialIcon"
import { WaitlistForm } from "./WaitlistForm"
import Icon from "@/components/ui/icon"

export function WaitlistSignup() {
  const [waitlistCount, setWaitlistCount] = useState(47)

  const handleSuccess = (count: number) => {
    setWaitlistCount(prev => prev + count)
  }

  return (
    <div className="w-full min-h-screen p-4 sm:p-8 flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Левая колонка - Услуги */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-100 to-gray-400 text-center">
              Профессиональное бурение
            </h2>
            <p className="text-xl sm:text-2xl font-bold text-blue-400 mb-6 tracking-wide text-center">
              БЫСТРО, КАЧЕСТВЕННО, ЭФФЕКТИВНО
            </p>
            
            <div className="flex items-center justify-center gap-2 mb-6 p-4 bg-blue-500/10 rounded-lg border border-blue-400/20">
              <Icon name="MapPin" fallback="Circle" size={24} className="text-blue-400 flex-shrink-0" />
              <p className="text-base sm:text-lg font-medium text-gray-200 text-center">
                Донецк, Макеевка, Харцызск и ближние регионы ДНР
              </p>
            </div>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                <Icon name="Drill" fallback="Circle" size={24} className="text-blue-400 flex-shrink-0 mt-1" />
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white mb-1">Бурение скважин под ключ</h3>
                  <p className="text-base text-gray-400">Поиск воды, установка систем водоснабжения, обустройство скважин</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                <Icon name="Sparkles" fallback="Circle" size={24} className="text-blue-400 flex-shrink-0 mt-1" />
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white mb-1">Алмазное бурение (сверление)</h3>
                  <p className="text-base text-gray-400">Точное бурение отверстий любой сложности: в бетоне, камне, кирпиче</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                <Icon name="Construction" fallback="Circle" size={24} className="text-blue-400 flex-shrink-0 mt-1" />
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white mb-1">Услуги мини-экскаватора</h3>
                  <p className="text-base text-gray-400">Земляные работы, рытье траншей, планировка участка</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                <Icon name="Wrench" fallback="Circle" size={24} className="text-blue-400 flex-shrink-0 mt-1" />
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white mb-1">Подрядные работы любой сложности</h3>
                  <p className="text-base text-gray-400">Комплексное выполнение строительных и монтажных работ</p>
                </div>
              </div>
            </div>

            {/* Галерея работ */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 h-48 flex items-center justify-center">
                <img 
                  src="https://cdn.poehali.dev/projects/75e3b623-6dd7-42bb-a412-70f93fe3f4f2/bucket/bb5c6e38-482f-42a4-bcaa-8562318172b0.jpg" 
                  alt="Алмазное бурение в бетоне"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 h-48 flex items-center justify-center">
                <img 
                  src="https://cdn.poehali.dev/projects/75e3b623-6dd7-42bb-a412-70f93fe3f4f2/bucket/087eb7cf-bada-46a4-8f65-643d67945860.jpg" 
                  alt="Бурение скважины на участке"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 h-48 flex items-center justify-center">
                <img 
                  src="https://cdn.poehali.dev/projects/75e3b623-6dd7-42bb-a412-70f93fe3f4f2/files/2943819d-ef84-4e7d-ba22-6f90748c12b7.jpg" 
                  alt="Работа мини-экскаватора Kubota"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Преимущества команды */}
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

            <div className="flex items-center justify-end gap-3">
              <div className="flex -space-x-2">
                <Avatar initials="АК" index={0} />
                <Avatar initials="МП" index={1} />
                <Avatar initials="ЕС" index={2} />
              </div>
              <p className="text-white font-semibold">500+ клиентов доверяют нам</p>
            </div>
          </div>

          {/* Правая колонка - Форма */}
          <div className="flex flex-col justify-center">
            <WaitlistForm onSuccess={handleSuccess} />
          </div>
        </div>
      </div>

      {/* Секция отзывов */}
      <div className="max-w-6xl mx-auto mt-12 mb-8 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6">
          Отзывы наших клиентов
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Отзыв 1 */}
          <div className="p-3 bg-white/5 rounded-lg border border-white/10">
            <div className="flex items-start gap-2 mb-2">
              <img 
                src="https://cdn.poehali.dev/projects/75e3b623-6dd7-42bb-a412-70f93fe3f4f2/bucket/client1.jpg"
                alt="Ростислав"
                className="w-10 h-10 rounded-full object-cover border-2 border-blue-400 flex-shrink-0"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40"%3E%3Crect fill="%234B5563" width="40" height="40"/%3E%3Ctext x="50%25" y="50%25" font-size="16" fill="white" text-anchor="middle" dy=".3em"%3EРЗ%3C/text%3E%3C/svg%3E'
                }}
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold text-white truncate">Ростислав Захарченко</h3>
                <div className="flex gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" fallback="Circle" size={12} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              Пробурили скважину за 2 дня. Работали аккуратно, участок убрали. Вода отличная!
            </p>
          </div>

          {/* Отзыв 2 */}
          <div className="p-3 bg-white/5 rounded-lg border border-white/10">
            <div className="flex items-start gap-2 mb-2">
              <img 
                src="https://cdn.poehali.dev/projects/75e3b623-6dd7-42bb-a412-70f93fe3f4f2/bucket/client2.jpg"
                alt="Богдан"
                className="w-10 h-10 rounded-full object-cover border-2 border-blue-400 flex-shrink-0"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40"%3E%3Crect fill="%234B5563" width="40" height="40"/%3E%3Ctext x="50%25" y="50%25" font-size="16" fill="white" text-anchor="middle" dy=".3em"%3EБТ%3C/text%3E%3C/svg%3E'
                }}
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold text-white truncate">Богдан Тимофеев</h3>
                <div className="flex gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" fallback="Circle" size={12} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              Алмазное бурение под вентиляцию. Быстро, чисто, профессионально. Цена адекватная!
            </p>
          </div>

          {/* Отзыв 3 */}
          <div className="p-3 bg-white/5 rounded-lg border border-white/10">
            <div className="flex items-start gap-2 mb-2">
              <img 
                src="https://cdn.poehali.dev/projects/75e3b623-6dd7-42bb-a412-70f93fe3f4f2/bucket/client3.jpg"
                alt="Виктория"
                className="w-10 h-10 rounded-full object-cover border-2 border-blue-400 flex-shrink-0"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40"%3E%3Crect fill="%234B5563" width="40" height="40"/%3E%3Ctext x="50%25" y="50%25" font-size="16" fill="white" text-anchor="middle" dy=".3em"%3EВЛ%3C/text%3E%3C/svg%3E'
                }}
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold text-white truncate">Виктория Левченко</h3>
                <div className="flex gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" fallback="Circle" size={12} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              Мини-экскаватор для земляных работ. Оператор опытный, всё сделали за день!
            </p>
          </div>

          {/* Отзыв 4 */}
          <div className="p-3 bg-white/5 rounded-lg border border-white/10">
            <div className="flex items-start gap-2 mb-2">
              <img 
                src="https://cdn.poehali.dev/projects/75e3b623-6dd7-42bb-a412-70f93fe3f4f2/bucket/client4.jpg"
                alt="Станислав"
                className="w-10 h-10 rounded-full object-cover border-2 border-blue-400 flex-shrink-0"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40"%3E%3Crect fill="%234B5563" width="40" height="40"/%3E%3Ctext x="50%25" y="50%25" font-size="16" fill="white" text-anchor="middle" dy=".3em"%3EСГ%3C/text%3E%3C/svg%3E'
                }}
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold text-white truncate">Станислав Гордиенко</h3>
                <div className="flex gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" fallback="Circle" size={12} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              Подрядные работы на стройке. Команда профессиональная, всё в срок и качественно!
            </p>
          </div>

          {/* Отзыв 5 */}
          <div className="p-3 bg-white/5 rounded-lg border border-white/10">
            <div className="flex items-start gap-2 mb-2">
              <img 
                src="https://cdn.poehali.dev/projects/75e3b623-6dd7-42bb-a412-70f93fe3f4f2/bucket/client5.jpg"
                alt="Ярослав"
                className="w-10 h-10 rounded-full object-cover border-2 border-blue-400 flex-shrink-0"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40"%3E%3Crect fill="%234B5563" width="40" height="40"/%3E%3Ctext x="50%25" y="50%25" font-size="16" fill="white" text-anchor="middle" dy=".3em"%3EЯК%3C/text%3E%3C/svg%3E'
                }}
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold text-white truncate">Ярослав Ковальчук</h3>
                <div className="flex gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" fallback="Circle" size={12} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              Бурили отверстия в фундаменте. Точная работа, никаких трещин. Молодцы!
            </p>
          </div>

          {/* Отзыв 6 */}
          <div className="p-3 bg-white/5 rounded-lg border border-white/10">
            <div className="flex items-start gap-2 mb-2">
              <img 
                src="https://cdn.poehali.dev/projects/75e3b623-6dd7-42bb-a412-70f93fe3f4f2/bucket/client6.jpg"
                alt="Анастасия"
                className="w-10 h-10 rounded-full object-cover border-2 border-blue-400 flex-shrink-0"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40"%3E%3Crect fill="%234B5563" width="40" height="40"/%3E%3Ctext x="50%25" y="50%25" font-size="16" fill="white" text-anchor="middle" dy=".3em"%3EАН%3C/text%3E%3C/svg%3E'
                }}
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold text-white truncate">Анастасия Новикова</h3>
                <div className="flex gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" fallback="Circle" size={12} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              Скважина работает безупречно уже год. Спасибо за надёжность и гарантию!
            </p>
          </div>

          {/* Отзыв 7 */}
          <div className="p-3 bg-white/5 rounded-lg border border-white/10">
            <div className="flex items-start gap-2 mb-2">
              <img 
                src="https://cdn.poehali.dev/projects/75e3b623-6dd7-42bb-a412-70f93fe3f4f2/bucket/client7.jpg"
                alt="Валентин"
                className="w-10 h-10 rounded-full object-cover border-2 border-blue-400 flex-shrink-0"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40"%3E%3Crect fill="%234B5563" width="40" height="40"/%3E%3Ctext x="50%25" y="50%25" font-size="16" fill="white" text-anchor="middle" dy=".3em"%3EВШ%3C/text%3E%3C/svg%3E'
                }}
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold text-white truncate">Валентин Шевченко</h3>
                <div className="flex gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" fallback="Circle" size={12} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              Экскаватор помог выкопать траншею под канализацию. Быстро и недорого!
            </p>
          </div>

          {/* Отзыв 8 */}
          <div className="p-3 bg-white/5 rounded-lg border border-white/10">
            <div className="flex items-start gap-2 mb-2">
              <img 
                src="https://cdn.poehali.dev/projects/75e3b623-6dd7-42bb-a412-70f93fe3f4f2/bucket/client8.jpg"
                alt="Светлана"
                className="w-10 h-10 rounded-full object-cover border-2 border-blue-400 flex-shrink-0"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40"%3E%3Crect fill="%234B5563" width="40" height="40"/%3E%3Ctext x="50%25" y="50%25" font-size="16" fill="white" text-anchor="middle" dy=".3em"%3EСМ%3C/text%3E%3C/svg%3E'
                }}
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold text-white truncate">Светлана Мельник</h3>
                <div className="flex gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" fallback="Circle" size={12} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              Сверлили отверстия под кондиционер. Работали тихо и чисто. Рекомендую!
            </p>
          </div>

          {/* Отзыв 9 */}
          <div className="p-3 bg-white/5 rounded-lg border border-white/10">
            <div className="flex items-start gap-2 mb-2">
              <img 
                src="https://cdn.poehali.dev/projects/75e3b623-6dd7-42bb-a412-70f93fe3f4f2/bucket/client9.jpg"
                alt="Геннадий"
                className="w-10 h-10 rounded-full object-cover border-2 border-blue-400 flex-shrink-0"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40"%3E%3Crect fill="%234B5563" width="40" height="40"/%3E%3Ctext x="50%25" y="50%25" font-size="16" fill="white" text-anchor="middle" dy=".3em"%3EГП%3C/text%3E%3C/svg%3E'
                }}
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold text-white truncate">Геннадий Полтавец</h3>
                <div className="flex gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" fallback="Circle" size={12} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              Комплексные работы по участку. От бурения до планировки. Всё под ключ!
            </p>
          </div>
        </div>
      </div>

      {/* Футер с соцсетями */}
      <div className="pt-8 flex justify-center space-x-6">
        <SocialIcon
          href="https://x.com/example"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
          icon={<XIcon className="w-6 h-6" />}
        />
        <SocialIcon
          href="https://instagram.com/example"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          icon={<InstagramIcon className="w-6 h-6" />}
        />
        <SocialIcon
          href="https://discord.gg/example"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord"
          icon={<DiscordIcon className="w-6 h-6" />}
        />
        <SocialIcon
          href="https://facebook.com/example"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          icon={<FacebookIcon className="w-6 h-6" />}
        />
        <SocialIcon
          href="https://linkedin.com/company/example"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          icon={<LinkedInIcon className="w-6 h-6" />}
        />
      </div>
    </div>
  )
}