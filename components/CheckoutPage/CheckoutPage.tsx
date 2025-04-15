import React, { useEffect } from "react";
import CancelAnimation from "@/components/StatusAnimation/CancelAnimation";
import Successfull from "@/components/StatusAnimation/Successfull";
import Link from "next/link";
import { domAnimation, LazyMotion, m, motion } from "framer-motion";
import { IpaymentLinkInfomation } from "@/type";
import { useCheckPaidMutation } from "@/redux/features/checkout/checkoutApi";
import { useLoadUserByIdMutation } from "@/redux/features/auth/authApi";

interface IProps {
  paymentLinkInfomation?: IpaymentLinkInfomation
}
const CheckoutPage: React.FC<IProps> = ({ paymentLinkInfomation }) => {
  const [checkPaid, { isSuccess }] = useCheckPaidMutation()
  const [loadUserById, { }] = useLoadUserByIdMutation()
  const handleCheckPaid = (status: string) => {
    const body = {
      codeOrder: paymentLinkInfomation?.orderCode,
      status
    }
    checkPaid(body)
  }

  useEffect(() => {
    const status = paymentLinkInfomation?.status
    status && handleCheckPaid(status)
  }, [])

  useEffect(() => {
    if (isSuccess) loadUserById({})
  }, [isSuccess])

  return (
    <>
      {
        isSuccess &&
        <>
          {
            paymentLinkInfomation?.status === "PAID" &&
            <>
              <Successfull />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
              >
                <div className="text-center flex flex-col gap-3 mt-[50px]">
                  <p className="text-[24px] font-bold">Thanh toán thành công</p>
                  <p>Cảm ơn bạn đã mua sản phẩm</p>
                  <p>
                    Mã đơn hàng là: <strong>{paymentLinkInfomation?.orderCode}</strong>{" "}
                  </p>
                  <Link href={"/collections"} className="gradient-bg rounded-lg py-2">
                    Về bộ sưu tập
                  </Link>
                </div>
              </motion.div>
            </>
          }
          {
            paymentLinkInfomation?.status === "CANCELLED" &&
            <>
              <CancelAnimation />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
              >
                <div className="text-center flex flex-col gap-4 mt-[50px]">
                  <p className="text-[24px] font-bold">Thanh toán không thành công</p>
                  <p>Bạn đã hủy mua sản phẩm</p>
                  <p>Hy vọng sẽ gặp lại bạn trong thời gian tới!</p>
                  <Link href={"/products"} className="gradient-bg rounded-lg py-2">
                    Về trang sản phẩm
                  </Link>
                </div>
              </motion.div>
            </>
          }
        </>
      }
    </>
  );
};

export default CheckoutPage;
