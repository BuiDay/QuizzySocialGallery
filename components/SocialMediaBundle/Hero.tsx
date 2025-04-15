"use client"
import React from 'react';
import Line from '../Common/Line/Line';
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <motion.div className='w-full min-h-screen h-full flex justify-center items-center'
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ ease: "easeOut", duration: 0.7, delay: 1 }}>
            <div className='w-full h-full flex flex-col justify-center items-center'>
                {/* <h1 className='md:text-[34px] text-[24px] font-extrabold'>Bộ tài liệu </h1> */}
                <h2 className='md:text-[34px] text-[24px] font-extrabold title gradient-title uppercase'>Social Media Bundle</h2>
                <div className='md:text-[16px] text-[14px] md:w-[80%] w-full mt-[50px] text-left'>
                    <p className='py-1'>Chào bạn!</p>
                    <p className='py-1'>Lúc mới vào nghề, mình đã…</p>
                    <p className='py-1'>Lại là mình Quizzy đây, Đúng là ai cũng bắt đầu từ đâu đó, và mình cũng không ngoại lệ. Lúc mới vào nghề, mình từng loay hoay đủ kiểu vì không ai hướng dẫn cách <span className='bg-gradient-to-r from-[#fe568e] to-[#ffcc00] from-40% to-70% bg-clip-text text-transparent font-bold'>thu hút khách hàng, chốt deal</span> hay <span className='bg-gradient-to-r from-[#fe568e] to-[#ffcc00] from-40% to-70% bg-clip-text text-transparent font-bold'>đọc số liệu, báo cáo chuyên nghiệp.</span></p>
                    <p className='py-1'>Mỗi đêm, mình đều cày nát internet để tìm ý tưởng cho các chiến dịch social media, nhưng càng tìm thì lại càng rối. Tự mày mò, tự học, nhưng vẫn cảm thấy thiếu một lộ trình rõ ràng để đi đúng hướng.</p>
                    <p className='py-1'>Chính vì hiểu rõ những khó khăn đó thúc đẩy mình tạo ra.</p>
                </div>
            </div>
        </motion.div>
    );
};

export default Hero;