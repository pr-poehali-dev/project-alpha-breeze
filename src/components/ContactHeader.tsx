import Icon from "@/components/ui/icon"

export function ContactHeader() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-6 text-sm text-gray-300">
        <a href="tel:+79494816485" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
          <Icon name="Phone" fallback="Circle" size={16} className="text-blue-400" />
          <span>+7 (949) 481-64-85</span>
        </a>
        <div className="flex items-center gap-2">
          <Icon name="Clock" fallback="Circle" size={16} className="text-blue-400" />
          <span>ПН-ВС 08:00-20:00</span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 mb-8 p-4 bg-blue-500/10 rounded-lg border border-blue-400/20">
        <Icon name="MapPin" fallback="Circle" size={24} className="text-blue-400 flex-shrink-0" />
        <p className="text-base sm:text-lg font-medium text-gray-200 text-center">
          Донецк, Макеевка, Харцызск и ближние регионы ДНР
        </p>
      </div>
    </>
  )
}