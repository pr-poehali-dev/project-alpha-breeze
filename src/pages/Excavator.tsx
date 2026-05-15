import { WaitlistSignup } from "@/components/WaitlistSignup"
import { Toaster } from "@/components/ui/toaster"
import { Helmet } from "react-helmet"

export default function Excavator() {
  return (
    <>
      <Helmet>
        <title>Услуги мини-экскаватора в ДНР | Kubota — траншеи, котлованы, планировка</title>
        <meta name="description" content="Аренда мини-экскаватора Kubota в ДНР. Рытье траншей и котлованов, планировка участка, ландшафтные работы. Работа в ограниченном пространстве. Звоните!" />
        <meta property="og:title" content="Услуги мини-экскаватора в ДНР — земляные работы под ключ" />
        <meta property="og:description" content="Мини-экскаватор Kubota: траншеи, котлованы, планировка, ландшафт. Компактная техника для любых задач." />
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
