"use client";
import React, { useEffect, useRef, useState } from "react";
import Button from "../Common/Button/Button";
import { Crimson_Pro } from "next/font/google";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Quizzy_3 from "../../public/quizzy_3.webp"
import Quizzy from "../../public/quizzy_4.jpg"
import Quizzy_5 from "../../public/quizzy_5.jpg"
import Quizzy_6 from "../../public/quizzy_6.jpg"
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useCreateContactUsMutation } from "@/redux/features/contactUs/contactUsApi";
import toast from "react-hot-toast";

const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
const CrimsonPro = Crimson_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"], // thêm dòng này để hỗ trợ in nghiêng
});

const Hero = () => {
  const pathname = usePathname();


  const [isShowInput, setIsShowInput] = useState<boolean>(false)
  const [email, setEmail] = useState<string>("")

  const [createContactUs, { isSuccess, isError, isLoading, error }] = useCreateContactUsMutation();

  const handleRegisterEmail = () => {
    const checkMail = email.length === 0
    if (checkMail) {
      toast.error('Vui lòng điền email!')
      return
    }
    const checkInvalidEmail = email.match(emailRegex)
    if (!checkInvalidEmail) {
      toast.error('Email không hợp lệ!')
      return
    }
    createContactUs({ email })
  }

  useEffect(() => {
    if (isLoading) {
      toast.loading('Đang chạy')
    }
    if (isSuccess) {
      toast.success('Bạn đã đăng kí thành công !')
      toast.dismiss()
    }

    if (isError) {
      const { data } = error as any
      toast.dismiss()
      toast.error(data.message ? data.message : 'Đã có lỗi! Vui lòng thử lại.')
    }
  }, [isLoading, isSuccess, isError])

  const inputReference = useRef() as any;
  const handleShowInput = () => {
    setIsShowInput(true)
    setTimeout(() => {
      inputReference.current.focus();
    }, 500)
  }

  let hasVisitedPage: any
  if (typeof window !== 'undefined') {
    hasVisitedPage = sessionStorage.getItem(`visited_${pathname}`)
  }

  useEffect(() => {
    if (hasVisitedPage) {
    } else {
      sessionStorage.setItem(`visited_${pathname}`, 'true')
    }
  }, [hasVisitedPage, pathname])


  return (
    <div className="flex md:flex-row flex-col items-center justify-center container m-auto min-h-[100vh] h-full md:gap-[50px] gap-[30px]">
      <div className="md:w-[50%] w-full z-20 md:pt-10 pt-0">
        <div className="flex flex-col justify-center h-full gap-4">
          {/* <AnimatePresence initial={!hasVisitedPage}> */}
         
            {/* <motion.h1
              key={pathname}
              className="lg:text-[44px] md:text-[32px] text-[28px] font-black gradient-title"
              animate={{ height: "auto", opacity: 1 }}
              initial={{ height: 100, opacity: 0 }}
              transition={{ ease: "easeOut", duration: 0.7, delay: 1 }}
            >
              CHÀO MỪNG BẠN ĐẾN VỚI QUIZZY SOCIAL GALLERY
            </motion.h1> */}
            <motion.div
              className="w-full flex items-center justify-center h-full md:hidden"
              animate={{  opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ ease: "easeOut", duration: 0.7}}
            >
              <div
                className="h-[260px] w-[260px] gradient-bg flex items-center justify-center rounded-full"
              >
                <div
                  className="h-[250px] w-[250px] overflow-hidden rounded-full"
                >
                  <Image className="h-full object-cover object-top" src={Quizzy_3} alt="quizzy" width={500} height={500} />
                </div>
              </div>
            </motion.div>
            <motion.h2
              className={`lg:text-[64px] md:text-[38px] text-[24px] italic text-[#d72483] ${CrimsonPro.className}`}
              animate={{  opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ ease: "easeOut", duration: 0.5}}
            >
              <span className="font-bold">Chào bạn,</span> <br /> Mình là Quizzy
            </motion.h2>

            <motion.div
              className="flex items-center gap-5"
              animate={{opacity: 1 }}
              initial={{  opacity: 0 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
            >
              <div className="md:w-[3 0%] w-[20%]">
                <div className="h-[3px] bg-[#d72483]"></div>
              </div>
              <div>
                <span className="text-[#d72483] font-bold uppercase lg:text-[24px] md:text-[16px] text-[14px]">
                  Social Media Manager
                </span>
              </div>
            </motion.div>
            <motion.div
              animate={{opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ ease: "easeOut", duration:0.7 }}
              className=" text-[#5c43a3] text-justify text-[20px]"
            >
              <span className="uppercase font-bold">QUIZZY SOCIAL GALLERY</span> -
              là nơi mình chia sẻ hết tất cả kiến thức & kinh nghiệm thực chiến
              trong lĩnh vực Social Media Marketing thông qua các sản phẩm số được
              biên soạn cực kỳ kỹ lưỡng giúp bạn bổ trợ cho công việc và{" "}
              <span className="text-[#d72483] font-bold">
                {" "}
                kiếm 20-100 triệu/tháng.
              </span>
            </motion.div>
            <motion.div
              animate={{  opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ ease: "easeOut", duration: 0.7}}
              className="flex md:flex-row flex-col gap-5 mt-5"
            >
              {/* <Link href={"/products"}>
                <Button
                  title="Xem các sản phẩm ngay"
                  background="gradient-bg"
                  color="text-white"
                  icon={ShareIcon}
                />
              </Link> */}
              <Link href={"/products"}>
                <Button
                  title="Tìm hiểu các tài liệu của mình"
                  background="bg-[#d72483]"
                  color="text-white"
                />
              </Link>


              {
                !isShowInput ?
                  <div className="rounded-xl px-[1px] py-[1px]" >
                    <Button
                      onClick={() => handleShowInput()}
                      title="Nhận thông tin mới nhất từ Quizzy"
                      background="bg-[#5c43a3]"
                      color="text-white"
                    />
                  </div>
                  : <motion.div className='h-[40px] rounded-xl p-[1px]'
                    initial={{  opacity: 0 }}
                    animate={{opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 0.7}}>
                    <div className='w-full h-full bg-[#5c43a3] rounded-xl flex items-center p-[2px]'>
                      <input onChange={(event) => setEmail(event.target.value)} ref={inputReference} type='text' placeholder='Mail của bạn' className='h-full rounded-xl w-full bg-transparent text-white text-[14px] pl-[30px] outline-none' />
                      <div onClick={handleRegisterEmail} className='bg-white h-full rounded-xl w-[150px] text-[14px] flex items-center justify-center cursor-pointer btn'>
                        <span className='font-semibold text-[#5c43a3]'>Đăng kí</span>
                      </div>
                    </div>
                  </motion.div>
              }


            </motion.div>
            <motion.div
              animate={{ opacity: 1 }}
              initial={{opacity: 0 }}
              transition={{ ease: "easeOut", duration: 0.5}}
              className="md:flex flex-col gap-3 hidden mt-10"
            >
              <span className="text-[#5c43a3]">Follow me:</span>
              <div className="flex items-center justify-start gap-4">
                <Link
                  href="https://www.tiktok.com/@quizzystudytime?lang=vi-VN"
                  target="_blank"
                  className="flex items-center justify-center p-2 border rounded-full"
                >
                  <FaTiktok color="#5c43a3" />
                </Link>
                <Link
                  href="https://www.facebook.com/quizzystudytime"
                  target="_blank"
                  className="flex items-center justify-center p-2 border rounded-full"
                >
                  <FaFacebookF color="#5c43a3" />
                </Link>
                <Link
                  href="https://www.instagram.com/quizzy.studytime"
                  target="_blank"
                  className="flex items-center justify-center p-2 border rounded-full"
                >
                  <FaInstagram color="#5c43a3" />
                </Link>
              </div>
            </motion.div>
   
        </div>
      </div>
      {/* <AnimatePresence initial={!hasVisitedPage}> */}
      {/* <AnimatePresence>
        <motion.div
          className="md:w-[50%] w-full m-auto z-10 md:block hidden"
          animate={{ y: 0, x: "-50%", opacity: 1 }}
          initial={{ y: "100%", x: "-50%", opacity: 0 }}
          transition={{ ease: "easeOut", duration: 0.8, type: "keyframes" }}
        >
          <motion.div
            className="w-full flex items-center justify-center h-full "
            animate={{ y: 0, x: "60%" }}
            transition={{ ease: "easeOut", duration: 0.8, delay: 1, type: "keyframes" }}
          >
            <div
              className="h-[510px] w-[360px] gradient-bg flex items-center justify-center"
              style={{ borderRadius: "400px 300px 400px 200px" }}
            >
              <div
                className="h-[500px] w-[350px] overflow-hidden flex items-center justify-center"
                style={{ borderRadius: "400px 300px 400px 200px" }}
              >
                <Image className="h-full" src={Quizzy} alt="quizzy" width={500} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence> */}
     <motion.div className="flex md:w-[50%] max-h-[600px] overflow-hidden gap-5 mt-16" 
        animate={{  opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.7}}>
        <div className="w-[60%]">
          <Image src={Quizzy_5} alt="" className="object-cover h-full"></Image>
        </div>
        <div className="w-[40%] flex flex-col gap-5 max-h-[600px]">
          <div className="h-[50%]">
            <Image src={Quizzy_6} className="object-cover h-full"alt=""></Image>
          </div>
          <div className="h-[50%]">
            <Image src={Quizzy} alt="" className="object-cover h-full" ></Image>
          </div>
        </div>
     </motion.div>
    </div>
  );
};

export default Hero;
