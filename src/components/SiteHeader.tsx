import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Icon } from './Icon'

type SiteHeaderProps = {
  onSearchChange: (value: string) => void
  onSearchToggle: () => void
  searchOpen: boolean
  searchTerm: string
}

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Designs', to: '/designs' },
  { label: 'Services', to: '/services' },
  { label: 'About us', to: '/about' },
  { label: 'Contact us', to: '/contact' },
]

export function SiteHeader({
  onSearchChange,
  onSearchToggle,
  searchOpen,
  searchTerm,
}: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const closeMenu = () => setMenuOpen(false)
  const handleNavigation = (to: string) => {
    closeMenu()
    if (location.pathname === to) window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <header className="site-header">
        <Link className="brand" to="/" aria-label="Hykrox home" onClick={closeMenu}>
          <span>HYKROX</span>
          <small>unique designs</small>
        </Link>
        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
        <nav aria-label="Main navigation" className={menuOpen ? 'navigation is-open' : 'navigation'}>
          {navigation.map((item) => (
            <NavLink
              aria-current={location.pathname === item.to ? 'page' : undefined}
              key={item.to}
              onClick={() => handleNavigation(item.to)}
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
          <button
            aria-expanded={searchOpen}
            aria-label={searchOpen ? 'Close service search' : 'Search services'}
            className="search-toggle"
            onClick={() => {
              onSearchToggle()
              closeMenu()
            }}
            type="button"
          >
            <Icon name="search" />
          </button>
        </nav>
      </header>
      {searchOpen && (
        <label className="search-field">
          <span className="visually-hidden">Search services</span>
          <Icon name="search" />
          <input
            autoFocus
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search our services..."
            type="search"
            value={searchTerm}
          />
          {searchTerm && (
            <button aria-label="Clear search" onClick={() => onSearchChange('')} type="button">×</button>
          )}
        </label>
      )}
    </>
  )
}
