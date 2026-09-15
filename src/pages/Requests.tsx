import { useEffect, useMemo, useState } from "react"
import Icon from "@/components/ui/icon"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

const API_URL = "https://functions.poehali.dev/b751cd58-b464-42a1-9dd0-d8e98bf908f5"
const STORAGE_KEY = "admin_pass"

interface RequestItem {
  id: number
  name: string
  phone: string
  service: string
  visitTime: string
  createdAt: string
}

const urgentLabels: Record<string, string> = {
  Сегодня: "bg-red-100 text-red-700 border-red-200",
  Завтра: "bg-orange-100 text-orange-700 border-orange-200",
  "На этой неделе": "bg-blue-100 text-blue-700 border-blue-200",
  "Просто консультация": "bg-gray-100 text-gray-600 border-gray-200",
}

function formatDate(iso: string) {
  if (!iso) return ""
  const d = new Date(iso)
  const today = new Date()
  const isToday = d.toDateString() === today.toDateString()
  const time = d.toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" })
  if (isToday) return `Сегодня, ${time}`
  return `${d.toLocaleDateString("ru-RU", { day: "numeric", month: "long" })}, ${time}`
}

export default function Requests() {
  const [password, setPassword] = useState("")
  const [authorized, setAuthorized] = useState(false)
  const [items, setItems] = useState<RequestItem[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [search, setSearch] = useState("")

  const load = async (pass: string) => {
    setLoading(true)
    setError("")
    try {
      const res = await fetch(API_URL, { headers: { "X-Admin-Password": pass } })
      const data = await res.json()
      if (res.ok && data.success) {
        setItems(data.requests)
        setAuthorized(true)
        localStorage.setItem(STORAGE_KEY, pass)
      } else {
        setError(data.error || "Не удалось загрузить заявки")
        setAuthorized(false)
        localStorage.removeItem(STORAGE_KEY)
      }
    } catch {
      setError("Нет связи с сервером. Попробуйте позже")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("p")
    const saved = fromUrl || localStorage.getItem(STORAGE_KEY)
    if (saved) {
      setPassword(saved)
      load(saved)
    }
  }, [])

  const stats = useMemo(() => {
    const today = new Date().toDateString()
    return {
      total: items.length,
      today: items.filter((i) => new Date(i.createdAt).toDateString() === today).length,
      urgent: items.filter((i) => i.visitTime === "Сегодня" || i.visitTime === "Завтра").length,
    }
  }, [items])

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return items
    return items.filter(
      (i) =>
        i.name.toLowerCase().includes(q) ||
        i.phone.toLowerCase().includes(q) ||
        i.service.toLowerCase().includes(q)
    )
  }, [items, search])

  if (!authorized) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center p-4">
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
          <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
            <Icon name="Lock" fallback="Circle" size={26} className="text-blue-700" />
          </div>
          <h1 className="text-xl font-extrabold text-gray-900 text-center mb-1">Заявки с сайта</h1>
          <p className="text-sm text-gray-500 text-center mb-6">Введите пароль для входа</p>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              load(password)
            }}
            className="space-y-3"
          >
            <Input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-xl h-12"
            />
            {error && <p className="text-sm text-red-600 font-medium">{error}</p>}
            <Button
              type="submit"
              disabled={loading || !password}
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl"
            >
              {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Войти"}
            </Button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between gap-3 mb-5">
            <h1 className="text-xl sm:text-2xl font-extrabold">Заявки с сайта</h1>
            <button
              onClick={() => load(password)}
              disabled={loading}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 hover:bg-white/25 rounded-lg text-sm font-semibold transition-colors"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Icon name="RefreshCw" fallback="Circle" size={16} />
              )}
              Обновить
            </button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white/10 rounded-xl p-3 text-center border border-white/20">
              <div className="text-2xl font-extrabold">{stats.total}</div>
              <div className="text-xs text-blue-100 font-medium">всего заявок</div>
            </div>
            <div className="bg-white/10 rounded-xl p-3 text-center border border-white/20">
              <div className="text-2xl font-extrabold">{stats.today}</div>
              <div className="text-xs text-blue-100 font-medium">за сегодня</div>
            </div>
            <div className="bg-white/10 rounded-xl p-3 text-center border border-white/20">
              <div className="text-2xl font-extrabold text-orange-300">{stats.urgent}</div>
              <div className="text-xs text-blue-100 font-medium">срочных</div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6">
        <div className="relative mb-5">
          <Icon
            name="Search"
            fallback="Circle"
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <Input
            placeholder="Поиск по имени, телефону или услуге"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 h-12 rounded-xl bg-white"
          />
        </div>

        {filtered.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-200 p-10 text-center">
            <Icon name="Inbox" fallback="Circle" size={40} className="text-gray-300 mx-auto mb-3" />
            <p className="text-gray-600 font-medium">
              {items.length === 0 ? "Заявок пока нет" : "Ничего не найдено"}
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-lg font-bold text-gray-900">{item.name}</span>
                      {item.visitTime && (
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${
                            urgentLabels[item.visitTime] || "bg-gray-100 text-gray-600 border-gray-200"
                          }`}
                        >
                          {item.visitTime}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 font-medium">{item.service}</p>
                    <p className="text-xs text-gray-400 mt-1">{formatDate(item.createdAt)}</p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <a
                      href={`tel:${item.phone}`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-colors"
                    >
                      <Icon name="Phone" size={16} />
                      {item.phone}
                    </a>
                    <a
                      href={`https://wa.me/${item.phone.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-11 h-11 bg-green-50 hover:bg-green-100 text-green-600 rounded-xl border border-green-200 transition-colors"
                      title="Написать в WhatsApp"
                    >
                      <Icon name="MessageCircle" fallback="Circle" size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}