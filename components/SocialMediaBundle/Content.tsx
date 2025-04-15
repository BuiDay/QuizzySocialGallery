"use client"
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import UserAuth from "@/hook/userAuth";
import Cart from "../Common/Cart/Cart";
import ModalNeedLogin from "../Common/ModalNeedLogin/ModalNeedLogin";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

import Image1 from "@/public/1.webp"
import DiscountQuantity from "../Products/DiscountQuantity ";

import Bundle1 from "@/public/products/bundle/bundle-1.webp"
import Bundle2 from "@/public/products/bundle/bundle-2.webp"
import Bundle3 from "@/public/products/bundle/bundle-3.webp"
import Bundle4 from "@/public/products/bundle/bundle-4.webp"
import Bundle5 from "@/public/products/bundle/bundle-5.webp"
import Bundle6 from "@/public/products/bundle/bundle-6.webp"
import Bundle7 from "@/public/products/bundle/bundle-7.webp"
import Bundle8 from "@/public/products/bundle/bundle-8.webp"
import Bundle9 from "@/public/products/bundle/bundle-9.webp"
import Bundle10 from "@/public/products/bundle/bundle-10.webp"
import Bundle11 from "@/public/products/bundle/bundle-11.webp"
import Bundle12 from "@/public/products/bundle/bundle-12.webp"
import { Crimson_Pro } from "next/font/google";
const CrimsonPro = Crimson_Pro({
    subsets: ["latin"],
    variable: '--font-CrimsonPro',
    weight: ["400", "500", "600", "700", "800", "900"]
})
const Content = () => {
    const { product } = useSelector((item: RootState) => item.product)
    const [openCart, setOpenCart] = useState<boolean>(false)
    const idAuthenticated = UserAuth();
    const [isModalNeedLogin, setOpenModalLogin] = useState(false);
    const handleAddCart = () => {
        if (!idAuthenticated) {
            setOpenModalLogin(true);
            return;
        }
        setOpenCart(true)
    };

    return (
        <>
        
            <motion.div className='w-full min-h-screen h-full flex justify-center items-center xl:pt-[150px] pt-[150px] text-[#5c43a3]'
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ ease: "easeOut", duration: 0.7, delay: 1 }}>
                <div className='w-full h-full flex flex-col justify-center items-center container m-auto text-[18px]'>
                    {/* <h1 className='md:text-[34px] text-[24px] font-extrabold'>Bộ tài liệu </h1> */}
                    <h2 className={`md:text-[40px] text-[24px] font-extrabold text-[#d72483] uppercase md:text-justify md:block hidden ${CrimsonPro.className}`}>BỘ TÀI LIỆU SOCIAL MEDIA BUNDLE</h2>
                    <h2 className={`md:text-[34px] text-[24px] font-extrabold text-[#d72483] uppercase text-center md:hidden block ${CrimsonPro.className}`}>BỘ TÀI LIỆU </h2>
                    <h2 className={`md:text-[34px] text-[24px] font-extrabold text-[#d72483] uppercase text-center md:hidden block ${CrimsonPro.className}`}>SOCIAL MEDIA BUNDLE</h2>
                    <p className="text-[#5c43a3] md:text-[16px] text-[14px] font-bold md:text-justify text-center md:mt-0 mt-5">Bộ tài liệu + template dành cho người làm Social Media Marketing</p>
                    <div className="flex xl:flex-row flex-col mt-20 w-full justify-center items-center xl:gap-[100px] gap-[20px]">
                        <div>
                            <p className='py-2 '>Chào bạn!</p>
                            <p className='py-2 text-justify'>Lại là mình Quizzy đây, Đúng là ai cũng bắt đầu từ đâu đó, và mình cũng không ngoại lệ. Lúc mới vào nghề, mình từng loay hoay đủ kiểu vì không ai hướng dẫn cách thu hút khách hàng, chốt deal hay đọc số liệu, báo cáo chuyên nghiệp.</p>
                            <p className='py-2 text-justify'>Mỗi đêm, mình đều cày nát internet để tìm ý tưởng cho các chiến dịch social media, nhưng càng tìm thì lại càng rối. Tự mày mò, tự học, nhưng vẫn cảm thấy thiếu một lộ trình rõ ràng để đi đúng hướng.</p>
                            <p className='py-2 text-justify'>Chính vì hiểu rõ những khó khăn đó thúc đẩy mình tạo ra</p>
                            <p className='py-2 text-[#d72483] md:text-[16px] text-[14px] font-bold'>SOCIAL MEDIA BUNDLE — bộ tài liệu giúp bạn tiết kiệm thời gian, chuẩn bị đúng trọng tâm và áp dụng ngay vào thực tế.</p>
                            <p className='py-2 text-justify'>Không còn phải mò mẫm từng bước một mất thời gian, công sức hay sợ mình làm sai nữaaa.</p>
                            <p className='py-2 font-bold'>Vậy trong Social Media Bundles sẽ gồm những gì:</p>
                        </div>
                        <div className="">
                            <div className="border-[2px] border-[#d72483] px-3 py-6">
                                <div className="">
                                    <Image src={Image1} alt="SOCIAL MEDIA BUNDLES" className="xl:max-w-[450px] max-w-[350px] m-auto border-white border-[2px] p-5" />
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <p className="md:text-[28px] text-[20px] font-bold">Giá gốc</p>
                                    <del className='md:text-[20px] text-[16px] text-[#d72483]/50 text-center font-semibold'>1.299.000 đồng</del>
                                    <h2 className="md:text-[28px] text-[20px] font-bold text-[#d72483]">599.000 đồng</h2>

                                </div>
                            </div>
                            <div className="p-3 bg-[#d72483] w-fit m-auto mt-4 rounded-2xl cursor-pointer" onClick={() => handleAddCart()}>
                                <p className=" text-white font-bold">MUA NGAY</p>
                            </div>
                        </div>

                    </div>

                    <div className='md:text-[18px] text-[14px] md:w-[100%] w-full mt-[50px] text-left'>

                        <p className='py-2 text-justify'> <strong className="text-[#d72483]">1. Social Media Portfolio - </strong>Không có Portfolio như là ra chiến trường không cầm “súng” vậy đó, với Social Media Bundles, sẽ hướng dẫn bạn xây dựng Portfolio chuyên nghiệp, và đậm chất cá nhân. Điều này sẽ tạo ra điểm nhấn riêng mở rộng cơ hội hợp tác với khách hàng tiềm năng.</p>
                        <div className="my-2 w-[90%] mx-auto">
                            <Image src={Bundle1} alt="SOCIAL MEDIA BUNDLE"></Image>
                        </div>
                        <p className='py-2 text-justify'> <strong className="text-[#d72483] ">2. Social Media Proposal - </strong>Đã thuyết phục được khách hàng nhưng thiếu Proposal là xu lắm đó nhe, với tài liệu này là “chìa khoá vàng” khi muốn chốt đơn với khách. Quizzy đã setup sẵn những đề xuất chuyên nghiệp cộng với bản giá phù hợp cho từng hạng mục hết điều này sẽ giúp bạn dễ dàng thuyết phục được hợp đồng khách hàng hơn một cách suôn sẻ nhất.</p>
                        <div className="my-2 w-[90%] mx-auto">
                            <Image src={Bundle2} alt="SOCIAL MEDIA BUNDLE"></Image>
                        </div>
                        <div className="my-5 max-w-[450px] mx-auto">
                            <Image src={Bundle3} alt="SOCIAL MEDIA BUNDLE"></Image>
                        </div>
                        <div className="xl:max-w-[300px] max-w-[230px] mx-auto bg-[#d72483] my-5 py-2 rounded-2xl">
                            <p className="text-center text-white font-bold text-[14px] ">Kèm theo tài liệu hướng dẫn</p>
                        </div>
                        <p className='py-2 text-justify'> <strong className="text-[#d72483]">3. Social Media Audit - </strong>Mạng xã hội hiện đại biến đổi không ngừng như chong chóng vậy, và muốn bắt kịp xu hướng bạn cần một công cụ đánh giá chuyên nghiệp. Với Social Media Audit, bạn sẽ có cái nhìn toàn diện về hiệu suất kênh của mình. Mình đã chuẩn bị sẵn bộ hướng dẫn phân tích chi tiết, giúp bạn nhanh chóng xác định điểm mạnh, điểm yếu và đưa ra giải pháp cải thiện tốt nhất - biến mỗi tăng cơ hội tăng trưởng kênh cho các khách hàng. </p>
                        <div className="my-2 w-[90%] mx-auto">
                            <Image src={Bundle4} alt="SOCIAL MEDIA BUNDLE"></Image>
                        </div>
                        <div className="my-5 max-w-[450px] mx-auto">
                            <Image src={Bundle5} alt="SOCIAL MEDIA BUNDLE"></Image>
                        </div>
                        <div className="xl:max-w-[300px] max-w-[230px] mx-auto bg-white my-5 py-2 rounded-2xl">
                            <p className="text-center text-black font-bold text-[14px] ">Kèm theo tài liệu hướng dẫn</p>
                        </div>
                        <p className='py-2 text-justify'> <strong className="text-[#d72483] ">4. Social Media Strategy & Social Media Plan - </strong> Làm Social mà thiếu chiến lược hay kế hoạch coi như là mình chưa làm gì luôn rồi. Khi có kế hoạch cụ thể, mọi người sẽ biết khách hàng của mình là ai, họ ở đâu và làm sao để kết nối với họ một cách hiệu quả nhất. Với Social Media Bundles trang bị sẵn cho bạn một kế hoạch chi tiết, từng bước để bạn xây dựng và triển khai chiến lược mạng xã hội hiệu quả, không còn làm việc mông lung! Và ngoài ra đi kèm là mẫu Social Media Plan + Calendar chuyên nghiệp, giúp bạn theo dõi tiến độ công việc, quản lý task của team dễ dàng có thể là từ xa và đảm bảo mọi thứ luôn đi đúng hướng nhất.</p>

                        <div className="mt-10 flex gap-5">
                            <div className="flex-1 flex flex-col gap-5 justify-between">
                                <div>
                                    <Image src={Bundle6} alt="SOCIAL MEDIA BUNDLE"></Image>
                                </div>
                                <div>
                                    <Image src={Bundle8} alt="SOCIAL MEDIA BUNDLE"></Image>
                                </div>
                            </div>

                            <div className="flex-1 flex flex-col gap-5 justify-between">
                                <div>
                                    <Image src={Bundle7} alt="SOCIAL MEDIA BUNDLE"></Image>
                                </div>
                                <div>
                                    <Image src={Bundle9} alt="SOCIAL MEDIA BUNDLE"></Image>
                                </div>
                            </div>
                        </div>

                        <p className='py-2 mt-4 text-justify'> <strong className="text-[#d72483] ">5. Social Media Monthly Report - </strong>Một chiến dịch hiệu quả không chỉ dừng lại ở việc triển khai mà còn phải đo lường và tối ưu liên tục để biết mình yếu điểm nào và mạnh điểm nào. Khi có Monthly Report chính bản thân bạn sẽ là người tìm lỗi sai trong khâu làm việc của mình luôn. Mình sẽ có sẵn template chuyên nghiệp, súc tích, giúp bạn theo dõi hiệu suất và trình bày kết quả một cách thuyết phục. Mọi số liệu đều được tổng hợp rõ ràng, trực quan, giúp bạn dễ dàng chứng minh hiệu quả công việc và tạo niềm tin với khách hàng chuyên nghiệp nhất.</p>
                        <div className="my-2 w-[90%] mx-auto">
                            <Image src={Bundle10} alt="SOCIAL MEDIA BUNDLE"></Image>
                        </div>
                        <div className="my-5 w-[90%] mx-auto">
                            <Image src={Bundle11} alt="SOCIAL MEDIA BUNDLE"></Image>
                        </div>
                        <div className="my-5 max-w-[450px] mx-auto">
                            <Image src={Bundle12} alt="SOCIAL MEDIA BUNDLE"></Image>
                        </div>
                        <div className="xl:max-w-[300px] max-w-[230px] mx-auto bg-white my-5 py-2 rounded-2xl">
                            <p className="text-center text-black font-bold text-[14px] ">Kèm theo tài liệu hướng dẫn</p>
                        </div>

                        <div className="xl:text-center text-justify mt-10">
                            <p className="text-[#d72483]  md:text-[20px] text-[14px] font-bold text-center">Hiện tại có giá siêu ưu đãi cho những bạn nhanh tay </p>
                            <div className="flex md:flex-row flex-col items-center gap-1 justify-center my-2">
                                <div>
                                    <span className="md:text-[20px] text-[14px]">Giá gốc: </span>
                                    <del className='md:text-[20px] text-[14px] text-[#d72483]/[0.5]  text-center font-semibold'>1.299.000 đồng</del>
                                </div>
                                <div>
                                    <span className="md:text-[20px] text-[14px]"> chỉ còn </span>
                                    <span className="md:text-[20px] text-[14px] font-bold text-[#d72483] ">599.000 đồng</span>
                                </div>
                            </div>
                        </div>

                        <div className="py-3 px-5  bg-[#d72483]  m-auto mt-4 rounded-2xl cursor-pointer w-fit" onClick={() => handleAddCart()}>
                            <p className=" text-white font-bold md:text-[20px] text-[12px]">MÌNH MUỐN ĐĂNG KÍ NGAY</p>
                        </div>
                        <p className='py-2 mt-5 text-justify'>Với bộ <strong className="text-[#d72483] ">SOCIAL MEDIA BUNDLE,</strong> coi như bạn đã trang bị full giáp để làm việc với khách hàng một cách chuyên nghiệp rồi đó. Không chỉ đơn thuần là những template có sẵn, mình sẽ hướng dẫn bạn cách sử dụng, diễn giải rõ ràng để bạn hiểu và ứng dụng hiệu quả. Quan trọng nhất, bạn sẽ biết tại sao cần những template này và cách chúng giúp bạn tăng giá trị, chốt deal dễ dàng hơn.</p>
                        <p className='py-2 text-[#d72483] xl:text-center text-justify font-bold'>Và bạn lưu ý, đây là 1 bộ tài liệu chứ không phải khoá học đâu nhá!!!!</p>
                        <p className='py-2 text-[#d72483]  xl:text-center text-justify font-bold'>Trên đây là tất cả mọi thứ bạn cần cho quy trình làm việc với khách hàng, bạn cần phải chuẩn bị kiến thức chuyên môn trước khi bắt đầu!!!</p>
                        <p className='py-2 font-bold'>Đọc đến đây chắc bạn cũng thấy bộ tài liệu này hấp dẫn rùi phớ hơm? </p>
                        <p className='py-2 text-justify text-[#d72483]  font-bold'>Mua một lần, dùng mãi mãi, áp dụng cho nhiều khách hàng khác nhau mà vẫn linh hoạt theo từng dự án. Không chỉ tiết kiệm thời gian, mà còn giúp bạn làm việc chuyên nghiệp hơn, tự tin hơn nữa á! </p>
                        <div className="bg-[#d72483] w-fit m-auto mt-10 text-center">
                            <p className='py-1 px-3 font-bold text-white'>ĐỪNG LO, MÌNH SẼ UPDATE TÀI LIỆU MỖI QUÝ ĐỂ CHẮC CHẮN BẠN ĐƯỢC THỰC HÀNH VỚI TEMPLATE MỚI NHẤT</p>
                        </div>
                        {/* <div className="bg-[#ffcc00] w-fit m-auto md:text-justify text-center">
                            <p className='py-1 px-3 font-bold'> </p>
                        </div> */}
                    </div>
                </div>
            </motion.div>
            <motion.div className="container relative" animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ ease: "easeOut", duration: 0.7, delay: 1 }}>
                <div className="fixed bottom-[40px] right-[40px] text-white z-30" onClick={() => handleAddCart()}>
                    <Button variant={"outline"} className="rounded-full h-[60px] w-[60px] text-wrap bg-transparent pulse">
                        <ShoppingCart size={44} />
                    </Button>
                </div>
                {
                    openCart && <Cart open={openCart} setOpen={setOpenCart} cart={product} />
                }
                {isModalNeedLogin && (
                    <ModalNeedLogin open={isModalNeedLogin} setOpen={setOpenModalLogin} />
                )}
                <div className="mt-5 pb-[100px] ">
                    <div className="mt-10 xl:w-[60%] md:w-[80%] w-full m-auto">
                        <div className="border border-white rounded-xl p-5">
                            <div className="max-w-[300px] m-auto">
                                <Image src={Image1} alt="SOCIAL MEDIA BUNDLES" />
                            </div>
                            <h3 className="mt-4 text-[#5c43a3] font-bold text-center">ĐÂY LÀ TẤT CẢ NHỮNG THỨ BẠN CẦN ĐỂ BẮT ĐẦU HÀNH TRÌNH TRỞ THÀNH MỘT SOCIAL MEDIA MANAGER CHUYÊN NGHIỆP</h3>
                            {
                                product?.discount
                                    ? <div className="text-center">
                                        {/* <p className="mt-4 gradient-title font-bold">Nếu bạn là một trong {product.discount.productCountCurrent}/100 mua đầu tiên, bạn sẽ mua BỘ TÀI LIỆU NÀY CHỈ VỚI GIÁ</p>
                                        {
                                            product?.discount && <DiscountQuantity discount={product?.discount} />
                                        }
                                        {
                                            product?.discount && <p className='text-[12px] text-center'>{`Tổng số ${product?.discount?.productCountCurrent}/${product?.discount?.productCount} người đã mua tài liệu. Sau đó sẽ quay về giá gốc.`}</p>
                                        } */}
                                        <del className='text-[16px] text-[#d72483]/[0.5] text-center font-semibold'>Giá gốc: 1.299.000 đồng</del>
                                        <h2 className="text-[24px] font-bold text-[#d72483]">599.000 đồng</h2>
                                    </div>
                                    : <>
                                        <p className="mt-4 bg-[#d72483] font-bold">Bạn sẽ mua BỘ TÀI LIỆU NÀY CHỈ VỚI GIÁ</p>
                                        <h2 className="text-[24px] font-bold text-[#ffcc00]">1.299.000 đồng</h2>
                                    </>
                            }
                            <div className="p-3 bg-[#d72483] md:w-[50%] w-full m-auto mt-4 rounded-2xl cursor-pointer" onClick={() => handleAddCart()}>
                                <p className=" text-white font-bold text-center md:text-[20px] text-[12px]">BẤM VÀO ĐÂY ĐỂ MUA NGAY</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>

    );
};

export default Content;
