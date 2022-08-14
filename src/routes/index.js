import React, { lazy} from "react"
import Home from '../page/Home'
import User from '../page/User'
import NotFound from '../page/NotFound'
const Profile = lazy(() => import('../page/Profile.js'))

const routes = [
  { path: '/', element: <Home /> },
  { path: '/profile', element: <Profile /> },
  { path: '/user', element: <User /> },
  { path: '*', element: <NotFound /> }
];
export default routes;