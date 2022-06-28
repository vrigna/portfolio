import { Fragment } from 'react'

export default function Home() {
  return (
    <div className="font-poppins">
      <header>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;600;900&display=swap" rel="stylesheet" />
      </header>
      <main className="m-auto w-3/5 h-screen grid place-items-center">
        <div className="">
          <div className="text-left">
            <span className="block">Hi, I am</span>
            <h1 className="inline text-5xl font-semibold">Carlos Brignardello</h1><span>.</span>
            <span className="block text-5xl font-semibold">I make that the things <span className="text-accent">happen</span>.</span>
            <p className='my-5'>I'm a software engineer focused on Front End, Back End and Dev Ops tecnologies for grown next level e-commerce sites.</p>
          </div>
          <a href="" className="border-2 border-accent text-accent p-2 rounded-md font-semibold">Check my work</a>
        </div>
      </main>
    </div>
  )
}
