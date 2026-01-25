import Icon from "@/components/ui/icon"

export type ServiceTab = 'well-drilling' | 'diamond-drilling' | 'excavator' | 'contracting'

interface ServiceMenuProps {
  activeService: ServiceTab
  onServiceChange: (service: ServiceTab) => void
}

export function ServiceMenu({ activeService, onServiceChange }: ServiceMenuProps) {
  const services = [
    { id: 'well-drilling' as ServiceTab, label: 'Бурение скважин', icon: 'Drill' },
    { id: 'diamond-drilling' as ServiceTab, label: 'Алмазное бурение', icon: 'Sparkles' },
    { id: 'excavator' as ServiceTab, label: 'Мини-экскаватор', icon: 'Construction' },
    { id: 'contracting' as ServiceTab, label: 'Подрядные работы', icon: 'Wrench' },
  ]

  return (
    <div className="mb-8">
      <h3 className="text-sm font-semibold text-gray-400 text-center mb-4">УСЛУГИ</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => onServiceChange(service.id)}
            className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all ${
              activeService === service.id
                ? 'bg-blue-500/20 border-blue-400 text-white'
                : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
            }`}
          >
            <Icon name={service.icon} fallback="Circle" size={24} className={activeService === service.id ? 'text-blue-400' : 'text-gray-500'} />
            <span className="text-xs sm:text-sm font-medium text-center">{service.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
