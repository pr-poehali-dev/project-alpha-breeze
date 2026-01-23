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
                  <h3 className="text-lg font-semibold text-white mb-1">Алмазное бурение</h3>
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
            </div>

            {/* Галерея работ */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="rounded-xl overflow-hidden border border-white/10">
                <img 
                  src="https://cdn.poehali.dev/projects/75e3b623-6dd7-42bb-a412-70f93fe3f4f2/bucket/bb5c6e38-482f-42a4-bcaa-8562318172b0.jpg" 
                  alt="Алмазное бурение в бетоне"
                  className="w-full h-40 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-white/10">
                <img 
                  src="https://cdn.poehali.dev/projects/75e3b623-6dd7-42bb-a412-70f93fe3f4f2/bucket/087eb7cf-bada-46a4-8f65-643d67945860.jpg" 
                  alt="Бурение скважины на участке"
                  className="w-full h-40 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-white/10">
                <img 
                  src="https://cdn.poehali.dev/projects/75e3b623-6dd7-42bb-a412-70f93fe3f4f2/files/794ee10a-6f37-49af-9520-cf10adf3d2a8.jpg" 
                  alt="Работа мини-экскаватора Kubota"
                  className="w-full h-40 object-cover"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <Avatar initials="АК" index={0} />
                <Avatar initials="МП" index={1} />
                <Avatar initials="ЕС" index={2} />
              </div>
              <p className="text-white font-semibold">{waitlistCount}+ клиентов доверяют нам</p>
            </div>
          </div>

          {/* Правая колонка - Форма */}
          <div className="flex flex-col justify-center">
            <WaitlistForm onSuccess={handleSuccess} />
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