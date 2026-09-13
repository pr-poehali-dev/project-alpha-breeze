import { useEffect, useState } from "react"
import Icon from "@/components/ui/icon"
import reachGoal from "@/lib/metrika"

export function MobileCallBar() {
  const [visible, setVisible] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const phones = [
    "+7 (949) 481-64-85",
    "+7 (949) 481-64-19",
    "+7 (918) 044-51-86",
  ]

  const rawPhones = ["+79494816485", "+79494816419", "+79180445186"]

  return (
    <>
      {expanded && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm animate-fade-in"
          onClick={() => setExpanded(false)}
        />
      )}

      <div
        className={`lg:hidden fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {expanded && (
          <div className="mx-3 mb-2 rounded-2xl bg-white shadow-2xl overflow-hidden border border-gray-200">
            {phones.map((phone, i) => (
              <a
                key={rawPhones[i]}
                href={`tel:${rawPhones[i]}`}
                onClick={() => {
                  reachGoal("click_phone", {
                    phone: rawPhones[i].replace("+", ""),
                    location: "mobile_sticky_bar",
                  })
                  setExpanded(false)
                }}
                className="flex items-center gap-3 px-5 py-4 border-b border-gray-100 last:border-0 active:bg-blue-50"
              >
                <Icon name="Phone" size={20} className="text-blue-600" />
                <span className="text-base font-semibold text-gray-900">{phone}</span>
              </a>
            ))}
          </div>
        )}

        <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] px-3 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
          <div className="flex gap-2 max-w-md mx-auto">
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-base shadow-lg active:scale-95 transition-transform"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
              </span>
              <Icon name="Phone" size={20} />
              Позвонить
            </button>
            <a
              href="https://t.me/+79494816485"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => reachGoal("click_telegram", { location: "mobile_sticky_bar" })}
              className="flex items-center justify-center px-5 py-3.5 rounded-xl bg-[#229ED9] text-white shadow-lg active:scale-95 transition-transform"
              aria-label="Написать в Telegram"
            >
              <Icon name="Send" fallback="MessageCircle" size={20} />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileCallBar
