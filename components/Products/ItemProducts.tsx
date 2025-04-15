import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { ICart, IProduct } from "@/type";
import UserAuth from "@/hook/userAuth";
import UseProtectProduct from "@/hook/useProtectProduct";
import ModalNeedLogin from "../Common/ModalNeedLogin/ModalNeedLogin";
import { motion } from "framer-motion";
import {
    useAddCartMutation,
    useGetCartMutation,
} from "@/redux/features/cart/cartApi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Cart from "../Common/Cart/Cart";
import DiscountQuantity from "./DiscountQuantity ";

interface IProps {
    data?: any;
}

const ItemProducts: React.FC<IProps> = ({ data }) => {

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
                <div
                    onClick={() => handleAddCart()}
                    className="bg-[#5c43a3] h-[30px] px-[10px] rounded-[50px] flex items-center justify-center cursor-pointer"
                >
                    <span className="text-[14px] whitespace-nowrap font-semibold">Nhận ngay</span>
                </div>
            </>
        );
    };

    return (
        <>
            {isModalNeedLogin && (
                <ModalNeedLogin open={isModalNeedLogin} setOpen={setOpenModalLogin} />
            )}
            <motion.div
                className="p-[2px] rounded-[20px] cursor-pointer relative hover:scale-105 duration-300 group"
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ ease: "easeOut", duration: 0.7, delay: 0.2 }}
            >
                <div className="bg-[#5c43a3]/[0.05]  p-5 overflow-hidden rounded-[20px] col-span-1 min-h-[320px] max-h-[400px] h-full flex flex-col justify-between border border-[#5c43a3]">
                    <div className="absolute top-[-15px] right-[-15px]">
                        <div className="bg-red-500 px-2 py-1 rounded-lg">
                            <span>Free</span>
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-col gap-3">
                        <div className="h-[120px] mx-auto">
                            <Image className="h-full object-contain" loader={myLoader} src={data?.thumnail && data?.thumnail || ""} alt="" width={300} height={300} />
                        </div>
                        <div className="text-center">
                            <p className="text-[16px] text-[#5c43a3]">{data?.category}</p>
                            <span className="text-[18px] text-[#5c43a3] font-bold uppercase">{data?.name}</span>
                        </div>
                    </div>
                    <div className="w-[50%] m-auto mt-3">
                        {
                            isBought ?
                                <div
                                    className="bg-[#5c43a3] h-[30px] px-[10px] rounded-[50px] flex items-center justify-center"
                                >
                                    <Link href={"/collections"} className="font-semibold">Đã sở hữu</Link>
                                </div>
                                : <HandleCart />
                        }
                    </div>
                </div>
            </motion.div>
        </>

    );
};

export default ItemProducts;
