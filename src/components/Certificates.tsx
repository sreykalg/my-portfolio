import { useEffect, useState } from 'react'
import { certificates } from '../data/content'

export default function Certificates() {
  const [active, setActive] = useState<string | null>(null)
  const selected = certificates.find((cert) => cert.image === active) ?? null

  useEffect(() => {
    if (!selected) return undefined

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActive(null)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [selected])

  return (
    <section className="section border-b" id="certificates">
      <div className="container-wide reveal">
        <div className="section-head">
          <div>
            <p className="eyebrow">Credentials</p>
            <h2>Certificates.</h2>
          </div>
        </div>

        <ul className="cert-list">
          {certificates.map((cert) => (
            <li key={cert.title}>
              <button
                type="button"
                className="cert-row"
                onClick={() => setActive(cert.image)}
              >
                <img
                  className="cert-thumb"
                  src={cert.image}
                  alt=""
                  width={72}
                  height={52}
                />
                <div className="cert-copy">
                  <h3>{cert.title}</h3>
                  <p>{cert.subtitle}</p>
                </div>
                <span className="cert-action">View</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {selected ? (
        <div
          className="cert-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="cert-lightbox-close"
            aria-label="Close certificate"
            onClick={() => setActive(null)}
          >
            Close
          </button>
          <img
            src={selected.image}
            alt={`${selected.title}, ${selected.subtitle}`}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}
    </section>
  )
}
