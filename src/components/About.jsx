import { useEffect, useRef, useState } from 'react'
import { Heading, Reveal } from './ui'
function Count({to,suffix='+'}){
  const ref=useRef(),[n,setN]=useState(0)
  useEffect(()=>{const o=new IntersectionObserver(([e])=>{if(!e.isIntersecting)return;o.disconnect()
    let s=0;const t=setInterval(()=>{s+=Math.ceil(to/40);if(s>=to){s=to;clearInterval(t)}setN(s)},30)});o.observe(ref.current);return()=>o.disconnect()},[to])
  return <span ref={ref}>{n}{suffix}</span>}
// TODO: replace these with your real numbers
const stats=[[10,'Projects Completed'],[15,'Happy Clients'],[1,'Years of Experience'],[3,'Cities Served']]
export default function About(){return(
<section id="about" className="py-16 bg-light"><div className="max-w-7xl mx-auto px-4">
  <Heading title="About Us" sub="Tridev Enterprises delivers mechanical engineering, industrial safety products, CCTV security and networking under one roof, for factories, offices and institutions across India."/>
  <Reveal className="grid grid-cols-2 md:grid-cols-4 gap-4">{stats.map(([n,l])=>
    <div key={l} className="bg-white rounded-2xl shadow p-6 text-center"><div className="text-4xl font-bold text-accent font-head"><Count to={n}/></div><div className="mt-1 text-sm text-slate-600">{l}</div></div>)}</Reveal>
</div></section>)}
