import { useEffect, useMemo, useRef, useState } from 'react'
import { NavLink, Navigate, Route, Routes } from 'react-router-dom'

const marketDates = [
  'May 13',
  'May 20',
  'May 27',
  'June 3',
  'June 10',
  'June 17',
  'June 24',
  'July 1',
  'July 8',
  'July 15',
  'July 22',
  'July 29',
  'August 5',
  'August 12',
  'August 19',
  'August 26',
  'September 2',
  'September 9',
  'September 16',
  'September 23',
  'September 30',
  'October 7',
  'October 14',
  'October 21',
]

const menuItems = [
  'Sandwich bread loaf',
  'Cinnamon swirl loaf',
  'Assorted breads',
  'Savory focaccia',
  'Sweet focaccia',
  'English muffins',
  'Bagels',
  'Muffins',
  'Mini muffins',
  'Gluten free brownies',
  'Gluten free brownie bites',
  'Chocolate chip cookies',
  'Cinnamon swirl cookies',
  'Pizza crusts',
  'Hand pies (cherry and apple)',
  'Scones',
  'Dinner rolls',
]

function MarketCalendarDialog({ isOpen, onClose }) {
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const previousActiveElement = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeydown = (event) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key !== 'Tab' || !dialogRef.current) {
        return
      }

      const focusableElements = dialogRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )

      if (!focusableElements.length) {
        return
      }

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    document.addEventListener('keydown', handleKeydown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeydown)
      if (previousActiveElement instanceof HTMLElement) {
        previousActiveElement.focus()
      }
    }
  }, [isOpen, onClose])

  if (!isOpen) {
    return null
  }

  return (
    <div className="calendar-overlay" role="presentation" onClick={onClose}>
      <div
        ref={dialogRef}
        className="calendar-dialog card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="calendar-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="calendar-header">
          <div>
            <h3 id="calendar-title">Farmers Market Calendar</h3>
            <p>Every Wednesday, May 13 through October 21</p>
          </div>
          <button ref={closeButtonRef} className="calendar-close" type="button" onClick={onClose}>
            Close
          </button>
        </div>
        <div className="calendar-circles">
          {marketDates.map((date, index) => (
            <div className="date-circle" key={date} style={{ '--delay': `${index * 35}ms` }}>
              <span>{date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function SiteHeader() {
  return (
    <header className="site-header">
      <p className="eyebrow">Local Micro Bakery in Bowling Green, Ohio</p>
      <div className="brand-lockup">
        <img className="brand-logo" src="/logo.jpg" alt="Wild Flour logo" />
        <div className="brand-text">
          <h1>Wild Flour</h1>
          <p className="subtitle">
            Ancient grain breads and bakes crafted weekly for your family table.
          </p>
        </div>
      </div>
      <nav aria-label="Main navigation" className="main-nav">
        <NavLink to="/" end>
          Markets
        </NavLink>
      </nav>
    </header>
  )
}

function HomePage() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)

  return (
    <section className="page fade-in">
      <div className="home-hero-grid">
        <div className="card intro-card">
          <h2>Find Us At The Farmers Market</h2>
          <p>
            Market dates are every Wednesday starting May 13th through October 21st at the Bowling
            Green Farmers Market.
          </p>
          <div className="action-row">
            <button
              className="calendar-button"
              type="button"
              onClick={() => setIsCalendarOpen(true)}
              aria-haspopup="dialog"
            >
              Check Calendar
            </button>
          </div>
        </div>

        <div className="card market-summary">
          <h3>Weekly Market Season</h3>
          <p>Wednesday mornings from May 13 through October 21.</p>
        </div>
      </div>

      <div className="card origin-card">
        <h3>Why Ancient Grains?</h3>
        <p>
          Our grains are organic, unbleached, and sourced from Ohio family farms. Ancient grains
          keep more nutrients intact and bring fuller flavor to everyday staples.
        </p>
        <ul className="origin-list">
          <li>Locally sourced from Ohio producers</li>
          <li>No bleaching agents or unnecessary additives</li>
          <li>Freshly baked for weekly market pickup</li>
        </ul>
      </div>

      <MarketCalendarDialog isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />
    </section>
  )
}

function AboutPage() {
  return (
    <section className="page fade-in">
      <div className="card text-card">
        <h2>Hello! We Are Wild Flour!</h2>
        <p>
          We are a local micro bakery specializing in ancient grains. We are committed to bringing
          fresh and nutritious everyday staples to our community.
        </p>
        <p>
          We are passionate about making healthier, more nutrient-dense baked goods to sustain you
          and your family. We use organic, unbleached ancient grains from local Ohio sources.
        </p>
        <p>
          That means no chemicals and more of the good stuff, from Ohio family farms to your table.
          In an age of ingredient lists you cannot pronounce, we simplify it for you with clean,
          honest baking.
        </p>
        <p>
          We strive to use the freshest, healthiest ingredients that make you and your tummy happy.
          Take out the guesswork and try a bakery that cares about you.
        </p>
      </div>
    </section>
  )
}

function MenuPage() {
  return (
    <section className="page fade-in">
      <div className="card text-card">
        <h2>Seasonal Menu</h2>
        <p>Menu is subject to change seasonally. Flavors of regular products may change biweekly.</p>
      </div>

      <ul className="menu-grid">
        {menuItems.map((item, index) => (
          <li key={item} className="menu-item" style={{ '--delay': `${index * 45}ms` }}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}

function OrdersPage() {
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    email: '',
    item: '',
    quantity: '',
    pickup: '',
    notes: '',
  })

  const updateOrderField = (field) => (event) => {
    setOrderDetails((current) => ({
      ...current,
      [field]: event.target.value,
    }))
  }

  const mailtoHref = useMemo(() => {
    const subject = 'Wild Flour Special Order Request'
    const body = [
      `Name: ${orderDetails.name || '-'}`,
      `Email: ${orderDetails.email || '-'}`,
      `Requested item(s): ${orderDetails.item || '-'}`,
      `Quantity: ${orderDetails.quantity || '-'}`,
      `Requested pickup date/time: ${orderDetails.pickup || '-'}`,
      '',
      'Extra notes:',
      orderDetails.notes || '-',
    ].join('\n')

    return `mailto:thewildflourlocalbakery@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }, [orderDetails])

  return (
    <section className="page fade-in">
      <div className="card text-card">
        <h2>Limited Special Orders</h2>
        <p>
          We take a limited number of special orders per month. Check our socials for updates on
          when orders are open or closed.
        </p>
        <p>
          Special orders may include regular products, quantities, or flavor requests, subject to
          approval. Just ask.
        </p>
        <p>
          Pickup is available during our usual farmers market times or by scheduled meeting at the
          picnic area behind Grounds for Thought on Main Street in Bowling Green.
        </p>
        <p>
          If another arrangement is needed, contact us by email or phone and we will do our best to
          help.
        </p>
      </div>

      <form className="card order-form" onSubmit={(event) => event.preventDefault()}>
        <h3>Quick Order Request</h3>
        <p>Fill this out and send it by email in one click.</p>
        <div className="form-grid">
          <label>
            Name
            <input
              value={orderDetails.name}
              onChange={updateOrderField('name')}
              type="text"
              placeholder="Your name"
            />
          </label>
          <label>
            Email
            <input
              value={orderDetails.email}
              onChange={updateOrderField('email')}
              type="email"
              placeholder="you@example.com"
            />
          </label>
          <label>
            Requested item(s)
            <input
              value={orderDetails.item}
              onChange={updateOrderField('item')}
              type="text"
              placeholder="Sourdough loaves, bagels, etc."
            />
          </label>
          <label>
            Quantity
            <input
              value={orderDetails.quantity}
              onChange={updateOrderField('quantity')}
              type="text"
              placeholder="Example: 2 dozen"
            />
          </label>
          <label>
            Preferred pickup date/time
            <input
              value={orderDetails.pickup}
              onChange={updateOrderField('pickup')}
              type="text"
              placeholder="Wednesday market or custom time"
            />
          </label>
          <label className="full-width">
            Extra notes
            <textarea
              value={orderDetails.notes}
              onChange={updateOrderField('notes')}
              rows="4"
              placeholder="Dietary needs, flavors, or pickup notes"
            />
          </label>
        </div>
        <a className="calendar-button order-submit" href={mailtoHref}>
          Send Order Request By Email
        </a>
      </form>
    </section>
  )
}

function QuickActions() {
  return (
    <section className="quick-actions" aria-label="Quick actions">
      <a href="mailto:thewildflourlocalbakery@gmail.com">Email Us</a>
      <a href="tel:+14198894193">Call Us</a>
    </section>
  )
}

function ContactFooter() {
  return (
    <footer className="contact-footer">
      <div className="contact-block">
        <h2>Visit Us</h2>
        <p>Address: 234 Buttonwood Ave, Bowling Green, OH 43402</p>
        <a
          className="calendar-button visit-button"
          href="https://www.google.com/maps/search/?api=1&query=234+Buttonwood+Ave,+Bowling+Green,+OH+43402"
          target="_blank"
          rel="noreferrer"
        >
          Open In Google Maps
        </a>
      </div>
      <div className="contact-block">
        <h2>Socials</h2>
        <p>
          Facebook: <a href="https://www.facebook.com" target="_blank" rel="noreferrer">Wild Flour</a>
        </p>
        <p>
          Instagram:{' '}
          <a href="https://www.instagram.com/thewildflourlocalbakery" target="_blank" rel="noreferrer">
            @thewildflourlocalbakery
          </a>
        </p>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <ContactFooter />
      <QuickActions />
    </div>
  )
}

export default App
