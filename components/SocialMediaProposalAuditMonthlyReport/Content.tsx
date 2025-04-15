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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import Image3 from "@/public/3.webp"
import DiscountQuantity from "../Products/DiscountQuantity ";

import { Crimson_Pro } from "next/font/google";

const CrimsonPro = Crimson_Pro({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"], // thêm dòng này để hỗ trợ in nghiêng
  });

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
        <motion.div className="container relative text-[#5c43a3] xl:py-[150px] py-[150px] md:text-[18px] text-[14px]" animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ ease: "easeOut", duration: 0.7, delay: 1 }}>
            <div className="fixed bottom-[40px] right-[40px] text-[#5c43a3] z-30" onClick={() => handleAddCart()}>
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
            <div className="flex flex-col gap-3 relative  text-justify">
                <h2 className={`md:text-[40px] text-[24px] font-extrabold text-[#d72483] uppercase text-center md:block hidden ${CrimsonPro.className}`}>SOCIAL MEDIA PACKAGE 2</h2>
                <h2 className={`md:text-[34px] text-[24px] font-extrabold text-[#d72483] uppercase text-center md:hidden block ${CrimsonPro.className}`}>SOCIAL MEDIA PACKAGE 2</h2>
                <div className="flex xl:flex-row flex-col mt-20 w-full justify-center items-center xl:gap-[100px] gap-[20px]">
                    <div>
                        <p className='py-2'>Bây giờ ai còn nghĩ rằng “Bản thân mình đã có nhiều kinh nghiệm rồi chắc chắn khách hàng sẽ tự tìm đến mình thôi” là sai lầm nhen. Thị trường nguời làm Social Media đang cực kì nhiều đối thủ cạnh tranh, đòi hỏi bạn không chỉ chủ động tiếp cận mà còn phải trang bị cho mình bộ công cụ kiến thức và kinh nghiệm chuyên nghiệp bất cứ lúc nào..
                            Chính vì thế, mình đã cho bộ Social Media Package 2 ra đời, bộ tài liệu sẽ giúp bạn THUYẾT PHỤC và CHỨNG MINH KẾT QUẢ một cách rõ ràng, giúp khách hàng nhận ra tiềm năng thực sự của bạn. Đây không chỉ là tài liệu, mà là chìa khóa để bạn khẳng định kinh nghiệm thực chiến và độ uy tín của bạn trong thị trường Social Media đầy cạnh tranh hiện nay.
                        </p>
                        <p className='py-2 font-bold'>Vậy trong Social Media Package 2 có gì?:</p>
                        <p className="py-2"><strong>Social Media Proposal - </strong>Đã thuyết phục được khách hàng nhưng thiếu Proposal là xu lắm đó nhe, với tài liệu này là “chìa khoá vàng” khi muốn chốt đơn với khách.  Quizzy đã setup sẵn những đề xuất chuyên nghiệp cộng với bản giá phù hợp cho từng hạng mục hết điều này sẽ giúp bạn dễ dàng thuyết phục được hợp đồng khách hàng hơn một cách suông sẻ nhấtt</p>

                    </div>
                    <div className="">
                        <div className="border-[2px] border-dashed rounded-3xl border-[#d72483] px-3 py-6">
                            <div className="">
                                <Image src={Image3} alt="SOCIAL MEDIA BUNDLES" className="xl:max-w-[450px] max-w-[350px] m-auto border-white border-[2px] p-5" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <p className="md:text-[28px] text-[20px] font-bold">Giá gốc</p>
                                <del className='md:text-[20px] text-[16px] text-[#d72483]/50 text-center font-semibold'>599.000 đồng</del>
                                <h2 className="md:text-[30px] text-[20px] font-bold text-[#d72483]">259.000 đồng</h2>

                            </div>
                        </div>
                        <div className="p-3 bg-[#d72483] w-fit m-auto mt-4 rounded-2xl cursor-pointer" onClick={() => handleAddCart()}>
                            <p className=" text-white font-bold">MUA NGAY</p>
                        </div>
                    </div>

                </div>
                <div>
                    <p className="py-2"><strong>Social Media Audit - </strong>Mạng xã hội hiện đại biến đổi không ngừng như chong chóng vậy, và muốn bắt kịp xu hướng bạn cần một công cụ đánh giá chuyên nghiệp. Với Social Media Audit, bạn sẽ có cái nhìn toàn diện về hiệu suất kênh của mình. Mình đã chuẩn bị sẵn bộ hướng dẫn phân tích chi tiết, giúp bạn nhanh chóng xác định điểm mạnh, điểm yếu và đưa ra giải pháp cải thiện tốt nhất - biến mỗi tăng cơ hội tăng trưởng kênh cho các khách hàng. </p>

                    <p className="py-2"><strong>Social Media Monthly Report - </strong>Một chiến dịch hiệu quả không chỉ dừng lại ở việc triển khai mà còn phải đo lường và tối ưu liên tục để biết mình yếu điểm nào và mạnh điểm nào. Khi có Monthly Report chính bản thân bạn sẽ là người tìm lỗi sai trong khâu làm việc của mình luôn. Mình sẽ có sẵn template chuyên nghiệp, súc tích, giúp bạn theo dõi hiệu suất và trình bày kết quả một cách thuyết phục. Mọi số liệu đều được tổng hợp rõ ràng, trực quan, giúp bạn dễ dàng chứng minh hiệu quả công việc và tạo niềm tin với khách hàng chuyên nghiệp nhất.</p>

                    <div className="border-[2px] border-[#d72483] w-fit m-auto p-10 rounded-3xl my-10 bg-[#5c43a3]/[0.1] text-center border-dashed">
                        <p className=" text-[#d72483] font-bold text-[20px]">Hiện tại có giá siêu ưu đãi cho những bạn nhanh tay nàa</p>
                        <div className="py-4">
                            <del className='text-[18px] text-[#d72483]/[0.5] text-center font-semibold'>Giá gốc: 599.000 đồng</del>
                            <h2 className="text-[30px] font-bold text-[#d72483]">259.000 đồng</h2>
                        </div>
                        <div className="bg-[#d72483] p-3 rounded-2xl cursor-pointer" onClick={() => handleAddCart()}>
                            <span className="text-white">Đọc xong thấy mê? Chốt ngay kẻo trễ </span>
                        </div>
                    </div>
                    <p className="py-2">Với Social Media Package 2, bạn không chỉ nhận được một bộ template đơn thuần, mà còn có hướng dẫn chi tiết từng bước, giúp bạn áp dụng ngay mà không cần loay hoay tìm cách sử dụng. Tất cả đã được chuẩn bị sẵn, giúp bạn tiết kiệm thời gian, tối ưu quy trình làm việc và nâng cấp kỹ năng chuyên môn mà không phải mày mò từ con số 0. Bạn sẽ không thể tìm thấy tài liệu này trong bất kỳ khóa học nào, vì nó không chỉ là lý thuyết, mà là sự kết tinh từ kinh nghiệm thực chiến, những bài học thực tế và những chiến lược đã được kiểm chứng mà mình trực tiếp đúc kết.</p>
                    <p className="py-2">Nếu bạn đang tìm kiếm một giải pháp chuyên nghiệp – hiệu quả – dễ áp dụng, thì đây chính là cơ hội dành cho bạn! Đầu tư một lần sử dụng trọn đời!</p>
                    <div className="p-3 bg-[#5c43a3] md:w-[320px] w-[170px] m-auto mt-10 rounded-2xl cursor-pointer" onClick={() => handleAddCart()}>
                        <p className="text-white font-bold text-center">MÌNH MUỐN MUA BỘ NÀYYYY </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Content;
