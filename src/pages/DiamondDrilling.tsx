import { WaitlistSignup } from "@/components/WaitlistSignup"
import { Toaster } from "@/components/ui/toaster"
import { Helmet } from "react-helmet"

export default function DiamondDrilling() {
  return (
    <>
      <Helmet>
        <title>Алмазное бурение в ДНР | Сверление отверстий и проемов в бетоне</title>
        <meta name="description" content="Алмазное бурение бетона, кирпича. Отверстия под коммуникации, проемы в несущих стенах. Диаметр 20-500 мм. Без пыли и вибрации. Звоните!" />
        <meta property="og:title" content="Алмазное бурение в ДНР — точное сверление без пыли" />
        <meta property="og:description" content="Алмазное бурение отверстий и проемов любой сложности. Диаметр 20-500 мм, глубина до 3 м." />
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
