import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from "../Components/Navbar.jsx";
import { MdMenu, MdClose } from 'react-icons/md';
import userIcon from "../assets/user.svg"
function Header() {
  const[active , setActive] = useState(false);
  const[menuOpened , setMenuOpened] = useState(false )
  const toggleMenu = () => setMenuOpened(!menuOpened);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY >0){
        if(menuOpened){
          setMenuOpened(false);
        }
      }
      setActive(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);

    return()=>{
      window.removeEventListener("scroll", handleScroll);
    }
  })
  return (
<header className='max-padding-container fixed top-1 w-full left-0 right-0 z-50' >

<div className='max-padd-container bg-white transition-all duration-200 rounded-full px-5 ring-1 ring-slate-900/5' >
    <div className='flex justify-between py-3' >
        {/* logo*/}
        <Link to={"/"} >
        <span className='font-[900] text-[24px]'>Casa <span className='font-[600] medium-20'>Centeral</span></span>
        </Link>

        {/* navbar*/}

        <div  className='flex justify-center gap-x-4' >
          {/*Desktop*/}
          <Navbar containerStyles={"hidden xl:flex gap-x-5 xl:gap-x-10 capitalize medium-15 ring-1 ring-slate-900/10 rounded-full p-2 bg-primary"}/>
            {/* Mobile*/}

          <Navbar containerStyles={`${menuOpened ? "flex flex-items-start flex-col gap-y-8 capitalize fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 z-50" : "flex flex-items-start flex-col gap-y-8 capitalize fixed top-20  -right-[100%] p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 z-50"}`}/>
       
        </div>


        {/*  Button*/}
        <div className='flexBetween gap-x-3 sm:gap-x-5 bold-16' >
      

      {!menuOpened ? (<MdMenu onClick={toggleMenu}  className='xl:hidden cursor-pointer text-3xl hover:text-secondary' />) : (<MdClose onClick={toggleMenu} className='xl:hidden cursor-pointer text-3xl hover:text-secondary' />)}

      <button className='btn-secondary flexCenter gap-x-2 medium-16 rounded-full'>
        <img src={userIcon} alt="" height={22} width={22} />
        <span>Login</span>
      </button>
        </div>
        
    </div>
</div>
</header>
  )
}

export default Header
