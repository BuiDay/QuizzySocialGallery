"use client"
import DesignThinking from '@/components/DesignThinking/DesignThinking';
import Footer from '@/components/layout/Footer';
import Heading from '@/lib/Heading';
import { useGetByIdMutation } from '@/redux/features/product/productApi';
import dynamic from 'next/dynamic';
const Header = dynamic(() => import('@/components/layout/Header'), { ssr: false })
import React, { useEffect } from 'react';

const Page = () => {
    const [getById,{isLoading}] = useGetByIdMutation();

    useEffect(()=>{
        const getData = async () => await getById("662cb32eaae33d8a651a3d25");
        getData()
    },[])

    return (
        <>
            <Heading title={'Tài liệu Tư duy thiết kế | Quizzy Social Gallery'}/>
            <Header />
            <DesignThinking/>
            <Footer />
        </>
    );
};

export default Page;