"use client"
import Footer from '@/components/layout/Footer';
import SocialMediaBundle from '@/components/SocialMediaBundle/SocialMediaBundle';
import Heading from '@/lib/Heading';
import { useGetByIdMutation } from '@/redux/features/product/productApi';
import dynamic from 'next/dynamic';
const Header = dynamic(() => import('@/components/layout/Header'), { ssr: false })
import React, { useEffect } from 'react';

const Page = () => {
    const [getById,{isLoading}] = useGetByIdMutation();

    useEffect(()=>{
        const getData = async () => await getById("668d8c63116eb91095afb089");
        getData()
    },[])

    return (
        <>
            <Heading title={'Bộ tài liệu Social Media Bundle | Quizzy Social Gallery'}/>
            <Header />
            <SocialMediaBundle />
            <Footer/>
        </>
    );
};

export default Page;