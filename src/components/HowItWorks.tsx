import { useReveal } from '../hooks/useReveal'

const steps = [
  {
    num: '01',
    title: 'Включите Bluetooth',
    text: 'Активируйте Bluetooth на вашем смартфоне — больше ничего делать не нужно.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
        <path d="M7 7l10 10-5 5V2l5 5L7 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Зайдите в транспорт',
    text: 'Приложение автоматически обнаружит Bluetooth-маячок автобуса и определит маршрут.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
        <rect x="4" y="6" width="16" height="12" rx="3" fill="currentColor" opacity="0.2" />
        <path d="M4 10h16v6a2 2 0 0 1-2 2h-1a2 2 0 0 0-4 0H11a2 2 0 0 0-4 0H6a2 2 0 0 1-2-2v-6Z" fill="currentColor" />
        <circle cx="8" cy="18" r="1.5" fill="currentColor" />
        <circle cx="16" cy="18" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Подтвердите оплату',
    text: 'На экране появится информация о маршруте и стоимости — подтвердите оплату одним касанием.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Готово!',
    text: 'Оплата прошла. История всех поездок доступна в приложении в любой момент.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
        <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
]

export function HowItWorks() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="how" className="how">
      <div className="container">
        <div ref={ref} className={`how__head ${visible ? 'visible' : ''}`}>
          <span className="section-label">Как это работает</span>
          <h2 className="section-title">Четыре простых шага</h2>
          <p className="section-subtitle">
            Никаких валидаторов, карточек и мелочи. Только ваш смартфон
            и Bluetooth-маячок в транспорте.
          </p>
        </div>

        <div className="how__steps">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`how__step reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.15 + i * 0.12}s` }}
            >
              <div className="how__step-num">{step.num}</div>
              <div className="how__step-icon">{step.icon}</div>
              <h3 className="how__step-title">{step.title}</h3>
              <p className="how__step-text">{step.text}</p>
              {i < steps.length - 1 && <div className="how__step-arrow" />}
            </div>
          ))}
        </div>

        <div className={`how__modes reveal ${visible ? 'visible' : ''}`}>
          <h3 className="how__modes-title">Режимы оплаты</h3>
          <div className="how__modes-grid">
            <div className="how__mode how__mode--accent">
              <span className="how__mode-tag">Сейчас</span>
              <h4 className="how__mode-name">Ручной</h4>
              <p className="how__mode-desc">
                Пользователь сам заходит в приложение, выбирает способ оплаты
                и подтверждает платёж.
              </p>
            </div>
            <div className="how__mode">
              <span className="how__mode-tag how__mode-tag--future">В планах</span>
              <h4 className="how__mode-name">Полуавтоматический</h4>
              <p className="how__mode-desc">
                После определения в транспорте приходит push-уведомление —
                остаётся только сверить данные и оплатить.
              </p>
            </div>
            <div className="how__mode">
              <span className="how__mode-tag how__mode-tag--future">В планах</span>
              <h4 className="how__mode-name">Автоматический</h4>
              <p className="how__mode-desc">
                Проезд оплачивается полностью автоматически — даже телефон
                доставать из кармана не придётся.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
