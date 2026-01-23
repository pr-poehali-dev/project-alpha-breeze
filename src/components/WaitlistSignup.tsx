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
    <div className="w-full max-w-xl mx-auto p-8 flex flex-col justify-between min-h-screen">
      <div className="flex-1 flex flex-col justify-center items-center text-center">
        <div>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-br from-gray-200 to-gray-600">
            Профессиональное бурение
          </h2>
        </div>
        <div className="mb-8 w-full max-w-md">
          <div className="flex items-start gap-3 mb-4 p-4 bg-white/5 rounded-xl border border-white/10">
            <Icon name="Drill" fallback="Circle" size={24} className="text-blue-400 flex-shrink-0 mt-1" />
            <div className="text-left">
              <h3 className="text-lg font-semibold text-white mb-1">Бурение скважин под ключ</h3>
              <p className="text-sm text-gray-400">Алмазное бурение, установка систем водоснабжения</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
            <Icon name="Construction" fallback="Circle" size={24} className="text-blue-400 flex-shrink-0 mt-1" />
            <div className="text-left">
              <h3 className="text-lg font-semibold text-white mb-1">Услуги мини-экскаватора</h3>
              <p className="text-sm text-gray-400">Земляные работы, рытье траншей, планировка участка</p>
            </div>
          </div>
          <p className="text-center text-gray-300 mt-6">Быстро, качественно, эффективно! Оставьте заявку — перезвоним в течение часа.</p>
        </div>
        <div className="w-full">
          <WaitlistForm onSuccess={handleSuccess} />
        </div>
        <div>
          <div className="flex items-center justify-center mt-8">
            <div className="flex -space-x-2 mr-4">
              <Avatar initials="АК" index={0} />
              <Avatar initials="МП" index={1} />
              <Avatar initials="ЕС" index={2} />
            </div>
            <p className="text-white font-semibold">{waitlistCount}+ клиентов доверяют нам</p>
          </div>
        </div>
      </div>
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