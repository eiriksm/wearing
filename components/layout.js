// import Navbar from './navbar'
// import Footer from './footer'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Rugged Writing</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>
      <main className='py-10'>
        <div className="container px-3">
          {children}
        </div>
      </main>
    </>
  )
}
