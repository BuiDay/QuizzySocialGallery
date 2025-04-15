import React from 'react';
import "./Button.css"
import Image from 'next/image';
interface Iprops{
    onClick?:any;
    title:string;
    background?:string;
    color?:string;
    icon?:any;
}

const Button:React.FC<Iprops> = ({title,background,color,icon,onClick}) => {
    return (
        <div className={`${background ? background : "btn"} rounded-xl cursor-pointer`} onClick={onClick}>
            <div className='py-2 px-4 flex items-center justify-center gap-3 '>
                <span className={`text-[14px] font-medium text-center ${color?color:""}`}>{title}</span>
                {
                    icon && <span><Image src={icon} alt='icon'/></span>
                }
            </div>
        </div>
    );
};

export default Button;