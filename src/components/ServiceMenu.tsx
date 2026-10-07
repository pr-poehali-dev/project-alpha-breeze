import Icon from "@/components/ui/icon"

export type ServiceTab = 'well-drilling' | 'excavator' | 'contracting'

interface ServiceMenuProps {
  activeService: ServiceTab
  onServiceChange: (service: ServiceTab) => void
}

export function ServiceMenu({ activeService, onServiceChange }: ServiceMenuProps) {
  const services = [
    { id: 'well-drilling' as ServiceTab, label: 'Бурение скважин', icon: 'Drill' },
    { id: 'excavator' as ServiceTab, label: 'Мини-экскаватор', icon: 'Construction' },
    { id: 'contracting' as ServiceTab, label: 'Подрядные работы', icon: 'Wrench' },
  ]

  return (
    <div className="mb-8">
      <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">УСЛУГИ</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => onServiceChange(service.id)}
            className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all shadow-sm ${
              activeService === service.id
                ? 'bg-blue-600 border-blue-700 text-white'
                : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
            }`}
          >
            {service.id === 'well-drilling' ? (
              <span
                aria-hidden="true"
                className={`block w-7 h-7 ${activeService === service.id ? 'bg-white' : 'bg-blue-600'}`}
                style={{
                  WebkitMaskImage: 'url(/icon-drill-rig.png)',
                  maskImage: 'url(/icon-drill-rig.png)',
                  WebkitMaskSize: 'contain',
                  maskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskPosition: 'center',
                }}
              />
            ) : (
              <Icon name={service.icon} fallback="Circle" size={24} className={activeService === service.id ? 'text-white' : 'text-blue-600'} />
            )}
            <span className="text-xs sm:text-sm font-medium text-center">{service.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}