import Head from 'next/head'
import About from "../components/About"
import Footer from "../components/Footer"
import Header from "../components/Header"

function about() {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="About Hilman Zafri" />
        <link rel="icon" href="/favicon.ico" />
        <style>{'body { background-color: #11111a; }'}</style>
      </Head>
      <Header />
      <About />
      <Footer />
    </div>
  )
}

export default about
