"use client"
import Link from "next/link";
import Image from "next/image";
import Logo from '../../public/logo-qsg-white.png'
import React, { useEffect, useState } from "react";
import NavItem from "../nav";
import { motion } from "framer-motion";
import AuthModal from "../Common/AuthModal/AuthModal";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Dropdown from "./Dropdown";
import { AlignJustify } from "lucide-react";
import Button_1 from '../Common/Button/Button';

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

export default function Header() {
    const [router, setRouter] = useState<string>("Login")
    const [openModal, setOpenModal] = useState<boolean>(false)
    const { user } = useSelector((state: RootState) => state.auth)
    
    const pathname = usePathname();
   
    useEffect(()=>{
        window.scrollTo(0,0);
    },[pathname]) 

    // useEffect(() => {
    //     // the top id defined on the container of layout which is navbar
    //     const topElement = document.getElementById("#top");
    //     topElement?.scrollIntoView({ behavior: "smooth" });
    //  }, [pathname]);


    return (
        <motion.div
            id="top"
            className="w-full relative z-50"
            animate={{ y: 0 }}
            initial={{ y: -100 }}
            transition={{ ease: "easeOut", duration: 0.5,}}>
            <div className="fixed top-0 left-0 right-0 md:h-[80px] h-[60px] bg-main">
                <div className="container m-auto h-full ">
                    <div className='w-full md:h-[80px] h-[60px] flex items-center justify-between'>
                        <div className="lg:hidden flex gap-4">
                            <Popover>
                                <PopoverTrigger>
                                    <div className="cursor-pointer">
                                        <AlignJustify />
                                    </div>
                                </PopoverTrigger>
                                <PopoverContent className="max-w-[300px] w-full">
                                    <NavItem />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <Link rel="xsa" href={"/"} className='md:max-w-[150px] max-w-[120px] w-full'>
                            <Image src={Logo} alt="logo-qsr" className="" />
                        </Link>
                        <div className='lg:flex items-center gap-10 hidden'>
                            <NavItem />
                            <div className="flex items-center relative">
                            </div>
                            <div>
                                {
                                    user ? <Dropdown avatar={user.avatar?.url} displayName={user.email} /> : <Button_1 color="text-[#d72483]" title={`${router === "Login" ? "Đăng nhập" : "Đăng kí"}`} onClick={() => setOpenModal(true)} />
                                }

                            </div>
                            {
                                openModal &&
                                <div>
                                    <AuthModal setRouter={setRouter} router={router} openModal={openModal} setOpenModal={setOpenModal} />
                                </div>
                            }
                        </div>
                        <div className="lg:hidden flex gap-4">
                            {
                                user ? <Dropdown avatar={user.avatar?.url} displayName={user.name} /> : <Button className='px-1 text-[12px]' variant={"outline"} onClick={() => setOpenModal(true)}>{router === "Login" ? "Đăng nhập" : "Đăng kí"}</Button>
                            }
                            {
                                openModal && <AuthModal setRouter={setRouter} router={router} openModal={openModal} setOpenModal={setOpenModal} isMobile={true} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </motion.div >
    );
}
