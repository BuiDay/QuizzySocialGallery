"use client"
import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import LoginForm from '@/components/Auth/LoginForm';
import RegisterForm from '@/components/Auth/RegisterForm';
import VerificationForm from '@/components/Auth/VerificationForm';
import { Button } from '@/components/ui/button';
import ForgotForm from '@/components/Auth/ForgotForm';

interface IProps {
    setRouter?: any,
    router?: string,
    openModal?: boolean,
    setOpenModal?: any
    isMobile?:boolean
}

const AuthModal: React.FC<IProps> = ({ setRouter, router, openModal, setOpenModal,isMobile=false }) => {
    return (
        <Dialog open={openModal} onOpenChange={setOpenModal}>
            <DialogContent className="md:max-w-[425px] max-w-[325px]">
                <DialogHeader>
                    <DialogTitle className={`text-center text-[32px] text-[#d72483]`}>
                        {
                            router === "Login" && "Đăng nhập"
                        }
                        {
                            router === "Register" && "Đăng kí"
                        }
                        {
                            router === "Forgot" && "Quên mật khẩu"
                        }
                    </DialogTitle>
                </DialogHeader>
                {
                    router === "Login" && <LoginForm setRouter={setRouter} router={router} setOpenModal={setOpenModal} />
                }
                {
                    router === "Register" && <RegisterForm setRouter={setRouter} router={router} />
                }
                {
                    router === "Verification" && <VerificationForm setRouter={setRouter} router={router} />
                }
                {
                    router === "Forgot" && <ForgotForm setRouter={setRouter} router={router} />
                }
            </DialogContent>
        </Dialog>
    );
};

export default AuthModal;