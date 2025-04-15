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
            <div className='w-full h-full flex flex-col justify-center items-center'>
            <h1 className='md:text-[34px] text-[24px] font-extrabold'>Tài liệu </h1>
                <h2 className='md:text-[34px] text-[24px] font-extrabold title gradient-title uppercase'>Tư Duy Thiết Kế</h2>
                {/* <div className='md:text-[18px] text-[14px] md:w-[80%] w-full mt-5 text-center'>
                    <p>MÌNH ĐƯỢC SẾP ĐÁNH GIÁ CAO CHỈ VỚI TƯ DUY TRONG THIẾT KẾ KHI LÀM VIỆC VỚI DESIGNER, NGAY CẢ KHI:</p>
                    <p> Mình KHÔNG hề biết sử dụng Photoshop hay AI</p>
                    <p>Vậy thì từ đâu mà mình nhận được sự công nhận và tín nhiệm từ Sếp??!</p>
                </div> */}
            </div>
        </motion.div>
    );
};

export default Hero;