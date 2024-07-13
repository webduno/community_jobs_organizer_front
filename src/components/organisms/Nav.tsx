// Modules

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {
  return (
    <div className="fixed top-0 w-full text-white flex pt-8 z-10"
      style={{
        backdropFilter: "blur(5px)",
      }}
    >
      <a className="flex mx-5 items-center flex-grow gap-2 " href='/'>
        <div className='hidden sm:block'>
          <Image alt='logo' src={"/img/mainlogo.png"} width={32} height={32}  />
        </div>
        <h3 className="text-2xl " >Job+</h3>
      </a>
      <div className="flex flex-wrap justify-around px-5 pt-6" >
        <Link className='px-0 sm:px-6' href={"/"}>Dashboard</Link>
        <Link className='px-6 hidden sm:block' href={"/"}>About</Link>
        <Link className='px-6 hidden md:block' href={"/"}>Discord Devs Vzla</Link>
      </div>
      <div className="min-w-fit mx-5" >
        <Link href={"/sign"} className="p-3 text-white m-2 rounded-[20px] flex"
          style={{
            background: "#05658F",boxShadow:"inset 5px 5px 10px #ffffff11, inset -5px -5px 10px #00000077"
          }}
        >
          <div className='' style={{textShadow: "-1px 1px 1px #00000099"}}>Login</div>
        </Link>
      </div>
    </div>
  )
}

export default Nav;
