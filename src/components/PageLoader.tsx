

const PageLoader = () => {
  return (
    <div className="w-full h-screen bg-slate-200 flex items-center justify-center fixed top-0 left-0 ">

        <div className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] rounded-full border-6 border-t-transparent 
        border-b-transparent border-emerald-500 animate-spin "
        style={{animationDuration:'1.5s'}}></div>

    </div>
  )
}

export default PageLoader