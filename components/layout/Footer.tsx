"use client"
import React, { useEffect, useState } from 'react';
import Logo from '../../public/logo-qsg-white.png'
import Image from "next/image";
import Link from 'next/link';
import Button from '../Common/Button/Button';
import { CiMail } from "react-icons/ci";
import { useCreateContactUsMutation } from "@/redux/features/contactUs/contactUsApi";
import toast from "react-hot-toast";
const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
import { motion } from "framer-motion";

const Footer = () => {
    const [email, setEmail] = useState<string>("")
    const [createContactUs, { isSuccess, isError, isLoading, error }] = useCreateContactUsMutation();

    const handleRegisterEmail = () => {
        const checkMail = email.length === 0
        if (checkMail) {
            toast.error('Vui lòng điền email!')
            return
        }
        const checkInvalidEmail = email.match(emailRegex)
        if (!checkInvalidEmail) {
            toast.error('Email không hợp lệ!')
            return
        }
        createContactUs({ email })
    }

    useEffect(() => {
        if (isLoading) {
            toast.loading('Đang chạy')
        }
        if (isSuccess) {
            toast.success('Bạn đã đăng kí thành công !')
            toast.dismiss()
        }

        if (isError) {
            const { data } = error as any
            toast.dismiss()
            toast.error(data.message ? data.message : 'Đã có lỗi! Vui lòng thử lại.')
        }
    }, [isLoading, isSuccess, isError])
    return (
        <motion.div className='w-full flex flex-col items-center pt-[100px]' animate={{ height: "auto", opacity: 1 }}
            initial={{ height: 100, opacity: 0 }}
            transition={{ ease: "easeOut", duration: 0.7, delay: 1.5 }}>
            <div className='rounded-[50px] flex flex-col items-center gap-5 mb-10'>
                <p className='!text-[#5c43a3] font-bold text-[18px]'>Đăng ký Newsletter để nghe mình kể chuyện nhiều hơn </p>
                <div className='max-w-[450px] h-[55px] bg-[#d72483]/[0.1] rounded-[50px] flex items-center p-[6px] border-[1px] border-[#5c43a3]'>
                    <input onChange={(event) => setEmail(event.target.value)} type='text' placeholder='Mail của bạn' className='h-full rounded-[50px] w-full bg-transparent text-white text-[14px] pl-[30px] outline-none' />
                    <div onClick={handleRegisterEmail} className='!bg-[#5c43a3] h-full w-[140px] rounded-[50px] flex items-center justify-center cursor-pointer'>
                        <span className='font-semibold text-[14px] text-white'>Đăng kí</span>
                    </div>
                </div>
            </div>
            <div className='bg-main md:py-[50px] py-[20px] w-full'>
                <div className=" container m-auto h-full ">
                    <div className='flex md:flex-row flex-col justify-between text-white gap-5'>
                        {/* <div className='flex-1'>
                                <span className='font-bold text-[14px] text-[#FFCC00]'>Tài liệu & Dịch vụ</span>
                                <ul className='mt-5 pr-[30px] text-[14px]'>
                                    <li className='py-2'>Social Visual </li>
                                    <li className='py-2'>Tài  liệu tư duy  thiết kế <br/> & làm chủ Vi﻿sual Brief  với Designer</li>
                                </ul>
                            </div> */}
                        <div className='flex-1'>
                            <div className='flex md:flex-row flex-col justify-between md:items-center'>
                                <div className='flex flex-col gap-3'>
                                    <Link rel="xsa" href={"/"} className='max-w-[200px]'>
                                        <Image src={Logo} alt="logo-qsr" className="" width={200} />
                                    </Link>
                                    <div>
                                        <span className='text-white font-bold text-[14px]'>Tham gia ngay group Cộng đồng <br /> cùng chiến Social Media Marketing</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='flex-1'>
                            <span className='font-bold text-[18px]'>Tài liệu</span>
                            <ul className='mt-5 text-[16px]'>
                                <li className='py-2'>
                                    <Link href={"/products/design-thinking"}>Social Media Beginner Workbook</Link>
                                </li>
                                <li className='py-2'>
                                    <Link href={"/products/design-thinking"}>Ideas Hacking - xây kênh thành công trên Tiktok</Link>
                                </li>
                                <li className='py-2'>
                                    <Link href={"/products/design-thinking"}>Social Media Bundle</Link>
                                </li>
                                <li className='py-2'>
                                    <Link href={"/products/design-thinking"}>Social Media Package 1</Link>
                                </li>
                                <li className='py-2'>
                                    <Link href={"/products/design-thinking"}>Social Media Package 2</Link>
                                </li>
                                <li className='py-2'>
                                    <Link href={"/products/design-thinking"}>Tư duy thiết kế</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='flex-1 text-[16px]'>
                            <span className='font-bold text-[18px]'>Liên hệ</span>
                            <ul className='mt-5'>
                                <li className='py-2'> <span className='flex items-center gap-2'><CiMail />quizzy@quizzysocial.com</span> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Footer;