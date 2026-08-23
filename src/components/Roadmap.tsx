import { useReveal } from '../hooks/useReveal'

const phases = [
  {
    phase: 'Прототип',
    status: 'done',
    title: 'Создание сервиса',
    text: 'Разработан прототип приложения, определён маршрут, госномер и тарифная сетка. Сервис представлен на FINOPOLIS 2023.',
  },
  {
    phase: 'Ручной и полуавтоматический режим',
    status: 'done',
    title: 'Ручной режим оплаты',
    text: 'Внедрён ручной режим: пользователь сам заходит в приложение и подтверждает оплату проезда.',
  },
  {
    phase: 'Поддержка Фонда',
    status: 'done',
    title: 'Грантовая поддержка',
    text: 'Проект получил поддержку Фонда содействия инновациям — государственной организации развития стартапов.',
  },
  {
    phase: 'Автоматический режим',
    status: 'future',
    title: 'Оплата без касаний',
    text: 'Полностью автоматический режим: приложение само определит поездку и спишет оплату — телефон доставать не нужно.',
  },
  {
    phase: 'Новые сферы',
    status: 'future',
    title: 'Расширение технологии',
    text: 'Платные парковки, музеи и выставки с фиксированной стоимостью, электронная очередь, покупки в магазинах.',
  },
]

export function Roadmap() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section className="roadmap">
      <div className="container">
        <div ref={ref} className={`roadmap__head ${visible ? 'visible' : ''}`}>
          <span className="section-label">Планы развития</span>
          <h2 className="section-title">Куда мы движемся</h2>
          <p className="section-subtitle">
            От прототипа к полностью автоматической оплате проезда
            и расширению технологии на новые сферы.
          </p>
        </div>

        <div className="roadmap__timeline">
          <div className="roadmap__line" />
          {phases.map((p, i) => (
            <div
              key={i}
              className={`roadmap__item reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.15 + i * 0.1}s` }}
            >
              <div className={`roadmap__dot ${p.status === 'done' ? 'roadmap__dot--done' : 'roadmap__dot--future'}`}>
                {p.status === 'done' ? (
                  <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <span className="roadmap__dot-inner" />
                )}
              </div>
              <div className="roadmap__content">
                <span className={`roadmap__phase ${p.status === 'future' ? 'roadmap__phase--future' : ''}`}>
                  {p.phase}
                </span>
                <h3 className="roadmap__title">{p.title}</h3>
                <p className="roadmap__text">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
