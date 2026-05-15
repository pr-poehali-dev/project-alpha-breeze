import { WaitlistSignup } from "@/components/WaitlistSignup"
import { Toaster } from "@/components/ui/toaster"
import { Helmet } from "react-helmet"

export default function Contracting() {
  return (
    <>
      <Helmet>
        <title>Подрядные работы в ДНР под ключ | Смета и проект бесплатно</title>
        <meta name="description" content="Подрядные работы под ключ в ДНР. АКЦИЯ: смета и проект бесплатно! Строительство, монтаж коммуникаций, отделка. Полный цикл с гарантией. Звоните!" />
        <meta property="og:title" content="Подрядные работы под ключ — смета и проект в подарок!" />
        <meta property="og:description" content="Комплексные подрядные работы: фундаменты, монтаж, отделка. АКЦИЯ: расчёт сметы и составление плана работ без оплаты." />
        <meta property="og:image" content="https://cdn.poehali.dev/projects/75e3b623-6dd7-42bb-a412-70f93fe3f4f2/files/fdf240fb-6609-4dd1-9938-b20bf7a30eff.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <main className="min-h-screen bg-white">
        <WaitlistSignup initialService="contracting" />
        <Toaster />
      </main>
    </>
  )
}