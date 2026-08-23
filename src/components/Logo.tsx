type LogoProps = {
  /** ink — тёмный знак на светлом фоне, light — жёлтый знак на тёмном */
  tone?: 'ink' | 'light'
  className?: string
}

export function Logo({ tone = 'ink', className = '' }: LogoProps) {
  return (
    <span className={`logo logo--${tone} ${className}`}>
      <svg className="logo__mark" viewBox="0 0 48 48" aria-hidden="true">
        <rect className="logo__tile" width="48" height="48" rx="14" />
        <g className="logo__glyph" fill="none" strokeWidth="4" strokeLinecap="round">
          <path d="M11 35h26" />
          <path d="M18.1 23.1A12 12 0 0 1 28.3 30.9" />
          <path d="M18.7 16.1A19 19 0 0 1 34.9 28.5" />
        </g>
        <circle className="logo__stop" cx="17" cy="35" r="4.5" />
      </svg>
      <span className="logo__word">
        плати<span className="logo__word-accent">в&nbsp;пути</span>
      </span>
    </span>
  )
}
