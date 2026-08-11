import { site } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container-wide footer-inner">
        <div>
          <p className="footer-brand">
            {site.name} <span className="muted-name">/ {site.surname}</span>
          </p>
          <p className="footer-blurb">
            QA Engineer in {site.location}.
          </p>
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href={site.links.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
          </div>
          <p className="footer-copy">
            © {year} {site.name} {site.surname}
          </p>
        </div>
      </div>
    </footer>
  )
}
