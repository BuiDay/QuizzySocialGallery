"use client"
import CheckoutPage from "@/components/CheckoutPage/CheckoutPage";
const Header = dynamic(() => import('@/components/layout/Header'), { ssr: false })
import { useCheckPaymentLinkInfomationMutation } from "@/redux/features/checkout/checkoutApi";
import { RootState } from "@/redux/store";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
    const useSearch = useSearchParams()
    const [checkPaymentLinkInfomation, {isLoading}] = useCheckPaymentLinkInfomationMutation()
    const {paymentLinkInfomation} = useSelector((state: RootState) => state.checkout);

    useEffect(()=>{
        const paymentId = useSearch.get("orderCode")
        const getData = async () => checkPaymentLinkInfomation({paymentId})
        getData()
    },[])

    return (
        <div>
            <Header />
            <div className="min-h-screen w-full flex flex-col justify-center items-center">
                {
                    !isLoading && paymentLinkInfomation && <CheckoutPage paymentLinkInfomation={paymentLinkInfomation}/>
                }
            </div>
        </div>
    );
};

const Page = () => {
    return (
      // You could have a loading skeleton as the `fallback` too
      <Suspense>
        <Checkout />
      </Suspense>
    )
  }

export default Page;
