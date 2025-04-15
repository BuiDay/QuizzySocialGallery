import React from 'react';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"

interface IProps {
    open?:boolean,
    setOpen?:any
}

const ModalNeedLogin:React.FC<IProps> = ({open,setOpen}) => {
    return (
        <AlertDialog open = {open} onOpenChange={setOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle className='text-red-600'>Chú ý ?</AlertDialogTitle>
                    <AlertDialogDescription className='text-white'>
                        Bạn cần đăng nhập để tiếp tục!
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Đã hiểu</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default ModalNeedLogin;