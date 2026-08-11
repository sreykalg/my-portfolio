import { skills } from '../data/content'

export default function Skills() {
  return (
    <section className="section border-b" id="skills">
      <div className="container-wide split reveal">
        <div className="split-aside">
          <p className="eyebrow">{skills.label}</p>
          <h2>{skills.title}</h2>
        </div>
        <div className="split-main grid-2">
          {skills.groups.map((group) => (
            <article key={group.title} className="rail-item">
              <h3>{group.title}</h3>
              <p className="skill-line">{group.items.join(', ')}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
