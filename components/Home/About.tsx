"use client"
import React, { useEffect, useRef } from 'react';
import Button from '../Common/Button/Button';
import { useInView } from "framer-motion"
import Link from 'next/link';
import Quizzy from "../../public/quizzy_2.webp"
import Quizzy_2 from "../../public/quizzy_7.jpg"
import Image from "next/image";
import { Crimson_Pro } from "next/font/google";
const CrimsonPro = Crimson_Pro({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"]
});
const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        console.log("Element is in view: ", isInView)
    }, [isInView])

    return (
        <div className='flex md:flex-row flex-col items-end justify-center container m-auto py-[100px] md:mt-0 mt-6 gap-5' ref={ref}>
            <div className="md:w-[40%] w-full" style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>
                <div className="flex justify-center h-full items-end">
                    <div className="md:h-[420px] md:w-[400px] h-[250px] w-[250px] rounded-2xl overflow-hidden">
                        <Image className='h-full object-cover' src={Quizzy_2} alt="quizzy" width={600} />
                    </div>
                </div>
            </div>
            <div className="md:w-[60%] w-full" style={{
                transform: isInView ? "none" : "translateX(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>
                <div className="flex flex-col h-full w-full gap-3 text-[18px]">
                    <h3 className={`md:text-[54px] text-[24px] text-center text-[#d72483] font-bold ${CrimsonPro.className}`}>Đôi nét về mình</h3>
                    <p className="text-[#d72483] text-justify border-[#d72483] border-[2px] p-5"> Với<span className='font-bold'> 4 </span>năm kinh nghiệm trong lĩnh vực Social Media Marketing và hiện tại mình đang làm việc với vai trò là một <span className='font-bold'>Freelance Social Media Manager</span>   , đã từng làm việc cho các khách hàng/công ty tại Việt Nam, Canada, California (Mỹ). <span className='font-bold'>Xây dựng hệ sinh thái Personal Branding hơn 180K followers </span> trên các nền tảng mạng xã hội. <span className='font-bold'>Hiện mình là Founder của QCC Mastery Hub</span>, một trung tâm đào tạo trong lĩnh vực <span className='font-bold'>Content Marketing - Social Media Marketing.</span></p>
                    <div className="flex md:flex-row flex-col gap-3 justify-between mt-1 h-[150px]">
                        <div className='text-white flex-1 bg-[#d72483] flex items-center justify-center w-full h-[180px] px-5'>
                            <p className=''>4+ năm kinh nghiệm trong lĩnh vực Social Media Marketing và Personal Branding.</p>
                        </div>

                        <div className='text-white flex-1 bg-[#d72483] flex items-center justify-center w-full h-[180px] px-5'>
                        
                            <p className=''> <span className='font-bold block'>180K+ </span>Tổng số Followers của mình trên tất cả các trang mạng xã hội</p>
                        </div>

                        <div className='text-white flex-1 bg-[#d72483] flex items-center justify-center w-full h-[180px] px-5'>

                            <p className=''><span className='font-bold block'>20+</span> Hợp tác và làm việc với hơn 20 dự án thành công đem về mức doanh thu từ 200 triệu - 2 tỷ </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;