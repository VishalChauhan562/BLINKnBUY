import React from 'react'
import { Outlet } from 'react-router-dom'
import { UserChatComponent } from './UserChatComponent'

export const RoutesWithUserChatComponent = () => {
  return (<>
   <UserChatComponent/>
   <Outlet/>
  </>
  )
}
