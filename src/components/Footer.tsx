import { useReveal } from '../hooks/useReveal'

export function Footer() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <footer className="footer">
      <div className="container">
        <div ref={ref} className={`footer__inner ${visible ? 'visible' : ''}`}>
          <div className="footer__links">
            <h4 className="footer__links-title">Навигация</h4>
            <a href="#how">Как это работает</a>
            <a href="#features">Возможности</a>
            <a href="#about">О проекте</a>
            <a href="#faq">Вопросы</a>
          </div>

          <div className="footer__links">
            <h4 className="footer__links-title">Проект</h4>
            <span>Стартап</span>
            <span>FINOPOLIS 2023</span>
            <span>Технология BLE</span>
          </div>

          <div className="footer__links">
            <h4 className="footer__links-title">Контакты</h4>
            <a href="mailto:plativputi@yandex.ru">plativputi@yandex.ru</a>
            <a href="https://vk.ru/plativputi" target="_blank" rel="noopener noreferrer">ВКонтакте</a>
          </div>

          <div className="footer__support">
            <h4 className="footer__links-title">При поддержке</h4>
            <div className="footer__fasie">
              <div className="footer__fasie-logo">
                <img src={`${import.meta.env.BASE_URL}743.png`} alt="Фонд содействия инновациям" />
              </div>
              <a href="https://fasie.ru" target="_blank" rel="noopener noreferrer" className="footer__fasie-link">
                fasie.ru
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__legal">
            <p className="footer__company">ООО «Плати в пути»</p>
            <p className="footer__city">Россия</p>
          </div>
          <p className="footer__copyright">
            © {new Date().getFullYear()} ООО «Плати в пути». Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}
