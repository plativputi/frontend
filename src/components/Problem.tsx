import { useReveal } from '../hooks/useReveal'

const problems = [
  {
    icon: '👥',
    title: 'Толпа в час пик',
    text: 'В часы пик пробираться через толпу к валидатору — стресс и потеря времени.',
  },
  {
    icon: '💳',
    title: 'Передача карты',
    text: 'Передавать банковскую карту или телефон через несколько человек — риск потерять имущество.',
  },
  {
    icon: '🎫',
    title: 'Наличные и билеты',
    text: 'Искать мелочь, покупать бумажный билет у водителя — неудобно и долго.',
  },
  {
    icon: '⏱️',
    title: 'Задержки рейсов',
    text: 'Оплата на входе задерживает посадку и увеличивает время стоянки транспорта.',
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
