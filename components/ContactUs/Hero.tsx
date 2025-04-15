"use client"
import React from 'react';
import { motion } from "framer-motion";
import { Crimson_Pro } from 'next/font/google';
const CrimsonPro = Crimson_Pro({
    subsets: ["latin"],
    variable: '--font-CrimsonPro',
    weight: ["400", "500", "600", "700", "800", "900"]
  })

const Hero = () => {
    return (
        <motion.div className='w-full h-[30vh] pt-[100px]'  
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ ease: "easeOut", duration: 0.7, delay: 1 }}>
            <div className='w-full h-full flex flex-col justify-center items-center'>
                <h1 className={`text-[40px] font-extrabold title text-[#d72483] ${CrimsonPro.className}`}>Liên hệ với mình</h1>
            </div>
        </motion.div>
    );
};

export default Hero;