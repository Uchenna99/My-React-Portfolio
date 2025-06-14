


const Hero2 = () => {
  const imageUrl = "https://res.cloudinary.com/df6xz7bqp/image/upload/v1749919456/me_no_bg_crop_gwa5wr.png"
  return (
    <>
      <div className="relative h-[800px] w-full bg-slate-900 bg-[0px_-370px] bg-cover bg bg-no-repeat bg-blend-darken
        flex flex-col items-center justify-center ">

        <div className="w-full sm:w-[1200px] flex flex-col gap-5 ">

          <p className="text-slate-200 text-5xl font-semibold ">I'm Uchenna Agbu</p>

          <p className="text-slate-200 text-xl font-semibold">Full Stack Web Developer</p>

          <button className="bg-teal-700 w-fit h-12 rounded-lg text-xl text-slate-900 !px-5 cursor-pointer ">
            Contact Me
          </button>

        </div>

        <div className="w-full bg-amber-200 ">
        </div>
        
        <img src={imageUrl} alt="My Photo" className="absolute right-0 top-0 w-[900px] "/>

      </div>
    </>
  )
}

export default Hero2