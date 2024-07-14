// Modules
import Image from "next/image";
import Link from "next/link";

const HomeHeroSection = () => {
  return (<>
    <div className="w-full  h-screen flex flex-col content-center "
      style={{
        background: "radial-gradient(#00000000 50%, #000000), linear-gradient(45deg, #22424C, #0E1114, #22424C) "
      }}
    >
      <div className="py-10 hidden sm:block"></div>
      <div className="py-10"></div>
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-5xl px-8" >
          <h2 className="text-3xl  " style={{color: "white"}}>
            <div className="font-black">
              <div className="">Organizador de</div>
              <div className="flex-col gap-2 text-6xl">
                <div style={{color:"#55B6EB"}}>Ofertas</div>
                <div>Laborales</div>
              </div>
            </div>
          </h2>
        </div>
        <div className=" w-full flex  content-end justify-end pr-32">
          <div className="flex-grow"></div>
          <Image alt="landing-hero-section" src={"/img/jobs.png"} width={300} height={300} 
            className="pt-40 sm:pt-0" 
            // className="hidden sm:block" 
            />
        </div>
      </div>
      <div className="w-100" style={{}}></div>
      <div className="absolute bottom-0 w-full flex items-center justify-center pb-20">
        <Link href={"/#dashboard"} className="p-3 text-white m-2 rounded-[100px] flex"
          style={{background: "#fF6505",boxShadow:"inset 5px 5px 10px #ffffff11, inset -5px -5px 10px #00000077"}}
        >
          <div className='text-4xl px-8' style={{}}>Enter App</div>
        </Link>
      </div>
    </div>
  </>)
}

export default HomeHeroSection;