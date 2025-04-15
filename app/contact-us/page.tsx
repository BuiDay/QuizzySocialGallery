"use client"
import ContactUs from '@/components/ContactUs/ContactUs';
import Footer from '@/components/layout/Footer';
import dynamic from 'next/dynamic';
const Header = dynamic(() => import('@/components/layout/Header'), { ssr: false })
import React from 'react';

const Page = () => {
    return (
        <>
            <Header/>
            <ContactUs/>
            <Footer />
        </>
    );
};

export default Page;