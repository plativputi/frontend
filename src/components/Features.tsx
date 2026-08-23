import { useReveal } from '../hooks/useReveal'

const features = [
  {
    title: 'Bluetooth Low Energy',
    text: 'Используется энергоэффективная технология BLE — минимальный расход батареи телефона и маячка.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
        <path d="M7 7l10 10-5 5V2l5 5L7 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Автоопределение маршрута',
    text: 'Приложение показывает номер маршрута, госномер транспорта, следующую остановку и тариф.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
        <path d="M12 22s8-7 8-13a8 8 0 1 0-16 0c0 6 8 13 8 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: 'История поездок',
    text: 'Все поездки и платежи сохраняются в приложении — можно в любой момент посмотреть историю.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
        <path d="M3 12h4l2 6 4-12 2 6h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Push-уведомления',
    text: 'При входе в транспорт приходит уведомление — достаточно нажать, чтобы подтвердить оплату.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
        <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Несколько способов оплаты',
    text: 'Поддержка СБП, транспортных (льготных) и банковских карт — выбирайте удобный вам способ.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
        <rect x="2" y="5" width="20" height="14" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M2 10h20" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: 'Шире транспорта',
    text: 'Технологию можно расширить на платные парковки, музеи, выставки, электронную очередь и магазины.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
]

export function Features() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="features" className="features">
      <div className="container">
        <div ref={ref} className={`features__head ${visible ? 'visible' : ''}`}>
          <span className="section-label">Возможности</span>
          <h2 className="section-title">Что умеет «Плати в пути»</h2>
          <p className="section-subtitle">
            Технология Bluetooth Low Energy позволяет сделать оплату проезда
            быстрой, безопасной и незаметной для пассажира.
          </p>
        </div>
        <div className="features__grid">
          {features.map((f, i) => (
            <div
              key={i}
              className={`features__card reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.1 + i * 0.08}s` }}
            >
              <div className="features__icon">{f.icon}</div>
              <h3 className="features__card-title">{f.title}</h3>
              <p className="features__card-text">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
