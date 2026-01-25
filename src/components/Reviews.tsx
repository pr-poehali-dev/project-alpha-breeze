import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'

interface Review {
  id: number
  name: string
  rating: number
  text: string
  date: string
  source: 'yandex' | '2gis'
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Александр М.',
    rating: 5,
    text: 'Отличная работа! Пробурили скважину на 80 метров за два дня. Ребята профессионалы своего дела, все сделали быстро и качественно. Вода чистая, напор отличный. Рекомендую!',
    date: '15 декабря 2025',
    source: 'yandex'
  },
  {
    id: 2,
    name: 'Елена К.',
    rating: 5,
    text: 'Заказывали алмазное бурение для проведения труб через несущую стену. Работали аккуратно, без пыли и шума. Сделали всё точно по размерам. Очень довольны результатом!',
    date: '3 декабря 2025',
    source: '2gis'
  },
  {
    id: 3,
    name: 'Дмитрий В.',
    rating: 5,
    text: 'Нанимали мини-экскаватор для рытья траншеи под водопровод. Оператор опытный, работал быстро и точно. Территорию после себя привели в порядок. Цена адекватная, качество на высоте.',
    date: '28 ноября 2025',
    source: 'yandex'
  },
  {
    id: 4,
    name: 'Ирина П.',
    rating: 5,
    text: 'Делали ремонт дома под ключ. Бригада работала слаженно, все этапы выполнены качественно и в срок. Особенно порадовало внимание к деталям. Спасибо за профессионализм!',
    date: '20 ноября 2025',
    source: '2gis'
  },
  {
    id: 5,
    name: 'Сергей Т.',
    rating: 5,
    text: 'Бурили скважину на участке в труднодоступном месте. Малогабаритная техника позволила подъехать без проблем. Работа выполнена на отлично, вода пошла на глубине 65 метров.',
    date: '10 ноября 2025',
    source: 'yandex'
  },
  {
    id: 6,
    name: 'Ольга Н.',
    rating: 5,
    text: 'Заказывали комплекс работ: бурение скважины и обустройство. Всё сделали профессионально, установили насос, провели трубы, поставили кессон. Теперь у нас своя вода круглый год!',
    date: '5 ноября 2025',
    source: '2gis'
  },
  {
    id: 7,
    name: 'Владимир С.',
    rating: 5,
    text: 'Сделали отверстия под вентиляцию в железобетонных перекрытиях. Работа выполнена идеально ровно, без сколов и трещин. Рекомендую этих мастеров!',
    date: '1 ноября 2025',
    source: 'yandex'
  },
  {
    id: 8,
    name: 'Марина Л.',
    rating: 5,
    text: 'Планировали участок после строительства дома. Мини-экскаватор справился отлично, даже в узких местах. Быстро, аккуратно и по хорошей цене.',
    date: '25 октября 2025',
    source: '2gis'
  },
  {
    id: 9,
    name: 'Андрей К.',
    rating: 5,
    text: 'Бурили скважину на даче. Глубина 90 метров, вода отличного качества. Работа заняла три дня, всё сделано профессионально. Большое спасибо бригаде!',
    date: '18 октября 2025',
    source: 'yandex'
  },
  {
    id: 10,
    name: 'Татьяна Р.',
    rating: 5,
    text: 'Делали проем под дверь в несущей стене. Алмазное бурение - это просто спасение! Никакой пыли, работали тихо, соседи даже не жаловались. Результат превосходный!',
    date: '12 октября 2025',
    source: '2gis'
  },
  {
    id: 11,
    name: 'Игорь М.',
    rating: 5,
    text: 'Копали котлован под фундамент бани. Мини-экскаватор Kubota - отличная машина, везде прошел. Оператор знает свое дело. Работа выполнена быстро и качественно.',
    date: '5 октября 2025',
    source: 'yandex'
  },
  {
    id: 12,
    name: 'Наталья В.',
    rating: 5,
    text: 'Комплексный ремонт квартиры от стяжки до отделки. Ребята работали честно, в срок, без скрытых доплат. Качество работы на высшем уровне. Очень довольны!',
    date: '28 сентября 2025',
    source: '2gis'
  },
  {
    id: 13,
    name: 'Максим Г.',
    rating: 5,
    text: 'Бурили артезианскую скважину для коттеджа. Глубина 120 метров, дебит отличный. Установили хороший насос, все работает как часы. Профессиональный подход!',
    date: '20 сентября 2025',
    source: 'yandex'
  }
]

export function Reviews() {
  const [showAll, setShowAll] = useState(false)
  const displayedReviews = showAll ? reviews : reviews.slice(0, 4)

  return (
    <div className="w-full space-y-6 mb-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 uppercase">
          Отзывы клиентов
        </h3>
        <div className="flex items-center justify-center gap-4 text-gray-400 text-sm">
          <a
            href="https://yandex.ru/maps/org/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
            <span>Яндекс.Карты</span>
          </a>
          <span>•</span>
          <a
            href="https://2gis.ru/firm/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <Icon name="MapPin" size={16} />
            <span>2ГИС</span>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayedReviews.map((review) => (
          <div
            key={review.id}
            className="p-5 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="text-white font-semibold">{review.name}</h4>
                <p className="text-gray-400 text-xs">{review.date}</p>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              {review.text}
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Icon name={review.source === 'yandex' ? 'Star' : 'MapPin'} size={12} />
              <span>{review.source === 'yandex' ? 'Яндекс.Карты' : '2ГИС'}</span>
            </div>
          </div>
        ))}
      </div>

      {!showAll && reviews.length > 4 && (
        <div className="text-center">
          <Button
            onClick={() => setShowAll(true)}
            className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300"
          >
            Показать все отзывы ({reviews.length})
          </Button>
        </div>
      )}

      {showAll && (
        <div className="text-center">
          <Button
            onClick={() => setShowAll(false)}
            className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300"
          >
            Скрыть
          </Button>
        </div>
      )}
    </div>
  )
}