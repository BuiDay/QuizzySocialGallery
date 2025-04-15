import React, { useEffect, useState } from 'react';
import { Progress } from "@/components/ui/progress"
import { IDiscount } from '@/type';
import FireIcon from '@/public/icons/fire.svg'
import Image from 'next/image';

interface IProps{
    discount?:IDiscount
}

const DiscountQuantity:React.FC<IProps>  = ({discount}) => {

    const [progress, setProgress] = useState(0)

    useEffect(()=>{
    if(discount?.productCount && discount?.productCountCurrent){
        const value = discount?.productCountCurrent  / discount?.productCount  * 100
        setProgress(value)
    }
    },[])
 
    return (
        <div className='text-center'>
            <div className='m-auto w-[80%] mt-3 mb-4 relative'>
                <div className="relative h-full w-full" >
                    <Progress value={progress}/>
                    <div className='w-full h-2 relative top-[-10px] left-0  z-30' style={{ transform: `translateX(-${100 - (progress || 0)}%)` }}>
                        <Image src={FireIcon} alt='' height={30} className='absolute top-[-14px] right-[-15px]'  />
                    </div>
                </div>
                <div className='absolute top-[-4px] left-[0]'>
                    {/* <div className='w-[2px] h-[15px] bg-white'></div> */}
                    <span className='text-[12px] absolute top-4 left-[-3px]'>0</span>
                </div>
                <div className='absolute top-[-4px] right-[0]'>
                    {/* <div className='w-[2px] h-[15px] bg-white'></div> */}
                    <span className='text-[12px] absolute top-4 left-[-10px]'>{discount?.productCount}</span>
                </div>
            </div>
        </div>
    );
};

export default DiscountQuantity ;