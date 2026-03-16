import { useState } from 'react'
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
  'Savory foccacia',
  'Sweet foccacia',
  'English muffins',
  'Bagles',
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

function SiteHeader() {
  return (
    <header className="site-header">
      <p className="eyebrow">Local Micro Bakery in Bowling Green, Ohio</p>
      <div className="brand-lockup">
        <img className="brand-logo" src="/logo.jpg" alt="Wild Flour logo" />
        <h1>Wild Flour</h1>
      </div>
      <p className="subtitle">
        Ancient grain baking made fresh for your family, your table, and your community.
      </p>
      <nav aria-label="Main navigation" className="main-nav">
        <NavLink to="/" end>
          Markets
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/limited-orders">Limited Orders</NavLink>
      </nav>
    </header>
  )
}

function HomePage() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)

  return (
    <section className="page fade-in">
      <div className="card intro-card">
        <h2>Find Us At The Farmers Market</h2>
        <p>
          Market dates are every Wednesday starting May 13th through October 21st at the Bowling
          Green Farmers Market.
        </p>
        <button className="calendar-button" type="button" onClick={() => setIsCalendarOpen(true)}>
          Check Calendar
        </button>
      </div>

      <div className="card market-summary">
        <h3>Weekly Market Season</h3>
        <p>Wednesday mornings from May 13 through October 21.</p>
        <p>Tap the calendar button to see the full season lineup.</p>
      </div>

      {isCalendarOpen ? (
        <div className="calendar-overlay" role="presentation" onClick={() => setIsCalendarOpen(false)}>
          <div
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
              <button className="calendar-close" type="button" onClick={() => setIsCalendarOpen(false)}>
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
      ) : null}
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
    </section>
  )
}

function ContactFooter() {
  return (
    <footer className="contact-footer">
      <div className="contact-block">
        <h2>Contact</h2>
        <p>
          Email: <a href="mailto:thewildflourlocalbakery@gmail.com">thewildflourlocalbakery@gmail.com</a>
        </p>
        <p>
          Phone: <a href="tel:+14198894193">419-889-4193</a>
        </p>
        <p>Address: 234 Buttonwood Ave, Bowling Green, OH 43402</p>
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
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/limited-orders" element={<OrdersPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <ContactFooter />
    </div>
  )
}

export default App
