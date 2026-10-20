import { useState, type FormEvent } from 'react'
import { Icon } from '../components/Icon'

const contactEmail = 'hello@hykrox.design'

export function ContactPage() {
  const [status, setStatus] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const service = String(formData.get('service') ?? 'Project enquiry')
    const message = String(formData.get('message') ?? '').trim()
    const subject = encodeURIComponent(`${service} — ${name}`)
    const body = encodeURIComponent(`From: ${name}\nReply to: ${email}\n\n${message}`)

    setStatus('Your email app should open with your message ready to send.')
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`
  }

  return (
    <section className="inner-page contact-page">
      <div className="page-heading">
        <p className="eyebrow">Get in touch</p>
        <h1>Let&apos;s make <span>something good.</span></h1>
        <p className="page-intro">
          Have a project in mind or just want to say hello? Tell us a little about it and we&apos;ll
          take it from there.
        </p>
      </div>
      <div className="contact-layout">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              Your name
              <input autoComplete="name" name="name" placeholder="Name" required />
            </label>
            <label>
              Email address
              <input autoComplete="email" name="email" placeholder="you@example.com" required type="email" />
            </label>
          </div>
          <label>
            What can we help with?
            <select defaultValue="" name="service" required>
              <option disabled value="">Choose a service</option>
              <option>Website design</option>
              <option>Mobile & desktop app</option>
              <option>UI / UX design</option>
              <option>Photo editing</option>
              <option>Something else</option>
            </select>
          </label>
          <label>
            Tell us about your project
            <textarea name="message" placeholder="A few details about what you have in mind..." required rows={5} />
          </label>
          <button className="primary-button form-submit" type="submit">
            Send an enquiry <Icon name="arrow" />
          </button>
          <p aria-live="polite" className="form-status">{status}</p>
        </form>
        <aside className="contact-details">
          <p className="eyebrow">Contact details</p>
          <h2>Good conversations<br /><span>start here.</span></h2>
          <a className="contact-detail" href={`mailto:${contactEmail}`}>
            <Icon name="mail" />
            <span><small>Email us</small>{contactEmail}</span>
          </a>
          <div className="contact-detail">
            <Icon name="pin" />
            <span><small>Working worldwide</small>Available for remote collaborations</span>
          </div>
          <p className="contact-note">
            The form opens your email app with your message prepared. You can review it before
            sending.
          </p>
        </aside>
      </div>
    </section>
  )
}
