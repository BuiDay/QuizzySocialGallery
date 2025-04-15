"use client"
import React from 'react';
import { motion } from "framer-motion";
import Line from '../Common/Line/Line';
import { Button } from '../ui/button';
import LineAnimateOne from '../Common/Line/LineAnimateOne';

const HeroStory = () => {
    return (
        <div className='w-full h-full min-h-screen m-auto'>
            <motion.div className='w-full min-h-screen container flex flex-col justify-center items-center gap-10' 
                 animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ ease: "easeOut", duration: 0.7, delay: 0.5 }}>
                <span className='md:text-[34px] text-[28px] gradient-title font-extrabold text-center'>Câu chuyện về Quizzy</span>
                <div className='md:px-[100px] p-0'>
                    <p className='md:text-[18px] text-[16px] text-white text-center'>Từ 1 sinh viên <span className='gradient-title font-bold'> “RẤT BÌNH THƯỜNG”</span> đến lần đầu tiên chinh phục mức thu nhập <span className='gradient-title font-bold'>$5000/THÁNG</span> từ lĩnh vực Social Media Marketing và được Sếp tin tưởng giao vị trí quản quản lý dự án, quản lý các trang mạng xã hội của công ty.</p>
                </div>
         
            </motion.div>
            <LineAnimateOne />
        </div>
    );
};

export default HeroStory;