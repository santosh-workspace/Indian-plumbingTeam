import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Award,
  Clock,
  Wrench,
  Flame,
  Bath,
  Droplets,
  Hammer,
  Waves,
  Menu,
  X,
  Upload,
  ArrowRight,
  Star,
  Plus,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

/* ----------------------------------------------------------------
   Contact constants
---------------------------------------------------------------- */
const PHONE_DISPLAY = '07778 077760'
const PHONE_TEL = '+447778077760'
const FACEBOOK_URL = 'https://www.facebook.com/RescuePlumbersPlus/'
const LINKEDIN_URL = 'https://www.linkedin.com/company/rescue-plumbers-plus-ltd/'

/* Brand assets served locally from /public/images.
   Run download-assets.bat once to populate this folder from the old site. */
const LOGO_URL = '/images/logo.png'
const RATED_PEOPLE_URL = '/images/rated-people.png'
const YELL_URL = '/images/yell.gif'

/* Get a free access key at https://web3forms.com (enter the email where you
   want enquiries delivered), then paste it below to make the form send. */
const WEB3FORMS_ACCESS_KEY = 'YOUR-ACCESS-KEY-HERE'

const POPULAR_SERVICES = [
  {
    img: '/images/icon-diagnosis.png',
    title: 'Plumbing Diagnosis',
    text: 'Our highly experienced team pinpoints the problem using the latest tools and equipment, so it is resolved right the first time.',
  },
  {
    img: '/images/icon-leak-pipe.png',
    title: 'Leak & Pipe Repair',
    text: 'From burst pipes to hidden leaks, we trace and fix the issue quickly to protect your home.',
  },
  {
    img: '/images/icon-taps.png',
    title: 'Tap Repair & Installation',
    text: 'Repairs and installations handled by a trusted, fully insured team that takes pride in every job.',
  },
  {
    img: '/images/icon-drains.png',
    title: 'Clogged Drains',
    text: 'Blocked drains and broken toilets cleared fast by plumbers who follow up on every job.',
  },
  {
    img: '/images/icon-quote.jpg',
    title: 'Free Quotation',
    text: 'Affordable, transparent pricing with no hidden charges — request a free quotation any time.',
  },
  {
    img: '/images/icon-24-7.jpg',
    title: '24/7 Emergency Call Out',
    text: 'A team member is always able to assist 24/7, with our proactive can-do attitude available around the clock.',
  },
  {
    img: '/images/icon-leak-stop.png',
    title: '100% Guaranteed Leak Stop',
    text: 'We make sure every issue is fully resolved, so leaks are properly stopped and stay that way.',
  },
  {
    img: '/images/icon-appliance.png',
    title: 'Appliance Installation',
    text: 'Appliances installed safely by an experienced team focused on keeping customers safe, happy and satisfied.',
  },
]

const TESTIMONIALS = [
  {
    quote: 'Came out within the hour when our pipe burst late at night. Calm, tidy and sorted it fast. Would recommend to anyone.',
    name: 'Sarah M.',
    place: 'Norwich',
  },
  {
    quote: 'Our boiler packed in during a cold snap. The team had us back up and running the same day at a fair price.',
    name: 'David T.',
    place: 'Brundall',
  },
  {
    quote: 'Friendly, honest and no hidden charges. They explained everything and followed up afterwards to check all was well.',
    name: 'Priya K.',
    place: 'Cringleford',
  },
]

const FAQS = [
  {
    q: 'How quickly can you respond to an emergency?',
    a: 'A team member is always on standby to respond as quickly as possible, day or night, so you are never left waiting when it matters most.',
  },
  {
    q: 'What plumbing issues do you handle?',
    a: 'Everything from burst pipes, leaks, blocked drains and broken toilets to boiler installation, replacement, servicing and repair.',
  },
  {
    q: 'Do you offer 24/7 emergency plumbing?',
    a: 'Yes. We provide 24 hour emergency plumbing throughout Norwich and the surrounding villages, every day of the year.',
  },
  {
    q: 'Are your plumbers qualified and insured?',
    a: 'Yes. We are an independent, family-run and fully insured company, and all our plumbers are highly experienced and trained.',
  },
  {
    q: 'Do you charge for a quotation?',
    a: 'No. We provide free, no-obligation quotations with affordable, transparent pricing and no hidden charges.',
  },
  {
    q: 'Which areas do you cover?',
    a: 'Norwich plus Brundall, Cringleford, Hoveton, Wroxham and the surrounding areas.',
  },
]

const AREAS = [
  {
    name: 'Norwich',
    tag: 'Home base',
    services: ['Emergency plumbing', 'Boiler installation & replacement', 'Boiler servicing & repair'],
    text: 'Our home city — rapid 24/7 response across every Norwich postcode for burst pipes, leaks, blocked drains and boiler breakdowns.',
  },
  {
    name: 'Brundall',
    tag: 'Broads village',
    services: ['Emergency plumbing', 'Emergency boiler repair'],
    text: 'Fast emergency plumber and boiler repair cover for Brundall and the surrounding Broads villages.',
  },
  {
    name: 'Cringleford',
    tag: 'South Norwich',
    services: ['Emergency plumbing', 'Emergency boiler repair'],
    text: 'Reliable emergency plumbing and boiler repairs for Cringleford homes and businesses.',
  },
  {
    name: 'Hoveton',
    tag: 'Northern Broads',
    services: ['Emergency plumbing', 'Emergency boiler repair'],
    text: '24/7 emergency plumber and boiler repair services throughout Hoveton and the northern Broads.',
  },
  {
    name: 'Wroxham',
    tag: 'Northern Broads',
    services: ['Emergency plumbing', 'Emergency boiler repair'],
    text: 'Prompt emergency plumbing and boiler repair across Wroxham and the surrounding area.',
  },
]

/* ----------------------------------------------------------------
   Content
---------------------------------------------------------------- */
const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Areas', href: '#areas' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

