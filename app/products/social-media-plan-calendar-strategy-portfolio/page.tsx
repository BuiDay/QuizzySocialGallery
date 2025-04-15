"use client"
import Footer from '@/components/layout/Footer';
import SocialMediaPlanCalendarStrategyPortfolio from '@/components/SocialMediaPlanCalendarStrategyPortfolio/SocialMediaPlanCalendarStrategyPortfolio';
import Heading from '@/lib/Heading';
import { useGetByIdMutation } from '@/redux/features/product/productApi';
import dynamic from 'next/dynamic';
const Header = dynamic(() => import('@/components/layout/Header'), { ssr: false })
import React, { useEffect } from 'react';

const Page = () => {
    const [getById,{isLoading}] = useGetByIdMutation();

    useEffect(()=>{
        const getData = async () => await getById("668d8e4363bbb90322e96df2");
        getData()
    },[])

    return (
        <>
            <Heading title={'Bộ tài liệu Social Media Plan + Calendar + Strategy + Portfolio | Quizzy Social Gallery'}/>
            <Header />
            <SocialMediaPlanCalendarStrategyPortfolio />
            <Footer/>
        </>
    );
};

export default Page;