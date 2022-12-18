import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import About from "../../Pages/About/About";
import Blogs from "../../Pages/Blogs/Blogs";
import Contacts from "../../Pages/Contacts/Contacts";
import Home from "../../Pages/Home/Home";
import ProjectsDetails from "../../Pages/ProjectDetails/ProjectsDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contacts></Contacts>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/projects/:id',
                loader: async ({ params }) => {
                    return fetch(`https://portfolio-server-liart.vercel.app/projects/${params.id}`);
                },
                element: <ProjectsDetails></ProjectsDetails>
            }
        ]
    },
    {
        path: '*',
        element: <p>Data not Found!</p>
    }
])

export default router;