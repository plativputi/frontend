import { useReveal } from '../hooks/useReveal'

const problems = [
  {
    title: 'Толпа в час пик',
    text: 'В часы пик пробираться через толпу к валидатору — стресс и потеря времени.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
        <circle cx="9" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 19c0-3 2.7-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M16 14.4c2.9.2 5 2.1 5 4.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Передача карты',
    text: 'Передавать банковскую карту или телефон через несколько человек — риск потерять имущество.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
        <rect x="2.5" y="6" width="19" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M2.5 10h19" stroke="currentColor" strokeWidth="1.8" />
        <path d="M6 14.5h3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Наличные и билеты',
    text: 'Искать мелочь, покупать бумажный билет у водителя — неудобно и долго.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
        <path d="M3 7.5A1.5 1.5 0 0 1 4.5 6h15A1.5 1.5 0 0 1 21 7.5V10a2 2 0 0 0 0 4v2.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 16.5V14a2 2 0 0 0 0-4V7.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M13 8.5v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="2 3" />
      </svg>
    ),
  },
  {
    title: 'Задержки рейсов',
    text: 'Оплата на входе задерживает посадку и увеличивает время стоянки транспорта.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 7v5.4l3.4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export function Problem() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section className="problem">
      <div className="container">
        <div ref={ref} className={`problem__head ${visible ? 'visible' : ''}`}>
          <span className="section-label">Проблема</span>
          <h2 className="section-title">Оплата проезда сегодня — это неудобно</h2>
          <p className="section-subtitle">
            Общественный транспорт — часть повседневной жизни, но сам процесс
            оплаты часто создаёт неудобства для пассажиров и перевозчиков.
          </p>
        </div>
        <div className="problem__grid">
          {problems.map((item, i) => (
            <div
              key={i}
              className={`problem__card reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
            >
              <div className="problem__icon">{item.icon}</div>
              <h3 className="problem__card-title">{item.title}</h3>
              <p className="problem__card-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
