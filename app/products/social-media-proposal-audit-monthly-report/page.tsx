"use client"
import Footer from '@/components/layout/Footer';
import SocialMediaProposalAuditMonthlyReport from '@/components/SocialMediaProposalAuditMonthlyReport/SocialMediaProposalAuditMonthlyReport';
import Heading from '@/lib/Heading';
import { useGetByIdMutation } from '@/redux/features/product/productApi';
import dynamic from 'next/dynamic';
const Header = dynamic(() => import('@/components/layout/Header'), { ssr: false })
import React, { useEffect } from 'react';

const Page = () => {
    const [getById,{isLoading}] = useGetByIdMutation();

    useEffect(()=>{
        const getData = async () => await getById("668d92f163bbb90322e96df4");
        getData()
    },[])

    return (
        <>
            <Heading title={'Bộ tài liệu Social Media Proposal + Audit + Monthly Report | Quizzy Social Gallery'}/>
            <Header />
            <SocialMediaProposalAuditMonthlyReport />
            <Footer/>
        </>
    );
};

export default Page;