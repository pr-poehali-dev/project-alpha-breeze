import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Icon from '@/components/ui/icon'
import { Loader2 } from 'lucide-react'
import { useToast } from "@/hooks/use-toast"
import reachGoal from "@/lib/metrika"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface WaitlistFormProps {
  onSuccess: (count: number) => void;
  serviceType: string;
}

const serviceLabels: Record<string, string> = {
  'well-drilling': 'бурению скважин',
  'diamond-drilling': 'алмазному бурению',
  'excavator': 'услугам мини-экскаватора',
  'contracting': 'подрядным работам',
}

export function WaitlistForm({ onSuccess, serviceType }: WaitlistFormProps) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [isPending, setIsPending] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!name || !phone || !agreed) return

    setIsPending(true)

    try {
      const response = await fetch('https://functions.poehali.dev/59d997b0-43b2-4f71-a432-d0a55ec2ec5d', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone, service: serviceType }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        reachGoal('submit_form', { service: serviceType })
        reachGoal(`lead_${serviceType.replace(/-/g, '_')}`)
        setIsSubmitted(true)
        onSuccess(1)
      } else {
        toast({
          title: "Ошибка",
          description: data.error || "Не удалось отправить заявку",
          variant: "destructive",
          duration: 5000,
        })
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте позже.",
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setIsPending(false)
    }
  }

  const handleNewRequest = () => {
    setIsSubmitted(false)
    setName('')
    setPhone('')
    setAgreed(false)
  }

  if (isSubmitted) {
    return (
      <div className="w-full mb-8 animate-fade-in">
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl border border-green-200 p-6 sm:p-8 text-center shadow-lg">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="CheckCircle" size={36} className="text-green-600" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Спасибо за заявку!
          </h3>
          <p className="text-lg text-gray-700 font-medium mb-1">
            Мы перезвоним вам в течение <span className="text-blue-600 font-bold">30 минут</span>
          </p>
          <p className="text-base text-gray-600 mb-6">
            Наш специалист по {serviceLabels[serviceType] || 'услуге'} свяжется с вами для уточнения деталей
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+79494816485"
              onClick={() => reachGoal('click_phone', { phone: '79494816485', location: 'thank_you' })}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Icon name="Phone" size={20} />
              Позвонить сейчас
            </a>
            <button
              onClick={handleNewRequest}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-xl transition-all duration-300 border border-gray-300"
            >
              <Icon name="Plus" size={20} />
              Новая заявка
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full space-y-4 mb-8">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 uppercase text-center">
        Бесплатный расчёт стоимости
      </h3>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="overflow-hidden rounded-xl bg-white p-1 ring-1 ring-gray-300 focus-within:ring-2 focus-within:ring-blue-600">
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Ваше имя"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border-0 bg-transparent text-gray-900 placeholder:text-gray-500 focus:ring-0 focus:border-transparent focus-visible:border-transparent focus:outline-none active:ring-0 active:outline-none focus-visible:ring-0 focus-visible:outline-none active:border-transparent focus-visible:ring-offset-0"
          />
        </div>
        <div className="overflow-hidden rounded-xl bg-white p-1 ring-1 ring-gray-300 focus-within:ring-2 focus-within:ring-blue-600">
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Телефон"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border-0 bg-transparent text-gray-900 placeholder:text-gray-500 focus:ring-0 focus:border-transparent focus-visible:border-transparent focus:outline-none active:ring-0 active:outline-none focus-visible:ring-0 focus-visible:outline-none active:border-transparent focus-visible:ring-offset-0"
          />
        </div>
        
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-1 w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
            required
          />
          <span className="text-sm text-gray-700 leading-relaxed">
            Я согласен на обработку персональных данных в соответствии с{' '}
            <a 
              href="http://www.consultant.ru/document/cons_doc_LAW_61801/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 underline"
            >
              ФЗ-152
            </a>
          </span>
        </label>

        <Button
          type="submit"
          disabled={isPending || !agreed}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 ease-in-out focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            'Оставить заявку'
          )}
        </Button>
      </form>
      
      <div className="text-center">
        <p className="text-gray-600 text-sm mb-3">или свяжитесь с нами</p>
        <div className="flex gap-3 justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="inline-flex items-center gap-2 px-5 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold rounded-xl transition-all duration-300">
                <Icon name="Phone" size={20} />
                Позвонить
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border-gray-200">
              <DropdownMenuItem asChild>
                <a href="tel:+79494816485" onClick={() => reachGoal('click_phone', { phone: '79494816485', location: 'form_dropdown' })} className="flex items-center gap-2 cursor-pointer text-gray-900 hover:text-blue-600">
                  <Icon name="Phone" size={16} />
                  +7 (949) 481-64-85
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="tel:+79180445186" onClick={() => reachGoal('click_phone', { phone: '79180445186', location: 'form_dropdown' })} className="flex items-center gap-2 cursor-pointer text-gray-900 hover:text-blue-600">
                  <Icon name="Phone" size={16} />
                  +7 (918) 044-51-86
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <a
            href="https://t.me/+79180445186"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => reachGoal('click_telegram')}
            className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300"
          >
            <Icon name="Send" size={20} />
            Telegram
          </a>
        </div>
      </div>
    </div>
  )
}
