
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../components/home/Home";
import Service from "../page/service/Service";
import Error from "../error/Error";
import Login from "../page/login/Login";
import Register from "../page/register/Register";
import Profile from "../page/my-profie/Profile";
const Routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement : <Error></Error>,
      children : [
        {
            path : '/',
            element : <Home></Home>,
            loader : () => fetch('categoryDetails.json')
        },
        {
            path : '/service',
            element : <Service></Service>,
            loader : () => fetch('categoryDetails.json')

        },
        {
            path : '/login',
            element : <Login></Login>
        },
        {
            path : '/register',
            element : <Register></Register>
        },
        {
            path : '/profile',
            element : <Profile></Profile>
        }
      ]
    },
  ]);

export default Routes;