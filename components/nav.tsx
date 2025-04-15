"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export const navItemsData = [
    {
        name: "Trang chủ",
        url: "/"
    },
    // {
    //     name: "Về Quizzy",
    //     url: "/story/"
    // },
    {
        name: "Tài liệu số",
        url: "/products/"
    },
    {
        name: "Dịch vụ SMM",
        url: "#"
    },
    {
        name: "Liên hệ",
        url: "/contact-us/"
    },
    {
        name: "Tài liệu của bạn",
        url: "/collections/"
    }
]

const NavItem = () => {
    const path = usePathname();
    console.log(path)
    return (
        <div className='flex lg:flex-row flex-col gap-7 items-center'>
            {
                navItemsData && navItemsData.map((item, index) => {
                    return (
                        <Link rel="xsa" href={item.url} scroll={false} key={index} passHref>
                            <span className={`font-medium text-[16px] ${path === item.url ? "underline" : ""}`}>
                                {item.name}
                            </span>
                        </Link>
                    )
                })
            }
        </div>
    );
};

export default NavItem;