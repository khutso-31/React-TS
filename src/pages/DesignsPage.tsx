import { useState } from 'react'
import { Icon } from '../components/Icon'

const projects = [
  {
    title: 'Form & Function',
    category: 'Website design',
    kind: 'web',
    image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1000&q=85',
    description: 'A calm digital storefront for a considered homeware collection.',
  },
  {
    title: 'After Hours',
    category: 'Poster & campaign',
    kind: 'poster',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=85',
    description: 'Electric colour and a bold type system for a live music series.',
  },
  {
    title: 'Good Ground',
    category: 'Brand identity',
    kind: 'identity',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1000&q=85',
    description: 'A fresh identity for a community-led food and culture project.',
  },
  {
    title: 'Open Space',
    category: 'App experience',
    kind: 'app',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85',
    description: 'A clean, flexible interface that makes room for better work.',
  },
  {
    title: 'Still / Life',
    category: 'Photo direction',
    kind: 'photo',
    image: 'https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=1000&q=85',
    description: 'Warm, tactile imagery and art direction for a small-batch studio.',
  },
  {
    title: 'New Ritual',
    category: 'Graphic design',
    kind: 'graphic',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1000&q=85',
    description: 'A playful graphic language designed to stand out and stay useful.',
  },
]

const filters = ['All work', 'Website design', 'Poster & campaign', 'Brand identity', 'App experience', 'Photo direction', 'Graphic design']

export function DesignsPage() {
  const [activeFilter, setActiveFilter] = useState('All work')
  const visibleProjects = activeFilter === 'All work'
    ? projects
    : projects.filter((project) => project.category === activeFilter)

  return (
    <section className="inner-page portfolio-page">
      <div className="page-heading">
        <p className="eyebrow">Selected work</p>
        <h1>Made to <span>make a mark.</span></h1>
        <p className="page-intro">
          A collection of visual identities and digital experiences shaped with curiosity,
          clarity, and a little bit of character.
        </p>
      </div>
      <div aria-label="Filter portfolio projects" className="portfolio-filters">
        {filters.map((filter) => (
          <button
            aria-pressed={activeFilter === filter}
            className={activeFilter === filter ? 'filter-chip is-active' : 'filter-chip'}
            key={filter}
            onClick={() => setActiveFilter(filter)}
            type="button"
          >
            {filter}
          </button>
        ))}
      </div>
      <div aria-live="polite" className="portfolio-grid">
        {visibleProjects.map((project, index) => (
          <article className={`portfolio-card portfolio-card-${index % 3 + 1}`} key={project.title}>
            <div className={`portfolio-image portfolio-image-${project.kind}`}>
              <img alt="" loading="lazy" src={project.image} />
              <span className="portfolio-image-label">HYKROX / 0{index + 1}</span>
            </div>
            <div className="portfolio-card-copy">
              <div>
                <p className="portfolio-category">{project.category}</p>
                <h2>{project.title}</h2>
              </div>
              <Icon className="portfolio-arrow" name="arrow" />
            </div>
            <p className="portfolio-description">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
