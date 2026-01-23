import { useState } from "react"
import { XIcon } from "./icons/x-icon"
import { InstagramIcon } from "./icons/instagram-icon"
import { DiscordIcon } from "./icons/discord-icon"
import { FacebookIcon } from "./icons/facebook-icon"
import { LinkedInIcon } from "./icons/linkedin-icon"
import { Avatar } from "./Avatar"
import { SocialIcon } from "./SocialIcon"
import { WaitlistForm } from "./WaitlistForm"

export function WaitlistSignup() {
  const [waitlistCount, setWaitlistCount] = useState(47)

  const handleSuccess = (count: number) => {
    setWaitlistCount(prev => prev + count)
  }

  return (
    <div className="w-full max-w-xl mx-auto p-8 flex flex-col justify-between min-h-screen">
      <div className="flex-1 flex flex-col justify-center items-center text-center">
        <div>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-gray-200 to-gray-600">
            Бурение скважин под ключ
          </h2>
        </div>
        <div>
          <p className="text-lg sm:text-xl mb-6 text-gray-300">
            Алмазное бурение, услуги мини-экскаватора, бурение скважин. Быстро, качественно, эффективно! Оставьте заявку — перезвоним в течение часа.
          </p>
          <div className="flex flex-col gap-2 mb-8">
            <a href="tel:+79494816485" className="text-xl font-semibold text-white hover:text-blue-300 transition-colors">
              +7 (949) 481-64-85
            </a>
            <a href="tel:+79180445186" className="text-xl font-semibold text-white hover:text-blue-300 transition-colors">
              +7 (918) 044-51-86
            </a>
          </div>
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