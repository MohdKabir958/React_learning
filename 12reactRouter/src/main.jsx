import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Layout from './Layout.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
// import { githubInfoLoader } from './components/Github/Github.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />,
        // children:[
        //   {
        //     path: "user",
        //     element: <Github />
        //   },
        // ],
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/User/:userid",
        element: <User />
      },
      {
        // loader:githubInfoLoader,
        path: "Github",
        element: <Github />,
      },
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

