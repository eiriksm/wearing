import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Bæreveiledning med Silje</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Bæreveiledning med </span>{' '}
                <span className="block text-indigo-600 xl:inline">Silje</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Bæretøy er et lite stykke magi som gjør at du kan trygge og varme, spise og luftes.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Ta kontakt
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Lær mer
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/1.jpg"
          alt=""
        />
      </div>
    </div>
    <div className='bg-slate-200/100 p-5'>
    <div className='md:grid md:grid-cols-4 my-12 gap-12'>
      <div></div>
        <div>
          <h2 className='text-xl pb-5'>Hva er bæring</h2>
          <p>Følelsen av et barn som sovner på deg. Når man kjenner at kroppen til barnet skifter vekt, blir sovetung. Det er som om noe magisk er i spill. For meg var denne magien bæretøy. Bæretøy tilrettelegger for nærhet, som frigjør oksitosin, som igjen forsterker tilknytning. Og bæretøy er utrolig praktisk! Du kan varme og trygge mens du tar deg ei brødskive, går en tur eller leverer i barnehagen. Det kan være en hjelpende hånd når barnet får tenner, trenger trøst eller ikke får sove. Det kan være et lettpakkelig transportmiddel, det kan ta deg dit vognen ikke kan, og det kan gi deg frie hender. Og så kan du på en enklere måte få ditt barn hjem, når de små føttene blir for slitne til å bære seg selv. </p>
        </div>
        <div>
        <h2 className='text-xl pb-5'>En bæreveileder kan</h2>
          <ul className='list-disc'>

          <li>Gi deg en introduksjon til ergonomisk bæring og bæretøy.</li>
<li>Tilpasse det bæretøyet du har eller hjelpe deg å velge riktig type bæretøy.</li>
<li>Hjelpe deg å bli trygg på å bære foran eller på rygg.</li>
<li>Gi deg verktøy til å gjøre barnet ditt trygg på å bli bært.</li>
<li>Hjelpe deg med å identifisere og justere (bærerelaterte) utfordringer dere møter på.</li>

          </ul>
        </div>
        <div></div>
      </div>
    </div>
    <div className='container m-8 mx-auto'>
      <div className='md:grid md:grid-cols-3 gap-4'>
          <div className='relative h-48'>
          <Image src="/2.jpg" layout="fill" objectFit='cover' >

          </Image>
          </div>
          <div className='col-span-2'>
            <h2 className='text-xl pb-5'>Om meg</h2>
            <p>Test e123</p>
          </div>
        </div>
      </div>
      </main>

    </div>
  )
}
