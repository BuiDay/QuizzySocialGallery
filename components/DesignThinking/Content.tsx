"use client"
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import MOCKUP from "@/public/products/designThinking.png";
import { IteamContentOfTableData } from "./IteamContentOfTableData";
import ItemContentOfTable from "./ItemContentOfTable";

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import UserAuth from "@/hook/userAuth";
import Cart from "../Common/Cart/Cart";
import ModalNeedLogin from "../Common/ModalNeedLogin/ModalNeedLogin";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
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
    // const triggerRef = useRef(null);
    // const contentRef = useRef(null);
    // const tl = 
    //     ScrollTrigger.create( {
    //         trigger: triggerRef.current,
    //         start: "top 300px",
    //         end: "+=300",
    //         scrub: 1,
    //         pin: true,
    //         markers: true
    //       })

    // useEffect(()=>{
    //       tl
    // },[])
    const handleAddCart = () => {
        if (!idAuthenticated) {
            setOpenModalLogin(true);
            return;
        }
        setOpenCart(true)
    };
    return (
        <motion.div className="container relative text-[#5c43a3]" animate={{ opacity: 1 }}
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
            <div className="w-full min-h-screen h-full flex flex-col justify-center items-center xl:pt-[150px] pt-[150px] text-[#5c43a3] text-[18px]">
                {/* <h1 className='md:text-[34px] text-[24px] font-extrabold'>Bộ tài liệu </h1> */}
                <h2 className={`md:text-[40px] text-[24px] font-extrabold text-[#d72483] uppercase md:text-justify md:block hidden ${CrimsonPro.className}`}>TÀI LIỆU Tư Duy Thiết Kế</h2>
                <h2 className='md:text-[34px] text-[24px] font-extrabold text-[#d72483] uppercase text-center md:hidden block'>BỘ TÀI LIỆU </h2>
                <h2 className='md:text-[34px] text-[24px] font-extrabold text-[#d72483] uppercase text-center md:hidden block'>SOCIAL MEDIA BUNDLE</h2>
                <div className="flex xl:flex-row flex-col mt-20 w-full justify-center items-center xl:gap-[100px] gap-[20px]">
                    <div className="w-[60%]">
                        <p className='py-2 text-justify '>Hiện nay, trong ngành social media, thiết kế đã trở thành một yếu tố quan trọng không kém nội dung. Khi bạn có tư duy thiết kế, việc làm việc với designer sẽ trở nên dễ dàng hơn, bạn sẽ biết cách trao đổi ý tưởng một cách rõ ràng, tránh việc truyền đạt mơ hồ hoặc yêu cầu những điều không hợp lý. Với mình, content vẫn là yếu tố cốt lõi, nhưng bên cạnh đó, tư duy thiết kế cũng rất quan trọng. Một nội dung hay cần đi kèm với hình ảnh thu hút và có tính thẩm mỹ để hiệu quả trong tổng thể.</p>
                        <p className='py-2 text-justify '>Chính vì vậy, mình đã tạo ra tài liệu về <strong>TƯ DUY THIẾT KẾ</strong>, dành riêng cho những ai làm social,  content hoặc marketing và muốn nâng cao khả năng brief cũng như trình bày ý tưởng với designer một cách chuyên nghiệp, rõ ràng. Khóa học này giúp bạn hiểu cách truyền đạt ý tưởng hiệu quả mà không cần tốn hàng chục triệu để học Photoshop hay AI chỉ để biết cách làm việc với designer. Đây là tài liệu hiếm hoi trên thị trường tập trung vào tư duy hình ảnh trong marketing giúp bạn nắm bắt cách nhìn nhận thiết kế đúng, đủ và đẹp, từ đó tối ưu thời gian và công sức của bạn chỉ để mày mò tìm cách tìm kiếm cách trình bày ý tưởng. </p>
                 
                    </div>
                    <div className="w-[40%]">
                        <div className="border-[2px] border-[#d72483] border-dashed rounded-3xl px-3 py-6">
                            <div className="">
                                <Image src={MOCKUP} alt="SOCIAL MEDIA BUNDLES" className="xl:max-w-[210px] max-w-[170px] m-auto border-white border-[2px] p-5" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <p className="md:text-[20px] text-[20px] font-bold">Giá gốc</p>
                                <del className='md:text-[20px] text-[16px] text-[#d72483]/50 text-center font-semibold'>399.000 đồng</del>
                                <h2 className="md:text-[28px] text-[20px] font-bold text-[#d72483]">339.000 đồng</h2>

                            </div>
                        </div>
                        <div className="p-3 bg-[#d72483] w-fit m-auto mt-4 rounded-2xl cursor-pointer" onClick={() => handleAddCart()}>
                            <p className=" text-white font-bold text-[16px]">MUA NGAY</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-[#5c43a3] text-[18px]">
            <p className='py-2 font-bold'>Sau khi xem toàn bộ tài liệu bạn sẽ nhận được:</p>
                <p className='py-2'><strong>- Hiểu rõ tư duy hình ảnh và thiết kế,</strong> ngay cả khi không biết dùng Photoshop hay AI.</p>
                <p className='py-2'> <strong>- Tối ưu quy trình làm việc với Designer,</strong> tránh mâu thuẫn, đảm bảo hiệu suất cao.</p>
                <p className='py-2'> <strong>- Ứng dụng ngay trên Canva, </strong> không cần phần mềm phức tạp.</p>
                <p className='py-2'> <strong>- Học từ thực chiến,</strong>  với nội dung biên soạn từ kinh nghiệm làm việc thực tế, không phải lý thuyết sách vở.</p>

                <p className='py-2 text-justify '>Thú thật thì mình đã cân nhắc một mức giá cao hơn, vì đây là những kiến thức thực tiễn, thứ mà bạn chỉ có thể học được khi đi làm, và rất nhiều người hay gatekeeping những kiến thức này mà không chia sẽ.</p>
                <p className='py-2 text-justify '>Nhưng với mình, giá trị không nằm ở con số, mà ở việc bạn có thể nhận được bao nhiêu từ nó. Điều mình muốn không chỉ là bán một tài liệu, mà là giúp bạn rút ngắn hành trình, tự tin hơn và làm tốt hơn mỗi ngày nè 🩷</p>
                {/* <div>
                    <span>Đọc xong thấy mê? Chốt ngay kẻo trễ </span>
                </div> */}
                <div className="flex justify-center py-5">
                    <ul className="">
                        <li>#1. Những điều bạn cần biết khi bạn là Newbie Canvanians</li>
                        <li>#2. Các bước cơ bản trong thiết kế</li>
                        <li>#3. Một số thông tin cần thiết khi thiết kế ấn phẩm</li>
                        <li>#4. Tham khảo các ấn phẩm Social Posts</li>
                        <li>#5. Các kênh tham khảo khi học Design</li>
                        <li>#6. Hướng dẫn các tác vụ Canva</li>
                    </ul>
                </div>

                <div className="border-[2px] border-[#d72483] w-fit m-auto p-10 rounded-3xl my-10 bg-[#5c43a3]/[0.1] text-center border-dashed">
                    <p className=" text-[#d72483] font-bold text-[20px]">Hiện tại có giá siêu ưu đãi chỉ với </p>
                    <p className="text-[30px] font-bold py-4"> 339.000 đồng</p>
                    <div className="bg-[#d72483] p-3 rounded-2xl cursor-pointer" onClick={() => handleAddCart()}>
                        <span className="text-white">Đọc xong thấy mê? Chốt ngay kẻo trễ </span>
                    </div>
                </div>
            </div>

        </motion.div>
    );
};

export default Content;
