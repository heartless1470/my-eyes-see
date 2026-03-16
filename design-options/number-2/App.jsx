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

const menuSections = [
  {
    title: 'Loaves & Breads',
    items: ['Sandwich bread loaf', 'Cinnamon swirl loaf', 'Assorted breads', 'Dinner rolls'],
  },
  {
    title: 'Morning Favorites',
    items: ['English muffins', 'Bagles', 'Muffins', 'Mini muffins', 'Scones'],
  },
  {
    title: 'Savory & Seasonal',
    items: ['Savory foccacia', 'Sweet foccacia', 'Pizza crusts', 'Hand pies (cherry and apple)'],
  },
  {
    title: 'Sweet Treats',
    items: [
      'Gluten free brownies',
      'Gluten free brownie bites',
      'Chocolate chip cookies',
      'Cinnamon swirl cookies',
    ],
  },
]

const aboutHighlights = [
  'Ancient grains and nutrient-dense staples',
  'Organic, unbleached grains from Ohio sources',
  'Fresh market baking made with simple ingredients',
]

const orderSteps = [
  'Watch our socials to see whether special orders are open or closed for the month.',
  'Email us with the product, quantity, and flavor request you have in mind.',
  'Pick up at the farmers market or arrange a scheduled meeting time in Bowling Green.',
]

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-topline">
        <p className="eyebrow">Local Micro Bakery in Bowling Green, Ohio</p>
        <a className="top-contact" href="mailto:thewildflourlocalbakery@gmail.com">
          Email for Orders
        </a>
      </div>
      <div className="header-grid">
        <div className="brand-panel">
          <img className="brand-logo" src="/logo.jpg" alt="Wild Flour logo" />
          <div className="brand-copy">
            <h1>Wild Flour</h1>
            <p className="subtitle">
              Ancient grain baking made fresh for your family, your table, and your community.
            </p>
          </div>
        </div>
        <nav aria-label="Main navigation" className="main-nav">
          <NavLink to="/" end>
            Markets
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/limited-orders">Limited Orders</NavLink>
        </nav>
      </div>
    </header>
  )
}

function HomePage() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)

  return (
    <section className="page fade-in">
      <section className="hero-layout">
        <div className="hero-note card">
          <p className="section-label">Market Season</p>
          <h2>Every Wednesday from May 13 through October 21</h2>
          <p>
            Find Wild Flour at the Bowling Green Farmers Market for weekly fresh bakes made with
            ancient grains and simple ingredients.
          </p>
          <div className="hero-actions">
            <button className="calendar-button" type="button" onClick={() => setIsCalendarOpen(true)}>
              Check Calendar
            </button>
            <a className="ghost-link" href="https://www.instagram.com/thewildflourlocalbakery" target="_blank" rel="noreferrer">
              See Social Updates
            </a>
          </div>
        </div>

        <div className="schedule-panel card">
          <p className="section-label">Where To Find Us</p>
          <div className="schedule-row">
            <span className="schedule-key">Market</span>
            <span className="schedule-value">Bowling Green Farmers Market</span>
          </div>
          <div className="schedule-row">
            <span className="schedule-key">Season</span>
            <span className="schedule-value">May 13 to October 21</span>
          </div>
          <div className="schedule-row">
            <span className="schedule-key">Rhythm</span>
            <span className="schedule-value">Every Wednesday</span>
          </div>
          <div className="schedule-row">
            <span className="schedule-key">Pickup</span>
            <span className="schedule-value">Market hours or arranged local meetup</span>
          </div>
        </div>
      </section>

      <section className="feature-strip">
        <article className="feature-card card">
          <p className="section-label">What We Bake</p>
          <h3>Everyday staples with more substance</h3>
          <p>Loaves, muffins, focaccia, cookies, scones, hand pies, and more.</p>
        </article>
        <article className="feature-card card">
          <p className="section-label">Our Ingredients</p>
          <h3>Ohio-grown grains and clean baking</h3>
          <p>Organic, unbleached grains and straightforward ingredients your family can trust.</p>
        </article>
        <article className="feature-card card">
          <p className="section-label">Special Orders</p>
          <h3>Limited monthly openings</h3>
          <p>Email us when ordering opens if you need a product, quantity, or flavor request.</p>
        </article>
      </section>

      <div className="card market-summary">
        <p className="section-label">Quick Note</p>
        <h3>Tap the calendar button for the full Wednesday lineup.</h3>
        <p>Each date appears in a circular calendar view so visitors can quickly scan the season.</p>
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
      <section className="split-layout">
        <div className="card statement-card">
          <p className="section-label">About Wild Flour</p>
          <h2>Hello! We are Wild Flour.</h2>
          <p>
            We are a local micro bakery specializing in ancient grains and committed to bringing
            fresh, nutritious everyday staples to our community in Bowling Green, Ohio.
          </p>
          <p>
            We are passionate about making healthier, more nutrient-dense baked goods to sustain
            you and your family, using organic, unbleached grains from local Ohio sources.
          </p>
        </div>
        <div className="card highlight-list">
          <p className="section-label">Why It Matters</p>
          <ul>
            {aboutHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <div className="card text-card">
        <p>
          That means no chemicals and more of the good stuff, from Ohio family farms to your
          table. In an age of ingredient lists you cannot pronounce and too much guesswork in the
          grocery aisle, we keep things simpler.
        </p>
        <p>
          We strive to use the freshest, healthiest ingredients that make you and your tummy happy.
          Try Wild Flour at your local market and taste a bakery that cares about what goes into
          every loaf and bake.
        </p>
      </div>
    </section>
  )
}

