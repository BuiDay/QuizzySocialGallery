"use client"
import HomePage from "@/components/Home/HomePage";
import Footer from "@/components/layout/Footer";
import Heading from "@/lib/Heading";
import dynamic from "next/dynamic";

const Header = dynamic(() => import('@/components/layout/Header'), { ssr: false })
export default function Page() {
  return (
    <> 
    <Heading title={'Quizzy Social Gallery'}/>
      <Header />
      <HomePage />
      <Footer />
    </>

  );
}
