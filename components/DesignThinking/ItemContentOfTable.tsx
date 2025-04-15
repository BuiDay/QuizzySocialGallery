import React from 'react';
import { FaPlay } from "react-icons/fa";


interface IProps {
    title: string,
    descripton: string
    active: boolean
}

const ItemContentOfTable: React.FC<IProps> = ({ title, descripton, active }) => {

    
    return (
        <>
            <div className="w-full relative">
                <div className={`flex items-center gap-2 ${active ? "active-col" : " "}`}>
                    <FaPlay />
                    <span>
                        {
                            title
                        }
                    </span>
                </div>
                {
                    active && <div className="absolute border border-white rounded-lg h-[70px] w-[130%] top-[-80%] left-[-15%] bg-white/30 "></div>
                }

            </div>
            {
                active &&
                <div className="mt-10">
                    {
                        <div dangerouslySetInnerHTML={{ __html: descripton }} />
                    }
                </div>
            }
        </>
    );
};

export default ItemContentOfTable;