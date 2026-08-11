import { useEffect, useState } from 'react'
import { nav, site } from '../data/content'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState('top')
  const [pressedId, setPressedId] = useState<string | null>(null)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const sections = nav
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!sections.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0.1, 0.35, 0.6],
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const close = () => setOpen(false)

  const handleNavClick = (id: string) => {
    setPressedId(id)
    setActiveId(id)
    window.setTimeout(() => setPressedId(null), 280)
    close()
  }

  return (
    <header className="site-header">
      <div className="container-wide header-inner">
        <a
          className="brand"
          href="#top"
          onClick={() => handleNavClick('top')}
        >
          <span className="brand-name">{site.name}</span>
          <span className="brand-slash"> / {site.surname}</span>
        </a>

        <nav className="nav-desktop" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={[
                activeId === item.id ? 'is-active' : '',
                pressedId === item.id ? 'is-pressed' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              aria-current={activeId === item.id ? 'true' : undefined}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className={`nav-toggle${open ? ' is-open' : ''}`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`nav-mobile${open ? ' is-open' : ''}`}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile">
          {nav.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={[
                activeId === item.id ? 'is-active' : '',
                pressedId === item.id ? 'is-pressed' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              style={{ transitionDelay: open ? `${index * 40}ms` : '0ms' }}
              aria-current={activeId === item.id ? 'true' : undefined}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
