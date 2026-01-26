import { useState } from "react"
import { ContactHeader } from "./ContactHeader"
import { CompanyStats } from "./CompanyStats"
import { ServiceMenu, type ServiceTab } from "./ServiceMenu"
import { ServiceContent } from "./ServiceContent"
import { Reviews } from "./Reviews"

export function WaitlistSignup() {
  const [waitlistCount, setWaitlistCount] = useState(47)
  const [activeService, setActiveService] = useState<ServiceTab>('well-drilling')

  const handleSuccess = (count: number) => {
    setWaitlistCount(prev => prev + count)
  }

  return (
    <div className="w-full min-h-screen p-4 sm:p-8 flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-4xl">
          <ContactHeader />
          <CompanyStats />
          <ServiceMenu activeService={activeService} onServiceChange={setActiveService} />
          <ServiceContent activeService={activeService} onSuccess={handleSuccess} />
          <Reviews />
          <footer className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-gray-200 text-sm font-medium">
              © 2026 Профессиональное бурение скважин на воду. Все права защищены
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}