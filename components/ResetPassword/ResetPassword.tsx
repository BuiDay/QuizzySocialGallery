
import React, { useEffect } from 'react';
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Button } from '../ui/button';

import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { useResetPasswordMutation } from '@/redux/features/auth/authApi';

const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");

const formSchema = z.object({
    password:z.string().min(1,{
        message:"Vui lòng điền vào ô này"
    }),
    confirmPassword: z.string().min(1,{
        message:"Vui lòng điền vào ô này"
    })
}).refine(
    (values:any) => {
      return values.password === values.confirmPassword;
    },
    {
      message: "Mật khẩu không trùng khớp!",
      path: ["confirmPassword"],
    }
  )

interface IProps {
    token?: string
}

const ResetPassword:React.FC<IProps> = ({token}) => {

    const [resetPassword, { isSuccess, isError, isLoading, error }] = useResetPasswordMutation();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            password:"",
            confirmPassword: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        resetPassword({...values,token})
    }

    useEffect(() => {
        if (isLoading) {
          toast.loading('Đang chạy')
        }
        if (isSuccess) {
            toast.dismiss()
            toast.success('Bạn đã đổi password thành công !')
            form.reset()
        }
    
        if (isError) {
          const { data } = error as any
          toast.dismiss()
          toast.error(data.message ? data.message : 'Đã có lỗi! Vui lòng thử lại.')
        }
      }, [isLoading, isSuccess, isError])
    return (
        <motion.div className='max-w-[600px] w-full mx-auto'   
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.7, delay: 1 }}>
            
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Mật khẩu mới</FormLabel>
                                <FormControl>
                                    <div className='h-[40px] rounded-md gradient-bg p-[1px]'>
                                        <div className='w-full h-full bg-main rounded-md flex items-center p-[2px]'>
                                            <Input className='border-none focus:outline-none' type='password' placeholder="Nhập mật khẩu mới" {...field} />
                                        </div>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Xác nhận lại mật khẩu</FormLabel>
                                <FormControl>
                                    <div className='h-[40px] rounded-md gradient-bg p-[1px]'>
                                        <div className='w-full h-full bg-main rounded-md flex items-center p-[2px]'>
                                            <Input className='border-none focus:outline-none' type='password' placeholder="Nhập lại mật khẩu để xác nhận" {...field} />
                                        </div>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                   
                    <div className='w-full text-center'>
                        <Button type="submit" className='w-full mt-2'>Xác nhận</Button>
                    </div>
                </form>
            </Form>
        </motion.div>
    );
};

export default ResetPassword;