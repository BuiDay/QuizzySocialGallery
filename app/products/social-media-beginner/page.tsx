"use client"
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import SocialMediaBeginner from '@/components/SocialMediaBeginner/SocialMediaBeginner';
import Heading from '@/lib/Heading';
import { useGetByIdMutation } from '@/redux/features/product/productApi';
import React, { useEffect } from 'react';

const Page = () => {
    const [getById,{isLoading}] = useGetByIdMutation();
    useEffect(()=>{
        const getData = async () => await getById("67e0dc5eec49e1d578e75ff6");
        getData()
    },[])
    return (
        <>
            <Heading title={'Social Media Beginner Workbook | Quizzy Social Gallery'}/>
            <Header />
            <SocialMediaBeginner />
            <Footer/>   
        </>
    );
};

export default Page;