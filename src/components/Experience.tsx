import { experience } from '../data/content'

export default function Experience() {
  return (
    <section className="section border-b" id="experience">
      <div className="container-wide split reveal">
        <div className="split-aside">
          <p className="eyebrow">{experience.label}</p>
          <h2>{experience.title}</h2>
        </div>
        <div className="split-main stack">
          {experience.items.map((item) => (
            <article key={item.title} className="rail-item">
              <div className="exp-head">
                <h3>{item.title}</h3>
                {item.current ? (
                  <span
                    className="status-dot"
                    title="Current"
                    aria-label="Current role"
                  />
                ) : null}
              </div>
              <p className="exp-meta">
                {item.org}
                <span aria-hidden="true"> | </span>
                {item.period}
              </p>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
