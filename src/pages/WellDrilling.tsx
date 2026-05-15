import { WaitlistSignup } from "@/components/WaitlistSignup"
import { Toaster } from "@/components/ui/toaster"
import { Helmet } from "react-helmet"

export default function WellDrilling() {
  return (
    <>
      <Helmet>
        <title>Бурение скважин на воду в ДНР под ключ | Донецк, Макеевка, Харцызск</title>
        <meta name="description" content="Профессиональное бурение скважин на воду в ДНР. Поиск водоносного слоя, бурение до 200 м, установка насоса, обустройство. Гарантия. Звоните!" />
        <meta property="og:title" content="Бурение скважин на воду в ДНР под ключ" />
        <meta property="og:description" content="Бурение скважин на воду до 200 метров с гарантией. Поиск воды, обустройство, установка насоса." />
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