function MenuPage() {
  return (
    <section className="page fade-in">
      <div className="card text-card">
        <p className="section-label">Seasonal Menu</p>
        <h2>Rotating bakes for market mornings</h2>
        <p>Menu is subject to change seasonally, and regular flavors may rotate every couple of weeks.</p>
      </div>

      <div className="menu-board">
        {menuSections.map((section, index) => (
          <section className="menu-section card" key={section.title} style={{ '--delay': `${index * 70}ms` }}>
            <h3>{section.title}</h3>
            <ul className="menu-list">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  )
}

function OrdersPage() {
  return (
    <section className="page fade-in">
      <section className="split-layout">
        <div className="card statement-card">
          <p className="section-label">Limited Orders</p>
          <h2>Small-batch ordering with a monthly cap</h2>
          <p>
            We take a limited number of special orders each month. Requests may include regular
            products, quantity adjustments, or flavor ideas, all subject to approval.
          </p>
          <p>
            Check our socials to see when ordering is open, then email us with what you need.
          </p>
        </div>
        <div className="card order-notes">
          <p className="section-label">Pickup Info</p>
          <p>
            Pickup is available during our usual farmers market times or by scheduled meeting at the
            picnic area behind Grounds for Thought on Main Street in Bowling Green.
          </p>
          <p>If another arrangement is needed, contact us by email or phone.</p>
        </div>
      </section>

      <div className="order-flow">
        {orderSteps.map((step, index) => (
          <article className="flow-step card" key={step}>
            <span className="flow-number">0{index + 1}</span>
            <p>{step}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function ContactFooter() {
  return (
    <footer className="contact-footer">
      <div className="contact-block">
        <p className="section-label">Contact</p>
        <h2>Reach Wild Flour</h2>
        <p>
          Email: <a href="mailto:thewildflourlocalbakery@gmail.com">thewildflourlocalbakery@gmail.com</a>
        </p>
        <p>
          Phone: <a href="tel:+14198894193">419-889-4193</a>
        </p>
        <p>Address: 234 Buttonwood Ave, Bowling Green, OH 43402</p>
      </div>
      <div className="contact-block">
        <p className="section-label">Socials</p>
        <h2>Follow For Updates</h2>
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
