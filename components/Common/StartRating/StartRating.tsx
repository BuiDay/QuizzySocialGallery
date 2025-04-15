import React, { useState } from 'react';
import './StartRating.css'
import star from '@/public/icons/star.svg'
import Image from 'next/image';

interface IProps{
    rating:number,
    setRating:any,
}
const StartRating:React.FC<IProps> = ({rating,setRating}) => {

    const [hover, setHover] = useState<number>(0);

    return (
        <div className='flex gap-4'>
            {[...Array(5)].map((Star, i) => {
                const ratingValue: number = i + 1;
                return (
                    <label key={i}>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                        />
                        <div className={`border h-[40px] w-[40px]  rounded-md flex justify-center items-center p-1 ${ratingValue <= (hover || rating) ? "border-yellow-400" : "border-white"}`}>
                            <Image src={star} alt=''
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(0)}
                                className={
                                    ratingValue <= (hover || rating) ? "activeStar" : "star"
                                }>
                            </Image>
                        </div>
                    </label>
                );
            })}
        </div>
    );
};

export default StartRating;