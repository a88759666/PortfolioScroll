import type { RouteObject } from "react-router-dom"
import SingleWork from "./pages/singleWork"
import Workshop from "./pages/home"




const routes: RouteObject[] = [
    {
        path: "/home",
        element: <Workshop />,
        children: []
    },
    {
        path: "/singleWork",
        element: <SingleWork />,
        children: []
    }
]

export default routes

