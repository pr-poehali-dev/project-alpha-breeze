import { WaitlistSignup } from "@/components/WaitlistSignup"
import { Toaster } from "@/components/ui/toaster"
import { Helmet } from "react-helmet"

const backgroundStyle = `
  .bg-pattern {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image:
      linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px);
    background-size: 20px 20px;
    pointer-events: none;
    z-index: 1;
  }

  .content {
    position: relative;
    z-index: 2;
  }
`

export default function Index() {
  return (
    <>
      <Helmet>
        <meta property="og:image" content="https://cdn.poehali.dev/projects/75e3b623-6dd7-42bb-a412-70f93fe3f4f2/files/ab0f00cd-5cde-45b5-a916-8b2753964161.jpg" />
        <meta property="og:image:width" content="2050" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:title" content="Профессиональное бурение - Донецк, Макеевка, Харцызск, ДНР" />
        <meta property="og:description" content="15+ лет опыта, 500+ выполненных работ. Бурение скважин, алмазное бурение, услуги мини-экскаватора, подрядные работы" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://cdn.poehali.dev/projects/75e3b623-6dd7-42bb-a412-70f93fe3f4f2/files/ab0f00cd-5cde-45b5-a916-8b2753964161.jpg" />
      </Helmet>
      <main
        className="min-h-screen flex items-center justify-center"
        style={{
          background: "radial-gradient(circle at center, #1E40AF, #000000)",
        }}
      >
        <style>{backgroundStyle}</style>
        <div className="bg-pattern"></div>
        <div className="content w-full">
          <WaitlistSignup />
        </div>
        <Toaster />
      </main>
    </>
  )
}