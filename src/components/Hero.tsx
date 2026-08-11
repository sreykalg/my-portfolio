import { hero, site } from '../data/content'

export default function Hero() {
  return (
    <section className="section hero border-b" id="top">
      <div className="container-wide hero-inner reveal">
        <div className="hero-top">
          <div className="hero-copy">
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1 className="hero-title">
              {site.name}{' '}
              <span className="muted-name">/ {site.surname}</span>
            </h1>
            <p className="hero-lead">
              {hero.intro.split(hero.highlight).map((part, i, arr) =>
                i < arr.length - 1 ? (
                  <span key={i}>
                    {part}
                    <strong>{hero.highlight}</strong>
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                ),
              )}
            </p>

            <div className="cta-row">
              {hero.ctas.map((cta) => (
                <a
                  key={cta.label}
                  href={cta.href}
                  className={cta.primary ? 'btn btn-primary' : 'btn btn-ghost'}
                >
                  {cta.label}
                </a>
              ))}
              <a
                className="btn btn-ghost"
                href={site.resume}
                download="Sreyka-Leng-Resume.pdf"
              >
                Resume
              </a>
            </div>
          </div>

          <div className="hero-photo">
            <img
              src={site.portrait}
              alt={`${site.name} ${site.surname}`}
              width={280}
              height={280}
            />
          </div>
        </div>

        <dl className="hero-meta">
          {hero.meta.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
