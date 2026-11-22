import { Cog, ShieldCheck, Cctv, Network, Phone } from 'lucide-react'
import { brand } from '../data/site'
import { enquire } from './ui'
const badges=[[Cog,'Mechanical Excellence'],[ShieldCheck,'Safety First'],[Cctv,'Smart Security'],[Network,'Reliable Networking']]
export default function Hero(){return(
<section className="pt-16 bg-gradient-to-br from-navy via-navy to-[#7a3a1a] text-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 py-14 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
    <div className="text-center lg:text-left">
      <h1 className="text-4xl md:text-6xl font-extrabold">Tridev <span className="text-accent">Enterprises</span></h1>
      <p className="mt-4 text-lg md:text-2xl font-semibold">{brand.tagline}</p>
      <p className="mt-2 text-white/80">{brand.sub}</p>
      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
        <button onClick={()=>enquire()} className="min-h-11 px-8 rounded-lg bg-accent font-semibold hover:opacity-90">Get a Quote</button>
        <a href={`tel:${brand.phone}`} className="min-h-11 px-8 rounded-lg bg-white text-navy font-semibold inline-flex items-center justify-center gap-2"><Phone size={18}/>Call Now</a></div></div>
    <div className="grid grid-cols-2 gap-3">
      <img src="/img/mech1.jpg" alt="Welding and fabrication work" className="col-span-2 rounded-2xl w-full h-44 md:h-56 object-cover shadow-2xl"/>
      <img src="/img/mech3.jpg" alt="Engineer maintaining machinery" className="rounded-2xl w-full h-32 object-cover"/>
      <img src="/img/mech2.jpg" alt="Industrial plant structure" className="rounded-2xl w-full h-32 object-cover"/></div>
  </div>
  <div className="max-w-7xl mx-auto px-4 pb-10 grid grid-cols-2 md:grid-cols-4 gap-4">{badges.map(([I,t])=>
    <div key={t} className="bg-white/10 rounded-xl p-4 flex items-center gap-3"><I size={28} className="text-accent shrink-0"/><span className="text-sm font-semibold">{t}</span></div>)}</div>
</section>)}
