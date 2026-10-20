import { useState } from 'react'
import aboutPortrait from '../assets/about-reference.jpg'
import heroPortrait from '../assets/hero-reference.jpg'
import { Icon } from '../components/Icon'
import { services } from '../data/services'

const stats = [
  { label: 'Project', value: '300+', icon: 'project' },
  { label: 'Pleasure', value: '8,9', icon: 'chart' },
  { label: 'Customer', value: '3000+', icon: 'person' },
  { label: 'Team Members', value: '23', icon: 'team' },
] as const

export function HomePage({ searchTerm }: { searchTerm: string }) {
  const [showAll, setShowAll] = useState(false)
  const matchingServices = services.filter((service) =>
    `${service.title} ${service.description}`.toLowerCase().includes(searchTerm.trim().toLowerCase()),
  )
  const visibleServices = showAll || searchTerm.trim()
    ? matchingServices
    : matchingServices.slice(0, 4)

  return (
    <>
      <section className="hero-section content-width" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Creative designer</p>
          <h1>We are <span>creative</span><br />designers</h1>
          <div className="accent-rule" />
          <p className="body-copy">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="hero-portrait portrait-frame">
          <img alt="Creative designer looking thoughtfully into the distance" src={heroPortrait} />
          <span className="portrait-glow" />
        </div>
      </section>

      <section className="services-section content-width" id="services">
        <div className="section-copy">
          <p className="eyebrow">Our services</p>
          <h2>What we <span>do?</span></h2>
          <div className="accent-rule" />
          <p className="body-copy">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <p className="body-copy second-paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
          </p>
          <button className="primary-button" onClick={() => setShowAll((all) => !all)} type="button">
            {showAll ? 'Show less' : 'View all'}
          </button>
        </div>
        <div aria-live="polite" className="services-grid">
          {visibleServices.map((service, index) => (
            <article className={`service-card service-card-${index + 1}`} key={service.title}>
              <Icon className="service-icon" name={service.icon} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
          {searchTerm && matchingServices.length === 0 && (
            <p className="empty-search">No services found. Try “design” or “app”.</p>
          )}
        </div>
      </section>

      <section className="about-section content-width" id="about">
        <div className="about-portrait">
          <img alt="A woman listening to music in a quiet moment" src={aboutPortrait} />
        </div>
        <div className="about-copy">
          <p className="eyebrow">About us</p>
          <h2>Who are <span>we?</span></h2>
          <div className="accent-rule" />
          <p className="body-copy">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type.
          </p>
          <div className="values-grid">
            <article className="value-item">
              <div className="value-heading"><Icon name="design" /><h3>Clean Code</h3></div>
              <p>Lorem Ipsum is simply dummy text of the printing.</p>
            </article>
            <article className="value-item">
              <div className="value-heading"><Icon name="layout" /><h3>Modern Design</h3></div>
              <p>Lorem Ipsum is simply dummy text of the printing.</p>
            </article>
          </div>
        </div>
      </section>

      <section aria-label="Our achievements" className="stats-section">
        <div className="stats-grid">
          {stats.map((stat) => (
            <article className="stat-item" key={stat.label}>
              <Icon name={stat.icon} />
              <h3>{stat.label}</h3>
              <p>{stat.value}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
