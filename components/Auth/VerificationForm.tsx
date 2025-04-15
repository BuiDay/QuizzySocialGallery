import React, { useState,useRef, useEffect } from 'react';
import { Button } from '../ui/button';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useActivationMutation } from '@/redux/features/auth/authApi';
import toast from 'react-hot-toast';
import { VscWorkspaceTrusted } from 'react-icons/vsc'

interface IProps {
    setRouter?: any,
    router?: string
}

type VerifyNumber = {
    "0": string,
    "1": string,
    "2": string,
    "3": string,
}


const VerificationForm: React.FC<IProps> = ({ setRouter, router })  => {
    const [invalidError, setInvalidError] = useState<boolean>(false);
    const [verifyNumber, setVerifyNumber] = useState<VerifyNumber>({
        0: "",
        1: "",
        2: "",
        3: "",
    })
    const [tokenAuth, setTokenAuth] = useState<string>("");
    const { token } = useSelector((state: RootState) => state.auth)
    const [activation, { isError, isLoading, error, isSuccess }] = useActivationMutation();
    const inputRef = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

    useEffect(() => {
        if (isSuccess) {
            toast.success("Bạn đã kích hoạt tài khoản thành công!");
            setRouter("Login");
        }
        if (isError) {
            const err = error as any;
            const message = err.data.message || "An error occured";
            toast.error(message);
            setInvalidError(true);
        }
    }, [isError, isSuccess])

    const verificationHandler = async () => {
        const verificationNumber = Object.values(verifyNumber).join("");
        if (verificationNumber.length !== 4) {
            setInvalidError(true);
            return;
        }
        await activation({
            activation_token: token,
            activation_code: verificationNumber
        })
    }

    const handleInputChange = (index: number, value: string) => {
        setInvalidError(false);
        const newVerifyNumber = { ...verifyNumber, [index]: value }
        setVerifyNumber(newVerifyNumber);
        if (value === '' && index > 0) {
            inputRef[index - 1].current?.focus();
        } else if (value.length === 1 && index < 3) {
            inputRef[index + 1].current?.focus();
        }
    }
    return (
        <div>
            <h1>
                Xác minh tài khoản
            </h1>
            <br />
            <div className='w-full flex items-center justify-center mt-2'>
                <div className='w-[80px] h-[80px] rounded-full bg-[#497DF2] flex items-center justify-center'>
                    <VscWorkspaceTrusted size={40} />
                </div>
            </div>
            <br />
            <br />
            <div className='1100px:w-[70%] m-auto flex items-center justify-around'>
                {
                    Object.keys(verifyNumber).map((key, index) => (
                        <input type="text" key={key} ref={inputRef[index]} className={`w-[65px] h-[65px] bg-transparent border-[3px] rounded-[10px] flex items-center text-black dark:text-white justify-center text-[18px] font-Poppins outline-none text-center ${invalidError ? "shake border-red-500" : "dark:border-white border-[#0000004a]"}`} placeholder='' maxLength={1} value={verifyNumber[key as keyof VerifyNumber]} onChange={(e) => handleInputChange(index, e.target.value)} />
                    ))
                }
            </div>
            <br />
            <br />
            <div className='w-full flex justify-center'>
                <Button onClick={verificationHandler} disabled={isLoading ? true : false}>
                    Xác minh OTP
                </Button>
            </div>
            <br />
            <h5 className='text-center pt-4 font-Poppins text-[14px] text-black dark:text-white'>
                Trở về đăng kí? {" "}
                <span className='text-[#2190ff] pl-1 cursor-pointer' onClick={() => setRouter("Login")}>
                    Đăng nhập
                </span>
            </h5>
        </div>
    );
};

export default VerificationForm;