import { useState } from "react"
import { ContactHeader } from "./ContactHeader"
import { CompanyStats } from "./CompanyStats"
import { ServiceMenu, type ServiceTab } from "./ServiceMenu"
import { ServiceContent } from "./ServiceContent"
import { TestimonialsSection } from "./TestimonialsSection"
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
        </div>
      </div>
      <TestimonialsSection />
    </div>
  )
}