import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";
import { LuSun } from "react-icons/lu";
import { AiOutlineDiscord } from "react-icons/ai";
import { LuMoon } from "react-icons/lu";
import { RiMenuLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { navigationLists } from './Config'
import epicLogo from '../assets/epicLogo.png'
import { NavLink , useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'

const Header = () => {
    const navigate = useNavigate();
    const [isMenuOpen , setIsMenuOpen] = useState(false);
    const[light , setLight] = useState(false);


    const gameCartItem = useSelector((state) => state.cart.items);


    return (
    <div className='w-full flex justify-between py-2 px-2 lg:px-28 ring-1'>
        <div>
            <img onClick={() => { navigate('/') }} className='w-[80px] lg:w-[100px] rounded-full' alt="Logo image" src="https://logos-world.net/wp-content/uploads/2021/12/Epic-Games-Logo.png"/>
        </div>
        <div className="flex justify-center items-center gap-2 lg:relative">
            <div className="order-2">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="rounded-md px-2 py-2 text-blue-100 text-lg shadow-inner bg-slate-900 shadow-slate-800 hover:bg-blue-600 hover:shadow-2xl text-center">
                    {
                        (isMenuOpen) ? (<IoMdClose /> ) : (<RiMenuLine />)
                    }
                </button>
            </div>
            {/* Mobile menu secession */}
            {
                isMenuOpen && (
                    <div className="lg:absolute lg:-left-20 lg:top-20 lg:w-[300px] lg:h-[320px] fixed left-0 top-0 bottom-0 w-[80%] h-[100%] bg-slate-900 z-50 lg:rounded-lg flex-col space-y-5 px-0 py-0">
                        <div className="flex justify-between  py-[10px] px-4">
                            <img onClick={() => {
                                navigate('/');
                                setIsMenuOpen(false)
                            }} className='w-[36px] lg:w-[0px]' alt="Logo image" src={epicLogo}/>
                                <button className="lg:hidden rounded-full px-4 py-2 text-blue-100 text-md shadow-inner bg-slate-950 shadow-slate-800 hover:bg-blue-600 hover:shadow-2xl text-center"><AiOutlineUserAdd/></button>
                        </div>
                        {
                            navigationLists.map((item) => (
                                <div key={item.id}>   
                                    <NavLink onClick={() => {
                                        setIsMenuOpen(false)
                                    }} to={item.to} className=" active:bg-blue-600 cursor-pointer flex gap-2 font-extrabold list-none w-full px-3 rounded-md py-4"><span className="text-3xl">{item.icon}</span>{item.label}</NavLink>
                                </div>
                            ))
                        }
                    </div>
                )
            }
            <div className="flex gap-2">
                <button className=" text-sm font-bold relative rounded-md px-2 py-2 text-blue-100 text-lg shadow-inner bg-slate-900 shadow-slate-800 hover:bg-blue-600 hover:shadow-2xl text-center">Wishs <span className="text-red-700 font-extrabold text-xs absolute px-1 -top-1 -right-1 bg-slate-400 rounded-full">{gameCartItem.length}</span></button>
                <button className="rounded-md px-2 py-2 text-blue-100 text-lg shadow-inner bg-slate-900 shadow-slate-800 hover:bg-blue-600 hover:shadow-2xl text-center"><FaGithub /></button>
                <button className="rounded-md px-2 py-2 text-blue-100 text-lg shadow-inner bg-slate-900 shadow-slate-800 hover:bg-blue-600 hover:shadow-2xl text-center"><AiOutlineDiscord /></button>
                    <button onClick={() => { setLight(!light) }} className="rounded-md px-2 py-2 text-blue-100 text-lg shadow-inner bg-slate-900 shadow-slate-800 hover:bg-blue-600 hover:shadow-2xl text-center">
                        {
                           (light === false) ? (<LuSun />) : ( < LuMoon/>)
                        }
                    </button>
            </div>
        </div>
    </div>
    )
}
export default Header;