/* eslint-disable no-unused-vars */
import { lazy } from "react"
const Main=lazy(()=>import('../pages/Main'));
const Email=lazy(()=>import('../components/Email'));
const ViewEmails=lazy(()=>import('../components/ViewEmails'))


export const routes={
    main:{
        path:'/',
        element:Main,
    },
    email:{
        path:'/emails',
        element:Email,

    },
    invalid:{
        path:'/*',
        element:Email,
    },
    view:{
        path:'/view',
        element:ViewEmails 
    }

}

