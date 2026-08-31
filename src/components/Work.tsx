import { useState } from 'react'
import { projects } from '../data/content'

const INITIAL = 4

export default function Work() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? projects : projects.slice(0, INITIAL)

  return (
    <section className="section border-b" id="work">
      <div className="container-wide reveal">
        <div className="section-head">
          <div>
            <p className="eyebrow">Selected Work</p>
            <h2>Things I built.</h2>
          </div>
          {projects.length > INITIAL ? (
            <button
              type="button"
              className="text-link"
              onClick={() => setShowAll((v) => !v)}
            >
              {showAll ? 'Show less' : 'See all →'}
            </button>
          ) : null}
        </div>

        <ul className="work-list">
          {visible.map((project) => {
            const isLink = Boolean(project.href)
            const className = 'work-row'
            const meta = (
              <>
                <div className="work-main">
                  <div className="work-title-row">
                    <h3>{project.title}</h3>
                    {project.status ? (
                      <span className={`badge badge-${project.statusTone ?? 'muted'}`}>
                        {project.status}
                      </span>
                    ) : null}
                  </div>
                  <p>{project.summary}</p>
                </div>
                <div className="work-meta">
                  {project.year} | {project.role}
                </div>
              </>
            )

            return (
              <li key={project.title}>
                {isLink ? (
                  <a
                    className={className}
                    href={project.href!}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {meta}
                  </a>
                ) : (
                  <div className={className}>{meta}</div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
