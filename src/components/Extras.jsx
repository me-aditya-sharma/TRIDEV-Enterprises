import { useState } from 'react'
import { Award, Users, Clock, Smile, Headset, ChevronDown } from 'lucide-react'
import { faqs } from '../data/site'
import { Heading, Reveal } from './ui'
const why=[[Award,'Quality Assurance'],[Users,'Experienced Professionals'],[Clock,'Timely Completion'],[Smile,'Customer Satisfaction'],[Headset,'After Sales Support']]
export const Why=()=>(<section id="whyus" className="py-16"><div className="max-w-7xl mx-auto px-4"><Heading title="Why Choose Us"/>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">{why.map(([I,t])=><Reveal key={t}><div className="bg-white rounded-2xl shadow p-6 text-center h-full"><I className="mx-auto text-accent" size={36}/><p className="mt-3 font-semibold text-navy">{t}</p></div></Reveal>)}</div></div></section>)
export function FAQ(){const [o,setO]=useState(0);return(<section id="faq" className="py-16 bg-light"><div className="max-w-3xl mx-auto px-4"><Heading title="FAQ"/>
  {faqs.map(([q,a],i)=><div key={q} className="bg-white rounded-xl shadow mb-3"><button className="w-full min-h-11 p-4 flex justify-between text-left font-semibold" aria-expanded={o===i} onClick={()=>setO(o===i?-1:i)}>{q}<ChevronDown className={o===i?'rotate-180':''}/></button>{o===i&&<p className="px-4 pb-4 text-slate-600">{a}</p>}</div>)}</div></section>)}
