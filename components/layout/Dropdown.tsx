import { ClipboardMinus, LogOut, User } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import React from 'react'
import Avatar from '@/public/avatar_default.png'
import { useLogoutMutation } from '@/redux/features/auth/authApi'
import Image from 'next/image'
import AdminLink from '@/hook/adminLink'
import { useRouter } from 'next/navigation'

interface IProps {
  avatar?: string
  displayName?: string
  role?: string
}

export const Dropdown: React.FC<IProps> = ({ avatar, displayName, role }) => {
  const router = useRouter()
  const [logout] = useLogoutMutation()

  const logoutHandler = async () => {
    await logout({})
  }

  const handleAdminPage = () => {
    router.push('/admin')
  }

  const handleTransactionPage = () => {
    router.push('/transaction-history')
  }

  

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className='flex items-center justify-center gap-3 cursor-pointer'>
          <div className='w-[40px] h-[40px] rounded-lg bg-white overflow-hidden'>
            <Image src={avatar ? avatar : Avatar} alt='Avatar' className='h-full w-full object-cover' />
          </div>
          <div className='flex flex-col'>
            <h1 className='text-white text-[14px]'>{displayName}</h1>
            <h3 className='text-zinc-300 text-[12px]'>{role}</h3>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56 bg-[#5c43a3]'>
        <DropdownMenuLabel>
          Tài khoản:
          <h1 className='text-white text-[14px]'>{displayName}</h1>
        </DropdownMenuLabel>
        {/* <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className='mr-2 h-4 w-4' />
            <span>Hồ sơ cá nhân</span>
          </DropdownMenuItem>
        </DropdownMenuGroup> */}
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className='cursor-pointer' onClick={() => handleTransactionPage()}>
            <ClipboardMinus className='mr-2 h-4 w-4'/>
            <span>Lịch sử giao dịch</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <AdminLink role={["admin"]}>
          <>
            <DropdownMenuGroup>
              <DropdownMenuItem className='cursor-pointer' onClick={() => handleAdminPage()}>
                <User className='mr-2 h-4 w-4' />
                <span>Trang quản lí</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
          </>

        </AdminLink>
        <DropdownMenuItem className='cursor-pointer' onClick={() => logoutHandler()}>
          <LogOut className='mr-2 h-4 w-4' />
          <span>Đăng xuất</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Dropdown
