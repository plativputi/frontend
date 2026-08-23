import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const faqs = [
  {
    q: 'Нужно ли интернет-соединение в транспорте?',
    a: 'Для определения транспорта используется Bluetooth Low Energy, который работает без интернета. Для самой оплаты на сервере требуется подключение — оно есть в большинстве современных автобусов.',
  },
  {
    q: 'Какой нужен смартфон?',
    a: 'Подойдёт любой смартфон с поддержкой Bluetooth Low Energy — это практически все телефоны последних лет на Android и iOS.',
  },
  {
    q: 'Будет ли автоматический режим без касаний?',
    a: 'Да, это наша главная цель. В полностью автоматическом режиме приложение само определит поездку и спишет оплату — телефон доставать из кармана не придётся.',
  },
  {
    q: 'Можно ли оплатить проезд ребёнку или льготный билет?',
    a: 'Мы планируем поддерживать разные способы оплаты, включая транспортные (льготные) карты. Сервис будет учитывать тарифную сетку и льготы.',
  },
  {
    q: 'Где работает сервис?',
    a: 'Проект находится в стадии развития. Сейчас отрабатываются ручной и полуавтоматический режимы оплаты. Следите за новостями на нашей странице.',
  },
]

export function Faq() {
  const { ref, visible } = useReveal<HTMLDivElement>()
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="faq">
      <div className="container">
        <div ref={ref} className={`faq__head ${visible ? 'visible' : ''}`}>
          <span className="section-label">Вопросы</span>
          <h2 className="section-title">Частые вопросы</h2>
        </div>
        <div className="faq__list">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`faq__item reveal ${visible ? 'visible' : ''} ${open === i ? 'faq__item--open' : ''}`}
              style={{ transitionDelay: `${0.1 + i * 0.06}s` }}
            >
              <button
                className="faq__question"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{item.q}</span>
                <span className={`faq__chevron ${open === i ? 'faq__chevron--open' : ''}`}>
                  <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
              <div className="faq__answer-wrap">
                <p className="faq__answer">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
