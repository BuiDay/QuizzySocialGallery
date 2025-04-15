"use client"
import React from 'react';
import Line from '../Common/Line/Line';
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <motion.div className='w-full min-h-screen h-full flex justify-center items-center'    
        animate={{  opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.7, delay: 1 }}>
            <div className='container m-auto h-full'>
                {/* <h1 className='md:text-[34px] text-[24px] font-extrabold text-center'>Bộ tài liệu </h1> */}
                <h2 className='md:text-[34px] text-[20px] font-extrabold title gradient-title uppercase text-center'>SOCIAL MEDIA PACKAGE 1</h2>
                {/* <div className='md:text-[16px] text-[14px] md:w-[80%] w-full mt-[50px] text-center'>
                    <p className='py-1'>Mình đã suýt từng mất rất nhiều khách hàng chỉ vì…</p>
                    <p className='py-1'>KHÔNG BIẾT THUYẾT PHỤC VÀ CHỨNG MINH KẾT QUẢ CHO HỌ THẤY.</p>
                </div> */}
            </div>
        </motion.div>
    );
};

export default Hero;