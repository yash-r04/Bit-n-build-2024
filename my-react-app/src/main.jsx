import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import MainLanding from './assets/LandingPage/MainLanding.jsx';
import MainLogin from './assets/LoginPage/MainLoginPage.jsx';
import MainSignUp from './assets/SignUpPage/SignUp.jsx';
import MainNewClothes from './assets/NewClothes/MainNewClothes.jsx';
import MainDonatePage from './assets/DonatePage/MainDonatePage.jsx';
import MainCloset from './assets/ClosetPage/MainCloset.jsx';
import MainPlanOutfit from './assets/PlanOutfitPage/MainPlanOutfit.jsx';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//landing page:
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLanding/>,
  },
  {
    path: "/Login",
    element: <MainLogin/>,
  },
  {
    path: "/SignUp",
    element: <MainSignUp/>,
  },
  {
    path: "/NewClothes",
    element: <MainNewClothes/>,
  },
  {
    path: "/Donate",
    element: <MainDonatePage/>,
  },
  {
    path: "/Closet",
    element: <MainCloset/>,
  },
  {
    path: "/PlanOutfit",
    element: <MainPlanOutfit/>,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <RouterProvider router={router} />
  </StrictMode>,
)