import Hero from './Hero'
import About from './About'
import Products from './Products'
import Contact from './Contact'
import { Why, FAQ } from './Extras'
import { ServiceCards, ServiceDetail } from './Services'
import { Heading, enquire } from './ui'
const Banner=({t,s})=><div className="pt-16 bg-navy text-white"><div className="max-w-7xl mx-auto px-4 py-12 text-center"><h1 className="text-3xl md:text-5xl font-bold">{t}</h1><p className="mt-2 text-white/80">{s}</p></div></div>
export const Home=()=>(<><Hero/><section className="py-16"><div className="max-w-7xl mx-auto px-4"><Heading title="Our Services" sub="Four specialised divisions, one trusted partner."/><ServiceCards/></div></section><Why/>
  <section className="py-14 bg-accent text-white text-center px-4"><h2 className="text-2xl md:text-3xl font-bold">Need a quote for your project?</h2><button onClick={()=>enquire()} className="mt-5 min-h-11 px-8 rounded-lg bg-navy font-semibold">Get a Free Quote</button></section></>)
export const AboutPage=()=>(<><Banner t="About Us" s="Engineering, safety and security under one roof"/><About/><Why/></>)
export const ServicesPage=()=>(<><Banner t="Our Services" s="Mechanical • Safety • CCTV • Networking"/><div className="max-w-7xl mx-auto px-4 py-16"><ServiceDetail/></div></>)
export const ProductsPage=()=>(<><Banner t="Safety Products" s="Certified protective gear for every worksite"/><Products/></>)
export const ContactPage=()=>(<><Banner t="Contact Us" s="Get a free quote today"/><Contact/><FAQ/></>)
