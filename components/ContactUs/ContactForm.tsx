
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

import { Textarea } from "@/components/ui/textarea"

import { useCreateContactUsMutation } from "@/redux/features/contactUs/contactUsApi";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");

const formSchema = z.object({
    name:z.string().min(1,{
        message:"Vui lòng điền vào ô này"
    }),
    email: z.string().min(1,{
        message:"Vui lòng điền vào ô này"
    }).regex(emailRegex, {
        message: 'Must be a valid email',
    }),
    messages: z.string().min(1,{
        message:"Vui lòng điền vào ô này"
    }),
})

interface IProps {
    setRouter?: any,
    router?: string
    setOpenModal?: any
}

const ContactForm = () => {
    const [createContactUs, { isSuccess, isError, isLoading, error }] = useCreateContactUsMutation();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name:"",
            email: "",
            messages: ""
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        createContactUs(values)
    }

    useEffect(() => {
        if (isLoading) {
          toast.loading('Đang chạy')
        }
        if (isSuccess) {
            toast.dismiss()
          toast.success('Bạn đã đăng kí thành công !')
        }
    
        if (isError) {
          const { data } = error as any
          toast.dismiss()
          toast.error(data.message ? data.message : 'Đã có lỗi! Vui lòng thử lại.')
        }
      }, [isLoading, isSuccess, isError])
    return (
        <motion.div className='max-w-[600px] m-auto'   
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.7, delay: 1 }}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-[#d72483]'>Tên của bạn</FormLabel>
                                <FormControl>
                                    <div className='h-[40px] rounded-md  p-[1px]'>
                                        <div className='w-full h-full bg-[#5c43a3]/[0.1] rounded-md flex items-center p-[2px]'>
                                            <Input className='border-none focus:outline-none text-[#5c43a3]' placeholder="Nhập tên của bạn" {...field} />
                                        </div>
                                    </div>
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
                                    <div className='h-[40px] rounded-md bg-[#5c43a3]/[0.1] p-[1px]'>
                                        <div className='w-full h-full rounded-md flex items-center p-[2px]'>
                                            <Input className='border-none focus:outline-none text-[#5c43a3]' placeholder="Nhập email để mình liên hệ lại với bạn" {...field} />
                                        </div>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="messages"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-[#d72483]'>Lời nhắn</FormLabel>
                                <FormControl>
                                <div className='rounded-md bg-[#5c43a3]/[0.1] p-[1px]'>
                                        <div className='w-full h-full  rounded-md flex items-center p-[2px]'>
                                              <Textarea className='border-none min-h-[300px] text-[#5c43a3]' placeholder="Bạn có thể nhập lời nhắn và có thể gửi mình cảm nhận về tài liệu ở đây ❤ !" {...field}/>
                                        </div>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                 
                    <div className='w-full text-center'>
                        <Button type="submit" className='w-full mt-2 bg-[#d72483] text-white hover:bg-[#d72483]/[0.8]'>Gửi lời nhắn</Button>
                    </div>
                </form>
            </Form>
        </motion.div>
    );
};

export default ContactForm;