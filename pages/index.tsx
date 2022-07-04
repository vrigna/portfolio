import { IndexExperience } from "../components/index-comps/IndexExperience"

export default function Home() {
  return (
    <div className="font-poppins   ">
      <header>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;600;900&display=swap" rel="stylesheet" />
      </header>
      <main className="m-auto h-screen flex place-items-center w-3/5">
        <div className="">
          <div className="text-left">
            <span className="block">Hi, I am</span>
            <h1 className="inline text-5xl font-semibold">Carlos Brignardello.</h1>
            <span className="block text-5xl font-semibold">I make that the things <span className="text-accent">happen</span>.</span>
            <p className='my-5'>I'm a software engineer focused on Front End, Back End and Dev Ops tecnologies for grown next level e-commerce sites.</p>
          </div>
          <a href="" className="border-2 border-accent text-accent p-2 rounded-md font-semibold">Check my work</a>
        </div>
      </main>

      <section className='m-auto h-screen flex place-items-center w-3/5 flex-col'>
        <h2 className='text-5xl font-semibold pb-5'>About me</h2>
        <div className="grid grid-cols-12 gap-4">
          <p className='col-span-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem commodi, modi veniam recusandae laboriosam libero aperiam laudantium doloribus pariatur unde nam et velit? Blanditiis hic quisquam saepe facilis, voluptatum rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quo, illum in laudantium consectetur perferendis possimus exercitationem est nesciunt architecto nemo accusamus molestiae cumque sint esse repellendus vero natus quas.Optio culpa est ratione vero dignissimos. Repellat recusandae, pariatur fugit assumenda culpa asperiores minus voluptatibus deleniti! Voluptate hic voluptas reprehenderit dolor commodi pariatur veniam sapiente tenetur, perspiciatis itaque qui maxime!Nisi molestiae eius animi ratione laudantium deleniti et odit eligendi excepturi iste, deserunt fugiat similique alias ea delectus sequi? Perspiciatis autem recusandae, aliquam ad quis quas dolorum ratione quisquam minima!</p>
          <span>image</span>
        </div>
      </section>

      <IndexExperience />

    </div>
  )
}
