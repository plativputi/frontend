import { useState } from 'react'
import { useScrollPosition } from '../hooks/useScrollPosition'

export function Header() {
  const scrolled = useScrollPosition()
  const [open, setOpen] = useState(false)

  const navLinks = [
    { href: '#how', label: 'Как это работает' },
    { href: '#features', label: 'Возможности' },
    { href: '#about', label: 'О проекте' },
    { href: '#faq', label: 'Вопросы' },
  ]

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''} ${open ? 'header--open' : ''}`}>
      <div className="container header__inner">
        <a href="#top" className="header__logo" onClick={() => setOpen(false)}>
          <img src={`${import.meta.env.BASE_URL}plati-logo.svg`} alt="Плати в пути" className="header__logo-img" />
        </a>

        <nav className="header__nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="header__nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__contact">
          <a href="mailto:plativputi@yandex.ru" className="header__email">
            plativputi@yandex.ru
          </a>
          <a
            href="https://vk.ru/plativputi"
            target="_blank"
            rel="noopener noreferrer"
            className="header__cta"
          >
            Связаться
          </a>
        </div>

        <button
          type="button"
          className={`header__burger ${open ? 'header__burger--active' : ''}`}
          aria-label="Меню"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`header__mobile ${open ? 'header__mobile--open' : ''}`}>
        <nav className="header__mobile-nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="header__mobile-link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="header__mobile-contact">
          <a href="mailto:plativputi@yandex.ru" className="header__mobile-email">
            plativputi@yandex.ru
          </a>
          <a
            href="https://vk.ru/plativputi"
            target="_blank"
            rel="noopener noreferrer"
            className="header__mobile-cta"
            onClick={() => setOpen(false)}
          >
            Связаться
          </a>
        </div>
      </div>
    </header>
  )
}
