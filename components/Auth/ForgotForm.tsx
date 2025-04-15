
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
import toast from 'react-hot-toast';
import { useForgotPasswordMutation } from '@/redux/features/auth/authApi';

const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");

const formSchema = z.object({
    email: z
        .string().trim()
        .min(1, { message: 'Must have at least 1 character' })
        .regex(emailRegex, {
            message: 'Must be a valid email',
        }),
})

interface IProps {
    setRouter?: any,
    router?: string
    setOpenModal?: any
}

const ForgotForm: React.FC<IProps> = ({ setRouter, router, setOpenModal }) => {

    const [forgotPassword, { isError, isSuccess, isLoading, error }] = useForgotPasswordMutation();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        forgotPassword(values)
    }


    useEffect(() => {
        if (isLoading) {
            toast.loading('Loading')
        }
        if (isSuccess) {
            toast.dismiss()
            toast.success('Vui lòng tra mail để tiến hành đổi password!')
            // form.reset();
            // setOpenModal(false)
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
                <div className='w-full text-center'>
                    {
                        !isSuccess && <Button type="submit" className='w-full mt-2 bg-[#d72483] text-white'>Xác nhận</Button>
                    }
   
                </div>
                <Separator />
                <div className='w-full text-center'>
                    <Link href="" className='text-[12px] text-center text-[#5c43a3] font-bold' onClick={() => setRouter("Login")}>Đăng nhập</Link>
                </div>
            </form>
        </Form>

    );
};

export default ForgotForm;