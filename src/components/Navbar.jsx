import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { enquire } from './ui'
const links=[['Home','/'],['About','/about'],['Services','/services'],['Products','/products'],['Contact','/contact']]
export default function Navbar(){
  const [open,setOpen]=useState(false),[sc,setSc]=useState(false)
  useEffect(()=>{const f=()=>setSc(scrollY>10);f();addEventListener('scroll',f);return()=>removeEventListener('scroll',f)},[])
  const cls=({isActive})=>`font-medium hover:text-accent ${isActive?'text-accent':''}`
  return(<header className={`fixed top-0 inset-x-0 z-50 bg-white ${sc?'shadow-md':''}`}>
    <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between" aria-label="Main">
      <Link to="/" className="flex items-center gap-2"><img src="/logo.png" alt="Tridev Enterprises logo" className="h-11 w-auto"/>
        <span className="font-head font-bold text-navy leading-tight">TRIDEV<br/><span className="text-accent text-xs tracking-widest">ENTERPRISES</span></span></Link>
      <ul className="hidden lg:flex gap-8 text-sm">{links.map(([l,to])=><li key={l}><NavLink end to={to} className={cls}>{l}</NavLink></li>)}</ul>
      <button onClick={()=>enquire()} className="hidden lg:block bg-accent text-white px-5 h-11 rounded-lg font-semibold hover:opacity-90">Get a Free Quote</button>
      <button className="lg:hidden h-11 w-11 grid place-items-center" aria-label="Toggle menu" aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
    </nav>
    {open&&<div className="lg:hidden bg-white border-t px-4 pb-4">{links.map(([l,to])=><NavLink key={l} end to={to} onClick={()=>setOpen(false)} className={c=>cls(c)+' block py-3 border-b'}>{l}</NavLink>)}
      <button onClick={()=>{setOpen(false);enquire()}} className="mt-3 w-full h-11 bg-accent text-white rounded-lg font-semibold">Get a Free Quote</button></div>}
  </header>)
}
