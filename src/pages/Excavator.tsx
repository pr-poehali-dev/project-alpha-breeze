import { WaitlistSignup } from "@/components/WaitlistSignup"
import { Toaster } from "@/components/ui/toaster"
import { Helmet } from "react-helmet"

export default function Excavator() {
  return (
    <>
      <Helmet>
        <title>Услуги мини-экскаватора в ДНР | Первый час бесплатно | Kubota</title>
        <meta name="description" content="Аренда мини-экскаватора Kubota в ДНР. АКЦИЯ: первый час работы бесплатно! Траншеи, котлованы, планировка участка, ландшафт. Звоните!" />
        <meta property="og:title" content="Мини-экскаватор в ДНР — первый час бесплатно!" />
        <meta property="og:description" content="Мини-экскаватор Kubota: траншеи, котлованы, планировка. АКЦИЯ: при заказе от 4 часов — час работы в подарок." />
        <meta property="og:image" content="https://cdn.poehali.dev/projects/75e3b623-6dd7-42bb-a412-70f93fe3f4f2/files/251fa8dc-fbda-478a-9fa2-9757006db152.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <main className="min-h-screen bg-white">
        <WaitlistSignup initialService="excavator" />
        <Toaster />
      </main>
    </>
  )
}