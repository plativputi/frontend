import { useReveal } from '../hooks/useReveal'

export function Hero() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="top" className="hero">
      <div className="hero__bg" />
      <div className="container hero__container">
        <div ref={ref} className={`hero__content ${visible ? 'visible' : ''}`}>
          <h1 className="hero__title">
            Оплата проезда<br />
            <span className="hero__title-accent">без валидатора</span><br />
            и очередей
          </h1>
          <p className="hero__desc">
            «Плати в пути» — сервис, который автоматически определяет,
            что вы зашли в общественный транспорт, и списывает оплату
            через Bluetooth. Без карточек, наличных и толпы у валидатора.
          </p>
          <div className="hero__actions">
            <a href="#how" className="hero__btn hero__btn--primary">
              Как это работает
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#about" className="hero__btn hero__btn--ghost">
              О проекте
            </a>
          </div>
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num">BLE</span>
              <span className="hero__stat-label">Технология</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">0</span>
              <span className="hero__stat-label">Касаний валидатора</span>
            </div>
          </div>
        </div>

        <div className={`hero__visual ${visible ? 'visible' : ''}`}>
          <div className="hero__phone">
            <div className="hero__phone-notch" />
            <div className="hero__phone-screen">
              <div className="hero__phone-header">
                <span className="hero__phone-time">9:41</span>
                <div className="hero__phone-icons">
                  <span className="hero__phone-icon-bar" />
                  <span className="hero__phone-icon-bar" />
                </div>
              </div>
              <div className="hero__phone-card">
                <div className="hero__phone-bus-icon">
                  <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
                    <rect x="8" y="12" width="32" height="24" rx="4" fill="currentColor" />
                    <rect x="12" y="16" width="14" height="10" rx="2" fill="#fff" opacity="0.8" />
                    <rect x="30" y="16" width="6" height="10" rx="2" fill="#fff" opacity="0.8" />
                    <circle cx="16" cy="38" r="3" fill="currentColor" />
                    <circle cx="32" cy="38" r="3" fill="currentColor" />
                  </svg>
                </div>
                <div className="hero__phone-route">Автобус № 42</div>
                <div className="hero__phone-stop">Остановка: Лермонтовская</div>
              </div>
              <div className="hero__phone-bluetooth">
                <div className="hero__phone-bt-ring" />
                <div className="hero__phone-bt-ring hero__phone-bt-ring--2" />
                <div className="hero__phone-bt-core">
                  <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
                    <path d="M7 7l10 10-5 5V2l5 5L7 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="hero__phone-pay">
                <div className="hero__phone-pay-amount">35 ₽</div>
                <div className="hero__phone-pay-status">
                  <span className="hero__phone-pay-check">
                    <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  Оплачено
                </div>
              </div>
            </div>
          </div>
          <div className="hero__float-card hero__float-card--1">
            <span className="hero__float-icon">
              <svg viewBox="0 0 24 24" fill="none" width="15" height="15">
                <rect x="4" y="5" width="16" height="11" rx="3" fill="currentColor" />
                <path d="M6 16v2M18 16v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <rect x="6.5" y="7.5" width="5" height="4" rx="1" fill="#0b0e14" />
                <rect x="12.5" y="7.5" width="5" height="4" rx="1" fill="#0b0e14" />
              </svg>
            </span>
            <span>Автобус определён</span>
          </div>
          <div className="hero__float-card hero__float-card--2">
            <span className="hero__float-icon">
              <svg viewBox="0 0 24 24" fill="none" width="15" height="15">
                <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span>Оплата прошла</span>
          </div>
        </div>
      </div>
    </section>
  )
}
