
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../components/home/Home";
import Service from "../page/service/Service";
import Error from "../error/Error";
import Login from "../page/login/Login";
import Register from "../page/register/Register";
import Profile from "../page/my-profie/Profile";
import DetailsCard from "../components/detailscard/DetailsCard";
import Private from "../private/Private";
import ForgetPass from "../page/login/ForgetPass";
import ContactUs from "../components/contact/ContactUs";
const Routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/categoryDetails.json')
      },
      {
        path: '/service',
        element: <Service></Service>,
        loader: () => fetch('/categoryDetails.json')

      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/profile',
        element: <Private>
          <Profile></Profile>
        </Private>
      },
      {
        path: '/details/:id',
        element: <Private>
          <DetailsCard></DetailsCard>
        </Private>,
        loader: async ({ params }) => {
          const res = await fetch('/categoryDetails.json');
          const data = await res.json();
          const singleItem = data.find(item => item.id == parseInt(params.id));
          return singleItem;
        }
      },
      {
        path: '/forget',
        element: <ForgetPass></ForgetPass>
      },
      {
        path: '/contact',
        element: <Private>
          <ContactUs></ContactUs>
        </Private>
      }
    ]
  },
]);

export default Routes;