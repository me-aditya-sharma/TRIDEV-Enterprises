import * as L from 'lucide-react'
import { Link } from 'react-router-dom'
import { categories } from '../data/site'
import { Reveal, enquire } from './ui'
const imgs={'Mechanical Services':['mech1'],'Safety Products':['safety'],'CCTV Solutions':['cctv'],'Networking Solutions':['network']}
export function ServiceCards(){return(
  <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">{categories.map(c=>{const I=L[c.icon];return(
    <Reveal key={c.id} className="h-full"><article className="h-full flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-1 transition">
      <div className="relative h-44"><img loading="lazy" src={`/img/${imgs[c.id][0]}.jpg`} alt={c.id} className="h-full w-full object-cover"/>
        <span className="absolute -bottom-6 left-5 h-12 w-12 rounded-xl grid place-items-center text-white shadow-lg" style={{background:c.color}}><I size={24}/></span></div>
      <div className="p-5 pt-9 flex-1 flex flex-col"><h3 className="font-bold text-lg" style={{color:c.color}}>{c.id}</h3>
        <p className="text-sm text-slate-600 mt-1 flex-1">{c.items.slice(0,3).join(' • ')} and more.</p>
        <div className="mt-4 flex gap-2"><Link to="/services" className="flex-1 min-h-11 grid place-items-center rounded-lg border font-semibold text-sm" style={{borderColor:c.color,color:c.color}}>View All</Link>
          <button onClick={()=>enquire(c.id)} className="flex-1 min-h-11 rounded-lg text-white font-semibold text-sm" style={{background:c.color}}>Enquire</button></div></div>
    </article></Reveal>)})}</div>)}
export function ServiceDetail(){return(
  <div className="space-y-16">{categories.map((c,i)=>{const I=L[c.icon];return(
    <Reveal key={c.id}><section id={c.id.split(' ')[0].toLowerCase()} className="grid lg:grid-cols-2 gap-8 items-center">
      <div className={i%2?'lg:order-2':''}>
        {c.id==='Mechanical Services'
          ?<div className="grid grid-cols-2 gap-3"><img loading="lazy" src="/img/mech1.jpg" alt="Welding" className="col-span-2 rounded-2xl h-56 w-full object-cover"/><img loading="lazy" src="/img/mech2.jpg" alt="Plant structure" className="rounded-2xl h-36 w-full object-cover"/><img loading="lazy" src="/img/mech3.jpg" alt="Maintenance" className="rounded-2xl h-36 w-full object-cover"/></div>
          :<img loading="lazy" src={`/img/${imgs[c.id][0]}.jpg`} alt={c.id} className="rounded-2xl w-full object-cover shadow-lg border"/>}</div>
      <div><div className="flex items-center gap-3 mb-4"><span className="h-12 w-12 rounded-xl grid place-items-center text-white" style={{background:c.color}}><I/></span><h2 className="text-2xl md:text-3xl font-bold" style={{color:c.color}}>{c.id}</h2></div>
        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">{c.items.map(t=><li key={t} className="flex gap-2 text-sm"><L.CheckCircle2 size={18} className="shrink-0 mt-0.5" style={{color:c.color}}/>{t}</li>)}</ul>
        <button onClick={()=>enquire(c.id)} className="mt-6 min-h-11 px-8 rounded-lg text-white font-semibold hover:opacity-90" style={{background:c.color}}>Enquire Now</button></div>
    </section></Reveal>)})}</div>)}
