import React from 'react';
import Line from '../Common/Line/Line';
import { Crimson_Pro } from 'next/font/google';
const CrimsonPro = Crimson_Pro({
    subsets: ["latin"],
    variable: '--font-CrimsonPro',
    weight: ["400", "500", "600", "700", "800", "900"]
  });
  
const Hero = () => {
    return (
        <div className='w-full h-[50vh] pt-[150px]'>
            <div className='w-full h-full flex flex-col justify-center items-center'>
                <h1 className={`md:text-[40px] text-[28px] font-extrabold title text-[#d72483] text-center ${CrimsonPro.className}`}>Các sản phẩm của mình</h1>
                <p className='md:text-[18px] text-[14px] md:w-[80%] w-full mt-5 text-center text-[#d72483]'>Những sản phẩm số trong lĩnh vực Social Media Marketing này sẽ đồng hành cùng bạn trên con đường thăng tiến, chinh phục cuộc sống tự do và đạt được thu nhập mơ ước.</p>
                <p className='md:text-[18px] text-[14px] mt-5 text-center text-[#d72483]'>Bấm vào <span className='font-bold'>&quot;Sản phẩm&quot; </span>để xem chi tiết và hiểu hơn về từng sản phẩm</p>
            </div>
        </div>
    );
};

export default Hero;