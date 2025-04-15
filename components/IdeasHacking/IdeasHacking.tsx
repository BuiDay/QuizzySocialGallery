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

import Image1 from "@/public/products/ideas-hacking/Ideashacking.png"

import Image2 from "@/public/products/ideas-hacking/chuong1.png"
import Image3 from "@/public/products/ideas-hacking/chuong2.png"
import Image4 from "@/public/products/ideas-hacking/chuong3.png"
import Image5 from "@/public/products/ideas-hacking/chuong4.png"
import Image6 from "@/public/products/ideas-hacking/chuong5.png"
import Image7 from "@/public/products/ideas-hacking/chuong6.png"
import Image8 from "@/public/products/ideas-hacking/chuong7.png"

import { Crimson_Pro } from "next/font/google";
const CrimsonPro = Crimson_Pro({
    subsets: ["latin"],
    variable: '--font-CrimsonPro',
    weight: ["400", "500", "600", "700", "800", "900"]
})

const IdeasHacking = () => {
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
            {
                openCart && <Cart open={openCart} setOpen={setOpenCart} cart={product} />
            }
            {isModalNeedLogin && (
                <ModalNeedLogin open={isModalNeedLogin} setOpen={setOpenModalLogin} />
            )}
            <motion.div className='w-full min-h-screen h-full flex justify-center items-center xl:pt-[150px] pt-[150px] text-[#5c43a3] md:text-[18px] text-[16px] text-justify'
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ ease: "easeOut", duration: 0.7, delay: 1 }}>
                <div className='w-full h-full flex flex-col justify-center items-center container m-auto'>
                    {/* <h1 className='md:text-[34px] text-[24px] font-extrabold'>Bộ tài liệu </h1> */}
                    <h2 className={`md:text-[40px] text-[24px] font-extrabold text-[#d72483] uppercase md:text-justify md:block hidden ${CrimsonPro.className}`}> TIKTOK IDEAS HACKING </h2>
                    <h2 className={`md:text-[34px] text-[24px] font-extrabold text-[#d72483] uppercase text-center md:hidden block ${CrimsonPro.className}`}> TIKTOK IDEAS HACKING </h2>
                    <div className="flex xl:flex-row flex-col mt-20 w-full justify-center  xl:gap-[100px] gap-[20px]">
                        <div className="">
                            <p className='py-5'>Nếu bạn đang làm sáng tạo nội dung, chắc chắn có một nền tảng bạn không thể bỏ qua không xài đó chính là <span className="text-[#d72483] font-bold">TikTok</span>.</p>
                            <p className='py-2 text-justify'>Không giống như YouTube trả tiền theo lượt xem, TikTok lại là cánh cửa giúp hàng nghìn người kiếm tiền từ kinh doanh, affiliate, livestream bán hàng hay xây dựng thương hiệu cá nhân. Nhiều người từng thất nghiệp hoặc gặp khó khăn cũng đã thay đổi cuộc sống nhờ nền tảng này.</p>
                            <p className='py-5 text-justify '>Đương nhiên nền tảng này <span className="text-[#d72483]  font-bold">không chỉ hot ở hiện tại,</span> trong tương lai, sẽ còn phát triển mạnh mẽ hơn nữa. Nhưng câu hỏi đặt ra là:</p>
                            <p className="py-2 text-center text-[#d72483]  font-bold">Làm sao để liên tục có ý tưởng mới và tận dụng TikTok một cách hiệu quả? Làm sao đề xây kênh và giữ vững một cộng đồng lâu dài?</p>
                            <p className="py-2">Đây là một điều khá là khó khăn so với nhiều bạn nhưng nếu bạn cũng đang loay hoay rất nhiều về vấn đề này mình có cách khắc phục đây đó chính là</p>
                            <p className="py-2">Ebook &quot;Ideas Hacking&quot; chính là câu trả lời. </p>
                        </div>
                        <div className="">
                            <div className="border-[2px] border-[#d72483] border-dashed rounded-3xl overflow-hidden pb-6">
                                <div className="">
                                    <Image src={Image1} alt="SOCIAL MEDIA BUNDLES" className="xl:max-w-[450px] max-w-[350px] m-auto" />
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <p className="md:text-[28px] text-[20px] font-bold">Giá chỉ</p>
                                    <del className='md:text-[20px] text-[16px] text-[#d72483]/50 text-center font-semibold'>999.000 đồng</del>
                                    <h2 className="md:text-[28px] text-[20px] font-bold text-[#d72483]">599.000 đồng</h2>

                                </div>
                            </div>
                            <div className="p-3 bg-[#d72483] w-fit m-auto mt-4 rounded-2xl cursor-pointer" onClick={() => handleAddCart()}>
                                <p className=" text-white font-bold text-[16px]">MUA NGAY</p>
                            </div>
                            <p className="text-center mt-3 text-[16px]">*Áp dụng giảm 30% cho 30 bạn đăng ký nhanh nhất</p>
                        </div>

                    </div>
                    <div className='md:text-[20px] text-[16px] w-full mt-[50px]'>
                        <div className="p-10 max-w-[800px] border-[2px] border-[#5c43a3] rounded-3xl m-auto border-dashed bg-[#5c43a3]/[0.1]">
                            <h3 className="text-[#d72483] font-bold">Trong cuốn ebook này, mình sẽ giúp bạn:</h3>
                            <ul className="pl-[30px] list-disc">
                                <li>Hiểu cách TikTok hoạt động để không bị cuốn vào thuật toán một cách thụ động.</li>
                                <li>Có sẵn bộ template các câu hook và template fill nội dung.</li>
                                <li>Biết cách &quot;hack&quot; ý tưởng nội dung để không bao giờ cạn ý tưởng</li>
                                <li>Tận dụng TikTok để tạo ra cơ hội kinh doanh, hợp tác và kiếm tiền</li>
                            </ul>
                        </div>
                    </div>

                    <div className="py-3 px-5 bg-[#5c43a3] w-fit m-auto mt-10 rounded-2xl cursor-pointer" onClick={() => handleAddCart()}>
                        <p className=" text-white font-bold">MÌNH MUỐN MUA NGAY BỘ TÀI LIỆU NÀY</p>
                    </div>

                    <p className="pt-10">Mình là một người xây kênh đã lâu không chỉ cho bản thân mà còn cho rất nhiều khách hàng. Trong suốt quá trình đó, mình đã thử nghiệm, điều chỉnh và rút ra những bài học quan trọng về cách xây dựng một kênh thành công. <span className="text-[#d72483] font-bold">Ebook này chính là những gì mình đúc kết từ những kinh nghiệm đó –</span> giúp bạn tối ưu thời gian, tránh những sai lầm thường gặp và có một lộ trình rõ ràng để phát triển kênh hiệu quả.</p>
                    <p className="pb-2 pt-10 text-[#d72483] font-bold text-center text-[24px]">Bên trong Ebook này, bạn sẽ có những gì là hành trang?</p>
                    <div className="py-4 flex mt-12">
                        <p className="w-[50%]"><strong>Chương 1: Tiktok tại sao đây là nền tảng số 1, </strong>giải thích vì sao TikTok là nền tảng tối ưu để lan toả ý tưởng: thuật toán mạnh, nội dung dễ viral, ai cũng có thể bắt trend và tạo trend.</p>
                        <div className="w-[50%] justify-items-center">
                            <Image src={Image2} className="max-w-[250px] border-[2px] border-dashed border-[#d72483] rounded-3xl p-1" alt=""></Image>
                        </div>
                    </div>

                    <div className="py-4 flex">
                        <div className="w-[50%] justify-items-center" >
                            <Image src={Image3} className="max-w-[450px] border-[2px] border-dashed border-[#d72483] rounded-3xl p-1" alt=""></Image>
                        </div>
                        <p className="w-[50%]"><strong>Chương 2: Ideas Hacking:</strong> Khai thác ý tưởng sáng tạo, chọn lọc và “bẻ khóa” những ý tưởng sáng tạo có tiềm năng lan tỏa. Người học sẽ được giới thiệu các phương pháp quan sát xu hướng, tái sử dụng nội dung thông minh</p>
                    </div>

                    <div className="py-4 flex">
                        <p className="w-[50%]"><strong>Chương 3: Công thức Hook - Body - CTA tối ưu,</strong> biết được cách giữ người xem ở lại chỉ trong vài giây đầu, truyền tải thông điệp ngắn gọn mà đủ ý, đồng thời hướng người xem thực hiện hành động mong muốn như thả tim, chia sẻ hay mua hàng.</p>
                        <div className="w-[50%] justify-items-center" >
                            <Image src={Image4} className="max-w-[450px] border-[2px] border-dashed border-[#d72483] rounded-3xl p-1" alt=""></Image>
                        </div>
                    </div>

                    <div className="py-4 flex">
                        <div className="w-[50%] justify-items-center" >
                            <Image src={Image5} className="max-w-[450px] border-[2px] border-dashed border-[#d72483] rounded-3xl p-1" alt=""></Image>
                        </div>
                        <p className="w-[50%] "><strong>Chương 4:  Xây dựng concept kênh TikTok (Chiến lược dài hạn), </strong>  giúp bạn xác định hướng đi lâu dài cho kênh TikTok, từ việc chọn concept nội dung phù hợp với cá tính hoặc thương hiệu, đến xây dựng “tông giọng” nhất quán và phát triển các series video có thể mở rộng.</p>
                    </div>

                    <div className="py-4 flex">
                        <p className="w-[50%]"><strong>Chương 5: Giải pháp khi gặp tình trạng bí ý tưởng, </strong>biết được cách khai thác xu hướng, quan sát từ người dùng, tái sử dụng nội dung cũ và ứng dụng các công cụ hỗ trợ sáng tạo</p>
                        <div className="w-[50%] justify-items-center" >
                            <Image src={Image6} className="max-w-[450px] border-[2px] border-dashed border-[#d72483] rounded-3xl p-3" alt=""></Image>
                        </div>
                    </div>

                    <div className="py-4 flex">
                        <div className="w-[50%] justify-items-center" >
                            <Image src={Image7} className="max-w-[450px] border-[2px] border-dashed border-[#d72483] rounded-3xl p-1" alt=""></Image>
                        </div>
                        <p className="w-[50%] "><strong>Chương 6: 30+ TikTok Scripts mẫu cho 10 ngành hàng, </strong>giúp bạn tiết kiệm thời gian brainstorming và triển khai nội dung nhanh chóng.</p>
                    </div>

                    <div className="py-4 flex">
                        <p className="w-[50%]"><strong>Chương 7:  Đo lường hiệu quả & Tối ưu hóa kênh TikTok, </strong>hướng dẫn cách đọc hiểu các chỉ số quan trọng trên TikTok như lượt xem, tỷ lệ giữ chân, tương tác và chuyển đổi, từ đó đánh giá hiệu quả nội dung một cách rõ ràng,..</p>
                        <div className="w-[50%] justify-items-center" >
                            <Image src={Image8} className="max-w-[450px] border-[2px] border-dashed border-[#d72483] rounded-3xl p-3" alt=""></Image>
                        </div>
                    </div>

                    <div className="py-4 w-full">
                        <p className="text-left"><strong>Chương 8:  Resource Library, </strong>tổng hợp các tài nguyên hữu ích giúp bạn tiết kiệm thời gian và tối ưu quy trình làm nội dung TikTok. </p>
                    </div>

                    <div className="mt-10 p-10 max-w-[1000px] border-[2px] border-[#d72483] rounded-3xl m-auto border-dashed bg-[#f8e1ff]">
                        <p className="py-2">Sau khi hoàn thành toàn bộ chương, bạn sẽ hiểu rõ vì sao nền tảng này là công cụ hàng đầu để lan tỏa ý tưởng sáng tạo, đồng thời biết cách khai thác xu hướng, xây dựng concept kênh dài hạn và triển khai nội dung hiệu quả theo công thức Hook – Body – CTA. </p>

                        <p className="py-2">Bên cạnh đó, bạn sẽ được trang bị kỹ năng vượt qua tình trạng bí ý tưởng, sử dụng thành thạo các mẫu kịch bản theo ngành hàng, biết cách đo lường hiệu quả và tối ưu hóa hoạt động của kênh dựa trên dữ liệu,..</p>

                        <p className="py-2">Toàn bộ những chương đều là những biên soạn kỹ lưỡng kết hợp kiến thức nền tảng cũng như là kết hợp với kinh nghiệm bên ngoài của mình. Nếu bạn muốn xây kênh TikTok bài bản, đây chính là cuốn ebook bạn cần đó</p>
                    </div>

                    <div className="py-3 px-5 bg-[#5c43a3] w-fit m-auto mt-10 rounded-2xl cursor-pointer" onClick={() => handleAddCart()}>
                        <p className=" text-white font-bold">BẤM VÀO ĐỂ MUA NGAY</p>
                    </div>
                </div>
            </motion.div>

        </>

    );
};

export default IdeasHacking;
