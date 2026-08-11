import { positioning } from '../data/content'

export default function Positioning() {
  return (
    <section className="section border-b" id="about">
      <div className="container-wide split reveal">
        <div className="split-aside">
          <p className="eyebrow">{positioning.label}</p>
          <h2>{positioning.title}</h2>
        </div>
        <div className="split-main grid-2">
          {positioning.items.map((item) => (
            <article key={item.title} className="rail-item">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
