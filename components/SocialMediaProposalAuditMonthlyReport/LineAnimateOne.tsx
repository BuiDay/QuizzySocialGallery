"use client"
import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import LightIcon from '@/public/light.png'
import { motion } from "framer-motion";

const LineAnimateOne = () => {
    return (
        <motion.div className="w-full relative text-zinc-900 md:block hidden"      
        animate={{y:0,opacity:1}}
        initial={{ y: 100,opacity:0 }}
        transition={{ ease: "easeOut", duration: 0.5 ,delay:1}}
        >
            <div className="absolute w-full top-[-50px] left-[-10px]">
                <div className="bg-white w-[120%] h-[50px]">
                    <Marquee direction="left" speed={100} className="h-full">
                        <div className="h-full flex items-center gap-10">
                            <span className="text-[22px] font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_30%)]">Social Media Proposal</span>
                            <Image src={LightIcon} alt="light-icon" width={35} className="box-line"/>
                            <span className="text-[22px] font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_30%)]">Social Media Audit</span>
                            <Image src={LightIcon} alt="light-icon" width={35} className="box-line"/>
                            <span className="text-[22px] font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_30%)]">Social Media Monthly Report</span>
                            <Image src={LightIcon} alt="light-icon" width={35} className="box-line"/>
                            <span className="text-[22px] font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_30%)]">Social Media Proposal</span>
                            <Image src={LightIcon} alt="light-icon" width={35} className="box-line"/>
                            <span className="text-[22px] font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_30%)]">Social Media Audit</span>
                            <Image src={LightIcon} alt="light-icon" width={35} className="box-line"/>
                            <span className="text-[22px] font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_30%)]">Social Media Monthly Report</span>
                            <Image src={LightIcon} alt="light-icon" width={35} className="box-line"/>
                        </div>
                    </Marquee>
                </div>
            </div>
        </motion.div>
    );
};

export default LineAnimateOne;
