import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { ICart, IProduct } from "@/type";
import UserAuth from "@/hook/userAuth";
import UseProtectProduct from "@/hook/useProtectProduct";
import ModalNeedLogin from "../Common/ModalNeedLogin/ModalNeedLogin";
import { motion } from "framer-motion";
import Cart from "../Common/Cart/Cart";
import DiscountQuantity from "./DiscountQuantity ";
import { Dot } from "lucide-react";


interface IProps {
    data?: IProduct;
}

const ItemProductsNotFree: React.FC<IProps> = ({ data }) => {

    console.log(data)

    const idAuthenticated = UserAuth();
    const isBought = data?._id && UseProtectProduct({ productId: data?._id });
    const [isModalNeedLogin, setOpenModalLogin] = useState(false);
    const [openCart, setOpenCart] = useState<boolean>(false)

    const handleAddCart = () => {
        if (!idAuthenticated) {
            setOpenModalLogin(true);
            return;
        }
        setOpenCart(true)
    };

    const myLoader = ({ src, width, quality }: any) => {
        return `${src}?w=${width}&q=${quality || 75}`;
    };

    const HandleCart = () => {
        return (
            <>
                {
                    openCart && <Cart open={openCart} setOpen={setOpenCart} cart={data} />
                }
                {
                    !data?.lauchStatus ?
                        <div
                            onClick={() => handleAddCart()}
                            className="bg-[#d72483]  h-[30px] px-[10px] rounded-[50px] flex items-center justify-center cursor-pointer"
                        >
                            <span className="text-[14px] whitespace-nowrap font-semibold">Mua ngay</span>
                        </div> : <div

                            className="text-center"
                        >
                            <p className="text-[18px] text-[#d72483]  font-semibold">Coming soon</p>
                            <p className="text-[14px] font-semibold">19h 10/7/2024</p>
                        </div>
                }
            </>
        )
    };

    return (
        <>
            {isModalNeedLogin && (
                <ModalNeedLogin open={isModalNeedLogin} setOpen={setOpenModalLogin} />
            )}
            <motion.div
                className="  p-[2px] rounded-[20px] relative hover:scale-105 duration-300 group "
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ ease: "easeOut", duration: 0.7, delay: 0.2 }}
            >
                <div className="bg-[#d72483]/[0.05] p-5 overflow-hidden rounded-[20px] col-span-1 min-h-[450px] max-h-[750px] h-full flex flex-col justify-between border border-[#d72483]">
                    <div className="absolute top-[-15px] right-[-15px]">
                        {/* {
                            data?.discount?.discountPrice ?
                                <div className="bg-red-500 px-2 py-1 rounded-lg text-center text-[14px]">
                                    <span>Giảm {Math.floor((Number(data?.price) - data?.discount?.discountPrice) / Number(data?.price) * 100)}%</span>
                                </div> : ""
                        } */}
                    </div>
                    <Link href={data?.descriptionLink || ""} className="w-full h-full flex flex-col cursor-pointer">
                        <div className="h-[120px] mx-auto">
                            <Image className="h-full object-contain" loader={myLoader} src={data?.thumnail && data?.thumnail || ""} alt="" width={300} height={300} />
                        </div>
                        <div className="text-center">
                            <p className="text-[16px] text-[#d72483]">{data?.category}</p>
                            <span className="lg:text-[16px] text-[14px] text-[#d72483] font-bold uppercase">{data?.name}</span>
                        </div>

                        <div>
                            {
                                !data?.lauchStatus && <div className="text-center">
                                    {
                                        data?.discount && <del className='text-[16px] text-[#d72483]/30 text-center font-semibold '>Giá gốc: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(data?.price))}</del>
                                    }
                                </div>
                            }

                            {/* {
                                !data?.lauchStatus && <div className="text-center">
                                    {
                                        data?.discount && <DiscountQuantity discount={data?.discount} />
                                    }
                                    {
                                        data?.discount && <span className='text-[12px] text-center'>{`Tổng số ${data?.discount?.productCountCurrent}/${data?.discount?.productCount} người đã mua tài liệu. Sau đó sẽ quay về giá gốc.`}</span>
                                    }
                                </div>
                            } */}


                            <div className="text-center">
                                {
                                    !data?.lauchStatus && <span className="text-[20px] font-bold text-[#d72483]">
                                        {
                                            data?.discount ? new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(data?.discount.discountPrice)) : new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(data?.price))
                                        }
                                    </span>
                                }

                            </div>
                        </div>
                        <div>
                            <div className="text-center">
                                <span className="md:text-[12px] text-[10px] text-[#d72483] font-bold">{data?.description}</span>
                            </div>
                        </div>
                        <div className="text-center text-[#d72483]">
                            {
                                data?.isCombo &&
                                <>
                                    {
                                        data?.comboInclude && data?.comboInclude.map((item: string, index: number) => <div key={index} className="lg:text-[14px] text-[12px] flex items-center justify-center"><Dot /><span>{item}</span></div>)
                                    }
                                </>
                            }
                        </div>
                    </Link>

                    {

                    }

                    <div className="m-auto mt-3">
                        {
                            isBought ?
                                <div
                                    className="bg-[#d72483] h-[30px] px-[10px] rounded-[50px] flex items-center justify-center"
                                >
                                    <Link href={"/collections"} className="font-semibold text-[14px]">Đã sở hữu</Link>
                                </div>
                                : <HandleCart />
                        }
                    </div>
                </div>
            </motion.div>
        </>

    );
};

export default ItemProductsNotFree;
