import { useEffect, useState } from 'react'
import { Phone, Mail, User, MapPin } from 'lucide-react'
import { brand, categories } from '../data/site'
import { Heading } from './ui'
const empty={name:'',phone:'',email:'',category:'',message:''}
export default function Contact(){
  const [f,setF]=useState(empty),[err,setErr]=useState({}),[st,setSt]=useState('')
  useEffect(()=>{const c=sessionStorage.getItem('cat');if(c){setF(p=>({...p,category:c}));sessionStorage.removeItem('cat')}},[])
  useEffect(()=>{const h=e=>setF(p=>({...p,category:e.detail||p.category}));addEventListener('enquire',h);return()=>removeEventListener('enquire',h)},[])
  const set=k=>e=>setF({...f,[k]:e.target.value})
  const validate=()=>{const e={}
    if(f.name.trim().length<2)e.name='Enter your name'
    if(!/^[6-9]\d{9}$/.test(f.phone.replace(/\D/g,'').slice(-10)))e.phone='Enter a valid 10-digit mobile number'
    if(!/^\S+@\S+\.\S+$/.test(f.email))e.email='Enter a valid email'
    if(!f.category)e.category='Select a category'
    setErr(e);return !Object.keys(e).length}
  const submit=async e=>{e.preventDefault();if(!validate())return
    const id=import.meta.env.VITE_FORMSPREE_ID
    if(!id){setSt('error');return}
    setSt('sending')
    try{const r=await fetch(`https://formspree.io/f/${id}`,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(f)})
      if(!r.ok)throw 0;setSt('ok');setF(empty)}catch{setSt('error')}}
  const wa=()=>{if(!validate())return
    const t=`Hello Tridev Enterprises,%0AName: ${f.name}%0APhone: ${f.phone}%0AEmail: ${f.email}%0AService: ${f.category}%0AMessage: ${f.message}`
    open(`https://wa.me/${brand.wa}?text=${t}`,'_blank','noopener')}
  const inp="w-full min-h-11 px-3 rounded-lg border bg-white"
  const Err=({k})=>err[k]?<p role="alert" className="text-red-600 text-sm mt-1">{err[k]}</p>:null
  const cards=[[Phone,'Call',brand.phone,`tel:${brand.phone}`],[Mail,'Email',brand.email,`mailto:${brand.email}`],[User,'Contact Person',brand.person],[MapPin,'Service Area',brand.area]]
  return(<section id="contact" className="py-16"><div className="max-w-7xl mx-auto px-4"><Heading title="Get a Free Quote" sub="Tell us what you need and we will get back to you."/>
  <div className="grid lg:grid-cols-2 gap-8">
    <form onSubmit={submit} noValidate className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
      <div><input className={inp} placeholder="Name" aria-label="Name" value={f.name} onChange={set('name')}/><Err k="name"/></div>
      <div><input className={inp} placeholder="Phone" aria-label="Phone" inputMode="tel" value={f.phone} onChange={set('phone')}/><Err k="phone"/></div>
      <div><input className={inp} placeholder="Email" aria-label="Email" type="email" value={f.email} onChange={set('email')}/><Err k="email"/></div>
      <div><select className={inp} aria-label="Service category" value={f.category} onChange={set('category')}><option value="">Select service category</option>{categories.map(c=><option key={c.id}>{c.id}</option>)}</select><Err k="category"/></div>
      <textarea className={inp+' min-h-28 py-2'} placeholder="Message" aria-label="Message" value={f.message} onChange={set('message')}/>
      {st==='ok'&&<p role="status" className="text-safe font-semibold">Thank you! We will contact you shortly.</p>}
      {st==='error'&&<p role="alert" className="text-red-600">Could not send. Please use WhatsApp or call {brand.phone}.</p>}
      <div className="flex flex-col sm:flex-row gap-3">
        <button disabled={st==='sending'} className="flex-1 min-h-11 rounded-lg bg-accent text-white font-semibold">{st==='sending'?'Sending...':'Send Enquiry'}</button>
        <button type="button" onClick={wa} className="flex-1 min-h-11 rounded-lg bg-safe text-white font-semibold">Send on WhatsApp</button></div>
    </form>
    <div className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">{cards.map(([I,t,v,h])=><div key={t} className="bg-light rounded-xl p-4"><I className="text-accent"/><p className="text-xs text-slate-500 mt-1">{t}</p>{h?<a href={h} className="font-semibold text-navy break-all">{v}</a>:<p className="font-semibold text-navy">{v}</p>}</div>)}</div>
      <iframe title="Service area map" loading="lazy" className="w-full h-72 rounded-xl border-0" src="https://www.google.com/maps?q=India&output=embed"/>
    </div></div></div></section>)}
