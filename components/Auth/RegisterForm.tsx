import React, { useEffect, useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from 'lucide-react';
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
import { useRegisterMutation } from '@/redux/features/auth/authApi';
import { toast } from "react-hot-toast"

interface IProps {
    setRouter?: any,
    router?: string
}

// Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character

const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");

const formSchema = z.object({

    name: z.string().trim().min(2, {
        message: "Username must be at least 2 characters.",
    }),

    email: z
        .string().trim()
        .min(1, { message: 'Must have at least 1 character' })
        .regex(emailRegex, {
            message: 'Không đúng định dạng email',
        }),
    password: z
        .string().trim()
        .min(8, { message: 'Mật khẩu có ít nhất 8 kí tự!' })
})

const RegisterForm: React.FC<IProps> = ({ setRouter, router }) => {
    const [register, { isLoading, isSuccess, isError, error }] = useRegisterMutation()
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: ""
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        register(values)
    }

    useEffect(() => {
        if (isLoading) {
            toast.loading('Đang tạo')
        }
        if (isSuccess) {
            toast.dismiss()
            toast.success('Bạn vui lòng check mail')
            //   onChange(false)

            form.reset();
            setRouter("Verification")
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
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-[#d72483]'>Tên</FormLabel>
                            <FormControl>
                                <Input placeholder="Nhập Tên" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-[#d72483]'>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Nhập mật email" {...field} />
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
                <div className='w-full text-center'>
                    <Button type="submit" className='w-full mt-2 bg-[#d72483] text-white'>Đăng kí</Button>
                </div>

                <Separator />
                <div className='w-full text-center'>
                    <Link href="" className='text-[12px] text-center font-bold text-[#5c43a3]' onClick={() => setRouter("Login")}>Đăng nhập</Link>
                </div>
            </form>
        </Form>
    );
};

export default RegisterForm;