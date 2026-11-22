import { useState } from 'react'
import * as L from 'lucide-react'
import { products, groups } from '../data/site'
import { enquire } from './ui'
export default function Products(){
  const [g,setG]=useState('All'),[q,setQ]=useState('')
  const list=products.filter(p=>(g==='All'||p.group===g)&&p.name.toLowerCase().includes(q.toLowerCase()))
  const count=x=>x==='All'?products.length:products.filter(p=>p.group===x).length
  return(<section className="py-14 bg-light"><div className="max-w-7xl mx-auto px-4">
    <div className="flex flex-col lg:flex-row gap-4 justify-between mb-8">
      <div className="flex flex-wrap gap-2" role="tablist">{groups.map(x=><button key={x} role="tab" aria-selected={g===x} onClick={()=>setG(x)} className={`min-h-11 px-5 rounded-full text-sm font-semibold transition ${g===x?'bg-safe text-white shadow':'bg-white border hover:border-safe'}`}>{x} <span className="opacity-70">({count(x)})</span></button>)}</div>
      <label className="relative lg:w-72"><L.Search className="absolute left-3 top-3 text-slate-400" size={20}/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search products" aria-label="Search products" className="w-full h-11 pl-10 pr-3 rounded-lg border bg-white"/></label></div>
    {!list.length&&<p className="text-center text-slate-500 py-10">No products found. Try another search.</p>}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">{list.map(p=>{const I=L[p.icon||'Shield'];return(
      <article key={p.name} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition overflow-hidden flex flex-col border">
        <div className="aspect-square bg-white p-4 grid place-items-center border-b">
          {p.img?<img loading="lazy" src={`/img/p-${p.img}.jpg`} alt={p.name} className="h-full w-full object-contain group-hover:scale-105 transition"/>
            :<div className="h-full w-full rounded-xl bg-safe/10 text-safe grid place-items-center"><I size={56}/></div>}</div>
        <div className="p-4 flex flex-col flex-1"><span className="text-[11px] font-semibold uppercase tracking-wide text-safe">{p.group}</span>
          <h3 className="font-bold text-navy mt-1 leading-snug">{p.name}</h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1 flex-1">{p.desc}</p>
          <button onClick={()=>enquire('Safety Products')} className="mt-4 min-h-11 rounded-lg bg-accent text-white text-sm font-semibold hover:opacity-90">Request Price</button></div>
      </article>)})}</div>
  </div></section>)}
