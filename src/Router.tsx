import App from "./App"
import { createBrowserRouter } from "react-router-dom"
import { lazy, Suspense } from "react"
import FallbackPage from "@Fallback"
import ErrorElement from "@Error"
const MainIndex = lazy(() => import("@MainIndex"))
const AllDrink = lazy(() => import("@AllDrink"))
const CategoryDrink = lazy(() => import("@CategoryDrink"))
const Router = createBrowserRouter([{
    path: "/",errorElement:<ErrorElement/>,
     element: <App />, children: [
        {
            path: "", errorElement:<ErrorElement/>,
            element: <Suspense fallback={<FallbackPage/>}><MainIndex/></Suspense>, children: [{
                path: "productName", 
                element: <Suspense fallback={<FallbackPage/>}><AllDrink /></Suspense>
            },
            {
                path: ":drink",errorElement:<ErrorElement/>, 
                element: <Suspense fallback={<FallbackPage/>}><CategoryDrink /></Suspense>, children: [{
                    path: "productName", errorElement:<ErrorElement/>,
                    element: <Suspense fallback={<FallbackPage/>}><CategoryDrink /></Suspense>
                }]
            }]
        }]
}])
export default Router