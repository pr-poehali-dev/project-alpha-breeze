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
    <div className="w-full min-h-screen flex flex-col">
      <header className="bg-gradient-to-br from-blue-600 to-blue-800 p-4 sm:p-8">
        <div className="w-full max-w-4xl mx-auto">
          <ContactHeader />
          <CompanyStats />
        </div>
      </header>
      <div className="flex-1 bg-white">
        <div className="w-full max-w-4xl mx-auto p-4 sm:p-8">
          <ServiceMenu activeService={activeService} onServiceChange={setActiveService} />
          <ServiceContent activeService={activeService} onSuccess={handleSuccess} />
          <Reviews />
        </div>
      </div>
      <footer className="bg-gradient-to-br from-blue-600 to-blue-800 mt-auto p-6 sm:p-8">
        <div className="w-full max-w-4xl mx-auto text-center space-y-4">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-white mb-2">Контакты</h3>
              <div className="flex flex-wrap justify-center gap-4 mb-4">
                <a href="tel:+79494816485" className="text-gray-200 hover:text-white transition-colors font-medium">
                  +7 (949) 481-64-85
                </a>
                <a href="tel:+79494816419" className="text-gray-200 hover:text-white transition-colors font-medium">
                  +7 (949) 481-64-19
                </a>
                <a href="tel:+79494816485" className="text-gray-200 hover:text-white transition-colors font-medium">
                  +7 (949) 481-64-85
                </a>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-white mb-2">География оказания услуг</h3>
              <p className="text-gray-200 text-sm font-medium">
                Донецк • Макеевка • Харцызск • Енакиево • Горловка • Ясиноватая
              </p>
              <p className="text-gray-300 text-xs mt-1">
                и другие населенные пункты ДНР
              </p>
            </div>
          <p className="text-gray-200 text-sm font-medium">
            © 2026 Профессиональное бурение скважин на воду. Все права защищены
          </p>
        </div>
      </footer>
    </div>
  )
}