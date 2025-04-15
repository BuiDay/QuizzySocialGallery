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
import { IOrder } from '@/type';
import { motion } from "framer-motion";
import { Crimson_Pro } from 'next/font/google';
interface IProps {
    isLoading?: boolean,
    orders?: IOrder[]
}

const CrimsonPro = Crimson_Pro({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"], // thêm dòng này để hỗ trợ in nghiêng
  });

const OrderHistory: React.FC<IProps> = ({ isLoading, orders }) => {

    const handleOrderStatus = (status:string) => {
        if(status.includes("PAID"))
         return  <span className='border-green-500 text-green-500 border p-2 rounded-lg'>{status}</span>
        if(status.includes("CANCELLED"))
        return  <span className='border-red-500 text-red-500 border p-2 rounded-lg'>{status}</span>
        if(status.includes("PENDING"))
        return  <span className='border-blue-500 text-blue-500 border p-2 rounded-lg'>{status}</span>
    }

    return (
        <div className='h-full min-h-screen'>
            <div className='pt-[200px] container'>
                <div className='text-center'>
                    <motion.h2
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ ease: "easeOut", duration: 0.7, delay: 1 }}
                        className={`text-[#d72483] md:text-[38px] text-[24px] font-bold ${CrimsonPro.className}`}>Lịch sử giao dịch</motion.h2>
                </div>
                {
                    orders && orders?.length > 0 ?
                        <motion.div  
                            animate={{ opacity: 1 }}
                            initial={{ opacity: 0 }}
                            transition={{ ease: "easeOut", duration: 0.7, delay: 1 }} className='flex h-full justify-center mt-10'>
                            <Table className='text-[16px] w-[1300px] text-[#5c43a3]'>
                                <TableHeader>
                                    <TableRow >
                                    <TableHead className="max-w-[150px] py-4 px-5 text-[#d72483]">Ngày</TableHead>
                                        <TableHead className="max-w-[150px] py-4 px-5 text-[#d72483]">Mã đơn hàng</TableHead>
                                        <TableHead className="py-4 px-5 text-[#d72483]">Trạng thái</TableHead>
                                        <TableHead className="py-4 px-5 text-[#d72483]">Tên sản phẩm</TableHead>
                                        <TableHead className="text-right py-4 px-5 text-[#d72483]">Giá</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {
                                        orders && orders?.map((item, index) =>
                                            <TableRow key={index}>
                                                <TableCell className="py-4 px-5">{`${new Date(item.createdAt).toLocaleTimeString()} - ${new Date(item.createdAt).toLocaleDateString()}`}</TableCell>
                                                <TableCell className="py-4 px-5">{item.codeOrder}</TableCell>
                                                <TableCell className="py-4 px-5">
                                                    {
                                                        handleOrderStatus(item.payment_info.status)
                                                    }
                                                </TableCell>
                                                <TableCell className="py-4 px-5">{`${item?.payment_info?.product?.category} ${item.payment_info.product?.name}`}</TableCell>
                                                <TableCell className="text-right py-4 px-5">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(item.payment_info.amount))}</TableCell>
                                            </TableRow>
                                        )
                                    }
                                </TableBody>
                            </Table>
                        </motion.div>
                        :
                        <motion.div  animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ ease: "easeOut", duration: 0.7, delay: 1 }} className='flex h-full justify-center mt-10 !text-[#5c43a3]'>
                            <h3>Không tìm thấy lịch sử giao dịch</h3>
                        </motion.div>
                }
            </div>
        </div>
    );
};

export default OrderHistory;