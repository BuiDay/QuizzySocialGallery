"use client"
import Collections from '@/components/Collections/Collections';
import Footer from '@/components/layout/Footer';
import { useGetAllOrderMutation, useGetCollectionsMutation } from '@/redux/features/user/userApi';
import { RootState } from '@/redux/store';
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
const Header = dynamic(() => import('@/components/layout/Header'), { ssr: false })
 
const Page = () => {

    const [getCollections,{isLoading,isSuccess}] = useGetCollectionsMutation()
    const { products } = useSelector((item: RootState) => item.user)

    useEffect(()=>{getCollections({})},[])

    return (
        <div className=" min-h-screen">
            <Header />
            <Collections collections={products} isLoading={isLoading}/>
            <Footer />
      </div>
    );
};

export default Page;