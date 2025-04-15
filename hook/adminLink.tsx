import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
interface ProtectProps {
  children: JSX.Element
  role?: string[]
}

const AdminLink: React.FC<ProtectProps> = ({ children, role }) => {
  const user = useSelector((state: RootState) => state.auth.user)
  if (user?.role) {
    if (role?.includes(user?.role[0] || user?.role[1])) {
      return <>{children}</>
    }
  }
}

export default AdminLink
