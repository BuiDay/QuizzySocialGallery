"use client"
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Picture_1 from "@/public/story/1.webp";
import Picture_2 from "@/public/story/2.webp";
import Picture_3 from "@/public/story/3.webp";
import Picture_4 from "@/public/story/4.webp";
import Picture_5 from "@/public/story/5.webp";
import Picture_6 from "@/public/story/6.webp";
import Picture_7 from "@/public/story/7.webp";
import Picture_8 from "@/public/story/8.webp";
import Picture_9 from "@/public/story/9.webp";
import Picture_10 from "@/public/story/10.webp";
import Picture_11 from "@/public/story/11.webp";
import Picture_12 from "@/public/story/12.webp";
import Picture_13 from "@/public/story/13.webp";
import Picture_14 from "@/public/story/14.webp";
import Picture_15 from "@/public/story/15.webp";
import Picture_16 from "@/public/story/16.webp";
import Picture_17 from "@/public/story/17.webp";
import Picture_18 from "@/public/story/18.webp";
import Picture_19 from "@/public/story/19.webp";
import Picture_20 from "@/public/story/20.webp";

import phone_14_001 from "@/public/story/phone_14_001.webp";
import phone_14_002 from "@/public/story/phone_14_002.webp";
import phone_14_003 from "@/public/story/phone_14_003.webp";
import phone_14_004 from "@/public/story/phone_14_004.webp";
import phone_14_005 from "@/public/story/phone_14_005.webp";


