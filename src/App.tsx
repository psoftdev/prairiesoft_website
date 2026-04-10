import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Cloud,
  Cpu,
  Globe2,
  Rocket,
  ShieldCheck,
  Workflow,
  Gauge,
  ServerCog,
  ArrowRight,
  CheckCircle2,
  Quote,
  Mail,
  Phone,
  Bot,
  Building2,
} from 'lucide-react'
import './index.css'

type Stat = { label: string; value: string }
type Service = {
  title: string
  icon: React.ElementType
  description: string
  benefits: string[]
}
type Testimonial = { quote: string; name: string; title: string; avatar: string }
type CaseStudy = { title: string; description: string; result: string; tag: string }

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.9, delay },
})

const containerVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9 } },
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const response = await fetch('https://formspree.io/f/xeolavzw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const stats: Stat[] = [
    { label: 'Cloud cost reduced', value: '30–60%' },
    { label: 'Faster deployments', value: '10×' },
    { label: 'Core web vitals', value: '95%+' },
    { label: 'Time to first value', value: '< 2 weeks' },
  ]

  const services: Service[] = [
    {
      title: 'Cloud Consulting',
      icon: Cloud,
      description:
        'AWS, Azure, GCP with DevOps/FinOps discipline. We modernize, migrate, and optimize for speed and cost.',
      benefits: [
        'Architecture and migrations',
        'CI/CD, IaC, observability',
        'FinOps and cost',
      ],
    },
    {
      title: 'AI Agent Creation',
      icon: Workflow,
      description:
        'Production-grade RAG, workflow automation, and secure private deployments tailored to your data.',
      benefits: [
        'RAG + tool use orchestration',
        'Guardrails and privacy-first design',
        'SLAs, monitoring, evals',
      ],
    },
    {
      title: 'Website Development',
      icon: Globe2,
      description:
        'Next.js sites with CMS integration, accessible UI, SEO, and performance budgets from day one.',
      benefits: [
        'Headless CMS and design systems',
        'Core Web Vitals excellence',
        'Internationalization and SEO',
      ],
    },
    {
      title: 'Enterprise Integrations',
      icon: Building2,
      description:
        'ERP (Sage, Cloud ERP), Salesforce, QuickBooks, custom software, and RPA for high‑volume ops.',
      benefits: [
        'Data sync and workflow automation',
        'Secure auth and role mapping',
        'RPA for invoices and back-office scale',
      ],
    },
  ]

  const testimonials: Testimonial[] = [
    {
      quote:
        'Prairiesoft moved us to a modern cloud stack and cut our spend nearly in half without sacrificing reliability.',
      name: 'Ava Nguyen',
      title: 'VP Engineering, Vertex Systems',
      avatar: 'https://i.pravatar.cc/80?img=5',
    },
    {
      quote:
        'Their AI workflow agent took our ops off-hours from manual to automated. The ROI was immediate.',
      name: 'Marcus Silva',
      title: 'CTO, Orbital Labs',
      avatar: 'https://i.pravatar.cc/80?img=12',
    },
  ]

  const cases: CaseStudy[] = [
    {
      title: 'RAG Agent for Support',
      description:
        'Integrated private docs and ticket data to power a secure support copilot, reducing handle time.',
      result: '−42% support resolution time',
      tag: 'AI Agents',
    },
    {
      title: 'Cloud Cost Optimization',
      description:
        'Applied FinOps and autoscaling to a payments platform. Zero downtime, measurable savings.',
      result: '−38% monthly cloud cost',
      tag: 'Cloud',
    },
    {
      title: 'Headless Web Rebuild',
      description:
        'Rebuilt marketing site in Next.js with a CMS, improving SEO and conversions with faster pages.',
      result: '+26% qualified leads',
      tag: 'Web',
    },
  ]

  return (
    <div className="font-sans">
      {/* Header */}
      <header className="site-header sticky top-0 z-40 border-b border-white/10 bg-secondary/70 backdrop-blur supports-[backdrop-filter]:bg-secondary/60">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" className="inline-flex items-center gap-2" aria-label="Home">
            <img src="/logo.png" alt="Company logo" className="h-8 w-auto md:h-9" />
          </a>
          <nav className="hidden md:flex items-center gap-2 text-base" aria-label="Primary">
            <a href="#services" className="nav-link">Services</a>
            <a href="#integrations" className="nav-link">Enterprise</a>
            <a href="#why-us" className="nav-link">Why us</a>
            <a href="#process" className="nav-link">Process</a>
            <a href="#work" className="nav-link">Work</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="btn-primary" aria-label="Book a discovery call">
              <span>Book discovery</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-md border border-white/15 p-2 text-offwhite hover:bg-white/10"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-white/10">
            <div className="grid gap-2 py-3 text-sm px-4 sm:px-6 lg:px-8">
              {[
                { href: '#services', label: 'Services' },
                { href: '#integrations', label: 'Enterprise' },
                { href: '#why-us', label: 'Why us' },
                { href: '#process', label: 'Process' },
                { href: '#work', label: 'Work' },
                { href: '#contact', label: 'Contact' },
              ].map((i) => (
                <a key={i.href} href={i.href} className="rounded-md px-2 py-2 hover:bg-white/10 no-underline hover:no-underline text-offwhite" onClick={() => setMenuOpen(false)}>
                  {i.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="section relative overflow-hidden">
        <div className="hero-accents" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-grid-dark [background-size:16px_16px] opacity-15" aria-hidden />
        <div className="container-responsive relative">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div {...fadeUp(0)}>
              <span className="badge">Cloud • AI Agents • Web</span>
            </motion.div>
            <motion.h1 {...fadeUp(0.05)} className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight heading-gradient">
              Build smarter. Ship faster.
              <span className="block">Cloud, AI agents, web, and enterprise integrations—done right.</span>
            </motion.h1>
            <motion.p {...fadeUp(0.1)} className="mt-5 text-lg md:text-xl text-offwhite">
              Prairiesoft helps teams move with confidence—from scalable cloud foundations to practical AI automations, high‑performing websites, and ERP/CRM integrations.
            </motion.p>
            <motion.div {...fadeUp(0.15)} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="#contact" className="btn-primary" aria-label="Start a project">
                Start a project
                <Rocket className="h-4 w-4" />
              </a>
              <a href="#services" className="btn-secondary" aria-label="See services">
                Explore services
              </a>
            </motion.div>
            <motion.div {...fadeUp(0.18)} className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-offwhite/80">
              {['AWS','Azure','GCP','OpenAI','LangChain','Salesforce','Sage','QuickBooks','Next.js','Docker','Terraform'].map((t) => (
                <span key={t} className="rounded-md border border-white/15 px-2.5 py-1">{t}</span>
              ))}
            </motion.div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {stats.map((s, i) => (
                <motion.div key={i} variants={itemVariants} className="card-dark p-4 text-center">
                  <div className="text-2xl font-bold text-offwhite">{s.value}</div>
                  <div className="mt-1 text-xs text-offwhite">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enterprise Integrations */}
      <section id="integrations" className="section bg-secondary/30">
        <div className="container-responsive">
          <motion.div {...fadeUp(0)} className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Enterprise integrations</h2>
            <p className="mt-3 text-offwhite">ERP, CRM, finance, and custom systems working together—securely and reliably.</p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10 grid gap-6 md:grid-cols-4"
          >
            {[{
              title: 'ERP Systems', bullets: ['Sage (Intacct, 300)', 'Cloud ERPs', 'Custom data models & ETL', 'Reporting & dashboards']
            },{
              title: 'CRM & Finance', bullets: ['Salesforce (APIs, Flows)', 'QuickBooks (Online/Desktop)', 'Billing & invoicing pipelines', 'Data sync & reconciliation']
            },{
              title: 'Automation (RPA)', bullets: ['High‑volume tasks (e.g., invoice processing)', 'Workflow bots & approvals', 'Document AI & OCR', 'Auditability & alerts']
            },{
              title: 'Custom Solutions', bullets: ['Integration hubs & microservices', 'Event‑driven architectures', 'Secure, private deployments', 'Observability end‑to‑end']
            }].map((r) => (
              <motion.div key={r.title} variants={itemVariants} className="card-dark p-6">
                <div className="inline-flex items-center gap-2 rounded-md bg-primary/15 px-3 py-1 text-primary font-semibold">
                  <Workflow className="h-4 w-4" aria-hidden /> {r.title}
                </div>
                <ul className="mt-4 space-y-3 text-sm text-offwhite">
                  {r.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden /> {b}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-8 card-dark p-5 text-sm text-offwhite">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-md bg-emerald-500/15 px-3 py-1 text-emerald-300 font-semibold"><Bot className="h-4 w-4"/> RPA spotlight</div>
              <div>Invoice processing bot: pulls PDFs, extracts fields with OCR, validates against PO, posts to ERP, and updates Slack. <span className="text-primary">40–70% cycle time reduction</span> typical.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section">
        <div className="container-responsive">
          <motion.div {...fadeUp(0)} className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold">What we do</h2>
            <p className="mt-3 text-offwhite">Deep expertise, delivered with velocity.</p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10 grid gap-6 md:grid-cols-3"
          >
            {services.map((s) => (
              <motion.div key={s.title} variants={itemVariants} className="card-dark p-6 hover:translate-y-[-2px] transition-transform">
                <div className="flex items-center gap-3">
                  <s.icon className="h-6 w-6 text-primary" aria-hidden />
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                </div>
                <p className="mt-3 text-sm text-offwhite">{s.description}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" aria-hidden />
                      <span className="text-offwhite">{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why-us" className="section">
        <div className="container-responsive">
          <motion.div {...fadeUp(0)} className="grid gap-6 md:grid-cols-2">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Why Prairiesoft</h2>
              <p className="mt-3 text-offwhite">
                Senior engineers, pragmatic process, and measurable outcomes. We embed with your team and deliver what matters.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[{
                  icon: ServerCog, title: 'Operational excellence', text: 'CI/CD, IaC, monitoring, and SRE-first practices.'
                }, {
                  icon: ShieldCheck, title: 'Security by default', text: 'Privacy-first AI and compliant cloud architectures.'
                }, {
                  icon: Gauge, title: 'Performance budgets', text: 'Web apps that ship fast and stay fast.'
                }, {
                  icon: Cpu, title: 'Outcome-focused', text: 'Clear goals, weekly demos, and transparent metrics.'
                }].map((d) => (
                  <div key={d.title} className="card-dark p-5">
                    <div className="flex items-center gap-3">
                      <d.icon className="h-5 w-5 text-primary" aria-hidden />
                      <h3 className="font-semibold">{d.title}</h3>
                    </div>
                    <p className="mt-2 text-sm text-offwhite">{d.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-6">
              <h3 className="text-xl font-semibold">Outcomes we target</h3>
              <ul className="mt-4 space-y-3 text-sm text-offwhite">
                {[
                  'Cut infrastructure costs 30–60% with FinOps and right-sizing.',
                  'Ship AI agents with SLAs, monitoring, and guardrails in weeks, not months.',
                  'Lift Core Web Vitals to 95%+ with modern tooling and disciplined budgets.',
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-primary hover:underline">
                Discuss your goals <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="section">
        <div className="container-responsive">
          <motion.div {...fadeUp(0)} className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold">How we work</h2>
            <p className="mt-3 text-offwhite">Clear steps from discovery to launch.</p>
          </motion.div>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              { title: 'Discovery', text: 'We map goals, constraints, and success metrics.' },
              { title: 'Design', text: 'Architecture, backlog, and a plan sized for outcomes.' },
              { title: 'Build', text: 'Iterative delivery with weekly demos and checkpoints.' },
              { title: 'Launch', text: 'Cutover, runbooks, observability, and handover.' },
            ].map((p, i) => (
              <motion.div key={p.title} {...fadeUp(i * 0.05)} className="card-dark p-6 hover:translate-y-[-2px] transition-transform">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary/20 text-primary font-bold">
                    {i + 1}
                  </span>
                  <h3 className="font-semibold">{p.title}</h3>
                </div>
                <p className="mt-2 text-sm text-offwhite">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="work" className="section">
        <div className="container-responsive">
          <motion.div {...fadeUp(0)} className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Selected work</h2>
            <p className="mt-3 text-offwhite">A few examples of recent outcomes.</p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10 grid gap-6 md:grid-cols-3"
          >
            {cases.map((c, i) => (
              <motion.article key={c.title} variants={itemVariants} className="card-dark p-6 hover:translate-y-[-2px] transition-transform" aria-labelledby={`case-${i}`}>
                <span className="badge">{c.tag}</span>
                <h3 id={`case-${i}`} className="mt-3 text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-offwhite">{c.description}</p>
                <p className="mt-4 text-sm font-semibold text-offwhite">{c.result}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section">
        <div className="container-responsive">
          <motion.div {...fadeUp(0)} className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Clients</h2>
            <p className="mt-3 text-offwhite">What teams say about working with us.</p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10 grid gap-6 md:grid-cols-2"
          >
            {testimonials.map((t) => (
              <motion.figure key={t.name} variants={itemVariants} className="card-dark p-6">
                <Quote className="h-6 w-6 text-primary" aria-hidden />
                <blockquote className="mt-3 text-sm md:text-base">“{t.quote}”</blockquote>
                <figcaption className="mt-4 flex items-center gap-3 text-offwhite">
                  <img src={t.avatar} alt="" className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs">{t.title}</div>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-responsive">
          <motion.div {...fadeUp(0)} className="card-dark p-8 md:p-10 text-center hover:translate-y-[-2px] transition-transform">
            <h2 className="text-2xl md:text-3xl font-bold">Ready to move faster?</h2>
            <p className="mt-3 text-offwhite">Book a 30‑minute discovery call. No sales fluff—just engineers.</p>
            <div className="mt-6 flex items-center justify-center">
              <a href="#contact" className="btn-primary" aria-label="Book a discovery call">
                Book a discovery call
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="container-responsive">
          <motion.div {...fadeUp(0)} className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
            <p className="mt-3 text-offwhite">Tell us about your systems and goals—we’ll follow up within one business day.</p>
          </motion.div>
          <div className="mt-10 grid gap-10 lg:grid-cols-2 items-start">
            <div className="space-y-3 text-sm text-offwhite">
              <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" aria-hidden /> <a className="hover:underline" href="mailto:prairiesoft@gmail.com">prairiesoft@gmail.com</a></div>
              <div className="flex items-center gap-2"><Globe2 className="h-4 w-4 text-primary" aria-hidden /> <span>Calgary • Lethbridge • Medicine hat • Remote‑friendly</span></div>
            </div>
            <form className="card-dark p-6 max-w-xl w-full mx-auto grid gap-4" onSubmit={handleFormSubmit} aria-label="Contact form">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-offwhite">Name</label>
                <input 
                  id="name" 
                  name="name" 
                  type="text" 
                  required 
                  className="mt-1 input-base" 
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-offwhite">Email</label>
                <input 
                  id="email" 
                  name="email" 
                  type="email" 
                  required 
                  className="mt-1 input-base" 
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-offwhite">Phone Number <span className="text-gray-400">(optional)</span></label>
                <input 
                  id="phone" 
                  name="phone" 
                  type="tel" 
                  className="mt-1 input-base" 
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-offwhite">What are you building?</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows={4} 
                  className="mt-1 input-base" 
                  placeholder="ERP/CRM scope, data sources, timelines, success criteria"
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-sm">
                  Message sent successfully! We'll get back to you within one business day.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-sm">
                  Something went wrong. Please try again or contact us directly.
                </div>
              )}
              
              <button 
                type="submit" 
                className="mt-2 btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed" 
                aria-label="Send message"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send message'}
                {!isSubmitting && <ArrowRight className="h-4 w-4" />}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <div className="container-responsive flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-offwhite">© {new Date().getFullYear()} Prairiesoft. All rights reserved.</div>
          <nav className="flex items-center gap-4 text-sm text-offwhite" aria-label="Footer">
            <a href="#services" className="hover:opacity-80">Services</a>
            <a href="#work" className="hover:opacity-80">Work</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

