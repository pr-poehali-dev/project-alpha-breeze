import Icon from "@/components/ui/icon"
import { SocialIcon } from "./SocialIcon"
import { XIcon } from "./icons/x-icon"
import { InstagramIcon } from "./icons/instagram-icon"
import { DiscordIcon } from "./icons/discord-icon"
import { FacebookIcon } from "./icons/facebook-icon"
import { LinkedInIcon } from "./icons/linkedin-icon"

export function TestimonialsSection() {
  return (
    <>
      <div className="max-w-6xl mx-auto mt-12 mb-8 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6">
          Отзывы наших клиентов
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
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

          <div className="p-3 bg-white/5 rounded-lg border border-white/10">
            <div className="flex items-start gap-2 mb-2">
              <img 
                src="https://cdn.poehali.dev/projects/75e3b623-6dd7-42bb-a412-70f93fe3f4f2/bucket/client4.jpg"
                alt="Станислав"
                className="w-10 h-10 rounded-full object-cover border-2 border-blue-400 flex-shrink-0"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40"%3E%3Crect fill="%234B5563" width="40" height="40"/%3E%3Ctext x="50%25" y="50%25" font-size="16" fill="white" text-anchor="middle" dy=".3em"%3EСК%3C/text%3E%3C/svg%3E'
                }}
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold text-white truncate">Станислав Кравченко</h3>
                <div className="flex gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" fallback="Circle" size={12} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              Делали проем для двери в несущей стене. Точная работа, никаких трещин!
            </p>
          </div>

          <div className="p-3 bg-white/5 rounded-lg border border-white/10">
            <div className="flex items-start gap-2 mb-2">
              <img 
                src="https://cdn.poehali.dev/projects/75e3b623-6dd7-42bb-a412-70f93fe3f4f2/bucket/client5.jpg"
                alt="Ирина"
                className="w-10 h-10 rounded-full object-cover border-2 border-blue-400 flex-shrink-0"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40"%3E%3Crect fill="%234B5563" width="40" height="40"/%3E%3Ctext x="50%25" y="50%25" font-size="16" fill="white" text-anchor="middle" dy=".3em"%3EИП%3C/text%3E%3C/svg%3E'
                }}
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold text-white truncate">Ирина Петренко</h3>
                <div className="flex gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" fallback="Circle" size={12} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              Вежливые ребята, выкопали траншею под коммуникации. Рекомендую!
            </p>
          </div>

          <div className="p-3 bg-white/5 rounded-lg border border-white/10">
            <div className="flex items-start gap-2 mb-2">
              <img 
                src="https://cdn.poehali.dev/projects/75e3b623-6dd7-42bb-a412-70f93fe3f4f2/bucket/client6.jpg"
                alt="Дмитрий"
                className="w-10 h-10 rounded-full object-cover border-2 border-blue-400 flex-shrink-0"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40"%3E%3Crect fill="%234B5563" width="40" height="40"/%3E%3Ctext x="50%25" y="50%25" font-size="16" fill="white" text-anchor="middle" dy=".3em"%3EДС%3C/text%3E%3C/svg%3E'
                }}
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold text-white truncate">Дмитрий Соколов</h3>
                <div className="flex gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" fallback="Circle" size={12} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              Подрядные работы под ключ. Профессионализм на высоте. Спасибо за качество!
            </p>
          </div>
        </div>
      </div>

      <footer className="w-full py-8 border-t border-white/10 mt-12">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-6">
          <div className="flex gap-4">
            <SocialIcon 
              href="https://x.com" 
              icon={<XIcon className="w-5 h-5" />}
              label="X (Twitter)"
            />
            <SocialIcon 
              href="https://instagram.com" 
              icon={<InstagramIcon className="w-5 h-5" />}
              label="Instagram"
            />
            <SocialIcon 
              href="https://discord.com" 
              icon={<DiscordIcon className="w-5 h-5" />}
              label="Discord"
            />
            <SocialIcon 
              href="https://facebook.com" 
              icon={<FacebookIcon className="w-5 h-5" />}
              label="Facebook"
            />
            <SocialIcon 
              href="https://linkedin.com" 
              icon={<LinkedInIcon className="w-5 h-5" />}
              label="LinkedIn"
            />
          </div>
          
          <p className="text-sm text-gray-400 text-center">
            © 2025 Профессиональное бурение ДНР. Все права защищены.
          </p>
        </div>
      </footer>
    </>
  )
}
