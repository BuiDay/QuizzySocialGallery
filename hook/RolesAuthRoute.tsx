import React, { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
// import Forbidden from '@/pages/403';
// import PageNotFound from '@/pages/PageNotFound'

interface IProp {
  children?: ReactNode
  roles?: string[]
}

const RolesAuthRoute: React.FC<IProp> = ({ children, roles }) => {
  const user = useSelector((state: RootState) => state.auth.user)
  if (user?.role) {
    const canAccess = roles?.includes(user?.role[0] || user?.role[1] || '')
    if (canAccess) return <div>{children}</div>
  }
  // return <PageNotFound />
}

export default RolesAuthRoute
