import { useReveal } from '../hooks/useReveal'
import { Logo } from './Logo'
import { COMPANY, GRANT } from '../company'

export function Footer() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <footer className="footer">
      <div className="container">
        <div ref={ref} className={`footer__inner ${visible ? 'visible' : ''}`}>
          <div className="footer__brand">
            <Logo tone="light" />
            <p className="footer__tagline">
              Оплата проезда по Bluetooth — без валидаторов, карт и очередей.
            </p>
          </div>

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
              <p className="footer__fasie-note">
                Программа «{GRANT.programme}», {GRANT.wave}
              </p>
              <a href="https://fasie.ru" target="_blank" rel="noopener noreferrer" className="footer__fasie-link">
                fasie.ru
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__legal">
            <p className="footer__company">{COMPANY.name}</p>
            <dl className="footer__requisites">
              <div>
                <dt>ИНН</dt>
                <dd>{COMPANY.inn}</dd>
              </div>
              <div>
                <dt>ОГРН</dt>
                <dd>{COMPANY.ogrn}</dd>
              </div>
              <div>
                <dt>ОКПО</dt>
                <dd>{COMPANY.okpo}</dd>
              </div>
            </dl>
            <p className="footer__address">{COMPANY.address}</p>
            <p className="footer__address">Генеральный директор — {COMPANY.director}</p>
          </div>
          <p className="footer__copyright">
            © {new Date().getFullYear()} {COMPANY.name}. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}
