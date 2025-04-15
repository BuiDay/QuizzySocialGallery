import React from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { IProduct } from '@/type';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from 'next/link';
import { Crimson_Pro } from 'next/font/google';

interface IProps {
    isLoading?: boolean,
    collections?: IProduct[]
}
const CrimsonPro = Crimson_Pro({
    subsets: ["latin"],
    variable: '--font-CrimsonPro',
    weight: ["400", "500", "600", "700", "800", "900"]
  });
  
const Collections: React.FC<IProps> = ({ isLoading, collections }) => {
    const myLoader = ({ src, width, quality }: any) => {
        return `${src}?w=${width}&q=${quality || 75}`;
    };

    return (
        <div className='h-full min-h-screen bg-white'>
            <div className='py-[200px] container'>
                <div className='text-center'>
                    <motion.h2
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ ease: "easeOut", duration: 0.7, delay: 1 }}
                        className={`md:text-[40px] text-[24px] font-bold text-[#d72483] ${CrimsonPro.className}`}>Bộ sưu tập của bạn</motion.h2>
                </div>
                {
                    collections && collections?.length > 0 ?
                        <motion.div
                            animate={{ opacity: 1 }}
                            initial={{ opacity: 0 }}
                            transition={{ ease: "easeOut", duration: 0.7, delay: 1 }} className='flex h-full justify-center mt-10'>

                            <Table className='text-[16px] text-[#5c43a3]'>
                                {/* <TableHeader>
                                    <TableRow >
                                        <TableHead className="max-w-[150px] py-4 px-5 gradient-text"></TableHead>
                                        <TableHead className="max-w-[150px] py-4 px-5 gradient-text"></TableHead>
                                        <TableHead className="py-4 px-5 gradient-text"></TableHead>
                                        <TableHead className="py-4 px-5 gradient-text"></TableHead>
                                    </TableRow>
                                </TableHeader> */}
                                <TableBody>
                                    {
                                        collections && collections?.map((item, index) => {
                                            return (
                                                <>
                                                    {
                                                        !item.isCombo && <TableRow key={index}>
                                                            <TableCell className="py-4 max-w-[10px] font-bold">{index + 1}</TableCell>
                                                            <TableCell className="py-4 px-5">
                                                                <div className='flex items-center'>
                                                                    <div className='h-[50px]'>
                                                                        {
                                                                            item.thumnail && <Image className='h-full object-contain' loader={myLoader} src={item.thumnail} alt="" width={150} height={150} />
                                                                        }
                                                                    </div>
                                                                    <p>{item.category} <span className='font-bold'>{item.name}</span></p>
                                                                </div>
                                                            </TableCell>
                                                            <TableCell className="py-4 px-5">{item.url && <Link target="_blank" href={item.url}><span className='border border-[#5c43a3] p-2 rounded-xl text-[#5c43a3]'>Mở</span></Link>}</TableCell>
                                                            <TableCell className="py-4 px-5">{item?.instructionLink && <Link target="_blank" href={item?.instructionLink}><span className='border border-[#d72483] p-2 rounded-xl text-[#d72483]'>Hướng dẫn</span></Link>}</TableCell>
                                                        </TableRow>
                                                    }
                                                </>
                                            )
                                        }
                                        )
                                    }
                                </TableBody>
                            </Table>
                        </motion.div>
                        :
                        <motion.div animate={{ opacity: 1 }}
                            initial={{ opacity: 0 }}
                            transition={{ ease: "easeOut", duration: 0.7, delay: 1 }} className='flex h-full justify-center mt-10'>
                            <h3>Không tìm thấy sản phẩm nào</h3>
                        </motion.div>
                }
            </div>
        </div>
    );
};

export default Collections;