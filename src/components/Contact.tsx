import { contact, site } from '../data/content'

const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(site.email)}&su=${encodeURIComponent('Portfolio contact')}`

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container-wide contact-row reveal">
        <div>
          <h2>{contact.title}</h2>
          <p className="contact-copy">{contact.text}</p>
          <p className="contact-details">
            {site.location}
            <span aria-hidden="true"> · </span>
            <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
          </p>
        </div>
        <div className="cta-row contact-actions">
          <a
            className="btn btn-primary"
            href={gmailCompose}
            target="_blank"
            rel="noopener noreferrer"
          >
            Email me
          </a>
          <a className="btn btn-ghost" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <a
            className="btn btn-ghost"
            href={site.links.telegram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </a>
        </div>
      </div>
    </section>
  )
}
