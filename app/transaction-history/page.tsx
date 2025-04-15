"use client"
import Footer from '@/components/layout/Footer';
import OrderHistory from '@/components/TransactionHistory/OrderHistory';
import { useGetAllOrderMutation } from '@/redux/features/user/userApi';
import { RootState } from '@/redux/store';
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
const Header = dynamic(() => import('@/components/layout/Header'), { ssr: false })
 
const Page = () => {

    const [getAllOrder,{isLoading,isSuccess}] = useGetAllOrderMutation()
    const { orders } = useSelector((item: RootState) => item.user)

    useEffect(()=>{getAllOrder({})},[])

    return (
        <div className=" min-h-screen">
            <Header />
            <OrderHistory orders={orders} isLoading={isLoading}/>
            <Footer />
      </div>
    );
};

export default Page;