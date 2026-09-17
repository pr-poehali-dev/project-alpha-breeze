import { useState } from "react"
import Icon from "@/components/ui/icon"
import reachGoal from "@/lib/metrika"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const MAX_PHONE = "+7 949 481 64 85"
const MAX_PHONE_RAW = "+79494816485"

export function MaxButton({ location }: { location: string }) {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(MAX_PHONE_RAW)
    } catch {
      const el = document.createElement("textarea")
      el.value = MAX_PHONE_RAW
      document.body.appendChild(el)
      el.select()
      document.execCommand("copy")
      document.body.removeChild(el)
    }
    setCopied(true)
    reachGoal("copy_max_phone", { location })
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setOpen(true)
          reachGoal("click_max", { location })
        }}
        className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
      >
        <Icon name="MessageCircle" fallback="Circle" size={20} />
        Написать в MAX
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-white sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-900">
              Написать нам в MAX
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              Скопируйте номер и найдите нас в приложении MAX — мы ответим в чате
            </p>

            <button
              type="button"
              onClick={copy}
              className="w-full flex items-center justify-between gap-3 p-4 rounded-xl border-2 border-violet-200 bg-violet-50 hover:bg-violet-100 transition-colors"
            >
              <span className="text-lg font-bold text-gray-900">{MAX_PHONE}</span>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-700">
                <Icon name={copied ? "Check" : "Copy"} fallback="Circle" size={18} />
                {copied ? "Скопировано" : "Копировать"}
              </span>
            </button>

            <ol className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-2">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-violet-600 text-white text-xs font-bold flex items-center justify-center">
                  1
                </span>
                Откройте приложение MAX
              </li>
              <li className="flex gap-2">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-violet-600 text-white text-xs font-bold flex items-center justify-center">
                  2
                </span>
                Нажмите поиск и вставьте наш номер
              </li>
              <li className="flex gap-2">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-violet-600 text-white text-xs font-bold flex items-center justify-center">
                  3
                </span>
                Напишите нам — ответим в течение 30 минут
              </li>
            </ol>

            <a
              href={`tel:${MAX_PHONE_RAW}`}
              onClick={() => reachGoal("click_phone", { phone: "79494816485", location: "max_dialog" })}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold transition-colors"
            >
              <Icon name="Phone" size={18} />
              Или просто позвоните
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default MaxButton
