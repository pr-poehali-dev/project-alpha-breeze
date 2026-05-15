import { WaitlistSignup } from "@/components/WaitlistSignup"
import { Toaster } from "@/components/ui/toaster"
import { Helmet } from "react-helmet"

export default function WellDrilling() {
  return (
    <>
      <Helmet>
        <title>Бурение скважин на воду в ДНР под ключ | Насос в подарок | Донецк, Макеевка</title>
        <meta name="description" content="Бурение скважин на воду в ДНР под ключ. АКЦИЯ: насос и его установка в подарок! Поиск воды, бурение до 200 м, обустройство с гарантией. Звоните!" />
        <meta property="og:title" content="Бурение скважин на воду в ДНР — насос в подарок!" />
        <meta property="og:description" content="Бурение скважин до 200 метров с гарантией. АКЦИЯ: насосное оборудование и его монтаж бесплатно при заказе бурения." />
        <meta property="og:image" content="https://cdn.poehali.dev/projects/75e3b623-6dd7-42bb-a412-70f93fe3f4f2/files/89709df5-b087-4873-877e-fd22a613d295.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <main className="min-h-screen bg-white">
        <WaitlistSignup initialService="well-drilling" />
        <Toaster />
      </main>
    </>
  )
}