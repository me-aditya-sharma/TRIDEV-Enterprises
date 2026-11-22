import { Link } from 'react-router-dom'
import { brand, categories } from '../data/site'
export default function Footer(){return(<footer className="bg-navy text-white pt-12 pb-20 lg:pb-6"><div className="max-w-7xl mx-auto px-4 grid gap-8 md:grid-cols-3">
  <div><img src="/logo.png" alt="Tridev Enterprises logo" loading="lazy" className="h-14 bg-white rounded p-1"/><p className="mt-3 text-white/80 text-sm">{brand.footer}</p></div>
  <div><h3 className="font-bold mb-3">Services</h3><ul className="space-y-1 text-sm text-white/80">{categories.map(c=><li key={c.id}>{c.id}</li>)}</ul>
    <h3 className="font-bold mt-4 mb-2">Quick Links</h3><p className="text-sm text-white/80 space-x-3">{['about','services','products','contact'].map(l=><Link key={l} to={`/${l}`} className="capitalize hover:text-accent">{l}</Link>)}</p></div>
  <div><h3 className="font-bold mb-3">Contact</h3><p className="text-sm space-y-1"><a className="block hover:text-accent" href={`tel:${brand.phone}`}>{brand.phone}</a><a className="block hover:text-accent break-all" href={`mailto:${brand.email}`}>{brand.email}</a><span className="block">{brand.person}</span><span className="block">{brand.area}</span></p></div>
  </div><p className="text-center text-xs text-white/60 mt-8">© {new Date().getFullYear()} Tridev Enterprises. All rights reserved.</p></footer>)}
