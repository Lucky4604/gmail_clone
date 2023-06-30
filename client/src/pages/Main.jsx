import React, { Suspense, useState } from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'
import SuspenseLoader from '../components/error/SuspenseLoader'





const Main = () => {
  const [openDrawer, setOpenDrawer] = useState(true)

  const toggleDrawer=()=>{
    setOpenDrawer(prevState=>!prevState);
  }
  return (
    <div>
        <Header toggleDrawer={toggleDrawer}/>
        <SideBar openDrawer={openDrawer}/>
        <Suspense fallback={<SuspenseLoader/>}>
           <Outlet context={{openDrawer}}/>
        </Suspense>
    </div>
  )
}

export default Main