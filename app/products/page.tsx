"use client"
import Loading_V1 from '@/components/Common/Loading_V1/Loading_V1';
import Footer from '@/components/layout/Footer';
const Header = dynamic(() => import('@/components/layout/Header'), { ssr: false })
import Hero from '@/components/Products/Hero';
import Products from '@/components/Products/Products';
import { useGetAllMutation } from '@/redux/features/product/productApi';
import { RootState } from '@/redux/store';
import React, { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { IoSearchOutline } from "react-icons/io5";
import { useDebounce } from '@/hook/UseDebounce'
import Heading from '@/lib/Heading';


const Product = () => {
    const { products } = useSelector((item: RootState) => item.product)
    const [getAll, { isLoading }] = useGetAllMutation()


    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    

    const searchQuery = useDebounce(searchParams.get("keywords"), 500)
    const chargeQuery = searchParams.get("charge")


    const pathname = usePathname();
    const { replace } = useRouter();

    const onChangeParams = (value: string) => {
        
        if (!value.includes("All")) {
            params.set('charge', value);
        } else {
            params.delete('charge');
        }
        replace(`${pathname}?${params.toString()}`);
    }

    useEffect(() => {
        const data = {
            charge: chargeQuery || "",
            keywords: searchQuery ? searchQuery : "",
        }
        const getData = async () => {
            await getAll(data)
        }
        getData()
    }, [chargeQuery, searchQuery])

    const onChangeSearch = (key: string, value?: string | number | any) => {
        if (value) {
            params.set(key, value);
        } else {
            params.delete(key);
        }
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <>
            <Heading
                title={'Products | Quizzy Social Gallery'}
            // description={'Kinh nghiệm 2 năm trong lĩnh vực Social Media Marketing, hiện đang là Project Manager tại 1 công ty Canada, từng là Social Media Executive tại Zing News và sỡ hữu hơn 140K followers trên các kênh Social'}
            // keywords={"Quizzy Coaching Course Marketing"}
            />
            <div className=''>
                <Header />
                <div className='min-h-screen container z-10'>
                    {

                        <motion.div
                            animate={{ opacity: 1 }}
                            initial={{ opacity: 0 }}
                            transition={{ ease: "easeOut", duration: 0.7, delay: 0.2 }}
                        >
                            {/* <Hero /> */}
                            <div className='flex justify-end items-center gap-5 pt-[50px]'>
                                {/* <div className='max-w-[400px] w-full h-[40px] rounded-[10px]  p-[1px] md:mt-0 mt-5'>
                                    <div className='w-full h-full bg-main rounded-[10px] flex items-center p-[4px]'>
                                        <input defaultValue={searchParams.get("keywords")|| ""} onChange={(event) => onChangeSearch("keywords", event.target.value)} type='text' placeholder='Tìm kiếm sản phẩm' className='placeholder-white h-full rounded-[50px] w-full bg-transparent text-white text-[14px] pl-[10px] outline-none' />
                                        <div className='mr-2'>
                                            <IoSearchOutline size={24} />
                                        </div>
                                    </div>
                                </div> */}
                                {/* <Select onValueChange={onChangeParams}>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Tất cả" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value='All'>Tất cả</SelectItem>
                                        <SelectItem value="true">Có phí</SelectItem>
                                        <SelectItem value="false">Miễn phí</SelectItem>
                                    </SelectContent>
                                </Select> */}
                            </div>
                            {
                                isLoading &&
                                <div className='h-screen'>
                                    <Loading_V1 />
                                </div>
                            }

                            <Products products={products} />
                        </motion.div>
                    }
                </div>
                <Footer />
            </div>
        </>

    );
};

const Page = () => {
    return (
        // You could have a loading skeleton as the `fallback` too
        <Suspense>
            <Product />
        </Suspense>
    )
}

export default Page;