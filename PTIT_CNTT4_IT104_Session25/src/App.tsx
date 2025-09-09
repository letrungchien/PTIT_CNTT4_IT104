import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Bai1 from './componets/PTIT_CNTT4_IT104_Session25_Bai01/Bai1';
import Home from './componets/PTIT_CNTT4_IT104_Session25_Bai01/Home';
import About from './componets/PTIT_CNTT4_IT104_Session25_Bai01/About';
import Contact from './componets/PTIT_CNTT4_IT104_Session25_Bai01/Contact';
import Bai3 from './componets/PTIT_CNTT4_IT104_Session25_Bai03/Bai3';
import Login from './componets/PTIT_CNTT4_IT104_Session25_Bai03/Login';
import Bai4 from './componets/PTIT_CNTT4_IT104_Session25_Bai04/Bai4';
import DangKy from './componets/PTIT_CNTT4_IT104_Session25_Bai04/DangKy';
import NotFound  from './componets/PTIT_CNTT4_IT104_Session25_Bai05/NotFound';
import Bai6  from './componets/PTIT_CNTT4_IT104_Session25_Bai06/Bai6';
import Home1  from './componets/PTIT_CNTT4_IT104_Session25_Bai06/Home1';
import Product  from './componets/PTIT_CNTT4_IT104_Session25_Bai06/Product';
import Detail  from './componets/PTIT_CNTT4_IT104_Session25_Bai06/Detail';
import Bai7  from './componets/PTIT_CNTT4_IT104_Session25_Bai07/Bai7';
import CustomLink  from './componets/PTIT_CNTT4_IT104_Session25_Bai07/CustomLink';
import  Home2 from './componets/PTIT_CNTT4_IT104_Session25_Bai07/Home2';
import  ListUser from './componets/PTIT_CNTT4_IT104_Session25_Bai08/ListUser';
import  UserDetail from './componets/PTIT_CNTT4_IT104_Session25_Bai08/UserDetail';

export default function App() {
  const routers = createBrowserRouter([
    {
      path:"/bai1",
      element: <Bai1></Bai1>,
        children: [
        {
          path: "home",
          element: <Home></Home>,
        },
        {
          path: "about",
          element: <About></About>,
        },
        {
          path: "contact",
          element: <Contact></Contact>,
        },
      ],
    },
    {
      path:"/bai3",
      element:<Bai3></Bai3>
    },
    {
      path:"/login",
      element:<Login></Login>
    }
    , {
      path:"/bai4",
      element:<Bai4></Bai4>
    },
    {
      path:"/dangky",
      element:<DangKy></DangKy>
    }
    ,
{
      path:"*",
      element:<NotFound></NotFound>
    },
 {
      path: "bai6",
      element: <Bai6></Bai6>,
      children: [
        {
          path: "home1",
          element: <Home1></Home1>,
        },
        {
          path: "product",
          element: <Product></Product>,
        },
        {
          path: "detail",
          element: <Detail></Detail>,
        },
      ],
    },
     {
      path: "Bai7",
      element: <Bai7></Bai7>,
    },
    {
      path: "home2",
      element: <Home2></Home2>,
    },
    {
      path: "custom",
      element: <CustomLink></CustomLink>,
    },
    {
      path:"listUser",
      element:<ListUser></ListUser>
    },
    {
      path:"listUser/:id",
      element:<ListUser></ListUser>
    },
     {
      path:"userDetail",
      element:<UserDetail></UserDetail>
    },
  ])
  return (
    <div>
      <RouterProvider router={routers}></RouterProvider>
    </div>
  )
}