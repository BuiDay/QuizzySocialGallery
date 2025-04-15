"use client"
import Footer from '@/components/layout/Footer';
const Header = dynamic(() => import('@/components/layout/Header'), { ssr: false })
import ResetPassword from '@/components/ResetPassword/ResetPassword';
import Heading from '@/lib/Heading';
import React, { Suspense } from 'react';
import { motion } from "framer-motion"
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';

const ResetPasswordPage = () => {
    const search = useSearchParams()
    const token = search.get("token")
    return (
        <div>
            <Heading
                title={'Reset password | Quizzy Social Gallery'}
            />
            <Header />

            <div className='min-h-screen flex flex-col justify-center items-center'>
                <motion.div className='w-full'
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ ease: "easeOut", duration: 0.7, delay: 1 }}>
                    <div className='w-full h-full flex flex-col justify-center items-center'>
                        <h1 className='text-[34px] font-extrabold title gradient-title'>Đặt lại mặt khẩu</h1>
                    </div>
                </motion.div>
                <ResetPassword token={token || ""}/>
            </div>
            <Footer />
        </div>
    );
};

const Page = () => {
    return (
      // You could have a loading skeleton as the `fallback` too
      <Suspense>
        <ResetPasswordPage />
      </Suspense>
    )
  }


export default Page;