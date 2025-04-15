"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import UseCheckBoughtProduct from "@/hook/useCheckBoughtProduct";
import { ChevronLeft, ChevronRight, Paperclip } from "lucide-react";

import { useGetSocialMediaMutation } from "@/redux/features/product/productApi";

import ProductReviews from "@/components/Common/ProductReviews/ProductReviews";
import toast from "react-hot-toast";

const Page = () => {
    const [currentPage, setCurrentPage] = useState<any>(1);
    const [image, setImage] = useState<any>()
    const [getSocialMedia, { isLoading, isSuccess, isError, error }] = useGetSocialMediaMutation();

    const myLoader = ({ src, width, quality }: any) => {
        return `${src}?w=${width}&q=${quality || 75}`
    }

    useEffect(() => {
        const body = {
            currentPage,
            forderName: "social-media-audit",
            productId:"668d0806cbc728450ab5d531"
        }
        getSocialMedia(body).then((res: any) => {
            if (res.data) {
                setImage(res.data)
            }
        })
    }, [currentPage])

    useEffect(() => {
        function handleKeyDown(e: any) {
            if (e.keyCode === 37 && currentPage > 1) {
                setCurrentPage((item: any) => (Number(item) - 1))
            }
            if (e.keyCode === 39 && currentPage < 18) {
                setCurrentPage((item: any) => (Number(item) + 1));
            }
        }
        document.addEventListener('keydown', handleKeyDown);
        return function cleanup() {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [currentPage]);


    return (
        <UseCheckBoughtProduct productId="668d0806cbc728450ab5d531">
        <div className="h-screen relative"  >
            <div className="h-full">
                <div className="h-full flex justify-start flex-col gap-3">
                    <div className="h-[92%] w-full flex justify-center">
                        {
                            image && <Image className="w-full h-full object-contain"
                                src={image}
                                alt="" width={1920} height={1200} loader={myLoader} />
                        }
                        {/* {
                            currentPage == 89 && <ProductReviews productId="662cb32eaae33d8a651a3d25" />
                        } */}
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <span className="text-center">Trang </span>
                        {/* <Input className="w-[50px] text-center" type="number" value={currentPage}  onChange={(e) => handleInputPage(Number(e.target.value))} /> */}
                        <div className="border h-[40px] w-[60px] flex justify-center items-center">
                            {
                                `${currentPage}/18`
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute w-full bottom-[50px] left-0">
                <div className="w-[95%] flex justify-between items-center m-auto">
                    <Button
                        className="cursor-pointer rounded-full h-[50px] w-[50px] p-0 border !border-white"
                        disabled={Number(currentPage) === 1 || isLoading}
                        onClick={() => setCurrentPage((item: any) => (Number(item) - 1))}
                        variant={"outline"}
                    >
                        <ChevronLeft />
                    </Button>
                    <Button
                        disabled={Number(currentPage) >= 18 || isLoading}
                        onClick={() => setCurrentPage((item: any) => (Number(item) + 1))}
                        className="cursor-pointer rounded-full h-[50px] w-[50px] p-0 border !border-white !disabled:cursor-not-allowed"
                        variant={"outline"}>
                        <ChevronRight />
                    </Button>
                </div>
            </div>
        </div>
    </UseCheckBoughtProduct>
    );
};

export default Page;
