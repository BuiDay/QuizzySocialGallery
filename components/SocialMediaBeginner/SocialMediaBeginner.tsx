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

import Image1 from "@/public/products/social-media-beginner/Social Media Beginner.png"

import Image2 from "@/public/products/social-media-beginner/chuong1.png"
import Image21 from "@/public/products/social-media-beginner/chuong1.1.png"
import Image3 from "@/public/products/social-media-beginner/chuong2.png"
import Image4 from "@/public/products/social-media-beginner/chuong3.png"
import Image5 from "@/public/products/social-media-beginner/chuong4.png"
import Image6 from "@/public/products/social-media-beginner/chuong5.png"
import Image7 from "@/public/products/social-media-beginner/chuong6.png"

import { Crimson_Pro } from "next/font/google";
const CrimsonPro = Crimson_Pro({
    subsets: ["latin"],
    variable: '--font-CrimsonPro',
    weight: ["400", "500", "600", "700", "800", "900"]
})

const SocialMediaBeginner = () => {
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
                    <h2 className={`md:text-[40px] text-[24px] font-extrabold text-[#d72483] uppercase md:text-justify md:block hidden ${CrimsonPro.className}`}> SOCIAL MEDIA BEGINNER WORKBOOK</h2>
                    <h2 className={`md:text-[34px] text-[24px] font-extrabold text-[#d72483] uppercase text-center md:hidden block ${CrimsonPro.className}`}> SOCIAL MEDIA BEGINNER WORKBOOK</h2>
                    <div className="flex xl:flex-row flex-col mt-20 w-full justify-center  xl:gap-[100px] gap-[20px]">
                        <div className="">
                            <p className='py-5 font-bold'>Chào mọi người lại là mình Quizzy đây,</p>
                            <p className='py-2 text-justify'>Sau hơn 4 năm làm Social Media Marketing đây là một khoảng thời gian không dài cũng không ngắn nhưng đã giúp mình có rất nhiều trải nghiệm khác nhau về hành trình làm Marketing. Một điều mình nhận ra trong suốt quá trình này chính là:</p>
                            <p className='py-5 text-justify font-bold'>Marketing không chỉ dành cho dân chuyên. </p>
                            <p className='py-2 text-justify'>Ngày nay, rất nhiều bạn trẻ, thậm chí cả những anh chị đã có kinh nghiệm ở ngành khác, đều muốn tìm hiểu thêm về Social Media Marketing để phục vụ công việc kinh doanh cá nhân hoặc phát triển bản thân.</p>
                            <p className='py-2 text-justify'>Và ngoài ra cũng rất nhiều bạn muốn tìm hiểu về lĩnh vực này nhưng vẫn còn chần chừ vì nhiều lý do, không biết nên đầu tư một khóa học chính thức hay không, sợ không theo kịp tiến độ lớp học, hoặc đơn giản là chưa sẵn sàng học vì chưa biết bản thân có hợp hay không.</p>
                            <p className='py-2 text-center'>Chính vì vậy, mình đã tạo ra một giải pháp tối ưu hơn:</p>
                            <h2 className={`text-[#d72483] text-center text-[34px] font-bold ${CrimsonPro.className}`}>Social Media Beginner WORKBOOK </h2>
                            <p className='py-2 text-justify'>Đây là lựa chọn hoàn hảo dành cho những ai muốn tự học một cách linh hoạt và vẫn phân vân rất nhiều lý do khác nhau.</p>
                        </div>
                        <div className="">
                            <div className="border-[2px] border-[#d72483] pb-6">
                                <div className="">
                                    <Image src={Image1} alt="SOCIAL MEDIA BUNDLES" className="xl:max-w-[450px] max-w-[350px] m-auto" />
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <p className="md:text-[28px] text-[20px] font-bold">Giá chỉ</p>
                                    <del className='md:text-[20px] text-[16px] text-[#d72483]/50 text-center font-semibold'>1.299.000 đồng</del>
                                    <h2 className="md:text-[28px] text-[20px] font-bold text-[#d72483]">799.000 đồng</h2>

                                </div>
                            </div>
                            <div className="p-3 bg-[#d72483] w-fit m-auto mt-4 rounded-2xl cursor-pointer" onClick={() => handleAddCart()}>
                                <p className=" text-white font-bold">MUA NGAY</p>
                            </div>
                            <p className="text-center mt-3">*Áp dụng giảm 30% cho 30 bạn đăng ký nhanh nhất</p>
                        </div>

                    </div>
                    <div className='md:text-[20px] text-[16px] w-full mt-[50px]'>
                        <div className="p-10 max-w-[800px] border-[2px] border-[#5c43a3] rounded-3xl m-auto border-dashed bg-[#5c43a3]/[0.1]">
                            <h3 className="text-[#d72483] font-bold">Ebook này sẽ giúp bạn:</h3>
                            <ul className="pl-[30px] list-disc">
                                <li><strong>Tiếp cận kiến thức nền tảng của Social Media Marketing</strong> theo cách đơn giản, dễ hiểu nhất</li>
                                <li><strong>Đọc và xem lại bất cứ lúc nào,</strong> thuận tiện cho việc học tập và nâng cao kỹ năng chuyên môn</li>
                                <li><strong>Cung cấp lộ trình từ nền tảng đến chuyên sâu,</strong> giúp các bạn mới bắt đầu hoặc đang hứng thú với lĩnh vực này có cái nhìn rõ ràng hơn về ngành</li>
                                <li><strong>Có được góc nhìn thực tế trong thị trường Social Media Marketing hiện tại,</strong> áp dụng ngay vào thực tế doanh nghiệp và công việc</li>
                            </ul>
                        </div>
                    </div>

                    <div className="p-3 bg-[#5c43a3] w-fit m-auto mt-4 rounded-2xl cursor-pointer" onClick={() => handleAddCart()}>
                        <p className=" text-white font-bold">MÌNH MUỐN MUA NGAY BỘ TÀI LIỆU NÀY</p>
                    </div>

                    <div className="py-4 flex mt-12">
                        <div className="w-[50%] justify-items-center">
                            <Image src={Image2} className="max-w-[250px] border-[2px] border-dashed border-[#d72483] rounded-3xl p-1" alt=""></Image>
                        </div>
                        <p className="w-[50%]">Chỉ với cuốn ebook này sẽ giúp bạn hiểu rõ <strong>bức tranh tổng thể của ngành,</strong> từ những khái niệm nền tảng đến cách áp dụng thực tế để xây dựng và quản lý một chiến lược social hiệu quả.
                            Dưới đây là những gì bạn sẽ khám phá trong từng chương:</p>

                    </div>

                    <div className="py-4 flex">
                        <p className="w-[50%]"><strong>Chương 1: Giới thiệu về Social Media Marketing,</strong> chương này sẽ giúp bạn nắm được bức tranh toàn cảnh của Social Media Marketing và hiểu vì sao đây là “vũ khí” không thể thiếu trong mọi chiến lược truyền thông hiện đại.</p>
                        <div className="w-[50%] justify-items-center" >
                            <Image src={Image21} className="max-w-[400px] border-[2px] border-dashed border-[#d72483] rounded-3xl p-1" alt=""></Image>
                        </div>
                    </div>

                    <div className="py-4 flex">
                        <div className="w-[50%] justify-items-center" >
                            <Image src={Image3} className="max-w-[450px] border-[2px] border-dashed border-[#d72483] rounded-3xl p-1" alt=""></Image>
                        </div>
                        <p className="w-[50%]"><strong>Chương 2: Scope of Work trong Social Media,</strong> giới thiệu các nội dung trọng tâm về phạm vi công việc (scope of work) của người làm truyền thông mạng xã hội ở cấp độ mới bắt đầu.</p>
                    </div>

                    <div className="py-4 flex">
                        <p className="w-[50%]"><strong>Chương 3: Cơ bản về content pillar và target audience,</strong> bạn sẽ được làm quen với hai yếu tố nền tảng giúp xây dựng nội dung hiệu quả và có chiến lược: content pillar các trụ cột nội dung thể hiện rõ màu sắc và giá trị của thương hiệu, và target audience nhóm người mà thương hiệu muốn tiếp cận và kết nối một cách rõ ràng nhất.</p>
                        <div className="w-[50%] justify-items-center" >
                            <Image src={Image4} className="max-w-[450px] border-[2px] border-dashed border-[#d72483] rounded-3xl p-1" alt=""></Image>
                        </div>
                    </div>

                    <div className="py-4 flex">
                        <div className="w-[50%] justify-items-center" >
                            <Image src={Image5} className="max-w-[350px] border-[2px] border-dashed border-[#d72483] rounded-3xl p-1" alt=""></Image>
                        </div>
                        <p className="w-[50%] "><strong>Chương 4: Gợi ý quy trình lập chiến lược Social Media Marketing,</strong>  giúp bạn hình dung rõ ràng quy trình từng bước để xây dựng một chiến lược social media bài bản, từ xác định mục tiêu, phân tích đối tượng mục tiêu, lựa chọn kênh phù hợp, xây dựng nội dung đến đo lường hiệu quả. </p>
                    </div>


                    <div className="py-4 flex">

                        <p className="w-[50%] "><strong>Chương 5: Social Media Metrics & KPIS,</strong> giúp bạn hiểu rõ nội dung mình làm có đang “chạy tốt” hay không. Từ lượt tiếp cận, tương tác, tỉ lệ chuyển đổi đến mức độ giữ chân người xem – bạn sẽ học cách đọc, phân tích và sử dụng các số liệu đúng cách để đánh giá hiệu quả chiến dịch. </p>
                        <div className="w-[50%] justify-items-center" >
                            <Image src={Image6} className="max-w-[400px] border-[2px] border-dashed border-[#d72483] rounded-3xl p-1" alt=""></Image>
                        </div>
                    </div>

                    <div className="py-4 flex">
                    <div className="w-[50%] justify-items-center" >
                            <Image src={Image7} className="max-w-[450px] border-[2px] border-dashed border-[#d72483] rounded-3xl p-3" alt=""></Image>
                        </div>
                        <p className="w-[50%]"><strong>Chương 6: Lập kế hoạch nội dung Social Media cho 1 tuần,</strong> cách lên kế hoạch nội dung social media theo tuần một cách logic, sáng tạo và phù hợp với mục tiêu truyền thông.</p>
                       
                    </div>


                    <div className="mt-10 p-10 max-w-[1000px] border-[2px] border-[#d72483] rounded-3xl m-auto border-dashed bg-[#f8e1ff]">
                        <p className="py-2"> Sau khi hoàn thành Ebook, bạn sẽ hiểu được <strong>phạm vi công việc của ngành Social Media Marketing,</strong> tự tin lựa chọn Social Media như 1 công việc chuyên sâu của bạn.</p>

                        <p className="py-2">Đồng thời, bạn có thể biết được quy trình lập chiến lược Social Media một cách bài bản, phân tích hiệu quả qua các chỉ số quan trọn và lên kế hoạch nội dung theo tuần một cách hợp lý, sáng tạo và bám sát mục tiêu truyền thông nhất.</p>

                        <p className="py-2">Nếu bạn quá bận rộn hay chỉ đơn giản là mong muốn tìm ebook để đọc về Social Media Marketing và có thể áp dụng nó cho cả đề thì đây chính là tín hiệu cho bạn đó.</p>

                        <p className="py-2 text-center font-bold italic"> Không cần chờ đợi, chỉ cần mở ebook là bạn có thể xem được ngay!</p>
                    </div>

                    <div className="py-3 px-5 bg-[#5c43a3] w-fit m-auto mt-10 rounded-2xl cursor-pointer" onClick={() => handleAddCart()}>
                        <p className=" text-white font-bold">BẤM VÀO ĐỂ MUA NGAY</p>
                    </div>
                </div>
            </motion.div>

        </>

    );
};

export default SocialMediaBeginner;
