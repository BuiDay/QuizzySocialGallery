import React, { useEffect, useLayoutEffect, useState } from 'react';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from '@/components/ui/button';
import { ICart, IProduct } from '@/type';
import CartItem from './CartItem';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { useCreatePaymentLinkMutation, usePaymentFreeMutation } from '@/redux/features/checkout/checkoutApi';
import toast from 'react-hot-toast';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import { useLoadUserByIdMutation } from '@/redux/features/auth/authApi';
import { useRouter } from 'next/navigation';
import { useGetCouponMutation } from '@/redux/features/coupon/couponApi';


interface IProps {
    cart?: IProduct,
    open?: boolean,
    setOpen?: any
}

const Cart: React.FC<IProps> = ({ cart, open, setOpen }) => {
    const [createPaymentLink, { isError, isLoading, isSuccess, error }] = useCreatePaymentLinkMutation();
    const [paymentFree, { isSuccess: Success, isLoading: Loading, isError: Error, error: err }] = usePaymentFreeMutation();
    const [getCouponByName, { isSuccess: getCouponSuccess, isLoading: getCouponLoading, isError: getCouponError, error: getCouponerr }] = useGetCouponMutation();

    const dataCoupon = useSelector((state: RootState) => state.coupon.coupon)

    const [couponName, setCouponName] = useState<string>("")

    const { paymentLink } = useSelector((state: RootState) => state.checkout)
    const [loadUserById, { }] = useLoadUserByIdMutation()

    const router = useRouter()

    const handleCheckout = () => {
        let calPrice
        if (dataCoupon && getCouponSuccess) {
            const priceAfterApplyCoupon = cart?.discount ? Number(cart?.discount.discountPrice || 0) * (dataCoupon?.discount) / 100 : Number(cart?.price || 0) * (dataCoupon?.discount) / 100
            calPrice = cart?.discount ? Number(cart?.discount.discountPrice) - priceAfterApplyCoupon : Number(cart?.price) - priceAfterApplyCoupon
        } else {
            calPrice = cart?.discount ? cart?.discount.discountPrice : Number(cart?.price)
        }
        try {
            const data = {
                product: cart?._id,
                amount: calPrice,
                description: "Thanh toan don hang",
                items: [{
                    name: cart?.name,
                    quantity: 1,
                    price: calPrice,
                }]

            }
            if (cart?.charge) {
                createPaymentLink(data)
            } else {
                paymentFree(data)
            }

        } catch (error) {
            console.log(error)
        }
    }

    const applyCoupon = async () => {
        if (couponName) {
            await getCouponByName(couponName)
        }
    }

    useEffect(() => {
        if (getCouponLoading) {
            toast.loading('Đang tạo đơn')
        }

        if (getCouponSuccess) {
            toast.dismiss()
            toast.success("Áp dụng mã thành công!")
        }

        if (getCouponError) {
            const { data } = getCouponerr as any
            toast.dismiss()
            toast.error(data.message ? data.message : 'Đã có lỗi! Vui lòng thử lại.')
        }
    }, [getCouponLoading, getCouponSuccess, getCouponError])

    useLayoutEffect(() => {
        if (Loading) {
            toast.loading('Đang tạo đơn')
        }
        if (Success) {
            toast.dismiss()
            toast.success("Đã mở khoá tài liệu thành công");
            loadUserById({});
            setOpen(false);
        }
        if (Error) {
            const { data } = err as any
            toast.dismiss()
            toast.error(data.message ? data.message : 'Đã có lỗi! Vui lòng thử lại.')
        }
    }, [Loading, Success, Error])


    useEffect(() => {
        if (isLoading) {
            toast.loading('Đang tạo đơn')
        }

        if (isSuccess) {
            toast.dismiss()
            if (paymentLink?.checkoutUrl) {
                router.push(paymentLink?.checkoutUrl)
            }
        }

        if (isError) {
            const { data } = error as any
            toast.dismiss()
            toast.error(data.message ? data.message : 'Đã có lỗi! Vui lòng thử lại.')
        }
    }, [isLoading, isSuccess, isError])

    return (
        <>
            <Drawer direction='right' open={open} onOpenChange={setOpen}>
                <DrawerContent className='h-screen top-0 right-0 left-auto mt-0 w-[450px] rounded-none '>
                    <DrawerHeader>
                        <DrawerTitle className='py-[10px] h-[5vh] text-[#d72483] text-[24px]'>Giỏ hàng của bạn</DrawerTitle>
                        <DrawerDescription className='h-[60vh]'>
                            <Separator className='bg-[#5c43a3]' />
                            <div className='h-full flex flex-col mt-[40px] justify-between'>
                                <div>
                                    {
                                        cart && <CartItem item={cart} />
                                    }
                                </div>
                                <div>
                                    <Separator className='bg-[#5c43a3]' />
                                    <div className='py-[20px]'>
                                        {
                                            cart?.charge && <div className='w-full flex items-center justify-between'>
                                                <span className='text-[#5c43a3] '>Mã giảm giá</span>
                                                <div className='flex h-full justify-end'>
                                                    <Input  onKeyDown={(event)=> {if(event.key === "Enter"){applyCoupon()}}} onChange={(event) => setCouponName(event.target.value)} className='rounded-none rounded-l-md w-[60%] border-[#5c43a3] !outline-none ' />
                                                    <div className=''>
                                                        <Button onClick={() => applyCoupon()} disabled={!couponName ? true : false} className='bg-[#5c43a3] p-2 rounded-none !rounded-r-md h-9 flex justify-center items-center cursor-pointer'>
                                                            <span className='text-white font-bold text-[12px]'>Áp dụng</span>
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        }

                                        {
                                            dataCoupon && getCouponSuccess &&
                                            <div className='w-full flex items-center justify-between mt-2'>
                                                <span className='text-[#d72483] '>Giá giảm: Mã được giảm {dataCoupon.discount}%</span>
                                                <div className='w-[25%] text-right'>
                                                    {
                                                        cart?.discount ?
                                                            <p className='font-bold text-[18px]'>-{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(cart?.discount.discountPrice || 0) * (dataCoupon?.discount) / 100)}</p>
                                                            : <p className='font-bold text-[18px]'>-{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(cart?.price) * (dataCoupon?.discount) / 100)}</p>
                                                    }

                                                </div>
                                            </div>
                                        }

                                        <div className='flex justify-between mt-4 text-[#5c43a3]'>
                                            <p className='font-bold text-[18px]'>Tổng tiền</p>
                                            {
                                                cart?.discount ?
                                                    <p className='font-bold text-[24px]'>
                                                        {dataCoupon && getCouponSuccess ? new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(cart?.discount.discountPrice || 0) - Number(cart?.discount.discountPrice || 0) * (dataCoupon?.discount) / 100) : new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(cart?.discount.discountPrice || 0))}
                                                    </p>
                                                    : <p className='font-bold text-[24px]'>{dataCoupon && getCouponSuccess ? new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(cart?.price || 0) - Number(cart?.price || 0) * (dataCoupon?.discount) / 100) : new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(cart?.price || 0))}
                                                    </p>
                                            }

                                        </div>
                                    </div>
                                    <Separator className='bg-[#5c43a3]' />
                                </div>
                            </div>
                        </DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter className='h-[25vh]'>
                        {
                            cart?.charge &&
                            <div>
                                <p className='text-[14px] text-[#5c43a3] '>Thanh toán bằng cách chuyển khoản ngân hàng với mã VietQR Pro</p>
                                <p className='text-red-600 text-[14px]'><strong>Lưu ý:</strong> Vui lòng không tắt trang thanh toán và đợi 10s sau khi chuyển khoản thành công. Để hệ thống kích hoạt sản phẩm tự động.</p>
                            </div>
                        }
                        <Button className='bg-[#d72483] text-white' onClick={() => handleCheckout()}>{cart?.charge ? "Thanh toán" : "Mở khoá"}</Button>
                        <DrawerClose>
                            <Button className='w-full bg-[#5c43a3]' variant="outline">Hủy</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>

    );
};

export default Cart;