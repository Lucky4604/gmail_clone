/* eslint-disable no-unused-vars */
import React, { Suspense } from 'react'
import {Navigate, Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import {routes} from './routes/route'
import Error from './components/error/Error'
import SuspenseLoader from './components/error/SuspenseLoader'



const router=createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path={routes.main.path}
       element={<Navigate to={`${routes.email.path}/inbox`} />} />

    <Route path={routes.main.path}
       element={<routes.main.element />} >

    <Route path={`${routes.email.path}/:type`}
         element={<routes.email.element />}
         Error={<Error/>} />

    <Route path={routes.view.path} 
        element={<routes.view.element />}
        Error={<Error/>}
        />
    </Route>

    <Route path={routes.invalid.path}
     element={<Navigate to={`${routes.email.path}/inbox`} />} />
  </Route>

  )
  
)

const App = () => {
  return (
    <Suspense fallback={<SuspenseLoader/>}>
   <RouterProvider router={router}/>
   </Suspense>

  )
}

export default App