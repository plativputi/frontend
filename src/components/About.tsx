import { useReveal } from '../hooks/useReveal'

export function About() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="about" className="about">
      <div className="container">
        <div ref={ref} className={`about__inner ${visible ? 'visible' : ''}`}>
          <div className="about__text">
            <span className="section-label">О проекте</span>
            <h2 className="section-title">ООО «Плати в пути»</h2>
            <p className="about__lead">
              Мы — стартап, который делает оплату проезда
              в общественном транспорте простой и незаметной.
            </p>
            <p className="about__desc">
              «Плати в пути» — цифровой сервис, определяющий нахождение
              пассажира в общественном транспорте и инициирующий оплату
              проезда с помощью технологии Bluetooth Low Energy. Проект
              был представлен на форуме инновационных финансовых технологий
              FINOPOLIS 2023, организованном Банком России, и вызвал интерес
              со стороны представителей финансового сектора.
            </p>

          </div>

          <div className="about__logo-card">
            <div className="about__logo-header">Создано при поддержке</div>
            <div className="about__logo-body">
              <div className="about__fasie-logo">
                <img
                  src="/743.png"
                  alt="Фонд содействия инновациям"
                  className="about__logo-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
