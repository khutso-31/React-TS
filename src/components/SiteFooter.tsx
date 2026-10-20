import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export function SiteFooter() {
  const location = useLocation()

  return (
    <footer className="site-footer">
      Design by
      {' '}
      <Link
        onClick={() => {
          if (location.pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
        to="/"
      >
        Hykrox
      </Link>
    </footer>
  )
}
