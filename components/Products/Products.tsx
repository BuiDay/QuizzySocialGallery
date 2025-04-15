import React, { useState } from 'react';
import { IProduct } from '@/type';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Image1 from "@/public/1.webp"
import Image2 from "@/public/2.webp"
import Image3 from "@/public/3.webp"
import dynamic from 'next/dynamic';

const ItemProductsNotFree = dynamic(() => import('./ItemProductsNotFree'), { ssr: false })
const ItemProducts = dynamic(() => import('./ItemProducts'), { ssr: false })

interface IProps {
    products?: IProduct[]
}

const Products: React.FC<IProps> = ({ products }) => {

    // const data = [
    //     {
    //         _id: "662cb32eaae33d8a651a3d25",
    //         name: "Tư duy Thiết kế",
    //         thumnail: "https://quizzysocialgallery.com/api/v1/images/products/designThinking.webp",
    //         discount: {
    //             name: "NHAT",
    //             _id: "668d71ac02be35037fef8498",
    //             discountPrice: 2000,
    //             productCount: 100,
    //             productCountCurrent: 0,
    //         },
    //         description: "(Hướng dẫn chi tiết quy trình + Template)",
    //         lauchStatus: false,
    //         price: 1299000,
    //         category: "Bộ tài liệu",
    //         url: "products/design-thinking/view",
    //         charge: true,
    //         // discount: "",
    //         descriptionLink: "/products/design-thinking",
    //         isShow: true,
    //         isCombo: false,
    //     },
    //     {
    //         _id: "668d8c63116eb91095afb089",
    //         name: "SOCIAL MEDIA BUNDLE",
    //         thumnail: Image1,
    //         isCombo: true,
    //         comboInclude: [
    //             "Social Media Portfolio",
    //             "Social Media Proposal",
    //             "Social Media Audit",
    //             "Social Media Strategy",
    //             "Social Media Plan",
    //             "Social Media Calendar",
    //             "Social Media Monthly Report"
    //         ],
    //         discount: {
    //             _id: "668d71ac02be35037fef8498",
    //             name: "NHAT",
    //             discountPrice: 2000,
    //             productCount: 100,
    //             productCountCurrent: 0,
    //         },
    //         comboProductId: [
    //             "668d076acbc728450ab5d527",
    //             "668d07c1cbc728450ab5d52d",
    //             "668d0806cbc728450ab5d531",
    //             '668d0817cbc728450ab5d533',
    //             "668d0851cbc728450ab5d535",
    //             "668d0879cbc728450ab5d537"
    //         ],
    //         description: "(Hướng dẫn chi tiết quy trình + Template)",
    //         lauchStatus: false,
    //         price: 999000,
    //         category: "Bộ tài liệu",
    //         url: "/products/social-media-bundle",
    //         charge: true,
    //         // discount: "",
    //         descriptionLink: "/products/social-media-bundle",
    //         isShow: true,
    //     },
    //     {
    //         _id: "668d8e4363bbb90322e96df2",
    //         name: "SOCIAL MEDIA PACKAGE 1",
    //         thumnail: Image2,
    //         isCombo: true,
    //         comboInclude: [
    //             "Social Media Portfolio",
    //             "Social Media Plan",
    //             "Social Media Calendar",
    //             "Social Media Strategy"
    //         ],
    //         comboProductId: [
    //             "668d07c1cbc728450ab5d52d",
    //             "668d0851cbc728450ab5d535",
    //             "668d0817cbc728450ab5d533",
    //         ],
    //         description: "(Hướng dẫn chi tiết quy trình + Template)",
    //         lauchStatus: false,
    //         price: 899000,
    //         category: "Bộ tài liệu",
    //         url: "",
    //         charge: true,
    //         discount: {
    //             name: "NHAT",
    //             _id: "668d71ac02be35037fef8498",
    //             discountPrice: 2000,
    //             productCount: 100,
    //             productCountCurrent: 0,
    //         },
    //         descriptionLink: "/products/social-media-plan-calendar-strategy-portfolio",
    //         isShow: true,
    //     },
    //     {
    //         _id: "668d92f163bbb90322e96df4",
    //         name: "SOCIAL MEDIA PACKAGE 2",
    //         thumnail: Image3,
    //         isCombo: true,
    //         comboInclude: [
    //             "Social Media Proposal",
    //             "Social Media Audit",
    //             "Social Media Monthly Report"
    //         ],
    //         comboProductId: [
    //             "668d076acbc728450ab5d527",
    //             "668d0806cbc728450ab5d531",
    //             "668d0879cbc728450ab5d537",
    //         ],
    //         description: "(Hướng dẫn chi tiết quy trình + Template)",
    //         lauchStatus: false,
    //         price: 599000,
    //         category: "Bộ tài liệu",
    //         url: "/products/social-media-proposal-audit-monthly-report",
    //         charge: true,
    //         discount: {
    //             name: "NHAT",
    //             discountPrice: 2000,
    //             productCount: 100,
    //             productCountCurrent: 0,
    //         },
    //         isShow: true,
    //         descriptionLink: "/products/social-media-proposal-audit-monthly-report",
    //     }
    // ]

    return (
        <div className='container mx-auto min-h-screen'>
            <div className='pt-[50px] pb-[200px] flex flex-col gap-[100px]'>
                <div className='flex flex-col gap-[30px]'>
                    {/* <div className='px-5 text-center'>
                        <span className='md:text-[20px] text-[14px] uppercase font-medium border border-[#d72483] rounded-xl px-5 py-3 text-[#d72483]'>Sản phẩm có phí</span>
                    </div> */}
                    <div className='w-full grid lg:grid-cols-4 md:grid-cols-2 gap-[20px] xl:px-[50px] lg:px-0 flex-wrap mt-[40px]'>
                        {
                            products && products?.length > 0 ? products?.map((item, index) => { if (item.charge && item.isShow ) { return <ItemProductsNotFree key={index} data={item} /> } }) : <span className='text-white'> Không có sản phẩm nào</span>
                        }
                        {/* {
                            data?.map((item: any, index) => { if (item.isShow) { return <ItemProductsNotFree data={item} key={index} /> } })
                        } */}
                    </div>
                </div>
                <div className='flex flex-col gap-[30px]'>
                    {/* <div className='px-5 text-center'>
                        <span className='md:text-[20px] text-[14px] uppercase font-medium border border-[#d72483] rounded-xl px-5 py-3 text-[#d72483]'>Sản phẩm miễn phí</span>
                    </div> */}
                    <div className='w-full grid lg:grid-cols-4 md:grid-cols-2 gap-[20px] xl:px-[50px] lg:px-0 flex-wrap mt-[40px]'>
                        {
                            products && products?.length > 0 ? products?.map((item, index) => { if (!item.charge) { return <ItemProducts key={index} data={item} /> } }) : <span className='text-white text-center'> Không có sản phẩm nào</span>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;