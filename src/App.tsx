import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { DesignsPage } from './pages/DesignsPage'
import { HomePage } from './pages/HomePage'
import { ServicesPage } from './pages/ServicesPage'
import './App.css'

function AmbientLetters() {
  return (
    <>
      <div className="ambient-letter ambient-h" aria-hidden="true">H</div>
      <div className="ambient-letter ambient-y" aria-hidden="true">Y</div>
      <div className="ambient-letter ambient-k" aria-hidden="true">K</div>
      <div className="ambient-letter ambient-r" aria-hidden="true">R</div>
      <div className="ambient-letter ambient-o" aria-hidden="true">O</div>
    </>
  )
}

function RoutedSite() {
  const location = useLocation()
  const [search, setSearch] = useState({ pathname: location.pathname, open: false, term: '' })
  const searchOpen = search.pathname === location.pathname && search.open
  const searchTerm = search.pathname === location.pathname ? search.term : ''

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const updateSearchTerm = (term: string) => {
    setSearch({ pathname: location.pathname, open: true, term })
  }

  const toggleSearch = () => {
    setSearch((current) => {
      const isOpen = current.pathname === location.pathname && current.open
      return {
        pathname: location.pathname,
        open: !isOpen,
        term: '',
      }
    })
  }

  return (
    <main className="site-shell">
      <AmbientLetters />
      <SiteHeader
        onSearchChange={updateSearchTerm}
        onSearchToggle={toggleSearch}
        searchOpen={searchOpen}
        searchTerm={searchTerm}
      />
      <Routes>
        <Route element={<HomePage searchTerm={searchTerm} />} path="/" />
        <Route element={<DesignsPage />} path="/designs" />
        <Route element={<ServicesPage searchTerm={searchTerm} />} path="/services" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<ContactPage />} path="/contact" />
        <Route element={<Navigate replace to="/" />} path="*" />
      </Routes>
      <SiteFooter />
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <RoutedSite />
    </BrowserRouter>
  )
}

export default App
