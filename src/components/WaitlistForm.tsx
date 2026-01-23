import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Icon from '@/components/ui/icon'
import { Loader2 } from 'lucide-react'
import { useToast } from "@/hooks/use-toast"

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

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Mock success response
    toast({
      title: "Заявка принята!",
      description: "Мы свяжемся с вами в течение часа",
      duration: 5000,
    })

    onSuccess(1)
    setName('')
    setPhone('')
    setIsPending(false)
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
        <p className="text-gray-400 text-sm mb-2">или</p>
        <a
          href="tel:+79999999999"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300"
        >
          <Icon name="Phone" size={20} />
          Позвонить сейчас
        </a>
      </div>
    </div>
  )
}