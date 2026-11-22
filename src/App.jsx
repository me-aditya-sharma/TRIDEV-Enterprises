import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { MessageCircle, Phone, ArrowUp } from 'lucide-react'
import { brand } from './data/site'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Home, AboutPage, ServicesPage, ProductsPage, ContactPage } from './components/Pages'
export default function App(){
  const [top,setTop]=useState(false),{pathname}=useLocation()
  useEffect(()=>{scrollTo(0,0)},[pathname])
  useEffect(()=>{const f=()=>setTop(scrollY>600);addEventListener('scroll',f);return()=>removeEventListener('scroll',f)},[])
  return(<><Navbar/><main><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<AboutPage/>}/><Route path="/services" element={<ServicesPage/>}/><Route path="/products" element={<ProductsPage/>}/><Route path="/contact" element={<ContactPage/>}/></Routes></main><Footer/>
    <a href={`https://wa.me/${brand.wa}`} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="fixed bottom-4 right-4 z-40 h-14 w-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-lg"><MessageCircle/></a>
    <a href={`tel:${brand.phone}`} aria-label="Call now" className="lg:hidden fixed bottom-4 left-4 z-40 h-14 w-14 rounded-full bg-accent text-white grid place-items-center shadow-lg"><Phone/></a>
    {top&&<button aria-label="Back to top" onClick={()=>scrollTo({top:0,behavior:'smooth'})} className="fixed bottom-24 right-4 z-40 h-11 w-11 rounded-full bg-navy text-white grid place-items-center"><ArrowUp size={20}/></button>}</>)}