const SERVICES_FULL = [
  {
    icon: Droplets,
    title: 'Emergency Plumbing',
    text: 'Burst pipes, floods and leaks handled fast, 24 hours a day. A team member is always on hand to get things under control.',
  },
  {
    icon: Flame,
    title: 'Boiler Repair & Service',
    text: 'Boiler installation, replacement, servicing and emergency repair across Norwich and the Broads. Warm, safe and running again.',
  },
  {
    icon: Wrench,
    title: 'Leak & Pipe Repair',
    text: 'From dripping joints to hidden pipe failures, we trace the source and fix it — backed by our 100% guaranteed leak stop.',
  },
  {
    icon: Waves,
    title: 'Blocked Drains',
    text: 'Clogged sinks, toilets and outside drains cleared quickly and cleanly, with the cause dealt with so it stays clear.',
  },
  {
    icon: Bath,
    title: 'Taps & Bathrooms',
    text: 'Tap repair and installation, toilets, showers and full bathroom sanitary work — fitted properly, first time.',
  },
  {
    icon: Hammer,
    title: 'Appliance Installation',
    text: 'Washing machines, dishwashers and other appliances plumbed in safely and correctly, with everything left tidy.',
  },
]

/* ----------------------------------------------------------------
   Navbar
---------------------------------------------------------------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled ? 'glass shadow-lg shadow-primary/10' : 'bg-transparent'
        } rounded-full px-4 sm:px-6 py-2.5 w-[calc(100%-2rem)] max-w-5xl`}
      >
        <div className="flex items-center justify-between gap-6">
          <a href="#home" className="flex items-center gap-2.5 group">
            <span className="flex items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-black/5 h-10 w-10 overflow-hidden">
              <img src={LOGO_URL} alt="Rescue Plumbers Plus logo" className="h-9 w-9 object-contain" />
            </span>
            <span
              className={`font-display font-bold tracking-tight text-base sm:text-lg leading-none ${
                scrolled ? 'text-ink' : 'text-white'
              } transition-colors`}
            >
              Rescue Plumbers<span className="text-primary">Plus</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-tight lift-on-hover ${
                  scrolled ? 'text-ink/70 hover:text-primary' : 'text-white/90 hover:text-white'
                } transition-colors`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden lg:inline-flex magnetic-btn items-center gap-1.5 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-primary/30"
          >
            <Phone className="h-4 w-4" strokeWidth={2.5} />
            Call 24/7
          </a>

          <button
            onClick={() => setOpen(true)}
            className={`lg:hidden p-2 rounded-full ${scrolled ? 'text-ink' : 'text-white'}`}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 lg:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-deep/90 backdrop-blur-2xl" onClick={() => setOpen(false)} />
        <div
          className={`absolute top-0 left-0 right-0 bg-background rounded-b-5xl px-6 pt-8 pb-12 transition-transform duration-500 ${
            open ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="flex items-center justify-between mb-10">
            <span className="font-display font-bold text-xl text-ink">Rescue Plumbers Plus</span>
            <button onClick={() => setOpen(false)} className="p-2 rounded-full bg-divider/40">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl font-semibold text-ink py-3 border-b border-divider"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href={`tel:${PHONE_TEL}`}
            onClick={() => setOpen(false)}
            className="mt-8 magnetic-btn flex items-center justify-center gap-2 bg-primary text-white px-6 py-4 rounded-full font-semibold w-full"
          >
            <Phone className="h-4 w-4" />
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </>
  )
}

/* ----------------------------------------------------------------
   Hero
---------------------------------------------------------------- */
function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-line-1', { y: 40, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.3 })
      gsap.from('.hero-line-2', { y: 60, opacity: 0, duration: 1.2, ease: 'power3.out', delay: 0.5 })
      gsap.from('.hero-cta, .hero-meta', {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.8,
        stagger: 0.12,
      })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="home" ref={heroRef} className="relative min-h-[100dvh] w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=2400&q=80"
          alt="Plumber fixing pipework under a sink"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-deep/90 via-deep/55 to-primary/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/30 to-transparent" />
      </div>

      {/* Floating water droplets (subtle) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-[18%] h-2 w-2 rounded-full bg-primary-light/70 animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-[55%] right-[10%] h-1.5 w-1.5 rounded-full bg-white/40 animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-[40%] right-[26%] h-1 w-1 rounded-full bg-primary-light/70 animate-float" style={{ animationDelay: '3s' }} />
      </div>

      {/* Top frame */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-center text-center">
        <div className="px-6 sm:px-10 lg:px-16 max-w-4xl">
          <p className="hero-meta font-mono text-[11px] sm:text-xs uppercase tracking-[0.3em] text-white/70 mb-6">
            Norwich · Family-run · 25+ years
          </p>
          <h1 className="font-display font-extrabold text-white leading-[0.95] tracking-tight">
            <span className="hero-line-1 block text-4xl sm:text-5xl md:text-6xl">
              24-hour emergency plumbers.
            </span>
            <span
              className="hero-line-2 block font-serif italic font-medium text-primary-light text-6xl sm:text-7xl md:text-8xl lg:text-9xl mt-2"
              style={{ lineHeight: '0.92' }}
            >
              Day or night.
            </span>
          </h1>

          <p className="hero-meta mx-auto max-w-xl text-white/75 text-base sm:text-lg mt-8 leading-relaxed">
            An independent, family-run plumbing company serving Norwich and the surrounding villages.
            Fully insured, with a proactive can-do team available around the clock.
            <span className="text-white"> When you call, someone always answers.</span>
          </p>

          <div className="hero-cta mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_TEL}`}
              className="magnetic-btn group inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-7 py-4 rounded-full shadow-2xl shadow-primary/40"
            >
              <Phone className="h-4 w-4" />
              Call {PHONE_DISPLAY}
            </a>
            <a
              href="#contact"
              className="lift-on-hover inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 font-medium px-7 py-4 rounded-full"
            >
              Request a free quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-6 sm:right-12 hidden md:flex flex-col items-center gap-2 text-white/50">
          <span className="font-mono uppercase text-[10px] tracking-[0.3em]">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Feature Card 1 — Boiler job shuffler
---------------------------------------------------------------- */
function BoilerShuffler() {
  const items = [
    { tag: 'Install', label: 'New boiler installation', temp: '70°C' },
    { tag: 'Service', label: 'Annual boiler service', temp: '65°C' },
    { tag: 'Repair', label: 'Emergency boiler repair', temp: '58°C' },
  ]
  const [stack, setStack] = useState(items)

  useEffect(() => {
    const interval = setInterval(() => {
      setStack((prev) => {
        const next = [...prev]
        next.unshift(next.pop())
        return next
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-44 w-full">
      {stack.map((item, i) => {
        const offset = i
        const total = stack.length
        return (
          <div
            key={item.tag}
            style={{
              transform: `translate(${offset * 14}px, ${offset * 14}px) scale(${1 - offset * 0.05})`,
              zIndex: total - offset,
              opacity: 1 - offset * 0.25,
              transition: 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease',
            }}
            className="absolute inset-0 bg-white border border-divider rounded-3xl p-5 shadow-md"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary-dark bg-primary/10 px-2 py-1 rounded-full">
                {item.tag}
              </span>
              <span className="font-mono text-xs text-muted">{item.temp}</span>
            </div>
            <div className="mt-4 font-display text-lg font-semibold text-ink leading-tight">{item.label}</div>
            <div className="mt-3 flex items-center gap-1.5">
              {Array.from({ length: 24 }).map((_, idx) => (
                <span
                  key={idx}
                  className="h-1 w-1 rounded-full"
                  style={{ background: idx < 24 - offset * 6 ? '#1D6FB8' : '#E0E0E0' }}
                />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

/* ----------------------------------------------------------------
   Feature Card 2 — Emergency leak watch (realistic raindrops)
---------------------------------------------------------------- */
function EmergencyRain() {
  const [statusIdx, setStatusIdx] = useState(0)
  const [count, setCount] = useState(7)

  const statuses = [
    { text: 'All sealed · monitoring', label: 'Stable', tone: 'emerald' },
    { text: 'Leak detected · zone 4', label: 'Urgent', tone: 'accent' },
    { text: 'Engineer en route · 20 min', label: 'Response', tone: 'primary' },
    { text: 'Leak stopped · all sealed', label: 'Done', tone: 'emerald' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIdx((idx) => {
        const next = (idx + 1) % statuses.length
        if (statuses[next].label === 'Done') {
          setCount((c) => c + 1)
        }
        return next
      })
    }, 2300)
    return () => clearInterval(interval)
  }, [])

  const drops = [
    { left: '15%', delay: '0.0s', dur: '2.6s', size: 16 },
    { left: '25%', delay: '1.3s', dur: '3.0s', size: 13 },
    { left: '38%', delay: '0.6s', dur: '2.8s', size: 18 },
    { left: '50%', delay: '1.8s', dur: '2.4s', size: 14 },
    { left: '62%', delay: '0.9s', dur: '3.1s', size: 17 },
    { left: '74%', delay: '2.0s', dur: '2.7s', size: 13 },
    { left: '85%', delay: '0.4s', dur: '2.9s', size: 16 },
  ]

  const ripples = [
    { left: '22%', delay: '0.2s' },
    { left: '48%', delay: '1.0s' },
    { left: '76%', delay: '1.8s' },
  ]

  const status = statuses[statusIdx]
  const toneText =
    status.tone === 'emerald' ? 'text-emerald-600' : status.tone === 'accent' ? 'text-accent-dark' : 'text-primary-dark'
  const toneDot =
    status.tone === 'emerald' ? 'bg-emerald-500' : status.tone === 'accent' ? 'bg-accent' : 'bg-primary'

  return (
    <div
      className="relative h-44 w-full rounded-3xl overflow-hidden border border-primary/15"
      style={{ background: 'linear-gradient(180deg, #EAF3FA 0%, #DCEAF5 70%, #CFE1F0 100%)' }}
    >
      {/* Soft cloud blobs */}
      <div className="absolute -top-8 -left-6 h-20 w-32 rounded-full bg-white/60 blur-2xl" />
      <div className="absolute top-2 right-10 h-14 w-24 rounded-full bg-white/50 blur-xl" />

      {/* Header strip */}
      <div className="absolute top-3 left-4 right-4 flex items-center justify-between z-20">
        <div className="flex items-center gap-2">
          <svg className="h-3.5 w-3.5 text-primary-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary-dark">
            24/7 Callout
          </span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="font-display font-bold text-sm text-ink tabular-nums">
            {String(count).padStart(2, '0')}
          </span>
          <span className="font-mono text-[9px] uppercase tracking-widest text-muted">today</span>
        </div>
      </div>

      {/* Pipe at top with valve drops */}
      <svg className="absolute left-3 right-3 top-9 h-5" viewBox="0 0 400 20" preserveAspectRatio="none">
        <rect x="0" y="6" width="400" height="8" rx="4" fill="#1D6FB8" fillOpacity="0.22" />
        <rect x="0" y="7" width="400" height="2" fill="#14507F" fillOpacity="0.4" />
        <rect x="0" y="4" width="6" height="12" rx="1.5" fill="#14507F" fillOpacity="0.5" />
        <rect x="394" y="4" width="6" height="12" rx="1.5" fill="#14507F" fillOpacity="0.5" />
        {[60, 152, 248, 340].map((x) => (
          <g key={x}>
            <rect x={x - 3} y="2" width="6" height="6" rx="1" fill="#14507F" />
            <rect x={x - 4} y="13" width="8" height="3" rx="1" fill="#14507F" fillOpacity="0.7" />
          </g>
        ))}
      </svg>

      {/* Raindrop field */}
      <div className="absolute inset-x-0 top-14 bottom-11 overflow-hidden">
        {drops.map((d, i) => (
          <svg
            key={i}
            className="absolute top-0"
            style={{
              left: d.left,
              width: `${d.size}px`,
              height: `${Math.round(d.size * 1.5)}px`,
              animation: `rain-fall ${d.dur} cubic-bezier(0.55,0.05,0.7,0.45) ${d.delay} infinite`,
              filter: 'drop-shadow(0 1px 2px rgba(20,80,127,0.3))',
              transform: 'translateX(-50%)',
            }}
            viewBox="0 0 24 36"
          >
            <defs>
              <linearGradient id={`drop-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8EC0E8" />
                <stop offset="50%" stopColor="#4A93D4" />
                <stop offset="100%" stopColor="#1D6FB8" />
              </linearGradient>
            </defs>
            <path
              d="M12 2 C 9 9, 4 17, 4 24 a 8 8 0 0 0 16 0 C 20 17, 15 9, 12 2 Z"
              fill={`url(#drop-${i})`}
            />
            <ellipse cx="9" cy="22" rx="2" ry="3.5" fill="white" fillOpacity="0.55" />
          </svg>
        ))}
      </div>

      {/* Water surface */}
      <svg className="absolute bottom-9 left-3 right-3 h-3" viewBox="0 0 200 12" preserveAspectRatio="none">
        <path
          d="M 0,6 Q 12.5,2 25,6 T 50,6 T 75,6 T 100,6 T 125,6 T 150,6 T 175,6 T 200,6"
          fill="none"
          stroke="#14507F"
          strokeOpacity="0.45"
          strokeWidth="1.2"
        />
        <path
          d="M 0,8 Q 12.5,5 25,8 T 50,8 T 75,8 T 100,8 T 125,8 T 150,8 T 175,8 T 200,8"
          fill="none"
          stroke="#4A93D4"
          strokeOpacity="0.25"
          strokeWidth="0.8"
        />
      </svg>

      {/* Ripples */}
      <div className="absolute bottom-[34px] left-3 right-3 h-2">
        {ripples.map((r, i) => (
          <span
            key={i}
            className="absolute top-0 -translate-x-1/2 rounded-full border border-primary-dark/40"
            style={{ left: r.left, width: '4px', height: '4px', animation: `rain-ripple 2.4s ease-out ${r.delay} infinite` }}
          />
        ))}
      </div>

      {/* Bottom status */}
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between z-20">
        <div className="flex items-center gap-2 min-w-0">
          <span className={`relative h-2 w-2 rounded-full ${toneDot}`}>
            {status.tone === 'accent' && <span className={`absolute inset-0 rounded-full ${toneDot} animate-ping`} />}
          </span>
          <span key={status.text} className={`font-mono text-[10px] truncate ${toneText}`} style={{ animation: 'rain-fadein 0.35s ease-out' }}>
            {status.text}
          </span>
        </div>
        <span className={`font-mono text-[9px] uppercase tracking-[0.2em] whitespace-nowrap pl-2 ${toneText}`}>
          {status.label}
        </span>
      </div>

      <style>{`
        @keyframes rain-fall {
          0%   { transform: translate(-50%, -10px); opacity: 0; }
          12%  { opacity: 1; }
          82%  { opacity: 1; }
          100% { transform: translate(-50%, 95px); opacity: 0; }
        }
        @keyframes rain-ripple {
          0%   { transform: translateX(-50%) scale(0.4); opacity: 0.9; }
          80%  { transform: translateX(-50%) scale(3.5); opacity: 0; }
          100% { transform: translateX(-50%) scale(3.5); opacity: 0; }
        }
        @keyframes rain-fadein {
          from { opacity: 0; transform: translateY(2px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

/* ----------------------------------------------------------------
   Feature Card 3 — Booking scheduler
---------------------------------------------------------------- */
function BookingScheduler() {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  const [step, setStep] = useState(0)
  const activeDay = 2

  useEffect(() => {
    const interval = setInterval(() => setStep((prev) => (prev + 1) % 5), 1400)
    return () => clearInterval(interval)
  }, [])

  const cursorPos = (() => {
    switch (step) {
      case 0:
        return { x: 8, y: 110, opacity: 0 }
      case 1:
        return { x: 60, y: 60, opacity: 1 }
      case 2:
        return { x: 60 + activeDay * 36, y: 60, opacity: 1 }
      case 3:
        return { x: 60 + activeDay * 36, y: 60, opacity: 1 }
      case 4:
        return { x: 130, y: 130, opacity: 1 }
      default:
        return { x: 8, y: 110, opacity: 0 }
    }
  })()

  return (
    <div className="relative h-44 w-full bg-white border border-divider rounded-3xl p-5 overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">Week 27 · July</span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-primary-dark bg-primary/10 px-2 py-0.5 rounded-full">
          Booking
        </span>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-4">
        {days.map((d, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center h-9 rounded-xl text-xs font-medium transition-all duration-300 ${
              step >= 3 && idx === activeDay ? 'bg-primary text-white scale-110 shadow-lg shadow-primary/30' : 'bg-background text-ink'
            }`}
          >
            <span className="font-mono text-[9px] text-muted">{d}</span>
            <span className="font-display font-semibold text-sm">{idx + 7}</span>
          </div>
        ))}
      </div>

      <button
        className={`w-full py-2.5 rounded-2xl font-medium text-xs transition-all duration-300 ${
          step === 4 ? 'bg-accent text-white scale-[1.02] shadow-md shadow-accent/30' : 'bg-divider/40 text-muted'
        }`}
      >
        {step >= 3 ? '✓ Visit booked' : 'Pick a day'}
      </button>

      <div
        className="absolute pointer-events-none transition-all duration-500 ease-out"
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px`, opacity: cursorPos.opacity, transform: step === 3 ? 'scale(0.85)' : 'scale(1)' }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M5 3L19 12L12 13L9 20L5 3Z" fill="#1A1A1A" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}

/* ----------------------------------------------------------------
   Features Section
---------------------------------------------------------------- */
function Features() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 90%', once: true },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
      })
      gsap.from('.feature-heading > *', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 95%', once: true },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.08,
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const cards = [
    {
      eyebrow: '01 / Expertise',
      heading: 'Boiler Solutions',
      sub: 'Install to service',
      text: 'Boiler installation, replacement, servicing and repair. We keep your heating and hot water running safely and efficiently, all year round.',
      Component: BoilerShuffler,
    },
    {
      eyebrow: '02 / 24/7 Response',
      heading: 'Emergency Callout',
      sub: 'Leaks & bursts',
      text: 'A leak or burst never waits for office hours — and neither do we. Someone always answers, and we act fast to stop the damage.',
      Component: EmergencyRain,
    },
    {
      eyebrow: '03 / Planned Work',
      heading: 'Book a Visit',
      sub: 'Servicing & installs',
      text: 'Non-urgent job? Book a convenient slot for servicing, bathroom work or appliance installs — arranged around you, on time.',
      Component: BookingScheduler,
    },
  ]

  return (
    <section id="features" ref={sectionRef} className="relative py-28 sm:py-40 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="feature-heading max-w-3xl mb-16 sm:mb-24">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-dark">╱ What we do best</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight">
            Three strengths.
            <span className="block font-serif italic font-medium text-primary-dark mt-1">One promise.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <article
              key={idx}
              className="feature-card group relative bg-surface border border-divider rounded-5xl p-7 hover:border-primary/40 transition-colors duration-500 shadow-sm hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{card.eyebrow}</span>
                <ArrowUpRight className="h-5 w-5 text-ink/30 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" strokeWidth={1.8} />
              </div>

              <card.Component />

              <div className="mt-6">
                <h3 className="font-display font-bold text-2xl text-ink leading-tight">{card.heading}</h3>
                <p className="font-serif italic text-primary-dark text-sm mt-1">{card.sub}</p>
                <p className="text-muted text-[15px] mt-4 leading-relaxed">{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   CountUp
---------------------------------------------------------------- */
function CountUp({ target, duration = 1800 }) {
  const [count, setCount] = useState(0)
  const elemRef = useRef(null)
  const startedRef = useRef(false)

  useEffect(() => {
    const el = elemRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true
            const startTime = performance.now()
            const animate = (now) => {
              const elapsed = now - startTime
              const progress = Math.min(elapsed / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setCount(Math.floor(target * eased))
              if (progress < 1) requestAnimationFrame(animate)
              else setCount(target)
            }
            requestAnimationFrame(animate)
          }
        })
      },
      { threshold: 0.35 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={elemRef}>{count}</span>
}

/* ----------------------------------------------------------------
   Pillars
---------------------------------------------------------------- */
function Pillars() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const pillars = [
    {
      n: '01',
      title: 'Experience',
      target: 25,
      suffix: '+',
      label: 'years in the trade',
      desc: 'Over 25 years serving Norwich homes and businesses. A highly experienced team that has seen it all — and fixed it.',
    },
    {
      n: '02',
      title: 'Insured',
      target: 100,
      suffix: '%',
      label: 'fully insured',
      desc: 'A trusted, fully insured company. We take pride in doing the job properly and standing behind our work.',
    },
    {
      n: '03',
      title: 'Response',
      target: 24,
      suffix: '/7',
      label: 'emergency callout',
      desc: 'A team member is always on hand — weekends, evenings or the middle of the night. When you call, someone answers.',
    },
  ]

  return (
    <section id="why" ref={ref} className="relative py-28 sm:py-40 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[44rem] rounded-full bg-primary/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div
          className={`flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-24 transition-all duration-1000 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="max-w-2xl">
            <span className="inline-block font-mono text-xs uppercase tracking-[0.3em] text-primary-dark mb-5">╱ Why choose us</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.05] tracking-tight">
              The numbers behind
              <span className="block font-serif italic font-medium text-primary-dark">the trust.</span>
            </h2>
          </div>
          <p className="text-muted text-lg leading-relaxed max-w-md lg:text-right">
            Three figures that describe how we work. Not marketing — just what we deliver, every single call.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-divider rounded-5xl overflow-hidden border border-divider shadow-xl shadow-primary/5">
          {pillars.map((p, i) => (
            <article
              key={i}
              style={{ transitionDelay: visible ? `${i * 150}ms` : '0ms' }}
              className={`pillar-card relative bg-surface p-9 sm:p-12 group overflow-hidden transition-all duration-1000 ease-out ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex items-center justify-between mb-10">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">{p.n} / {p.title}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-primary/40 group-hover:bg-primary group-hover:scale-150 transition-all duration-500" />
              </div>

              <div className="flex items-end gap-1 leading-none">
                <span className="font-display font-extrabold text-[6rem] sm:text-[8rem] md:text-[9rem] leading-[0.85] text-ink tabular-nums tracking-tight">
                  <CountUp target={p.target} duration={1800 + i * 200} />
                </span>
                <span className="font-serif italic font-medium text-4xl sm:text-5xl md:text-6xl text-primary-dark mb-3 sm:mb-4">{p.suffix}</span>
              </div>

              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary-dark mt-5">{p.label}</p>
              <p className="text-muted text-[15px] mt-6 leading-relaxed max-w-xs">{p.desc}</p>

              <div className="absolute bottom-0 left-9 right-9 sm:left-12 sm:right-12 h-px bg-divider overflow-hidden">
                <div className="h-full bg-gradient-to-r from-transparent via-primary to-transparent" style={{ animation: `pillar-sweep 4s ease-in-out ${i * 0.4}s infinite` }} />
              </div>

              <span className="absolute top-9 right-9 sm:top-12 sm:right-12 font-mono text-[9px] uppercase tracking-widest text-primary/30">RPP·{p.n}</span>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pillar-sweep {
          0%   { transform: translateX(-100%); }
          50%  { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  )
}

/* ----------------------------------------------------------------
   Protocol — Sticky Stacking Cards
---------------------------------------------------------------- */
function Protocol() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card')
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top top+=100',
            endTrigger: cards[cards.length - 1],
            end: 'top top+=120',
            scrub: 1,
          },
          scale: 0.92,
          filter: 'blur(6px) saturate(0.7)',
          opacity: 0.5,
          ease: 'none',
        })
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  const steps = [
    {
      num: '01',
      title: 'Call & Assess',
      tagline: 'We answer first.',
      text: 'Pick up the phone any hour of the day and a team member will talk through the problem, assess urgency and arrange to attend. No call centre, no hold music.',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
      alt: 'Plumber discussing a job',
      meta: 'Step 1 / Listen',
    },
    {
      num: '02',
      title: 'Diagnose & Quote',
      tagline: 'We find the root.',
      text: 'We identify the real cause, not just the symptom, and give you a clear, honest quotation before any work begins. You always know where you stand.',
      image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1200&q=80',
      alt: 'Plumber inspecting pipework under a sink',
      meta: 'Step 2 / Diagnose',
    },
    {
      num: '03',
      title: 'Fix & Guarantee',
      tagline: 'We stand behind it.',
      text: 'We complete the work to a high standard, tidy up after ourselves and follow up to make sure you are happy — backed by our 100% guaranteed leak stop.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80',
      alt: 'Plumber completing a repair',
      meta: 'Step 3 / Deliver',
    },
  ]

  return (
    <section id="process" ref={containerRef} className="relative px-4 sm:px-6 py-20">
      <div className="max-w-7xl mx-auto mb-16 px-2 sm:px-10">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-dark">╱ How we work</span>
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight max-w-3xl">
          Three steps.
          <span className="block font-serif italic font-medium text-primary-dark">No surprises.</span>
        </h2>
      </div>

      <div className="space-y-8">
        {steps.map((step, idx) => (
          <article
            key={idx}
            className="protocol-card sticky top-24 sm:top-28 mx-auto max-w-6xl bg-gradient-to-br from-surface to-background border border-divider rounded-6xl overflow-hidden shadow-2xl shadow-primary/5"
          >
            <div className="grid lg:grid-cols-5 gap-0 min-h-[60vh] lg:min-h-[70vh]">
              <div className="lg:col-span-3 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">{step.meta}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-primary-dark bg-primary/10 px-2.5 py-1 rounded-full">RPP Protocol</span>
                </div>

                <div className="my-12">
                  <span className="font-display font-extrabold text-[7rem] sm:text-[10rem] leading-none text-primary/15 -mb-4 block">{step.num}</span>
                  <h3 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.02] tracking-tight">{step.title}</h3>
                  <p className="font-serif italic text-primary-dark text-2xl sm:text-3xl mt-3">{step.tagline}</p>
                </div>

                <p className="text-muted text-base sm:text-lg leading-relaxed max-w-lg">{step.text}</p>
              </div>

              <div className="lg:col-span-2 relative overflow-hidden min-h-[300px] lg:min-h-full bg-deep">
                <img src={step.image} alt={step.alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/60 via-transparent to-deep/15" />
                <div className="absolute top-5 left-5 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full pl-3 pr-4 py-1.5 shadow-lg">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-ink">Step {step.num}</span>
                </div>
                <div className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-widest text-white/70">{step.num} / RPP</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   All Services Grid
---------------------------------------------------------------- */
function ServicesGrid() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.svc-tile', {
        scrollTrigger: { trigger: ref.current, start: 'top 90%', once: true },
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.06,
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section className="relative py-24 px-6 sm:px-10 lg:px-16 bg-deep text-white overflow-hidden rounded-t-6xl">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />
      <div className="absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-light">╱ Everything we do</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl mt-4 leading-[1.05] tracking-tight">
              The full service,
              <span className="block font-serif italic font-medium text-primary-light">under one roof.</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-md text-base leading-relaxed">
            Domestic and commercial jobs of every size across Norwich — including Brundall, Cringleford, Hoveton and Wroxham.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-4xl overflow-hidden">
          {SERVICES_FULL.map((svc, i) => {
            const Icon = svc.icon
            return (
              <div key={i} className="svc-tile group bg-deep p-7 sm:p-9 hover:bg-white/[0.03] transition-colors duration-500 relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="h-12 w-12 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                    <Icon className="h-5 w-5 text-primary-light group-hover:text-white" strokeWidth={2} />
                  </div>
                  <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl mb-3">{svc.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{svc.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Trust Signals
---------------------------------------------------------------- */
function TrustSignals() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const badges = [
    {
      Icon: ShieldCheck,
      title: 'Fully insured',
      text: 'A trusted, fully insured business. Every job is carried out safely and to a professional standard you can rely on.',
    },
    {
      Icon: Award,
      title: 'Family-run & local',
      text: 'An independent, family-run company that takes pride in looking after its Norwich customers and community.',
    },
    {
      Icon: Clock,
      title: '24/7 emergency callout',
      text: 'Available around the clock, every day of the year. When something goes wrong, we are only a phone call away.',
    },
  ]

  return (
    <section ref={ref} className="relative py-14 sm:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-dark">╱ Why trust us</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink mt-3 tracking-tight">More than a quote.</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {badges.map(({ Icon, title, text }, i) => (
            <div
              key={i}
              style={{ transitionDelay: visible ? `${i * 120}ms` : '0ms' }}
              className={`bg-white border border-divider rounded-4xl p-6 hover:border-primary/40 transition-all duration-700 ease-out shadow-sm ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <Icon className="h-6 w-6 text-primary mb-3" strokeWidth={1.8} />
              <h3 className="font-display font-bold text-lg text-ink mb-1.5">{title}</h3>
              <p className="text-muted text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href={`tel:${PHONE_TEL}`} className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-full shadow-xl shadow-primary/30">
            <Phone className="h-4 w-4" />
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Contact Form
---------------------------------------------------------------- */
function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', zip: '', message: '' })
  const [files, setFiles] = useState([])
  const [status, setStatus] = useState('idle')
  const dropRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    try {
      const data = new FormData()
      data.append('access_key', WEB3FORMS_ACCESS_KEY)
      data.append('subject', 'New website enquiry — Rescue Plumbers Plus')
      data.append('from_name', 'Rescue Plumbers Plus website')
      data.append('name', form.name)
      data.append('email', form.email)
      data.append('phone', form.phone)
      data.append('postcode', form.zip)
      data.append('message', form.message)
      files.forEach((f, i) => data.append(`attachment_${i + 1}`, f))
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
      const json = await res.json()
      if (json.success) {
        setStatus('sent')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const handleFiles = (newFiles) => {
    setFiles((prev) => [...prev, ...Array.from(newFiles)].slice(0, 5))
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-5">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-dark">╱ Contact</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight">
              Report an issue or
              <span className="block font-serif italic font-medium text-primary-dark">request a quote.</span>
            </h2>
            <p className="text-muted text-lg mt-6 leading-relaxed max-w-md">
              For emergencies, call us 24 hours a day. For everything else, leave your details and we will get back to you as quickly as we can.
            </p>

            <div className="mt-10 space-y-4">
              <a href={`tel:${PHONE_TEL}`} className="lift-on-hover flex items-center gap-4 group">
                <span className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition">
                  <Phone className="h-5 w-5 text-primary group-hover:text-white" />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-muted">Call 24/7</span>
                  <span className="font-display font-semibold text-ink text-lg">{PHONE_DISPLAY}</span>
                </span>
              </a>

              <div className="flex items-center gap-4">
                <span className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-muted">Service area</span>
                  <span className="font-display font-semibold text-ink text-lg">Norwich &amp; surrounding villages</span>
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-muted">Availability</span>
                  <span className="font-display font-semibold text-ink text-lg">24 hours · 7 days a week</span>
                </span>
              </div>
            </div>

            <div className="mt-10 p-5 rounded-3xl bg-primary/5 border border-primary/15">
              <p className="font-mono text-[10px] uppercase tracking-widest text-primary-dark mb-2">Your data is safe</p>
              <p className="text-sm text-muted leading-relaxed">
                We only use your details to respond to your enquiry. Your information is kept securely and never used for third-party marketing.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="bg-surface border border-divider rounded-5xl p-7 sm:p-10 shadow-xl shadow-primary/5">
              {status !== 'sent' ? (
                <>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Name" required value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                    <Field label="Email address" type="email" required value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                    <Field label="Telephone number" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
                    <Field label="Postcode" value={form.zip} onChange={(v) => setForm({ ...form, zip: v })} />
                  </div>

                  <div className="mt-5">
                    <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-2 block">Your message *</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      rows={5}
                      placeholder="Briefly describe the issue or the work you need..."
                      className="w-full bg-background border border-divider rounded-2xl px-4 py-3.5 text-ink placeholder-muted/60 focus:border-primary focus:ring-4 focus:ring-primary/15 outline-none transition resize-none font-body"
                    />
                  </div>

                  <div
                    ref={dropRef}
                    onDragOver={(e) => {
                      e.preventDefault()
                      dropRef.current?.classList.add('!border-primary', '!bg-primary/5')
                    }}
                    onDragLeave={() => {
                      dropRef.current?.classList.remove('!border-primary', '!bg-primary/5')
                    }}
                    onDrop={(e) => {
                      e.preventDefault()
                      dropRef.current?.classList.remove('!border-primary', '!bg-primary/5')
                      handleFiles(e.dataTransfer.files)
                    }}
                    className="mt-5 border-2 border-dashed border-divider rounded-3xl p-6 text-center hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    <input type="file" multiple id="file-up" className="hidden" onChange={(e) => handleFiles(e.target.files)} accept="image/*" />
                    <label htmlFor="file-up" className="cursor-pointer block">
                      <Upload className="h-6 w-6 mx-auto text-primary-dark mb-2" />
                      <p className="font-display font-semibold text-ink text-sm">Attach photos of the problem</p>
                      <p className="text-xs text-muted mt-1">Click or drag files here (max 5 images)</p>
                      {files.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2 justify-center">
                          {files.map((f, i) => (
                            <span key={i} className="inline-flex items-center gap-1.5 bg-primary/10 text-primary-dark text-xs px-3 py-1.5 rounded-full font-mono">
                              <CheckCircle2 className="h-3 w-3" />
                              {f.name.length > 22 ? f.name.slice(0, 22) + '…' : f.name}
                            </span>
                          ))}
                        </div>
                      )}
                    </label>
                  </div>

                  {status === 'error' && (
                    <p className="mt-5 text-sm text-red-700 bg-red-50 border border-red-200 rounded-2xl px-4 py-3">
                      Sorry — something went wrong sending your message. Please call us on {PHONE_DISPLAY} or try again.
                    </p>
                  )}

                  <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="text-xs text-muted">We will be in touch as soon as possible. Fields marked * are required.</p>
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-primary/30 disabled:opacity-50"
                    >
                      {status === 'sending' ? 'Sending...' : 'Send enquiry'}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="h-16 w-16 mx-auto rounded-full bg-primary/15 flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-8 w-8 text-primary-dark" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-ink mb-3">Thanks — we've got your enquiry</h3>
                  <p className="text-muted max-w-md mx-auto">
                    We'll be in touch shortly. If it's urgent, please call us on {PHONE_DISPLAY} — someone always answers.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, type = 'text', required, value, onChange }) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-2 block">
        {label} {required && '*'}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-background border border-divider rounded-2xl px-4 py-3.5 text-ink placeholder-muted/60 focus:border-primary focus:ring-4 focus:ring-primary/15 outline-none transition font-body"
      />
    </div>
  )
}

/* ----------------------------------------------------------------
   Footer
---------------------------------------------------------------- */
function Footer() {
  return (
    <footer className="relative bg-deep text-white rounded-t-6xl mt-12 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[40rem] rounded-full bg-primary/25 blur-3xl" />

      <div className="relative px-6 sm:px-10 lg:px-16 pt-20 pb-10 max-w-7xl mx-auto">
        <div className="border-b border-white/10 pb-12 mb-12">
          <h2 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl leading-[0.92] tracking-tight">
            Plumbers you can
            <span className="font-serif italic font-medium text-primary-light block">rely on.</span>
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mt-8 gap-6">
            <p className="text-white/50 max-w-md">
              Rescue Plumbers Plus — 24 hour emergency plumbers based in Norwich, covering the city and surrounding villages.
            </p>
            <a href={`tel:${PHONE_TEL}`} className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-full self-start sm:self-auto">
              <Phone className="h-4 w-4" />
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-9 w-9 rounded-full bg-primary flex items-center justify-center">
                <Droplets className="h-5 w-5 text-white" strokeWidth={2.4} />
              </span>
              <span className="font-display font-bold text-lg">Rescue Plumbers Plus</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              An independent, family-run and fully insured plumbing company with over 25 years' experience serving Norwich.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] uppercase tracking-widest text-white/50 hover:text-primary-light transition">Facebook</a>
              <span className="text-white/20">·</span>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] uppercase tracking-widest text-white/50 hover:text-primary-light transition">LinkedIn</a>
            </div>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-light mb-4">Services</p>
            <ul className="space-y-2.5">
              {SERVICES_FULL.slice(0, 4).map((s, i) => (
                <li key={i}>
                  <a href="#services" className="text-white/65 hover:text-primary-light transition text-sm">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-light mb-4">Company</p>
            <ul className="space-y-2.5">
              <li><a href="#why" className="text-white/65 hover:text-primary-light transition text-sm">Why Us</a></li>
              <li><a href="#process" className="text-white/65 hover:text-primary-light transition text-sm">Process</a></li>
              <li><a href="#contact" className="text-white/65 hover:text-primary-light transition text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-light mb-4">Contact</p>
            <ul className="space-y-2.5">
              <li><a href={`tel:${PHONE_TEL}`} className="text-white/65 hover:text-primary-light transition text-sm">{PHONE_DISPLAY}</a></li>
              <li className="text-white/65 text-sm">Norwich, Norfolk</li>
              <li className="text-white/65 text-sm">24 hours · 7 days</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/60">On call · Ready to help</span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/50 text-xs font-mono">
            <Link to="/privacy" className="hover:text-primary-light transition">Privacy</Link>
            <Link to="/terms" className="hover:text-primary-light transition">Terms</Link>
            <span>© {new Date().getFullYear()} Rescue Plumbers Plus Ltd</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ----------------------------------------------------------------
   Our Most Popular Services (real icons from the existing site)
---------------------------------------------------------------- */
function PopularServices() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pop-card', {
        scrollTrigger: { trigger: ref.current, start: 'top 88%', once: true },
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.06,
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="services" ref={ref} className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-14 sm:mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-dark">╱ Our services</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight">
            Our most popular
            <span className="block font-serif italic font-medium text-primary-dark">services.</span>
          </h2>
          <p className="text-muted text-lg mt-6 leading-relaxed">
            From emergency call-outs to boiler work and everyday repairs — the jobs Norwich calls us for most.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {POPULAR_SERVICES.map((s, i) => (
            <article
              key={i}
              className="pop-card group bg-surface border border-divider rounded-4xl p-6 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500"
            >
              <div className="h-16 w-16 rounded-2xl bg-white border border-divider flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <img src={s.img} alt={s.title} loading="lazy" className="h-11 w-11 object-contain" />
              </div>
              <h3 className="font-display font-bold text-lg text-ink mt-5 leading-tight">{s.title}</h3>
              <p className="text-muted text-sm mt-2 leading-relaxed">{s.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <a href={`tel:${PHONE_TEL}`} className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-full shadow-xl shadow-primary/30">
            <Phone className="h-4 w-4" /> Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Areas We Cover
---------------------------------------------------------------- */
function Areas() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.area-card', {
        scrollTrigger: { trigger: ref.current, start: 'top 88%', once: true },
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.08,
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="areas" ref={ref} className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-deep text-white overflow-hidden rounded-t-6xl">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />
      <div className="absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-light">╱ Where we work</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl mt-4 leading-[1.05] tracking-tight">
              Areas we cover,
              <span className="block font-serif italic font-medium text-primary-light">around the clock.</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-md text-base leading-relaxed">
            Based in Norwich and covering the city plus the surrounding Broads villages — Brundall, Cringleford, Hoveton and Wroxham.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {AREAS.map((a, i) => (
            <article
              key={i}
              className={`area-card group relative bg-white/[0.04] border border-white/10 rounded-4xl p-7 hover:bg-white/[0.07] hover:border-primary/40 transition-all duration-500 ${
                i === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-primary-light">
                  <MapPin className="h-3.5 w-3.5" /> {a.tag}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">24/7</span>
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl">{a.name}</h3>
              <p className="text-white/60 text-sm mt-3 leading-relaxed max-w-lg">{a.text}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {a.services.map((sv, j) => (
                  <span key={j} className="inline-flex items-center gap-1.5 bg-primary/15 border border-primary/25 text-primary-light text-xs px-3 py-1.5 rounded-full">
                    <CheckCircle2 className="h-3 w-3" /> {sv}
                  </span>
                ))}
              </div>
              <a href={`tel:${PHONE_TEL}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-primary-light transition">
                <Phone className="h-4 w-4" /> Call {PHONE_DISPLAY}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Testimonials
---------------------------------------------------------------- */
function Testimonials() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="reviews" ref={ref} className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-dark">╱ Reviews</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight">
            What our customers
            <span className="block font-serif italic font-medium text-primary-dark">say about us.</span>
          </h2>
        </div>

        {/* SAMPLE reviews — replace with your real Google / Rated People / Yell reviews before going live */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              style={{ transitionDelay: visible ? `${i * 120}ms` : '0ms' }}
              className={`bg-surface border border-divider rounded-4xl p-7 shadow-sm transition-all duration-700 ease-out ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div className="flex gap-1 text-accent mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-accent" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="text-ink text-[15px] leading-relaxed">“{t.quote}”</blockquote>
              <figcaption className="mt-5 font-display font-semibold text-ink text-sm">
                {t.name}
                <span className="text-muted font-normal"> · {t.place}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">Find &amp; review us on</span>
          <div className="flex items-center gap-6">
            <img src={RATED_PEOPLE_URL} alt="Rated People" className="h-8 w-auto object-contain" />
            <img src={YELL_URL} alt="Yell" className="h-7 w-auto object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   FAQ
---------------------------------------------------------------- */
function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-dark">╱ FAQ</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight">
            Questions,
            <span className="block font-serif italic font-medium text-primary-dark">answered.</span>
          </h2>
        </div>

        <div className="divide-y divide-divider border-t border-b border-divider">
          {FAQS.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold text-ink text-lg group-hover:text-primary transition-colors">
                    {f.q}
                  </span>
                  <Plus className={`h-5 w-5 flex-shrink-0 text-primary transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-60 pb-5' : 'max-h-0'}`}>
                  <p className="text-muted leading-relaxed">{f.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   App
---------------------------------------------------------------- */
export default function App() {
  useEffect(() => {
    const t1 = setTimeout(() => ScrollTrigger.refresh(), 200)
    const t2 = setTimeout(() => ScrollTrigger.refresh(), 1000)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  return (
    <div className="relative">
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <PopularServices />
        <Pillars />
        <Protocol />
        <Areas />
        <TrustSignals />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
/* Rescue Plumbers Plus — single-file marketing site */
