
import React, { useEffect, useState } from 'react';

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
import { Separator } from '../ui/separator';
import Link from 'next/link';
import { useLoginMutation } from '@/redux/features/auth/authApi';
import toast from 'react-hot-toast';
import { Eye, EyeOff } from 'lucide-react';

const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");

const formSchema = z.object({
    email: z
        .string().trim()
        .min(1, { message: 'Must have at least 1 character' })
        .regex(emailRegex, {
            message: 'Must be a valid email',
        }),
    password: z.string().trim()
})

interface IProps {
    setRouter?: any,
    router?: string
    setOpenModal?: any
}

const LoginForm: React.FC<IProps> = ({ setRouter, router, setOpenModal }) => {

    const [login, { isError, isSuccess, isLoading, error }] = useLoginMutation();
    const [showPassword, setShowPassword] = useState<boolean>(false)


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        login(values)
    }


    useEffect(() => {
        if (isLoading) {
            toast.loading('Loading')
        }
        if (isSuccess) {
            toast.dismiss()
            toast.success('Đăng nhập thành công')
            // form.reset();
            setOpenModal(false)
        }

        if (isError) {
            const { data } = error as any
            toast.dismiss()
            toast.error(data?.message ? data.message : 'Đã có lỗi! Vui lòng thử lại.')
        }
    }, [isLoading, isSuccess, isError])


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-[#d72483]'>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Nhập Email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className='relative'>
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-[#d72483]'>Mật khẩu</FormLabel>
                                <FormControl>
                                    <Input placeholder="Nhập mật khẩu" {...field} type={`${!showPassword ? "password" : "text"}`} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {showPassword ?
                        <Eye className='absolute top-[60%] right-3 cursor-pointer' size={20} color='gray' onClick={() => setShowPassword(false)} />
                        : <EyeOff className='absolute top-[60%] right-3 cursor-pointer' size={20} color='gray' onClick={() => setShowPassword(true)} />
                    }
                </div>
                <div className='w-full text-right'>
                    <Link href="" className='text-[12px] text-center text-[#5c43a3] ' onClick={() => setRouter("Forgot")}>Quên mật khẩu?</Link>
                </div>
                <div className='w-full text-center'>
                    <Button type="submit" className='w-full mt-2 bg-[#d72483] text-white'>Đăng nhập</Button>
                </div>

                <Separator />
                <div className='w-full text-center'>
                    <Link href="" className='text-[12px] text-center text-[#5c43a3] font-bold' onClick={() => setRouter("Register")}> Đăng kí tài khoản</Link>
                </div>
            </form>
        </Form>

    );
};

export default LoginForm;