import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Icon from '@/components/ui/icon'
import { Loader2 } from 'lucide-react'
import { useToast } from "@/hooks/use-toast"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface WaitlistFormProps {
  onSuccess: (count: number) => void;
}

export function WaitlistForm({ onSuccess }: WaitlistFormProps) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [isPending, setIsPending] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!name || !phone) return

    setIsPending(true)

    try {
      const response = await fetch('https://functions.poehali.dev/59d997b0-43b2-4f71-a432-d0a55ec2ec5d', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        toast({
          title: "Заявка принята!",
          description: "Мы свяжемся с вами в течение часа",
          duration: 5000,
        })
        onSuccess(1)
        setName('')
        setPhone('')
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

  return (
    <div className="w-full space-y-4 mb-8">
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="overflow-hidden rounded-xl bg-white/5 p-1 ring-1 ring-white/20 focus-within:ring-2 focus-within:ring-blue-500">
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Ваше имя"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border-0 bg-transparent text-white placeholder:text-gray-400 focus:ring-0 focus:border-transparent focus-visible:border-transparent focus:outline-none active:ring-0 active:outline-none focus-visible:ring-0 focus-visible:outline-none active:border-transparent focus-visible:ring-offset-0"
          />
        </div>
        <div className="overflow-hidden rounded-xl bg-white/5 p-1 ring-1 ring-white/20 focus-within:ring-2 focus-within:ring-blue-500">
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Телефон"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border-0 bg-transparent text-white placeholder:text-gray-400 focus:ring-0 focus:border-transparent focus-visible:border-transparent focus:outline-none active:ring-0 active:outline-none focus-visible:ring-0 focus-visible:outline-none active:border-transparent focus-visible:ring-offset-0"
          />
        </div>
        <Button
          type="submit"
          disabled={isPending}
          className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 rounded-xl transition-all duration-300 ease-in-out focus:outline-none"
        >
          {isPending ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            'Оставить заявку'
          )}
        </Button>
      </form>
      
      <div className="text-center">
        <p className="text-gray-400 text-sm mb-3">или свяжитесь с нами</p>
        <div className="flex gap-3 justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300">
                <Icon name="Phone" size={20} />
                Позвонить
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-900 border-gray-700">
              <DropdownMenuItem asChild>
                <a href="tel:+79494816485" className="flex items-center gap-2 cursor-pointer text-white hover:text-blue-300">
                  <Icon name="Phone" size={16} />
                  +7 (949) 481-64-85
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="tel:+79180445186" className="flex items-center gap-2 cursor-pointer text-white hover:text-blue-300">
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