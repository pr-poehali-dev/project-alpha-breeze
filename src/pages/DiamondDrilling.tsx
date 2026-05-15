import { WaitlistSignup } from "@/components/WaitlistSignup"
import { Toaster } from "@/components/ui/toaster"
import { Helmet } from "react-helmet"

export default function DiamondDrilling() {
  return (
    <>
      <Helmet>
        <title>Алмазное бурение в ДНР | Уборка после работ в подарок | Донецк</title>
        <meta name="description" content="Алмазное бурение бетона, кирпича в ДНР. АКЦИЯ: уборка после работ в подарок! Отверстия под коммуникации, проемы в стенах. Без пыли. Звоните!" />
        <meta property="og:title" content="Алмазное бурение в ДНР — уборка в подарок!" />
        <meta property="og:description" content="Алмазное бурение отверстий и проемов любой сложности. АКЦИЯ: вывоз мусора и пыли уже включён в стоимость." />
        <meta property="og:image" content="https://cdn.poehali.dev/projects/75e3b623-6dd7-42bb-a412-70f93fe3f4f2/bucket/734a790e-6248-4c34-a16d-86aeab895172.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <main className="min-h-screen bg-white">
        <WaitlistSignup initialService="diamond-drilling" />
        <Toaster />
      </main>
    </>
  )
}