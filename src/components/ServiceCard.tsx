import { Icon } from './Icon'
import { Link } from 'react-router-dom'
import type { Service } from '../data/services'

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="service-page-card">
      <Icon className="service-page-icon" name={service.icon} />
      <h2>{service.title}</h2>
      <p>{service.detail}</p>
      <Link className="text-link" to="/contact">
        Discuss this service <Icon name="arrow" />
      </Link>
    </article>
  )
}