import Button from "../Common/Button/Button";
import Link from "next/link";
import { useInView } from "framer-motion"
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const StoryContent = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        console.log("Element is in view: ", isInView)
    }, [isInView])

    useGSAP(
        () => {
            let sections = gsap.utils.toArray(".slide");
            gsap.to(sections, {
                xPercent: -80 * (sections.length - 1),
                scrollTrigger: {
                    trigger: ".horizontal-sliders",
                    pin: ".main",
                    pinSpacing: true,
                    start: "400 center",
                    scrub: 1,
                    end: "+=3000",
                }
            });

            // let topLefts = document.querySelectorAll(".ab-text");
            // topLefts.forEach(function (item: any, index) {
            //     gsap.from(item, {
            //         scrollTrigger: {
            //             trigger: item,
            //             start: "-250px center",
            //             end: "bottom center",
            //             scrub: true,
            //         },
            //         opacity: 0
            //     })

            // })

            // let topRights = document.querySelectorAll(".top-right");
            // topRights.forEach(function (item: any, index) {
            //     gsap.from(item, {
            //         scrollTrigger: {
            //             trigger: item,
            //             start: "top top",
            //             end: "bottom -300px",
            //             scrub: true,
            //             markers:true
            //         },
            //         x: 1200,
            //     });
            // })

            // gsap.set(".work-photo", {
            //     clipPath: function () {
            //         return "inset(0px 0px 0px 0px)"
            //     },

            // })


            // gsap.from(".title-animate", {
            //     scrollTrigger: {
            //         trigger: ".title-animate",
            //         start: "-150px center",
            //         scrub: true,
            //     },
            //     opacity: 0
            // });

            // gsap.from(".title-animate-1", {
            //     scrollTrigger: {
            //         trigger: ".title-animate-1",
            //         start: "-150px center",
            //         scrub: true,
            //     },
            //     opacity: 0
            // });


            // gsap.from(".content-animate", {
            //     scrollTrigger: {
            //         trigger: ".content-animate",
            //         start: "-150px center",
            //         scrub: true,
            //     },
            //     opacity: 0
            // });

            // gsap.from(".content-animate-1", {
            //     scrollTrigger: {
            //         trigger: ".content-animate",
            //         start: "-150px center",
            //         scrub: true,
            //     },
            //     opacity: 0
            // });

            // gsap.from(".content-animate-2", {
            //     scrollTrigger: {
            //         trigger: ".content-animate-2",
            //         start: "-150px center",
            //         scrub: true,
            //     },
            //     opacity: 0
            // });


            // let workPhotoItems = document.querySelectorAll(".work-photo");
            // workPhotoItems.forEach(function (item: any, index) {
            //     item.style.zIndex = workPhotoItems.length - index
            // })

            // gsap.set(".work-photo", {
            //     clipPath: function () {
            //         return "inset(0px 0px 0px 0px)"
            //     },

            // })

            // const animation = gsap.to(".work-photo:not(:last-child)", {
            //     clipPath: function () {
            //         return "inset(0px 0px 100% 0px)"
            //     },
            //     stagger: 4,
            //     ease: "none"
            // })

            // ScrollTrigger.create({
            //     trigger: ".container-doing",
            //     start: "top 200px",
            //     end: "bottom bottom",
            //     pin: ".left",
            //     animation: animation,
            //     scrub: 1,
            // })



        },
    )

    return (
        <div id="google">
            <div className="w-full flex flex-col container items-center mx-auto pt-[100px] pb-[200px] ">
                <span className="gradient-title font-black md:text-[24px] text-[16px] text-center ab-text">
                    VÀ ĐÂY LÀ TOÀN BỘ HÀNH TRÌNH CỦA MÌNH
                </span>
                <div className="lg:w-[80%] w-full mx-auto flex overflow-hidden flex-col mt-[50px] gap-[20px] main">
                    <div className="w-full flex lg:flex-row flex-col gap-10 ">
                        <div className="flex lg:flex-row flex-col gap-10">
                            <div className="rounded-2xl self-start ">
                                <div className="w-full">
                                    <p className="story_content text-justify ab-text">
                                        Cuối năm nhất, mình quyết định đi làm. Lúc này mình cũng như mọi
                                        người, CV chả có tí kinh nghiệm nào nhưng nhờ có 2 kênh Tiktok,
                                        Instagram - lúc này mình thậm chí còn không hiểu sao để kiếm tiền
                                        trên Tiktok và hoàn toàn không hề biết đến công việc Social Media.
                                        Thời điểm đó, mình xác định làm kênh cho vui, để ghi lại những kỷ
                                        niệm, khoảnh khắc và chia sẻ hành trình của mình là chính.
                                    </p>
                                    <p className="gradient-title story_content font-bold mt-4 ab-text">
                                        Nhưng cũng nhờ sự đam mê làm video Tiktok/Instagram mỗi ngày, mình
                                        đã đậu vào Zing News để làm việc dù lúc đấy mình chỉ mới 19 tuổi.
                                    </p>
                                </div>
                            </div>
                            <div className="max-w-[200px] h-full rounded-2xl overflow-hidden self-center ab-text">
                                <Image src={Picture_1} alt="quizzy_zingnew" />
                            </div>
                            <div className="max-w-[200px] h-full rounded-2xl overflow-hidden self-center ab-text">
                                <Image src={Picture_2} alt="quizzy_zingnew" className="object-cover h-full" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex lg:flex-row flex-col-reverse items-center justify-between gap-10 ab-text">
                        <div className="md:max-w-[300px] max-w-[200px] rounded-2xl overflow-hidden bottom-left">
                            <Image src={Picture_3} alt="quizzy_zingnew" />
                        </div>
                        <div className="lg:w-[70%] w-full bottom-right">
                            <p className="story_content text-justify">Gắn bó với Zing News hơn 1 năm, mình quyết định dừng lại… Thật sự khoảng thời gian chấp nhận phải dừng lại, bản thân mình khá buồn vì nhờ có Zing mà mình có nhiều trải nghiệm đi làm “từ năm nhất“, gặp được nhiều anh chị giỏi mình vẫn giữ liên lạc đến bây giờ…</p>
                            <p className="story_content text-justify mt-5">Sau 1 năm làm việc và trải nghiệm khá nhiều mảng trong Digital Marketing, mình xác định sẽ quyết tâm theo đuổi chuyên môn Social Media và quyết định đầu tư & xây dựng chỉn chu các trang mạng xã hội cá nhân.</p>
                        </div>
                    </div>
                    <div className="horizontal-sliders overflow-hidden pt-[50px]">
                        <div className="">
                            <p className="story_content text-center gradient-title font-bold uppercase">Bây giờ thì</p>
                            <p className="story_content text-center gradient-title font-bold uppercase">MÌNH ĐÃ CÓ HƠN 170K+ FOLLOWERS TRÊN TẤT CẢ NỀN TẢNG</p>
                            <p className="story_content text-center">70K+ followers trên Instagram</p>
                            <p className="story_content text-center">62.5K+ followers trên Tiktok</p>
                            <p className="story_content text-center">18K+ followers trên Fanpage</p>
                            <p className="story_content text-center">8K+ followers trên Thread</p>
                        </div>
                        <div className=" w-[600%] flex">
                            <div className="slide w-[1000px]">
                                <div className="w-[300px] m-auto">
                                    <Image src={phone_14_001} alt="mockup" className="" width={300} />
                                </div>
                            </div>
                            <div className="slide w-[1000px]">
                                <div className="w-[300px] m-auto">
                                    <Image src={phone_14_002} alt="mockup" className="" width={300} />
                                </div>
                            </div>
                            <div className="slide w-[1000px]">
                                <div className="w-[300px] m-auto">
                                    <Image src={phone_14_003} alt="mockup" className="" width={300} />
                                </div>
                            </div>
                            <div className="slide w-[1000px]">
                                <div className="w-[300px] m-auto">
                                    <Image src={phone_14_005} alt="mockup" className="" width={300} />
                                </div>
                            </div>
                            <div className="slide w-[1000px]">
                                <div className="w-[300px] m-auto">
                                    <Image src={phone_14_004} alt="mockup" className="" width={300} />
                                </div>
                            </div>
                            <div className="slide w-[1000px]">
                                <div className="w-[300px] m-auto">
                                    <Image src={phone_14_005} alt="mockup" className="" width={300} />
                                </div>
                            </div>

                        </div>
                    </div>

                    <p className="story_content text-justify">
                        Sau đó mình có cơ hội nhận 2 dự án tại 1 Startup và 1 Agency để tiếp tục làm việc và trau dồi chuyên môn, kinh nghiệm trong lĩnh vực này và đặc biệt là trải nghiệm môi trường làm việc tại Startup và Agency.
                    </p>

                </div>
                <p className="story_content text-center gradient-title font-bold mt-[30px] title-animate">Mọi người biết mình sẽ làm gì sau đó không?</p>
                <div className="md:w-[80%] w-full flex md:flex-row flex-col justify-between gap-10 mt-[30px] overflow-hidden">
                    <div className="md:max-w-[300px] max-w-[200px] m-auto rounded-2xl overflow-hidden ab-text">
                        <Image src={Picture_5} alt="quizzy_zingnew" />
                    </div>
                    <div className="lg:w-[70%] w-full m-auto flex flex-col justify-between gap-5 ab-text">
                        <p className="story_content text-justify">Mình break job 2 tháng, 2 tháng “thất nghiệp” - mình quyết định dừng hết mọi thứ để tập trung cho sức khỏe, du lịch,...và suy nghĩ cho những định hướng mới. Tinh thần & năng lượng của mình dần hồi phục sau chuyến đi đó.</p>
                        <div className="grid grid-cols-3 gap-5">
                            <div className="md:max-h-[280px] max-h-[170px] h-full rounded-2xl overflow-hidden ">
                                <Image src={Picture_6} alt="quizzy_zingnew" className="h-full object-cover" />
                            </div>
                            <div className="md:max-h-[280px] max-h-[170px] h-full rounded-2xl overflow-hidden ">
                                <Image src={Picture_7} alt="quizzy_zingnew" className="h-full object-cover" />
                            </div>
                            <div className="md:max-h-[280px] max-h-[170px] h-full rounded-2xl overflow-hidden ">
                                <Image src={Picture_8} alt="quizzy_zingnew" className="h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="lg:mt-[30px] lg:w-[80%] w-full mt-[10px] flex flex-col gap-10 overflow-hidden">
                    <p className="story_content text-justify content-animate">Bản thân mình là 1 đứa thích tìm tòi, học hỏi và không muốn bản thân chơi vơi quá lâu. Mình dành hơn 4 tiếng mỗi ngày để học thêm kiến thức chuyên sâu về Social Media Marketing, kiến thức về thuật toán từng nền tảng, nhiều kỹ năng Social Media mà mình chưa có cơ hội được trau dồi tối đa và mình duy trì việc học hơn 7 tháng.</p>
                    <p className="story_content text-justify content-animate">Từ các kiến thức FREE trên Linkedin, Youtube mình đều xem qua hết, các tài liệu mình cũng mày mò từng chút một, miễn phí có, có phí cũng có, nhưng chắc chắn rồi Vì nó giúp mình có 1 nền tảng rất vững chắc nếu mình muốn đi xa hơn.</p>
                    <p className="story_content text-center font-bold gradient-title content-animate-1">Mục tiêu của mình là hướng tới các công việc tự do -  FREELANCING, tính cách của mình muốn làm việc tự do nhưng phải duy trì sự “KỶ LUẬT“.</p>
                    <p className="story_content text-justify content-animate-2">Cũng nhờ nghiêm túc học và làm việc, mình tiết kiệm và tự sắm được con Iphone 15, Macbook Pro và Apple Watch - đó là cả ước mơ của mình hồi trước.</p>
                    <p className="story_content text-justify content-animate-2">Vài tuần sau đó, mình set up lại định hướng và thật sự muốn LÀM REMOTE tại 1 công ty cố định. Nỗ lực tìm việc đã được đền đáp, mình có cơ hội apply công việc Social Media Manager, lần đầu tiên làm việc với môi trường nước ngoài, cũng là cơ hội cực kỳ quý giá giúp mình gặp được người sếp vô cùng tài giỏi, anh Kevin Mach. Anh đã giúp mình mở mang tư duy, cho mình nhiều cơ hội để thử sức và tin tưởng giao cho nhiều vị trí tốt sau 1 khoảng thời gian làm việc.</p>
                    <div className="md:max-w-[500px] max-w-[250px] rounded-2xl overflow-hidden m-auto ab-text">
                        <Image src={Picture_9} alt="quizzy_zingnew" />
                    </div>
                </div>

                <div className="lg:w-[80%] w-full mx-auto flex flex-col mt-[50px] gap-[20px] overflow-hidden">
                    <div className="mt-[10px]">
                        <p className="story_content text-center font-bold uppercase gradient-title title-animate-1">VÀ KHÔNG LÂU SAU ĐÓ</p>
                        <div className="flex lg:flex-row flex-col mt-[30px] gap-10">
                            <div className="lg:w-[70%] w-full flex flex-col gap-5 ab-text">
                                <p className="story_content text-justify ">Mình đã chứng minh cho sếp thấy khả năng và kinh nghiệm chuyên môn của mình để có thể hoàn thành trách nhiệm trong 1 công việc một cách chỉn chu nhất mà sếp không cần phải bận tâm bất cứ việc gì.</p>
                                <p className="story_content text-justify "> <span className="gradient-title font-bold">VỊ TRÍ PROJECT MANAGER</span> VÀ <span className="gradient-title font-bold"> SOCIAL MEDIA MANAGER</span> tại công ty đã giúp mình THAY ĐỔI CUỘC SỐNG!</p>
                                <p className="story_content text-justify ">Khoảnh khắc tuyệt vời nhất trong công việc là tận hưởng thành quả cả team đã làm việc cùng nhau trong hơn 5 tháng - chính là lúc <span className="gradient-title font-bold">DỰ ÁN CỦA TEAM ĐẠT DOANH THU HƠN 2 TỶ chỉ trong 12 ngày LAUNCHING</span>. Đó là sự nỗ lực của cả 1 tập thể.</p>
                            </div>
                            <div className="md:max-w-[300px] max-w-[200px] rounded-2xl overflow-hidden m-auto ab-text">
                                <Image src={Picture_10} alt="quizzy_zingnew" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-[30px] flex flex-col gap-10">
                        <div className="w-[80%] m-auto rounded-2xl overflow-hidden ab-text">
                            <Image src={Picture_11} alt="mockup" />
                        </div>
                        <p className="story_content text-justify ab-text">Mình tự tin hơn và cũng biết bản thân cần phải cố gắng nhiều hơn nữa để xứng đáng với niềm tin và mong đợi của sếp.</p>
                        <div className="w-[80%] m-auto rounded-2xl overflow-hidden ab-text">
                            <Image src={Picture_12} alt="mockup" />
                        </div>
                        <p className="story_content text-justify ab-text">Không chỉ SẾP, mình còn được làm việc với RẤT NHIỀU ĐỒNG NGHIỆP GIỎI trong team cả trong nước và ngoài nước. Học hỏi và giúp đỡ lẫn nhau trong công việc.</p>
                        <p className="story_content text-justify ab-text">Và đó cũng là điều mình luôn ấp ủ để làm nên <span className="gradient-title font-bold">DỰ ÁN QUIZZY SOCIAL GALLERY</span> - 1 nơi đề cao sự học hỏi và cung cấp những kiến thức/tài liệu/sản phẩm/dịch vụ thực sự giá trị để công việc Social Media của tất cả mọi người ngày 1 thăng cấp và dễ dàng chinh phục mức thu nhập 10 - 100 triệu tháng.</p>
                        <p className="story_content text-center gradient-title font-bold uppercase ab-text">MÀ KHÔNG CẦN MẤT QUÁ NHIỀU THỜI GIAN MÀ BẠN VẪN HOÀN TOÀN CÓ ĐƯỢC NHỮNG KIẾN THỨC ĐƯỢC MÌNH CHẮT LỌC.</p>
                        <p className="story_content text-center ab-text">Đó là toàn bộ hành trình mà mình đã đi qua.</p>
                        <p className="story_content text-center uppercase ab-text">ĐỐI VỚI BẢN THÂN MÌNH, MÌNH CẢM THẤY RẤT TRÂN TRỌNG VÌ NHỮNG TRẢI NGHIỆM LÀM VIỆC TỪ NĂM MÌNH 19 TUỔI.</p>
                        <p className="story_content text-center ab-text">Một độ tuổi mà mình chả biết tí kinh nghiệm gì đến giờ sau 3 năm, nó cho mình quá nhiều thứ</p>
                        <p className="story_content text-center uppercase ab-text">THỨ MÌNH NHẬN ĐƯỢC NHIỀU NHẤT, CHÍNH LÀ HÀNH TRANG, LÀ ĐÒN BẨY, LÀ NỀN TẢNG ĐỂ MÌNH PHÁT TRIỂN XA HƠN TRONG CÔNG VIỆC HIỆN TẠI.</p>
                        <p className="story_content text-center gradient-title font-bold uppercase ab-text">VÀ MỌI NGƯỜI BIẾT CÁI QUYẾT ĐỊNH “TÁO BẠO NHẤT” TUỔI 21 CỦA MÌNH LÀ GÌ KHÔNG?</p>
                        <p className="story_content text-center ab-text">Mình quyết định khởi nghiệp.</p>
                        <p className="story_content text-center ab-text">1 DỰ ÁN VỀ GIÁO DỤC VÀ ĐÀO TẠO <br /> Chính là đứa con tinh thần QCC Mastery Hub. </p>
                        <div className="w-[80%] m-auto rounded-2xl overflow-hidden ab-text">
                            <Image src={Picture_13} alt="mockup" />
                        </div>
                        <p className="story_content text-justify ab-text ">Vào tháng 7/2023, QCC Mastery Hub với sứ mệnh xây dựng và lan tỏa rộng rãi các giá trị giáo dục trong lĩnh vực Content và Social Media Marketing đến với cộng đồng sinh viên và người đi làm.</p>
                    </div>
                    <div className="mt-[30px] flex flex-col gap-10 ">
                        <div className="max-w-[60%] m-auto rounded-2xl overflow-hidden ab-text">
                            <Image src={Picture_14} alt="mockup" />
                        </div>
                        <p className="story_content text-justify ab-text">Dù mới thành lập hơn 6 tháng nhưng QCC đã chứng minh sự phát triển qua hàng loạt con số ấn tượng: mở hơn 25 lớp học, thu hút hơn 600+ học viên đến từ hơn 25 trường Đại học trải dài khắp 19 tỉnh thành Việt Nam, giúp cho hàng trăm bạn học viên có công việc sau khi học.</p>
                        <div className="max-w-[60%] m-auto rounded-2xl overflow-hidden ab-text">
                            <Image src={Picture_15} alt="mockup" />
                        </div>
                        <p className="story_content text-justify ab-text">Mình và cả đội ngũ luôn đề cao và theo đuổi sứ mệnh “Luôn tận tâm vì học viên”, với mong muốn đào tạo và hỗ trợ các bạn trẻ ngoài kia - đặc biệt là những bạn newbie chưa có nhiều kinh nghiệm để cạnh tranh hơn trong quá trình xin việc thông qua các buổi học lý thuyết trực tiếp và những dự án bám sát 100% nhu cầu thực tế của thị trường lao động.</p>
                        <div className="mt-[20px] flex flex-col gap-10">
                            <div className="">
                                <div className="flex w-full m-auto overflow-hidden flex-wrap gap-10">
                                    <div className="w-full flex md:flex-row flex-col gap-5">
                                        <div className="md:w-[50%] gap-5 flex flex-col">
                                            <div className="rounded-2xl overflow-hidden w-[80%] m-auto ab-text">
                                                <Image src={Picture_16} alt="mockup" height={500} width={500} className="w-full h-full object-fill" />
                                            </div>
                                            <div className=" rounded-2xl overflow-hidden w-[80%] m-auto ab-text">
                                                <Image src={Picture_17} alt="mockup" height={500} width={500} className="w-full h-full object-fill" />
                                            </div>
                                            <div className="rounded-2xl overflow-hidden w-[80%] m-auto ab-text">
                                                <Image src={Picture_19} alt="mockup" height={500} width={500} className="w-full h-full object-fill" />
                                            </div>
                                        </div>
                                        <div className="md:w-[50%] gap-5 flex flex-col justify-center ab-text">
                                            <div className="rounded-2xl overflow-hidden w-[80%] md:mt-0 m-auto">
                                                <Image src={Picture_20} alt="mockup" height={500} width={500} className="w-full h-full object-fill" />
                                            </div>
                                            <div className=" rounded-2xl overflow-hidden w-[80%] md:mt-0 m-auto ab-text">
                                                <Image src={Picture_18} alt="mockup" height={500} width={500} className="w-full h-full object-fill" />
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-10 mt-[10px] ab-text">
                        <p className="story_content text-center gradient-title font-bold uppercase">Không chỉ có mỗi bản thân mình</p>
                        <p className="story_content text-center">MÀ Mentor và toàn thể đội ngũ QCC Mastery Hub sẽ luôn cống hiến giúp học viên định hướng và khai phá mọi năng lực, tố chất bên trong, qua đó dễ dàng nâng cao giá trị phát triển và tư duy làm nghề.</p>
                        <p className="story_content text-center font-bold uppercase md:text-[18px] text-[14px]">CẢM ƠN MỌI NGƯỜI ĐÃ ĐỌC ĐẾN ĐÂY, VÀ GIỜ THÌ</p>
                    </div>
                </div>
                <div className="mt-[30px]">
                    <Link href={'/products'}
                        className="gradient-bg md:p-4 p-2 rounded-xl font-bold md:text-[18px] text-[11px]"
                    >
                        BẤM VÀO NÚT NÀY ĐỂ THAM KHẢO TÀI LIỆU
                    </Link>
                </div>

            </div>
        </div>

    );
};

export default StoryContent;
