"use client"
import IdeasHacking from '@/components/IdeasHacking/IdeasHacking';
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
        const getData = async () => await getById("67fde32f87c5130621888b6b");
        getData()
    },[])

    return (
        <>
            <Heading title={'Tài liệu Ideas Hacking | Quizzy Social Gallery'}/>
            <Header />
            <IdeasHacking />
            <Footer/>
        </>
    );
};

export default Page;