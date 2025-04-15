"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Paperclip } from "lucide-react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import Link from "next/link";
import { useGetThinkingDesignMutation } from "@/redux/features/product/productApi";
import { page12, page38, page79, page80, page81, page87, page88 } from "@/lib/attachlink"
import { FaPlay } from "react-icons/fa";
import ProductReviews from "@/components/Common/ProductReviews/ProductReviews";
import dynamic from "next/dynamic";
const indexPage = [12, 38, 79, 80, 81, 87, 88]

const UseCheckBoughtProduct = dynamic(() => import('@/hook/useCheckBoughtProduct'), { ssr: false });

const Page = () => {
    const [currentPage, setCurrentPage] = useState<any>(1);
    const [image, setImage] = useState<any>()
    const [getThinkingDesign, { isLoading, isSuccess }] = useGetThinkingDesignMutation();


    const OnNext = () => {
        setCurrentPage((item: any) => (Number(item) + 1));
    };

    const handleInputPage = (value: number) => {
        setTimeout(() => {
            setCurrentPage(value)
        }, 500)
    }

    const myLoader = ({ src, width, quality }: any) => {
        return `${src}?w=${width}&q=${quality || 75}`
    }

    useEffect(() => {
        getThinkingDesign(currentPage).then((res: any) => {
            if (res.data) {
                setImage(res.data)
            }
        })
    }, [currentPage])

    const handleAttachLink = (currentPage: number) => {
        let data = [{}]
        switch (currentPage) {
            case 12:
                data = page12;
                break;
            case 38:
                data = page38;
                break;
            case 79:
                data = page79;
                break;
            case 80:
                data = page80;
                break;
            case 81:
                data = page81;
                break;
            case 87:
                data = page87;
                break;
            case 88:
                data = page88;
            default:
                break;
        }

        return data?.map((item: any, index) => {
            return <div className="px-4" key={index}>
                {
                    item.title ? <span className="font-bold gradient-title">{item.title}: </span> : <span className="font-bold gradient-title">{index + 1}: </span>
                }
                {
                    item.title ? <Link href={item.link || ""} target="_blank">Link</Link> : <Link href={item.link || ""} target="_blank">{item.link}</Link>
                }
            </div>

        })
    }

    useEffect(() => {
        function handleKeyDown(e: any) {
            if (currentPage > 1 && e.keyCode === 37) {
                setCurrentPage((item: any) => (Number(item) - 1))
            }

            if (currentPage <= 88 && e.keyCode === 39) {
                OnNext()
            }
        }

        document.addEventListener('keydown', handleKeyDown);

        return function cleanup() {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [currentPage]);


    return (
        <UseCheckBoughtProduct productId="662cb32eaae33d8a651a3d25">
            <div className="h-screen relative"  >
                <div className="h-full">
                    <div className="h-full flex justify-start flex-col gap-3">
                        <div className="h-[92%] w-full flex justify-center">
                            {
                               0 < currentPage && currentPage < 89 && image &&  <Image className="w-full h-full object-contain"
                                    src={image}
                                    alt="" width={1920} height={1200} loader={myLoader} />
                            }
                            {
                                currentPage == 89 && <ProductReviews productId="662cb32eaae33d8a651a3d25"/>
                            }
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <span className="text-center">Trang </span>
                            {/* <Input className="w-[50px] text-center" type="number" value={currentPage}  onChange={(e) => handleInputPage(Number(e.target.value))} /> */}
                            <div className="border h-[40px] w-[60px] flex justify-center items-center">
                                {
                                    `${currentPage}/89`
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
                            disabled={Number(currentPage) === 89 || isLoading}
                            onClick={() => OnNext()}
                            className="cursor-pointer rounded-full h-[50px] w-[50px] p-0 border !border-white !disabled:cursor-not-allowed"
                            variant={"outline"}>
                            <ChevronRight />
                        </Button>
                    </div>
                </div>
                {
                    indexPage.includes(currentPage) && isSuccess &&
                    <div className="absolute right-0 top-[50px] pr-[20px]">
                        <Popover>
                            <PopoverTrigger>
                                <div className="text-white border border-white rounded-md p-2 flex items-center gap-2">
                                    <Paperclip size={18} />
                                    <span>Link đính kèm</span>
                                </div>
                            </PopoverTrigger>
                            <PopoverContent className="max-w-[600px] w-full">
                                {
                                    handleAttachLink(currentPage)
                                }
                            </PopoverContent>
                        </Popover>
                    </div>
                }

                <div className="absolute top-[50px] pl-[20px]">
                    <Popover>
                        <PopoverTrigger>
                            <div className="text-white border border-white rounded-md p-2 flex items-center gap-2">
                                <span>Mục lục</span>
                            </div>
                        </PopoverTrigger>
                        <PopoverContent className="max-w-[800px] w-full">
                            <div className="w-full m-">
                                <div className="flex flex-col gap-[30px]">
                                    <div className="flex items-center gap-2 cursor-pointer active-table-of-content" onClick={()=>setCurrentPage(1)}>
                                        <FaPlay />
                                        <span>
                                        #1. Những điều bạn cần biết khi bạn là Newbie Canvanians
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 cursor-pointer active-table-of-content" onClick={()=>setCurrentPage(7)}>
                                        <FaPlay />
                                        <span>
                                        #2. Các bước cơ bản trong thiết kế
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 cursor-pointer active-table-of-content" onClick={()=>setCurrentPage(20)}>
                                        <FaPlay />
                                        <span>
                                        #3. Một số thông tin cần thiết khi thiết kế ấn phẩm
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 cursor-pointer active-table-of-content" onClick={()=>setCurrentPage(64)}>
                                        <FaPlay />
                                        <span>
                                        #4. Tham khảo các ấn phẩm Social Posts
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 cursor-pointer active-table-of-content" onClick={()=>setCurrentPage(78)}>
                                        <FaPlay />
                                        <span>
                                        #5. Các kênh tham khảo khi học Design
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 cursor-pointer active-table-of-content" onClick={()=>setCurrentPage(82)}>
                                        <FaPlay />
                                        <span>
                                        #6. Hướng dẫn các tác vụ Canva
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 cursor-pointer active-table-of-content" onClick={()=>setCurrentPage(89)}>
                                        <FaPlay />
                                        <span>
                                        Đánh giá sản phẩm
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>

            </div>
        </UseCheckBoughtProduct>
    );
};

export default Page;
