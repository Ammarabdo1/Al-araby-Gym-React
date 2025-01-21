import AboutUs from 'pages/AboutUs'
import Home from 'pages/Home'
import NotFoundPage from 'pages/NotFoundPage'
import Projects from 'pages/Projects'
import {createBrowserRouter as createBR} from 'react-router-dom'

const router = createBR([
    {
        path: '/',
        element: <Home/>,
    },

    {
        path: '/*',
        element: <NotFoundPage/>
    },

    {
        path: '/projects',
        element: <Projects/>,
    },

    {
        path: '/about',
        element: <AboutUs/>,
    },
])

export default router