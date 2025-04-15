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
import Image2 from "@/public/2.webp"
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
        <motion.div className="container relative text-[#5c43a3] xl:pt-[150px] pt-[150px] md:text-[18px] text-[14px]" animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ ease: "easeOut", duration: 0.7 }}>
            <div className="fixed bottom-[40px] right-[40px] text-[#d72483] z-30" onClick={() => handleAddCart()}>
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
            <div className="flex flex-col gap-3 relative text-justify">
                <h2 className={`md:text-[40px] text-[24px] font-extrabold text-[#d72483] uppercase text-center md:block hidden ${CrimsonPro.className}`}>SOCIAL MEDIA PACKAGE 1</h2>
                <h2 className={`md:text-[34px] text-[24px] font-extrabold text-[#d72483] uppercase text-center md:hidden block ${CrimsonPro.className}`}>SOCIAL MEDIA PACKAGE 1</h2>
                <div className="flex xl:flex-row flex-col mt-20 w-full justify-center items-center xl:gap-[100px] gap-[20px]">
                    <div>
                        <p className='py-2'>Ở đây vẫn ai còn nghĩ là làm social media chỉ là viết bài, nghĩ content với đăng bài thôi là sai lầm nhe, người làm social media còn phải biết cách làm chiến lược, phân tích và xác định nữa đoá. Mà chưa biết những điều này thì làm sao bây giờ Quizzy có cách giúp bạn luôn nha. Với bộ tài liệu Social Media Package này, bạn có thể tự tin mà chinh chiến, thu hút khách hàng và có thể giải quyết tất cả vấn đề của bạn trên con đường theo đuổi Social Media chuyên nghiệp luôn.</p>
                        <p className='py-2'>Vậy trong Social Media Package 1 có gì?:</p>
                        <p className="py-2"><strong>Social Media Portfolio -</strong> Khi có một Portfolio chuyên nghiệp, bạn sẽ không cần mất thời gian giải thích dài dòng, vì mọi thứ đã được trình bày rõ ràng, trực quan. Khách hàng nhìn vào là hiểu ngay bạn có phù hợp với họ hay không và đương nhiên để thu hút khách hàng cần phải có Portfolio chuyên nghiệp và chuẩn chỉnh với SMP 1 sẽ đáp ứng cho bạn điều này.</p>

                    </div>
                    <div className="">
                        <div className="border-[2px] border-dashed rounded-3xl border-[#d72483] px-3 py-6">
                            <div className="">
                                <Image src={Image2} alt="SOCIAL MEDIA BUNDLES" className="xl:max-w-[450px] max-w-[350px] m-auto border-white border-[2px] p-5" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <p className="md:text-[28px] text-[20px] font-bold">Giá gốc</p>
                                <del className='md:text-[20px] text-[16px] text-[#d72483]/50 text-center font-semibold'>899.000 đồng</del>
                                <h2 className="md:text-[30px] text-[20px] font-bold text-[#d72483]">379.000 đồng</h2>

                            </div>
                        </div>
                        <div className="p-3 bg-[#d72483] w-fit m-auto mt-4 rounded-2xl cursor-pointer" onClick={() => handleAddCart()}>
                            <p className=" text-white font-bold">MUA NGAY</p>
                        </div>
                    </div>

                </div>
                <div>
                    <p className="py-2"><strong>Social Media Strategy -</strong> Không có chiến lược khi bắt đầu làm dự án là coi như là chưa có gì hết đó nhe. Nếu không có chiến lược rõ ràng, mọi người sẽ mất thời gian, công sức mà có khả năng cao là không đạt được kết quả mong muốn lun. Nhưng với gói Social Media Package 1 trong phần SM Strategy sẽ có tận 7 phần vô cùng chi tiết cách lên chiến lược hiệu quả như:</p>
                    <ul className="pl-[30px] list-disc">
                        <li><strong>Xác định mục tiêu – </strong>Xây dựng mục tiêu phù hợp với từng dự án không cần phải lo sợ hay lăn tăn về cách xây dựng như nào hợp lý.</li>
                        <li><strong>Phân tích thương hiệu – </strong>Hiểu rõ USP và giá trị cốt lõi của thương hiệu một cách rõ ràng nhất.</li>
                        <li><strong>Phân tích đối tượng – </strong>Xác định khách hàng mục tiêu để xây dựng nội dung phù hợp.</li>
                        <li><strong>Phân tích đối thủ – </strong>Học hỏi từ đối thủ, tìm cơ hội khác biệt hóa theo cách độc quyền của thương hiệu mình.</li>
                        <li><strong>Chiến lược nội dung – </strong>Xây dựng nội dung hấp dẫn, giữ chân người xem.</li>
                        <li><strong>Lập kế hoạch SEO & Hashtag – </strong>Tối ưu nội dung để tiếp cận nhiều người hơn.</li>
                        <li><strong>Feed Plan & Action Plan – </strong>Lập kế hoạch chi tiết từng bước triển khai.</li>
                    </ul>
                    <p className="py-2"><strong>Social Media Plan -</strong>Không có kế hoạch rõ ràng khi sản xuất nội dung dễ khiến công việc rối ren, chậm trễ, làm mất thời gian của cả bạn và đối tác. Quan trọng hơn, điều này có thể khiến bạn trông thiếu chuyên nghiệp, thậm chí ảnh hưởng đến uy tín trong mắt khách hàng nữa! Khi có Social Media Plan trong tay mọi người có thể dễ dàng:</p>
                    <ul className="pl-[30px] list-disc">
                        <li><strong>Lên kế hoạch đăng bài:</strong> Lịch content chi tiết theo ngày, tuần, tháng. </li>
                        <li><strong>Theo dõi tiến độ:</strong> Biết được công việc nào đã hoàn thành, công việc nào đang xử lý.</li>
                        <li><strong>Phân bổ nguồn lực:</strong> Hỗ trợ teamwork hiệu quả, không bỏ sót nhiệm vụ.</li>
                    </ul>
                    <div className="border-[2px] border-[#d72483] w-fit m-auto p-10 rounded-3xl my-10 bg-[#5c43a3]/[0.1] text-center border-dashed">
                        <p className=" text-[#d72483] font-bold text-[20px]">Nhanh tay nhận ngay giá tài liệu hạt dẻ</p>
                        <p className="text-[30px] font-bold py-4"> 379.000 đồng</p>
                        <div className="bg-[#d72483] p-3 rounded-2xl cursor-pointer" onClick={() => handleAddCart()}>
                            <span className="text-white">Đọc xong thấy mê? Chốt ngay kẻo trễ </span>
                        </div>
                    </div>
                    <p className="py-2">Với Social Media Package 1 này thì bạn không phải chỉ nhận mỗi template không đâu mà còn nhận thêm hướng dẫn chi tiết khi sử dụng template nữa áa nên đừng có sợ mua xong hong biết xài nhen. Nếu bạn là một người muốn tiết kiệm thời gian vì mọi thứ đã chuẩn bị sẵn, nâng cao hiệu quả công việc chính và phát triển kỹ năng thì đây là tín hiệu của bạn đoá. Đầu tư một lần, áp dụng vô số lầnnn 🩵</p>
                    <div className="p-3 bg-[#5c43a3] md:w-[300px] w-[150px] m-auto mt-10 rounded-2xl cursor-pointer" onClick={() => handleAddCart()}>
                        <p className="text-white font-bold text-center">MÌNH MUỐN MUA BỘ NÀYYYY </p>
                    </div>
                    <div className="mt-20 m-auto">
                        <Table className='text-[18px] max-w-[800px] m-auto text-center'>
                            <TableHeader>
                                <TableRow >
                                    <TableHead className="py-4 px-5 text-[#d72483] text-center">Tên Sản Phẩm</TableHead>
                                    <TableHead className="py-4 px-5 text-[#d72483] text-center">Công Dụng</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow >
                                    <TableCell className="py-4 px-5">Social Media Portfolio</TableCell>
                                    <TableCell className="py-4 px-5">Giúp thu hút và tạo điểm nhấn với khách hàng</TableCell>
                                </TableRow >
                                <TableRow >
                                    <TableCell className="py-4 px-5">Social Media Strategy</TableCell>
                                    <TableCell className="py-4 px-5">Hướng dẫn 7 bước lên chiến lược Social Media hiệu quả</TableCell>
                                </TableRow >
                                <TableRow >
                                    <TableCell className="py-4 px-5">Social Media Plan</TableCell>
                                    <TableCell className="py-4 px-5">Kế hoạch chi tiết giúp triển khai dự án nhanh chóng</TableCell>
                                </TableRow >
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Content;
