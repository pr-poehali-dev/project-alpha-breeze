import Icon from "@/components/ui/icon"
import reachGoal from "@/lib/metrika"

export const MAX_URL = "https://max.ru/u/f9LHodD0cOJ9_0IO5WPJI_DDElg9f8iBuK8tyXEK2zSmhTzweWY9JORgyuU"

export function MaxButton({ location }: { location: string }) {
  return (
    <a
      href={MAX_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => reachGoal("click_max", { location })}
      className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
    >
      <Icon name="MessageCircle" fallback="Circle" size={20} />
      Написать в MAX
    </a>
  )
}

export default MaxButton