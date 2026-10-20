import { useMemo } from 'react'
import { ServiceCard } from '../components/ServiceCard'
import { services } from '../data/services'

export function ServicesPage({ searchTerm }: { searchTerm: string }) {
  const matchingServices = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase()
    if (!normalizedSearch) return services
    return services.filter((service) =>
      `${service.title} ${service.description} ${service.detail}`.toLowerCase().includes(normalizedSearch),
    )
  }, [searchTerm])

  return (
    <section className="inner-page services-page">
      <div className="page-heading">
        <p className="eyebrow">What we do</p>
        <h1>Good ideas, <span>made real.</span></h1>
        <p className="page-intro">
          From the first sketch to the final detail, we make thoughtful digital and visual work
          that helps brands show up with confidence.
        </p>
      </div>
      <div aria-live="polite" className="service-page-grid">
        {matchingServices.map((service) => <ServiceCard key={service.title} service={service} />)}
        {matchingServices.length === 0 && (
          <p className="empty-search">No services match “{searchTerm}”. Try “design” or “app”.</p>
        )}
      </div>
      <div className="page-cta">
        <p>Have something else in mind?</p>
        <a className="primary-button" href="/contact">Let&apos;s talk</a>
      </div>
    </section>
  )
}
