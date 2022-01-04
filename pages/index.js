import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Testimonial from '../components/Testimonial'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hilmanzfr</title>
        <meta name="description" content="Hilman Zafri's portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <style>{'body { background-color: #11111a; }'}</style>
      </Head>

      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  )
}
