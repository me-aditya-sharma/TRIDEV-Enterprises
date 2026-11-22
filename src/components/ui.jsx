import { motion } from 'framer-motion'
export const enquire = (cat='') => {
  sessionStorage.setItem('cat',cat)
  window.dispatchEvent(new CustomEvent('enquire',{detail:cat}))
  location.hash = '#/contact'
}
export const Reveal = ({children,className=''}) => (
  <motion.div className={className} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-40px'}} transition={{duration:.5}}>{children}</motion.div>)
export const Heading = ({title,sub}) => (
  <Reveal className="text-center mb-10"><h2 className="text-3xl md:text-4xl font-bold text-navy">{title}</h2>
  <div className="h-1 w-16 bg-accent mx-auto mt-3 rounded"/>{sub&&<p className="mt-4 text-slate-600 max-w-2xl mx-auto">{sub}</p>}</Reveal>)
export const Btn = ({children,className='',...p}) => (
  <button className={`min-h-11 px-6 rounded-lg font-semibold transition ${className}`} {...p}>{children}</button>)
