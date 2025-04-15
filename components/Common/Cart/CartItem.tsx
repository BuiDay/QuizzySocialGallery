import { IProduct } from '@/type';
import React from 'react';
import Image from 'next/image';
import { Trash2 } from 'lucide-react';
import { Span } from 'next/dist/trace';

interface IProps {
    item?: IProduct
}

const CartItem: React.FC<IProps> = ({ item }) => {
    const myLoader = ({ src, width, quality }: any) => {
        return `${src}?w=${width}&q=${quality || 75}`;
    };

    return (
        <div className='w-full'>
            <div className='flex gap-4 items-center'>
                <div className='relative'>

                    <Image className='h-full' loader={myLoader} src={item?.thumnail || ""} alt='' width={120} height={70} />
                    
                    <div className="absolute top-[-15px] right-[-15px]">
                        {
                            item?.charge ?
                                (
                                    item?.discount?.discountPrice ?
                                        <div className="bg-red-500 px-1 py-1 rounded-lg">
                                            <span className='text-[12px] text-white'>{Math.floor((Number(item?.price) - item?.discount?.discountPrice) / Number(item?.price) * 100)}% off</span>
                                        </div> : ""
                                )
                                :
                                <div className="bg-red-500 px-1 py-1 rounded-lg">
                                    <span className='text-[12px] text-white'>Free</span>
                                </div>
                        }
                    </div>
                </div>

                <div className='flex justify-between w-full items-center group'>
                    <div className='flex flex-col items-start gap-1'>
                        <p className='text-[16px] text-[#5c43a3]'>{item?.category}</p>
                        <p className='text-[18px] text-[#d72483] font-bold'>
                            {item?.name}
                        </p>
                        {
                            item?.discount && <del className='text-[16px] text-[#5c43a3]/40'>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(item?.price))}</del>
                        }
                    </div>

                    <div className='flex flex-col items-center gap-2'>
                        <p className='text-[24px] text-[#5c43a3]'>
                            {
                                item?.discount ? new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(item?.discount?.discountPrice)) : new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(item?.price || 0))
                            }
                        </p>
                    </div>
                </div>

            </div>
            <div className='text-left mt-4'>
                {
                    item?.isCombo && <span className='font-bold text-[#5c43a3]'>Bộ tài liệu bao gồm: </span>
                }
                {
                    item?.comboInclude && item?.comboInclude.map((item, index) => <p key={index}>- {item}</p>)
                }
            </div>
        </div>
    );
};

export default CartItem;